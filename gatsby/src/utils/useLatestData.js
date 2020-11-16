import { useEffect, useState } from 'react';

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
        query: `query {StoreSettings(id: "downtown") { name slicemaster { name } hotSlices { name } } }`,
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
