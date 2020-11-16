import React from 'react';
import useLatestData from '../utils/useLatestData';

function CurrentSlicing() {
  return (
    <div>
      <p>CurrentSlicing</p>
    </div>
  );
}

function HotSlices() {
  return (
    <div>
      <p>HotSlices</p>
    </div>
  );
}

export default function HomePage() {
  const { slicesmasters, hotSlices } = useLatestData();

  return (
    <div className="center">
      <h2>Best Pizz Downtown!</h2>
      <p>Open 11am to 11pm Every Single Day</p>
      <div>
        <CurrentSlicing slicesmasters={slicesmasters} />
        <HotSlices hotSlices={hotSlices} />
      </div>
    </div>
  );
}
