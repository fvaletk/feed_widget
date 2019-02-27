import React from 'react';

import { Entities } from './components';

const STREAM_URL = 'http://api.massrelevance.com/MassRelDemo/kindle.json';
// const STREAM_URL =
//   'http://api.massrelevance.com/MassRelDemo/all-networks.json?network=facebook';

export function App() {
  return <Entities url={STREAM_URL} limit={50} interval={15000} />;
}
