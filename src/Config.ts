
class Config {
    private _wetherApiKey = '2198d7994db04ff9a08153003251103';

    public get wetherApiKey() {
        return this._wetherApiKey;
    }
}

export const config = new Config();