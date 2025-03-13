import { StyleSheet } from "react-native";
import { IColors } from "../../../../../UIProvider/theme/IColors";
import { scaleFontSize, scaleHorizontal, scaleVertical } from "../../../../../Utils";

export const getStyles = (colors: IColors) => (StyleSheet.create({
    container: {
        backgroundColor: colors.card,
        marginBottom: scaleVertical(10),
        height: scaleVertical(50),
        marginHorizontal: scaleHorizontal(24),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    text: {
        fontSize: scaleFontSize(24),
        color: colors.text,
    }
}));