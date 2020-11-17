import React from 'react';
import ItemGrid from '../components/ItemGrid';
import LoadingGrid from '../components/LoadingGrid';
import { HomePageGrid } from '../styles/Grids';
import useLatestData from '../utils/useLatestData';

function CurrentSlicing({ slicesmasters }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">Slicemasters On</span>
      </h2>
      <p>Standing by, ready to slice you up!</p>
      {!slicesmasters && <LoadingGrid count={4} />}
      {slicesmasters && !slicesmasters?.length && (
        <p>No one is working rigth now!</p>
      )}
      {slicesmasters?.length && <ItemGrid items={slicesmasters} />}
    </div>
  );
}

function HotSlices({ hotSlices }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">Hot Slices On</span>
      </h2>
      <p>Come on by, buy the slice </p>
      {!hotSlices && <LoadingGrid count={4} />}
      {hotSlices && !hotSlices?.length && <p>Nothin' in the case</p>}
      {hotSlices?.length && <ItemGrid items={hotSlices} />}
    </div>
  );
}

export default function HomePage() {
  const { slicesmasters, hotSlices } = useLatestData();

  return (
    <div className="center">
      <h2>Best Pizz Downtown!</h2>
      <p>Open 11am to 11pm Every Single Day</p>
      <HomePageGrid>
        <CurrentSlicing slicesmasters={slicesmasters} />
        <HotSlices hotSlices={hotSlices} />
      </HomePageGrid>
    </div>
  );
}
