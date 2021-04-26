import React from 'react';
import styles from './Paginator.module.css';
import classNames from "classnames";

const Paginator = ({usersCount, pageSize, currentPage, onChangePage, portionSize}) => {
    let pagesCount = Math.ceil(usersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
        let portionCount = Math.ceil(pagesCount / portionSize);
        let [portionNumber, setPortionNumber] = React.useState(1);
        let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
        let rightPortionPageNumber = portionNumber * portionSize;

    return (
            <div className={styles.pagesWrapper}>
                { portionNumber > 1 &&
                <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>
                }
                {
                    pages
                        .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                        .map(page => {
                        return <div
                                  key={page}
                                  className={ classNames({[styles.selectedPage]: currentPage === page}, styles.defaultPage) }
                                  onClick={() => { onChangePage(page) }}
                                >{page}</div>
                    })
                }
                { portionCount > portionNumber &&
                     <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>
                }
            </div>
    );
}

export default Paginator;