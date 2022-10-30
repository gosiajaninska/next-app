
interface PaginationProps {
  activePageNumber: number,
  pagesQuantity: number,
  onClick: Function,
}

export const Pagination = ({ activePageNumber, pagesQuantity, onClick }: PaginationProps) => {

  const clickHandler = ({ target }) => {
    const pageNumber = target.dataset.page;
    onClick(pageNumber);
  }

  const pageLink = (pageNumber:number, isActive:boolean) => {
    return (
      <a
        key={pageNumber}
        href="#"
        onClick={clickHandler}
        data-page={pageNumber}
        className={`border-transparent ${isActive ? "border-t-gray-500" : "border-t-transparent"} hover:bg-gray-200 border-t-4 border-b-4 py-4 px-4 inline-flex items-center`}
      >
        {pageNumber}
      </a>    
    )
  }

  const allPagesLinks = (activePageNumber:number, pagesQuantity:number) => {
    let links = [];
    for (let i = 1; i <= pagesQuantity; i++) {
      links.push( pageLink(i, activePageNumber == i) );
    }
    return links;
  }


  return (
    <nav className="border-t border-gray-500 px-4 flex items-center justify-center sm:px-0">
      { allPagesLinks(activePageNumber, pagesQuantity) }
    </nav>
  )
}
