console.log("Hello World")

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07, // US dollar
    "GBP": 0.87, // British pound
};

function fromEuroToDollar(euro) {
    return (euro * oneEuroIs["USD"]).toFixed(2);
}

function fromDollarToYen(dollars) {
    return ((dollars / oneEuroIs["USD"]) * oneEuroIs["JPY"]).toFixed(2);
}

function fromYenToPound(yens) {
    return ((yens / oneEuroIs["JPY"]) * oneEuroIs["GBP"]).toFixed(2);
}

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
