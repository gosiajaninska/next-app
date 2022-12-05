import { gql } from "@apollo/client";

export const getProductsList = gql`
  query GetProductsList {
    products {
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


export const getProductsSlugs = gql`
  query GetProductsSlugs {
    products {
      slug
    }
  }
  `; 


export const getProductBySlug = gql`
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