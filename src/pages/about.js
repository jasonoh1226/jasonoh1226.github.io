import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="About" />
            <div>
                <h1>About Me</h1>
                <p>I curretely work as an Asp.Net developer for Buckland.</p>
            </div>
        </Layout>       
    )
}


export default AboutPage;