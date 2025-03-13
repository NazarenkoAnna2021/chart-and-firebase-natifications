import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from 'react';

export const useLaunchApp = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    useEffect(() => {
        setTimeout(() => {
            navigation.reset({ routes: [{ name: 'HomeView' }] });
        }, 3000);
    }, []);

    return {};
};