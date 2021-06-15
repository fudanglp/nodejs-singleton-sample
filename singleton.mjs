class MySingleton {
    constructor() {
        if (MySingleton._instance) {
            return MySingleton._instance;
        }
        MySingleton._instance = this;
        this._state = "initialized";
    }

    _state = "uninitialized";
    _data = {};

    async loadFetchedInstance() {
        if (this._state == "fetched") {
            return this;
        } else if (this._state == "initialized") {
            let dummyFetch = new Promise(resolve => setTimeout(() => {
                this._data = { a: 123, b: "456" };
                resolve();
            }, 3000));
            await dummyFetch;
            this._state = "fetched";
            return this;
        }
    }
}

const mySingletonInstance = new MySingleton();
export default mySingletonInstance;
