class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.arr = Array.apply(null, {length: max + 1}).map(Number.call, Number).slice(min);
        return this.arr;
    }

    guess() {
        this.index = Math.floor((this.arr.length - 1) / 2);
        this.result = this.arr[Math.floor((this.arr.length - 1) / 2)];
        return this.result;
    }


    lower() {
        this.arr = this.arr.slice(0, this.index);
    }

    greater() {
        // this.arr = this.arr.slice(this.index - 1);
        this.arr = this.arr.slice(this.index);
    }
}

module.exports = GuessingGame;
