import { gql } from "@apollo/client";

export const getProductsList = gql`
  query GetProductsList {
    products {
      id
      name
      price
      slug
      images {
        width
        height
        url
      }
    }
  }
  `;