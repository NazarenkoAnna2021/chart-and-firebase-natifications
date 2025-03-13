import { FC, memo } from "react";
import { Text, View } from "react-native";
import { IMock } from "../../../entities/ChatsModel";

interface IProps {
    item: IMock;
};

export const ChatItem: FC<IProps> = memo(({ item }) => {
    
    return (
        <View>
            <Text>{item.name}</Text>
        </View>
    );
});