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
