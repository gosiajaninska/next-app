import { MDXRemoteSerializeResult } from 'next-mdx-remote' ;

export type MarkdownResult = MDXRemoteSerializeResult<Record<string, unknown>, Record<string, string>>;

export interface StoreApiResponse {
  id:               number;
  title:            string;
  price:            number;
  description:      string;
  category:         string;
  image:            string;
  longDescription:  string;
  rating: {
    rate:           number;
    count:          number;
  };
}

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

export interface ProductsListResponse {
  products: ProductListItem[];
}

export type ProductListItem = Pick<
  ProductData, 
  "id" | "name" | "price" | "slug" |  "images"
>

export interface Image {
  width:  number;
  height: number;
  url:    string;
}

export interface ProductData {
  id:               ProductDataResponse['id'];
  name:             ProductDataResponse['name'];
  price:            ProductDataResponse['price'];
  slug:             ProductDataResponse['slug'];
  images:           ProductDataResponse['images'];
  description:      ProductDataResponse['description'];
  longDescription:  MarkdownResult;
}

export interface ProductDataResponse {
  id:               string;
  name:             string;
  price:            number;
  slug:             string;
  images:           Image[];
  description:      string;
}