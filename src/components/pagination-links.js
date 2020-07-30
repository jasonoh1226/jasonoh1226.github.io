import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const PaginationLinks = ({ _currentPage, _numberOfPages }) => {

    const isFirst = _currentPage === 1
    const isLast = _currentPage === _numberOfPages
    const previousPage = _currentPage - 1 === 1 ? '/' : '/page/' + (_currentPage - 1).toString()
    const nextPage = '/page/' + (_currentPage + 1).toString()

    console.log (_numberOfPages);

    return (
        <div className="pagination-wrapper">
            <Pagination aria-label="Page navigation example" size="3">
            {isFirst ? (
                <PaginationItem disabled>
                    <PaginationLink previous/>
                </PaginationItem>
            ) : (
                <PaginationItem disabled>
                    <PaginationLink previous href={previousPage}/>
                </PaginationItem>
            )}

           
            {Array.from({ length: _numberOfPages }, (_, index) => 
                _currentPage === index + 1 ? (
                    <PaginationItem active key={`page-number${index + 1}`}>
                        <PaginationLink href={`/${index === 0 ? '' : 'page/' + (index + 1)}`}>
                            {index + 1}
                        </PaginationLink>
                    </PaginationItem>
                ) : (
                    <PaginationItem key={`page-number${index + 1}`}>
                        <PaginationLink href={`/${index === 0 ? '' : 'page/' + (index + 1)}`}>
                            {index + 1}
                        </PaginationLink>
                    </PaginationItem>

                )
            )

            }

            {isLast ? (
                <PaginationItem disabled>
                    <PaginationLink next/>
                </PaginationItem>
            ) : (
                <PaginationItem>
                    <PaginationLink next href={nextPage}/>
                </PaginationItem>
            )}
        </Pagination>

        </div>
        
    )

}

export default PaginationLinks