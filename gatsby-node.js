/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Load External Souce Images
// https://www.gatsbyjs.org/docs/preprocessing-external-images/
// const { createRemoteFileNode } = require("gatsby-source-filesystem")

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions

//   createTypes(`
//     type MarkdownRemark implements Node {
//       frontmatter: Frontmatter
//       featuredImg: File @link(from: "featuredImg___NODE")
//     }

//     type Frontmatter {
//       title: String!
//       featuredImgUrl: String
//       featuredImgAlt: String
//     }
//   `)
// }

// exports.onCreateNode = async ({
//   node,
//   actions: { createNode },
//   store,
//   cache,
//   createNodeId,
// }) => {
//   // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
//   if (
//     node.internal.type === "MarkdownRemark" &&
//     node.frontmatter.featuredImgUrl !== null
//   ) {
//     let fileNode = await createRemoteFileNode({
//       url: node.frontmatter.featuredImgUrl, // string that points to the URL of the image
//       parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
//       createNode, // helper function in gatsby-node to generate the node
//       createNodeId, // helper function in gatsby-node to generate the node id
//       cache, // Gatsby's cache
//       store, // Gatsby's redux store
//     })

//     // if the file was created, attach the new node to the parent node
//     if (fileNode) {
//       node.featuredImg___NODE = fileNode.id
//     }
//   }
// }

const path = require("path")
const { Slugify } = require("./src/util/slugify")
const _ = require("lodash")

// Load Local Images
// https://stackoverflow.com/questions/57152625/use-absolute-path-for-featured-image-in-markdown-post-with-gatsby
exports.createSchemaCustomization = ({ actions }) => {
  const { createFieldExtension, createTypes } = actions

  createFieldExtension({
    name: "fileByDataPath",
    extend: () => ({
      resolve: function (src, args, context, info) {
        const partialPath = src.featuredImage
        if (!partialPath) {
          return null
        }

        const filePath = path.join(
          __dirname,
          "src/images/postImages",
          partialPath
        )
        const fileNode = context.nodeModel.runQuery({
          firstOnly: true,
          type: "File",
          query: {
            filter: {
              absolutePath: {
                eq: filePath,
              },
            },
          },
        })

        if (!fileNode) {
          return null
        }

        return fileNode
      },
    }),
  })

  const typeDefs = `
    type Frontmatter @infer {
      featuredImage: File @fileByDataPath
    }

    type MarkdownRemark implements Node @infer {
      frontmatter: Frontmatter
    }
  `

  createTypes(typeDefs)
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  // Check the type of node
  if (node.internal.type === "MarkdownRemark") {
    //console.log(JSON.stringify(node, undefined, 4))

    // https://nodejs.org/dist/latest-v12.x/docs/api/path.html#path_path_basename_path_ext
    const slugFromTitle = Slugify(node.frontmatter.title)

    //console.log('@@@@@@@@@@@@@@', slug)

    createNodeField({
      node,
      name: "slug",
      value: slugFromTitle,
    })
  }
} 

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // 1. Get path to template
  const singlePostTemplate = path.resolve("./src/templates/single-post.js")
  const tagsPageTemplate = path.resolve("./src/templates/tags-page.js")
  const tagPostsTemplate = path.resolve("./src/templates/tag-posts.js")
  const categoriesPageTemplate = path.resolve("./src/templates/categories-page.js")
  const categoryPostsTemplate = path.resolve("./src/templates/category-posts.js")
  const postListTemplate = path.resolve("./src/templates/post-list.js")

  // 2. Get markdwon data
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              tags
              categories
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (response.errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" query')
  } else {
    //console.log(JSON.stringify(response, undefined, 4))
    //console.log("@@@@@@@@@@", singlePostTemplate)

    const posts = response.data.allMarkdownRemark.edges

    // 3. Create single blog post pages
    posts.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `${edge.node.fields.slug}`,
        component: singlePostTemplate,
        context: {
          // Pass slug for template to use to get post
          slug: edge.node.fields.slug,
        },
      })
    })

    // 4.1 Create tags page
    // - npm install lodash

    // Get all tags
    let tags = []
    // Loop through all posts to all tags
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })

    // Count all tags and assign them to the object
    let tagPostCounts = {}
    tags.forEach(tag => {
      tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
    })

    // Remove duplicates
    tags = _.uniq(tags)

    // console.log("@@@@@@@@@@", tagsPageTemplate)
    // console.log(tags)
    // console.log(tagPostCounts)

    // Create tags page
    createPage({
      path: `/tags`,
      component: tagsPageTemplate,
      context: {
        // Pass tags and tagPostCounts for template
        tags,
        tagPostCounts,
      },
    })


    // 4.2 Create tag posts page
    tags.forEach(tag => {
      createPage({
        path: `/tags/${Slugify(tag)}`,
        component: tagPostsTemplate,
        context: {
          tag,
        }
      })
    })


    // 5.1 Create categories page

    // Get all categories
    let categories = []
    // Loop through all posts to all tags
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.categories")) {
        categories = categories.concat(edge.node.frontmatter.categories)
      }
    })

    // Count all tags and assign them to the object
    let categoryPostCounts = {}
    categories.forEach(category => {
      categoryPostCounts[category] = (categoryPostCounts[category] || 0) + 1
    })

    // Remove duplicates
    categories = _.uniq(categories)

    // console.log("@@@@@@@@@@", categoriesPageTemplate)
    // console.log(categories)
    // console.log(categoryPostCounts)

    // Create tags page
    createPage({
      path: `/categories`,
      component: categoriesPageTemplate,
      context: {
        // Pass tags and tagPostCounts for template
        categories,
        categoryPostCounts,
      },
    })


    // 5.2 Create category posts page
    categories.forEach(category => {
      createPage({
        path: `/categories/${Slugify(category)}`,
        component: categoryPostsTemplate,
        context: {
          category,
        }
      })
    })


    // 6. Create post lists to implement a pagination 
    const postsPerPage = 2
    const numberOfPages = Math.ceil(posts.length / postsPerPage)

    console.log (`gatsby-node ${posts.length}` )

    Array.from({ length: numberOfPages }).forEach((_, index) => {
      const isFristPage = index === 0
      const currentPage = index + 1

      // if it is the first page, do not need to create a page because it already exist
      if (isFristPage) return

      console.log(`@@@@@@@@@ ${postsPerPage} ${currentPage}`)
      // if it is not the first page, create a page
      createPage({
        path: `/page/${currentPage}`,
        component: postListTemplate,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          currentPage,
          numberOfPages
        }
      })
    })   
  }
}
