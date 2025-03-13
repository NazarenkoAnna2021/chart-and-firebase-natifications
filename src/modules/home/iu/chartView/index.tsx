import React, { FC, useCallback } from "react";
import { ScreenContainer } from "../../../../UIKit/screenContainer";
import { chartsModel, ICity } from "../../entities/ChartsModel";
import Carousel from "react-native-reanimated-carousel";
import { size } from "../../../../Utils";
import { Chart } from "../components/chart";
import { MainHeader } from "../../../../UIKit/MainHeader";

export const ChartView: FC = () => {
    const { currentCity, cities } = chartsModel.useCharts();

    const onScrollEnd = (index: number) => {
        chartsModel.currentCity = cities[index] || null
    };

    const renderItem = useCallback(({ item }: { item: ICity }) => (
        <Chart item={item} />
    ), []);

    return (
        <ScreenContainer edges={['top', 'bottom']} headerComponent={<MainHeader isGoBack/>}>
            <Carousel
                mode={'parallax'}
                width={size.width}
                height={size.height}
                data={cities}
                renderItem={renderItem}
                defaultIndex={currentCity?.id}
                onScrollEnd={onScrollEnd}
                // @ts-ignore
                panGestureHandlerProps={{ activeOffsetX: [-20, 20] }}
            />
        </ScreenContainer>
    );
};