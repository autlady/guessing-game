class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this._arr = Array.apply(null, {length: max + 1}).map(Number.call, Number).slice(min);
    }

    guess(arr) {
        return arr[Math.floor((arr.length - 1) / 2)];
    }

    lower() {

    }

    greater() {

    }
}

module.exports = GuessingGame;
