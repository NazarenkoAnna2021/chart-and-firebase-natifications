import { FC, memo, useMemo } from "react";
import { Text, TouchableOpacity } from "react-native";
import { chartsModel, ICity } from "../../../entities/ChatsModel";
import { useUiContext } from "../../../../../UIProvider";
import { getStyles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

interface IProps {
    item: ICity;
};

export const ChartCardItem: FC<IProps> = memo(({ item }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyles(colors), [colors]);
    const navigation = useNavigation<StackNavigationProp<any>>();

    const onPress = () => {
        chartsModel.currentCity = item;
        navigation.navigate('ChartView');
    };

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
    );
});