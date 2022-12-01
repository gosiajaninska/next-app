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
  readonly id: number;
  readonly price: number;
  readonly title: string;
  readonly amount: number;
}
