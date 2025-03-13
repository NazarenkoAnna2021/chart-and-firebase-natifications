import { config } from "../../../Config";
import { requester } from "../../../libs/requester";
import { links } from "../../../Links";
import { chartsModel } from "../entities/ChartsModel";

export const getForecast = async () => {
    try {
        const query = `?key=${config.wetherApiKey}&q=${chartsModel.currentCity?.name}&days=1`
        const { data } = await requester.get(links.forecast + query);
        return data;
    } catch (error) {
        console.log('getForecast: ', JSON.stringify(error));
        return null
    };
};