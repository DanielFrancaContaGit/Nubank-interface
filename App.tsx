import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Main from './src/pages/Main';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="rgb(109,17,159)" style="light" />
      <Main />
    </>
  );
}
