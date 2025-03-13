import { StyleSheet } from "react-native";
import { IColors } from "../../../../../UIProvider/theme/IColors";
import { scaleFontSize, scaleVertical, size } from "../../../../../Utils";

export const getStyles = (colors: IColors) => (StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        marginBottom: scaleVertical(10),
        borderRadius: 30,
        borderWidth: 1,
        borderColor: colors.border,
        overflow:'visible',
    },
    title: {
        zIndex:1,
        width: '100%',
        fontSize: scaleFontSize(24),
        fontWeight: '700',
        textAlign: 'center',
        position: 'absolute',
        color: colors.text,
        top: scaleVertical(-40),
    },
    text: {
        fontSize: scaleFontSize(20),
        textAlign:'center',
        color: colors.text,
        marginVertical:scaleVertical(10)
    }
}));