import { useEffect, useState } from 'react';

const gql = String.raw;
const deets = `
  name
  _id
  image {
    asset {
      url
      metadata {
        lqip
      }
    }
  }
`;

export default function useLatestData() {
  const [hotSlices, setHotSlices] = useState();
  const [slicesmasters, setSlicesmaters] = useState();

  useEffect(function () {
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "downtown") {
              name
              slicemaster {
                ${deets}
              }
              hotSlices {
                ${deets}
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setHotSlices(res.data.StoreSettings.hotSlices);
        setSlicesmaters(res.data.StoreSettings.slicemaster);
      });
  }, []);

  return {
    hotSlices,
    slicesmasters,
  };
}
