import React from 'react';
import { Menu, Screen } from './styles';
import Header from '../../components/Header';
import Card from '../../components/Card';
import SmallCard from '../../components/Smallcard';

function Main() {
  return (
    <Screen>
      <Header />
      <Card />
      <Menu
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
        showsHorizontalScrollIndicator={false}
      >
        <SmallCard title="Indicar amigo" iconName="person-add" />
        <SmallCard title="Cobrar" iconName="chat-bubble-outline" />
        <SmallCard title="Depositar" iconName="arrow-downward" />
        <SmallCard title="Transferir" iconName="arrow-upward" />
        <SmallCard title="Me Ajuda" iconName="help-outline" />
        <SmallCard title="Pagar" iconName="payment" />
        <SmallCard title="Bloquear cartão" iconName="lock-open" />
        <SmallCard title="Organizar atalhos" iconName="filter-list" />
      </Menu>
    </Screen>
  );
}

export default Main;
