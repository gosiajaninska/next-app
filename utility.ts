import { MDXRemoteSerializeResult } from 'next-mdx-remote' ;
import { Asset, GetProductsListQuery, Product } from './generated/graphql';

export type MarkdownResult = MDXRemoteSerializeResult<Record<string, unknown>, Record<string, string>>;

export interface CartItem {
  readonly id: string;
  readonly price: number;
  readonly title: string;
  readonly amount: number;
}

export type CartItemButtonProps = Pick<
  CartItem, 
  "id" | "title" | "price"
>;

export interface ProductsListWithPaginationProps {
  allProductsQuantity: number,
  productsForCurrentPage: GetProductsListQuery,
  pagination: PaginationProps,
}

export interface PaginationProps {
  currentPageNumber: number,
  pagesQuantity: number,
  onClick?: Function,
}