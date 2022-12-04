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