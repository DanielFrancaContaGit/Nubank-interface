import React from 'react';

import { Menu, Screen } from './styles';

function Main() {
  return (
    <Screen>
      <Menu
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
        showsHorizontalScrollIndicator={false}
      />
    </Screen>
  );
}

export default Main;
