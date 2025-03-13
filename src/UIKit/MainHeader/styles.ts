import { StyleSheet } from "react-native";
import { IColors } from "../../UIProvider/theme/IColors";
import { scaleFontSize, scaleHorizontal, scaleVertical } from "../../Utils";

export const getStyles = (colors: IColors) => (StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: scaleHorizontal(24),
        paddingBottom: scaleVertical(10),
        zIndex: 1
    },
    themeWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    text: {
        color: colors.text,
        fontSize: scaleFontSize(14),
        marginRight: scaleHorizontal(4)
    },
    localizationButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: scaleHorizontal(4)
    },
    localizationItem: {
        padding: scaleHorizontal(4)
    },
    localizationWrapper: {
        marginRight: scaleHorizontal(10),
        height:scaleVertical(30)
    }
}))