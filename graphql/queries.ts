import { gql } from "@apollo/client";
import { ProductDataResponse, ProductsListResponse } from "../utility";
import { apolloClient } from "./apolloClient";

export const getProductsListQuery = gql`
  query GetProductsList($skip: Int, $first: Int) {
    products(skip: $skip, first: $first) {
      id
      name
      price
      slug
      images(first: 1) {
        width
        height
        url
      }
    }
  }
  `;


export const getProductsSlugsQuery = gql`
  query GetProductsSlugs {
    products {
      slug
    }
  }
  `; 


export const getProductBySlugQuery = gql`
  query GetProductBySlugs($slug: String) {
    product(where: {slug: $slug}) {
      id
      name
      price
      slug
      description
      images {
        width
        height
        url
      }
    }
  }
`;


export const countProducts = async () => {
  const { data } = await apolloClient
    .query<{ products: { slug: string }[] }>({
      query: getProductsSlugsQuery
    });
  return data.products.length;
}


export const getProducts = async (skip: number, first: number) => {
  const { data } = await apolloClient
    .query<ProductsListResponse>({
      query: getProductsListQuery,
      variables: { skip: skip, first: first}
    });
  return data.products;
}


export const countPages = async (productsPerPage=4) => {
  const productsQuantity = await countProducts();
  return Math.ceil(productsQuantity / productsPerPage);
}


export const getProductBySlug = async (slug: string) => {
  const { data } = await apolloClient
    .query<{ product: ProductDataResponse }>({
      query: getProductBySlugQuery, 
      variables: { slug: slug }
    });
  return data.product;
}


export const getProductsSlugs = async () => {
  const { data } = await apolloClient
    .query<{ products: { slug: string }[] }>({
      query: getProductsSlugsQuery,
    });
  return data.products.map( item => item.slug );
}
