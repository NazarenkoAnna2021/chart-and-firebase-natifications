import { create } from "zustand";

const initialCities: ICity[] = [
    {
        id: 0,
        name: 'London'
    },
    {
        id: 1,
        name: 'Paris'
    },
    {
        id: 2,
        name: 'Tokio'
    },
    {
        id: 3,
        name: 'Dnipro'
    },
    {
        id: 4,
        name: 'Barcelona'
    },
    {
        id: 5,
        name: 'Kiyiv'
    },
];

export interface ICity {
    id: number;
    name: string;
};

interface IChartsModel {
    cities: ICity[];
    currentCity: ICity | null;
}

class ChartsModel implements IChartsModel {
    private repository = create<IChartsModel>(() => ({ cities: initialCities, currentCity: null, weather: null }));

    public get useCharts(){
        return this.repository;
    }

    public get cities() {
        return this.repository.getState().cities;
    }

    public set cities(value: ICity[]) {
        this.repository.setState({ cities: value });
    }


    public get currentCity() {
        return this.repository.getState().currentCity;
    }

    public set currentCity(value: ICity | null) {
        this.repository.setState({ currentCity: value });
    }

    public clear() {
        this.cities = initialCities;
        this.currentCity = null;
    }

};

export const chartsModel = new ChartsModel();
