class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this._arr = Array.apply(null, {length: max + 1}).map(Number.call, Number).slice(min);
        return this._arr;
    }

    guess() {
        this._result = this._arr[Math.floor((this._arr.length - 1) / 2)];
        return this._result;
    }


    lower() {
        this._arr.slice(this._result);
    }

    greater() {
        this._arr.slice(0, this._result - 1);
    }
}

module.exports = GuessingGame;
