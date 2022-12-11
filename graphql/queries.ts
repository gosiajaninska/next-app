import { 
  GetProductBySlugsDocument, 
  GetProductBySlugsQuery, 
  GetProductBySlugsQueryVariables, 
  GetProductsListDocument, 
  GetProductsListQuery, 
  GetProductsListQueryVariables, 
  GetProductsSlugsDocument, 
  GetProductsSlugsQuery, 
  GetProductsSlugsQueryVariables 
} from "../generated/graphql";
import { apolloClient } from "./apolloClient";

// @todo ref: products counter graphql query 
export const countProducts = async () => {
  const { data } = await apolloClient
    .query<GetProductsSlugsQuery, GetProductsSlugsQueryVariables>({
      query: GetProductsSlugsDocument
    });
  return data.products.length;
}


export const getProducts = async ({ skip, first }: GetProductsListQueryVariables) => {
  const { data } = await apolloClient
    .query<GetProductsListQuery, GetProductsListQueryVariables>({
      query: GetProductsListDocument,
      variables: { skip: skip, first: first}
    });
  return data;
}


export const getProductBySlug = async ({ slug }: GetProductBySlugsQueryVariables) => {
  const { data } = await apolloClient
    .query<GetProductBySlugsQuery, GetProductBySlugsQueryVariables>({
      query: GetProductBySlugsDocument, 
      variables: { slug: slug }
    });
  return data.product;
}


export const getProductsSlugs = async () => {
  const { data } = await apolloClient
    .query<GetProductsSlugsQuery, GetProductsSlugsQueryVariables>({
      query: GetProductsSlugsDocument,
    });
  return data.products.map( item => item.slug );
}
