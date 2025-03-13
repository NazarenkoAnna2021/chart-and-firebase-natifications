import { FC, memo, useMemo } from "react";
import { Text, View } from "react-native";
import { IMock } from "../../../entities/ChartsModel";
import { useUiContext } from "../../../../../UIProvider";
import { getStyles } from "./styles";

interface IProps {
    item: IMock;
};

export const ChatCardItem: FC<IProps> = memo(({ item }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyles(colors), [colors])

    return (
        <View style={styles.container}>
            <Text>{item.name}</Text>
        </View>
    );
});