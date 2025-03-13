import { AppRegistry } from 'react-native';
import { App } from './src/App';
import { name as appName } from './app.json';
import { getMessaging, setBackgroundMessageHandler } from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import './gesture-handler';

const messaging = getMessaging();

setBackgroundMessageHandler(messaging, async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
    await notifee.incrementBadgeCount();
});

AppRegistry.registerComponent(appName, () => App);
