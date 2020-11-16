import React from 'react';
import LoadingGrid from '../components/LoadingGrid';
import { HomePageGrid } from '../styles/Grids';
import useLatestData from '../utils/useLatestData';

function CurrentSlicing({ slicesmasters }) {
  return (
    <div>
      {!slicesmasters && <LoadingGrid count={4} />}
      {slicesmasters && !slicesmasters?.length && (
        <p>No one is working rigth now!</p>
      )}
    </div>
  );
}

function HotSlices({ hotSlices }) {
  return (
    <div>
      {!hotSlices && <LoadingGrid count={4} />}
      {hotSlices && !hotSlices?.length && <p>Nothin' in the case</p>}
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
