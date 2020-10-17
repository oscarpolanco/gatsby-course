import React from 'react';
import { graphql } from 'gatsby';

export default function PizzasPage({ data }) {
  return (
    <>
      <p>Hey! There are {data.pizzas.nodes.length} Pizzas!!</p>
    </>
  );
}

export const query = graphql`
  query PizzaQuery {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
