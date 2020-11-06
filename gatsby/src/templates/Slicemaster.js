import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function SingleSlicemaster({ data }) {
  const { slicemaster } = data;
  return (
    <div className="center">
      <Img fluid={slicemaster.image.asset.fluid} />
      <h2>
        <span className="mark">{slicemaster.name}</span>
      </h2>
      <p>{slicemaster.description}</p>
    </div>
  );
}

export const query = graphql`
  query($slug: String!) {
    slicemaster: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      id
      description
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
