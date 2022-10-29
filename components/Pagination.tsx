
interface PaginationProps {
  activePageNumber: number,
  onClick: Function
}

const Pagination = ({ activePageNumber, onClick }: PaginationProps) => {

  const clickHandler = ({ target }) => {
    const pageNumber = target.dataset.page;
    onClick(pageNumber);
  }

  const pageLink = (pageNumber:number, isActive:boolean) => {
    return (
      <a
        href="#"
        onClick={clickHandler}
        data-page={pageNumber}
        className={`border-transparent ${isActive ? "border-t-gray-500" : "border-t-transparent"} hover:bg-gray-200 border-t-4 border-b-4 py-4 px-4 inline-flex items-center`}
      >
        {pageNumber}
      </a>    
    )
  }

  return (
    <nav className="border-t border-gray-500 px-4 flex items-center justify-center sm:px-0">
      {pageLink(1, activePageNumber == 1)}
      {pageLink(2, activePageNumber == 2)}
      {pageLink(3, activePageNumber == 3)}
      <span className="border-transparent text-gray-500 border-t-2 py-4 px-4 inline-flex items-center text-sm ">
        ...
      </span>
      {pageLink(8, activePageNumber == 8)}
      {pageLink(9, activePageNumber == 9)}
      {pageLink(10, activePageNumber == 10)}
    </nav>
  )
}

export default Pagination;