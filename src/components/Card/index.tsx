import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';

import {
  Container, CardHeader, CardFooter, CardContent, CardPrice, Text, CardFooterText,
} from './style';

const Card: React.FC = () => (
  <Container>
    <CardHeader>
      <MaterialIcons name="attach-money" size={28} color="#606060" />
      <MaterialIcons name="visibility-off" size={28} color="#606060" />
    </CardHeader>
    <CardContent>
      <Text>Saldo disponível</Text>
      <CardPrice>R$ 444,00</CardPrice>
    </CardContent>
    <CardFooter>
      <CardFooterText>Transferência de R$ 444,00 recebida por Pikachu Rocho hoje às 8:0h</CardFooterText>
    </CardFooter>
  </Container>
);

export default Card;
