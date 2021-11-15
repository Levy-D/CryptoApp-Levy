import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
    'Overview Favorites': undefined;
    'Overview': undefined;
    'Crypto Details': undefined;
};

export type CryptoDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Crypto Details'
>;
