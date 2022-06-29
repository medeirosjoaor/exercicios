const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];
const cars = [palio, shelbyCobra, chiron];

const toObject = (model, brand, year) => ({ model, brand, year });

cars.forEach((car) => console.log(toObject(...car)));
