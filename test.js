// import the function sum from the app.js file
const {fromEuroToDollar,fromDollartoYen,fromYanToPound } = require('./app.js');

test('con 1 Euro voy a tener 1.2 dolares', () => {
    let totalDollar = fromEuroToDollar(1);
    expect(totalDollar).toBe(1.2);
});


test('de dollar a yen ', () => {
    let totalYen = fromDollartoYen(1);
    expect(totalYen).toBe(106.157);
});


test('de dollar a Pound', () => {

    let totalPound = fromYanToPound(1);
    expect(totalPound).toBe(0.006299212598425197);
});