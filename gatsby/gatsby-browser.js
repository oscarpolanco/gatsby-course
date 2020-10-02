import React from 'react';
import Layout from './src/components/Layout';

import './src/styles/red.css';

export function wrapPageElement({ element, props }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}>{element}</Layout>;
}
