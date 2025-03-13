import { FC } from 'react';
import { UIProvider } from './UIProvider';
import { RootNavigator } from './navigation/rootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { notificationService } from './libs/notificationService';

export const App: FC = () => {
    // notificationService;

    return (
        <SafeAreaProvider>
            <UIProvider>
                <RootNavigator />
            </UIProvider>
        </SafeAreaProvider>
    );
}