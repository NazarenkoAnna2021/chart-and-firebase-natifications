import React, { FC, useMemo } from 'react';
import { getStyles } from './styles';
import { useUiContext } from '../../../UIProvider';
import { ScreenContainer } from '../../../UIKit/screenContainer';
import { useLaunchApp } from '../presenters/useLaunchApp';
import { Text } from 'react-native';

export const LaunchAppView: FC = () => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyles(colors), [colors]);
    const { } = useLaunchApp();

    return (
        <ScreenContainer edges={[]} containerStyle={styles.container}>
            <Text>{t('appName')}</Text>
        </ScreenContainer>
    );
};
