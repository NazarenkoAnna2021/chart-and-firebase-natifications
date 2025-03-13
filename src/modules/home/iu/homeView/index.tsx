import { FC, useCallback } from "react";
import { ScreenContainer } from "../../../../UIKit/screenContainer";
import { FlatList } from "react-native";
import { ChartCardItem } from "../components/chartCardItem";
import { ICity, chartsModel } from "../../entities/ChartsModel";
import { MainHeader } from "../../../../UIKit/MainHeader";

export const HomeView: FC = () => {
    const cities = chartsModel.useCharts().cities;

    const keyExtractor = useCallback((item: ICity) => item.id.toString(), []);

    const renderItem = useCallback(({ item }: { item: ICity }) => (
        <ChartCardItem item={item} />
    ), []);

    return (
        <ScreenContainer edges={['top', 'bottom']} headerComponent={<MainHeader />}>
            <FlatList
                data={cities}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </ScreenContainer>
    );
};