import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const PizzaGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

export default function SinglePizzaPage({ data: { pizza } }) {
  return (
    <PizzaGrid>
      <Helmet>
        <title>{pizza.name}</title>
      </Helmet>
      <Img fluid={pizza.image.asset.fluid} />
      <div>
        <h2 className="mark">{pizza.name}</h2>
        {pizza.toppings.map((topping) => (
          <li key={topping.id}>{topping.name}</li>
        ))}
      </div>
    </PizzaGrid>
  );
}

export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        name
        id
        vegetarian
      }
    }
  }
`;
