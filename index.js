import {AppRegistry} from 'react-native';
import {App, firebaseMessagingHandler} from './src';
import {name as appName} from './app.json';

firebaseMessagingHandler.backgroundMessageHandle();

AppRegistry.registerComponent(appName, () => App);
