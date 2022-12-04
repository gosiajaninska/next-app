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
  products: Product[];
}

export interface Product {
  id:    string;
  name:  string;
  price: number;
  slug:  string;
  images: Image[];
}

export interface Image {
  width:  number;
  height: number;
  url:    string;
}
