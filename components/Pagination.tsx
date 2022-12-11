import Link from "next/link";
import { PaginationProps } from "../utility";


export const Pagination = ({ currentPageNumber, pagesQuantity, pageChangeFunction }: PaginationProps) => {

  const clickHandler = pageChangeFunction ? ({ target }: any) => {
    const pageNumber = target.dataset.page;
    pageChangeFunction(pageNumber);
  } : undefined;

  const pageLink = (pageNumber:number, isActive:boolean) => {
    return (
      <Link 
        href={pageChangeFunction ? "#" : `/products/page/${pageNumber.toString()}`} 
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

  let links = [];
  for (let i = 1; i <= pagesQuantity; i++) {
    links.push( pageLink(i, currentPageNumber == i) );
  }
  
  return (
    <nav className="border-t border-gray-500 px-4 flex flex-wrap items-center justify-center sm:px-0">
      { links }
    </nav>
  );
}
