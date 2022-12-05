import Link from "next/link";


interface PaginationProps {
  activePageNumber: number,
  productsQuantity: number,
  productsPerPage: number,
  onClick?: Function,
}

export const Pagination = ({ activePageNumber, productsQuantity, productsPerPage, onClick }: PaginationProps) => {

  const clickHandler = onClick ? ({ target }: any) => {
    const pageNumber = target.dataset.page;
    onClick(pageNumber);
  } : undefined;

  const pageLink = (pageNumber:number, isActive:boolean) => {
    return (
      <Link 
        href={onClick ? "#" : `/products/page/${pageNumber.toString()}`} 
        key={pageNumber}
      >
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

  const pagesQuantity = Math.ceil(productsQuantity / productsPerPage);

  let links = [];
  for (let i = 1; i <= pagesQuantity; i++) {
    links.push( pageLink(i, activePageNumber == i) );
  }
  
  return (
    <nav className="border-t border-gray-500 px-4 flex flex-wrap items-center justify-center sm:px-0">
      { links }
    </nav>
  );
}
