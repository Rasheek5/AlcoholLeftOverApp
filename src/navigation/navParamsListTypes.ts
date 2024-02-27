import {NavigationProp, NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ILeftOver} from '../interfaces';

export type LoginStackParam = {
  login: undefined;
  signUp: undefined;
};

export type MainStackParam = {
  homeStack: undefined;
  tabStack: undefined;
  imagViewer: {url: string};
  editLeftOver: {data: ILeftOver};
  notificationTest: undefined;
};

export type TabStackParam = {
  homeStack: undefined;
  addLeftOvers: undefined;
};

export type RouterStackParam = {
  loginStack: NavigatorScreenParams<LoginStackParam>;
  mainStack: NavigatorScreenParams<MainStackParam>;
  splahScreem: undefined;
};

export type RouterStackNavigationProps =
  NativeStackNavigationProp<RouterStackParam>;

export type MainStackNavigationProps = NavigationProp<MainStackParam>;

export type LoginStackNavigationProps = NavigationProp<LoginStackParam>;

export type TabStackNavigationProps = NavigationProp<TabStackParam>;
