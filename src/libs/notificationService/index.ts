
import { AuthorizationStatus, requestPermission, getMessaging, getToken, hasPermission, onMessage, onTokenRefresh, registerDeviceForRemoteMessages } from '@react-native-firebase/messaging';
import notifee, { AndroidImportance } from '@notifee/react-native';
import { PermissionsAndroid } from 'react-native';

class NotificationService {
    private messaging = getMessaging();
    private _channelId = 'missedAlarm'
    private _channelName = 'Missed Alarms'

    constructor() {
        this.registerAppWithFCM();
    }

    private checkNotificationPermissionStatus = async (): Promise<boolean> => {
        const status = await hasPermission(this.messaging);
        if (status === AuthorizationStatus.AUTHORIZED) {
            return true;
        } else {
            const status = await PermissionsAndroid.request('android.permission.POST_NOTIFICATIONS');
            return status === PermissionsAndroid.RESULTS.GRANTED
        };
    };

    private showForegroundNotification = async (message: any) => {
        if (!message || !message?.notification) {
            return;
        }
        const { title, body } = message.notification;
        notifee.displayNotification({
            title,
            body,
            android: {
                channelId: this._channelId, //pass the same channel id for which channel is created
                importance: AndroidImportance.HIGH,
                pressAction: {
                    id: 'default',
                },
            },
        });
    }

    registerAppWithFCM = async (): Promise<void> => {
        try {
            let granted = await this.checkNotificationPermissionStatus();
            if (!granted) return;
            await registerDeviceForRemoteMessages(this.messaging);
            const token = await getToken(this.messaging);
            console.log('============token========================');
            console.log(token);
            console.log('====================================');
            onTokenRefresh(this.messaging, (token) => {
                console.log('============onTokenRefresh========================');
                console.log(token);
                console.log('====================================');
            });
            notifee.isChannelCreated(this._channelId).then(isCreated => {
                if (!isCreated) {
                    notifee.createChannel({
                        id: this._channelId,
                        name: this._channelName,
                        sound: 'default',
                    });
                }
            });
            onMessage(this.messaging, this.showForegroundNotification);
        } catch (error) {
            console.warn('FirebaseMessaging -> registerAppWithFCM: ', error);
        }
    }

};

export const notificationService = new NotificationService();