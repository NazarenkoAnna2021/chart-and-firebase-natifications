import { FC, memo, useMemo, useState } from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";
import { ChevronIcon } from "../../assets/icons/ChevronIconn";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useUiContext } from "../../UIProvider";
import { getStyles } from "./styles";
import { scaleHorizontal } from "../../Utils";

interface IProps {
    isGoBack?: boolean;
}

export const MainHeader: FC<IProps> = memo(({ isGoBack }) => {
    const { colors, theme, locale, locales, setTheme, setLocale, t } = useUiContext();
    const styles = useMemo(() => getStyles(colors), [colors]);
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [localesSelector, setLocalesSelector] = useState(false);

    const onSetLocalesSelector = () => { setLocalesSelector(prev => !prev) };

    return (
        <View style={styles.container}>
            {isGoBack &&
                <TouchableOpacity onPress={navigation.goBack}>
                    <ChevronIcon position='LEFT' />
                </TouchableOpacity>
            }
            <View style={styles.themeWrapper}>
                <View style={styles.localizationWrapper}>
                    <TouchableOpacity style={styles.localizationButton} onPress={onSetLocalesSelector}>
                        <Text style={styles.text}>{locale}</Text>
                        <ChevronIcon position={localesSelector ? 'UP' : 'DOWN'} color={colors.text} width={scaleHorizontal(8)} height={scaleHorizontal(8)} />
                    </TouchableOpacity>
                    {localesSelector &&
                        <View>
                            {locales.filter(item => item !== locale).map(item =>
                                <TouchableOpacity style={styles.localizationItem} onPress={() => setLocale(item)} key={item}>
                                    <Text style={styles.text}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    }
                </View>
                <Text style={styles.text}>{t('theme')}</Text>
                <Switch value={theme === 'dark'} onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
            </View>
        </View>
    );
});