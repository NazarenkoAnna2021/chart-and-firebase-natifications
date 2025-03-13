
export interface ILinks {
    forecast: string;
};

class Links implements ILinks {
    private _domain = 'https://api.weatherapi.com/v1';
    private _links = {
        forecast: '/forecast.json',
    };

    public get forecast() { return this._domain + this._links.forecast; }
};

export const links = new Links();