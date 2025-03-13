import { FC, memo, useEffect, useMemo, useState } from "react";
import { ActivityIndicator, RefreshControl, ScrollView, Text, View } from "react-native";
import { useUiContext } from "../../../../../UIProvider";
import { getStyles } from "./styles";
import { chartsModel, ICity } from "../../../entities/ChartsModel";
import { getForecast } from "../../../useCases/getForecast";
import { IWeather } from "../../../entities/IWeather";
import { LineChart } from "react-native-gifted-charts";
import { size } from "../../../../../Utils";
import moment from "moment";

interface IProps {
    item: ICity;
};

export const Chart: FC<IProps> = memo(({ item }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyles(colors), [colors]);
    const [weather, setWeather] = useState<IWeather | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const currentCity = chartsModel.useCharts(state => state.currentCity);
    const currentTime = moment(weather?.current.last_updated).get('hour');
    const temperature = weather?.forecast.forecastday?.[0]?.hour?.map((item, index) => ({ value: item.temp_c, hideDataPoint: index !== currentTime, dataPointColor: colors.text, dataPointRadius: 5 }));
    const feelsLike = weather?.forecast.forecastday?.[0]?.hour?.map((item, index) => ({ value: item.feelslike_c, hideDataPoint: true }));
    const precipitation = weather?.forecast.forecastday?.[0]?.hour.map((item, index) => ({ value: item.chance_of_rain, hideDataPoint: true }))
   
    useEffect(() => {
        if (!weather && item.id === currentCity?.id) {
            onGetForecast();
        };
    }, [currentCity]);

    useEffect(() => {
        if (!isLoading) {
            setRefreshing(false);
        };
    }, [isLoading]);

    const onGetForecast = async () => {
        setIsLoading(true);
        const weather = await getForecast();
        setWeather(weather);
        setIsLoading(false);
    };

    return (
        <View style={styles.container} >
            <Text style={styles.title}>{item.name}</Text>
            <ScrollView style={{ overflow: 'hidden' }} refreshControl={<RefreshControl refreshing={refreshing} tintColor={colors.text} onRefresh={onGetForecast} />}>
                <Text style={styles.text}>{t('temperature')}</Text>
                <LineChart
                    curved
                    disableScroll
                    areaChart
                    thickness={3}
                    data={temperature}
                    data2={feelsLike}
                    color={colors.primary}
                    color2={'blue'}
                    rulesColor={colors.border}
                    yAxisTextStyle={{ color: colors.text }}
                    startFillColor={colors.primary}
                    endFillColor={colors.primary}
                    yAxisColor={colors.border}
                    xAxisColor={colors.border}
                    backgroundColor={colors.background}
                    rulesType={'solid'}
                    initialSpacing={0}
                    startOpacity={0.5}
                    endOpacity={0.1}
                    width={size.width}
                    spacing={((size.width - 10) / 24)}
                    noOfSections={5}
                    maxValue={(weather?.forecast.forecastday?.[0]?.day.maxtemp_c ?? 0) + 5}
                    mostNegativeValue={weather?.forecast.forecastday?.[0]?.day.mintemp_c}
                />
                <Text style={styles.text}>{t('precipitation')}</Text>
                <LineChart
                    disableScroll
                    color={colors.primary}
                    yAxisTextStyle={{ color: colors.text }}
                    rulesType="solid"
                    initialSpacing={0}
                    yAxisColor={colors.border}
                    xAxisColor={colors.border}
                    backgroundColor={colors.background}
                    rulesColor={colors.border}
                    width={size.width}
                    spacing={((size.width - 10) / 24)}
                    noOfSections={5}
                    maxValue={100}
                    data={precipitation}
                />
            </ScrollView>
            {isLoading && <ActivityIndicator color={colors.primary} size={'large'} />}
        </View>
    );
});