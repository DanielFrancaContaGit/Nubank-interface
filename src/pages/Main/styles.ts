import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Screen = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Constants.statusBarHeight}px;
  background-color: rgb(109,17,159);
`;

export const Menu = styled.ScrollView`
  flex-direction: row;
  margin-top: 16px;
`;
