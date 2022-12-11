import { MDXRemoteSerializeResult } from 'next-mdx-remote' ;
import { Asset, Product } from './generated/graphql';

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

export type ProductListItemData = Pick<
  Product, 
  "id" | "name" | "price" | "slug" |  "images"
>

export interface ProductDetailsProps {
  id: Product["id"];
  imageUrl: string;
  name: Product["name"];
  price:  Product["price"];
  description: string
}

export interface ProductListItemProps {
  id: Product["id"];
  imageUrl: Asset['url'];
  name: Product["name"];
  price:  Product["price"];
  slug: Product["slug"];
}

export interface ProductsListProps {
  products: ProductListItemProps[];
}

export interface ProductsListWithPaginationProps {
  allProductsQuantity: number,
  productsForCurrentPage: ProductsListProps,
  pagination: PaginationProps,
}

export interface PaginationProps {
  currentPageNumber: number,
  pagesQuantity: number,
  onClick?: Function,
}