import React, { FC } from 'react';
import { createStackNavigator, StackCardInterpolationProps } from '@react-navigation/stack';
import { LaunchAppView } from '../../modules/launchApp/ui';
import { HomeView } from '../../modules/home/iu/homeView';
import { ChartView } from '../../modules/home/iu/chartView';

const Stack = createStackNavigator();

const forFade = ({ current }: StackCardInterpolationProps) => ({
    cardStyle: {
        opacity: current.progress,
    },
});

export const MainStackNavigator: FC = () => {

    return (
        <Stack.Navigator initialRouteName='LaunchAppView' screenOptions={{ headerShown: false,  cardStyleInterpolator: forFade }} >
            <Stack.Screen name={'LaunchAppView'} component={LaunchAppView} />
            <Stack.Screen name={'HomeView'} component={HomeView} />
            <Stack.Screen name={'ChartView'} component={ChartView} />
        </Stack.Navigator>
    );
};;
