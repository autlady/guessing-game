class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this._arr = Array.apply(null, {length: max + 1}).map(Number.call, Number).slice(min);
    }

    guess() {
        this._result = this._arr[Math.floor((arr.length - 1) / 2)];
    }


    lower() {
        this._arr.slice(nextIdx);
    }

    greater() {
        this._arr.slice(0, this._result - 1);
    }
}

module.exports = GuessingGame;
