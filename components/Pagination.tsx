import Link from "next/link";


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
      <Link href="#" key={pageNumber}>
        <a
          onClick={clickHandler}
          data-page={pageNumber}
          className={`border-transparent ${isActive ? "border-t-gray-500" : "border-t-transparent"} hover:bg-gray-200 border-t-4 border-b-4 py-4 px-4 inline-flex items-center`}
        >
          {pageNumber}
        </a>   
      </Link> 
    )
  }

  return renderNav(activePageNumber, pagesQuantity, pageLink);
}




interface PaginationStaticProps {
  activePageNumber: number,
  pagesQuantity: number,
}

export const PaginationStatic = ({ activePageNumber, pagesQuantity }: PaginationStaticProps) => {

  const pageLink = (pageNumber:number, isActive:boolean) => {
    return (
      <Link href={`/products/page/${pageNumber.toString()}`} key={pageNumber}>
        <a
          className={`border-transparent ${isActive ? "border-t-gray-500" : "border-t-transparent"} hover:bg-gray-200 border-t-4 border-b-4 py-4 px-4 inline-flex items-center`}
        >
          {pageNumber}
        </a>    
      </Link>
    )
  }

  return renderNav(activePageNumber, pagesQuantity, pageLink);
}




const renderNav = (activePageNumber:number, pagesQuantity:number, pageLink:Function) => {
  let links = [];
  for (let i = 1; i <= pagesQuantity; i++) {
    links.push( pageLink(i, activePageNumber == i) );
  }
  
  return (
    <nav className="border-t border-gray-500 px-4 flex items-center justify-center sm:px-0">
      { links }
    </nav>
  );
}

