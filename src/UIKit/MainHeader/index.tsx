import { FC, memo } from "react";
import { TouchableOpacity, View } from "react-native";
import { ChevronIcon } from "../../assets/icons/ChevronIconn";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { scaleHorizontal } from "../../Utils";

export const MainHeader: FC = memo(() => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    return (
        <View style={{paddingHorizontal:scaleHorizontal(24)}}>
            <TouchableOpacity onPress={navigation.goBack}>
                <ChevronIcon position='LEFT'/>
            </TouchableOpacity>
        </View>
    );
});