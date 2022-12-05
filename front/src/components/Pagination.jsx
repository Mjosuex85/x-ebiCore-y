import React from 'react'


const Pagination = ({ allCars, carPerPage, currentPage, handlePagination }) => {

    let pages = []
    for (var i = 1; i <= Math.ceil(allCars / carPerPage); i++) {
        pages.push(i)
    };

    const next = () => {
        if (currentPage >= pages[pages.length - 1]) {
            return
        }
        else {
            handlePagination(currentPage + 1)
        }
    };

    const previous = () => {
        if (currentPage <= 1) {
            return
        }
        else {
            handlePagination(currentPage - 1)
        }
    };

    return (
        <div  >
            <nav  aria-label="Page navigation example">
                <ul  className="pagination justify-content-center">
                    <li  className="page-item">
                        <button style={{color: '#6FBEE9'}}
                            aria-disabled="true"
                            className="page-link"
                            onClick={() => previous()}>{"<"}Anterior
                        </button>
                    </li>

                    {pages && pages.map((pages, index) => {
                        return (
                            <li   key={index} className="page-item">
                                <button 
                                    style={{color: '#6FBEE9'}}
                                    onClick={() => handlePagination(pages)}
                                    className="page-link" >
                                    {pages}
                                </button>
                            </li>
                        )
                    })}

                    <li className="page-item">
                        <button
                            style={{color: '#6FBEE9'}}
                            className="page-link"
                            onClick={() => next()}>Siguiente{">"}
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Pagination