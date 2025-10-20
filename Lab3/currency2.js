/* class Currency {
    constructor() {
        this.rates = {
            canadiand: 2.97,
            us: 4.20,
            eu: 4.60,
            dk: 0.62,
            jenów: 0.028
        };
    }

    roundTwoDecimals(amount) {
        return Math.round(amount * 100) / 100;
    }

    convert(amount, from) {
        const rate = this.rates[from.toUpperCase()];
        if (!rate) {
            throw new Error(`Nieznana waluta: ${from}`);
        }
        return this.roundTwoDecimals(amount * rate);
    }
}

module.exports = Currency;
*/