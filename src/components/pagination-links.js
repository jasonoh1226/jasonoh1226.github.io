import React from "react"
import { Pagination, PaginationItem, PaginationLink } from "reactstrap"

const PaginationLinks = ({ currentPage, numberOfPages }) => {
  const isFirstFivePages = currentPage >= 1 && currentPage <= 5 ? true : false
  const isLessThanFourPagesLeft = numberOfPages - currentPage < 4 ? true : false
  const howMayPagesLeft = numberOfPages - currentPage
  const isFristPage = currentPage === 1
  const isLast = currentPage === numberOfPages
  const pageLimit = 5
  const previousPage =
    currentPage - 1 === 1 ? "/" : "/page/" + (currentPage - 1).toString()
  const nextPage = "/page/" + (currentPage + 1).toString()
  const totalPages = numberOfPages === 0 ? [] : Array.from({ length: numberOfPages }, (v, k) => k + 1)

  return (
    <div className="pagination-wrapper">
      <Pagination aria-label="Page navigation example">

        {isFristPage ? (
          <PaginationItem disabled>
            <PaginationLink previous />
          </PaginationItem>
        ) : (
          <PaginationItem>
            <PaginationLink previous href={previousPage} />
          </PaginationItem>
        )}

        {isFirstFivePages
          ? (
              totalPages.slice(0, pageLimit).map(index =>
                currentPage === index ? (
                    <PaginationItem active key={`page-number${index}`}>
                    <PaginationLink
                        href={`/${index === 1 ? "" : "page/" + index}`}
                    >
                        {index}
                    </PaginationLink>
                    </PaginationItem>
                    ) : (
                    <PaginationItem key={`page-number${index}`}>
                    <PaginationLink
                        href={`/${index === 1 ? "" : "page/" + index}`}
                    >
                        {index}
                    </PaginationLink>
                    </PaginationItem>
                    )
                )
            ) // isFirstFivePage === true
          : (
              isLessThanFourPagesLeft
                ? ( totalPages.slice(currentPage - (pageLimit - howMayPagesLeft), currentPage + howMayPagesLeft).map(index =>
                        currentPage === index ? (
                            <PaginationItem active key={`page-number${index}`}>
                                <PaginationLink href={`/${index === 1 ? "" : "page/" + index}`}>
                                {index}
                                </PaginationLink>
                            </PaginationItem>
                            ) : (
                            <PaginationItem key={`page-number${index}`}>
                                <PaginationLink
                                href={`/${index === 1 ? "" : "page/" + index}`}
                                >
                                {index}
                                </PaginationLink>
                            </PaginationItem>
                            )
                        )
                ) // isLessThanFourPagesLeft === true

                : ( totalPages.slice(currentPage - 1, currentPage + 4).map(index =>
                        currentPage === index ? (
                            <PaginationItem active key={`page-number${index}`}>
                            <PaginationLink
                                href={`/${index === 1 ? "" : "page/" + index}`}
                            >
                                {index}
                            </PaginationLink>
                            </PaginationItem>
                            ) : (
                                <PaginationItem key={`page-number${index}`}>
                                <PaginationLink
                                    href={`/${index === 1 ? "" : "page/" + index}`}
                                >
                                    {index}
                                </PaginationLink>
                                </PaginationItem>
                            )
                        )
                ) // isLessThanFourPagesLeft === false
            ) // isFirstFivePage === false
        }

        {isLast ? (
          <PaginationItem disabled>
            <PaginationLink next />
          </PaginationItem>
        ) : (
          <PaginationItem>
            <PaginationLink next href={nextPage} />
          </PaginationItem>
        )}

      </Pagination>
    </div>
  )
}

export default PaginationLinks
