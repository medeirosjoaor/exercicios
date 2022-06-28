const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = (array) => array
                                .map((element) => element.toLowerCase().match(/a/g).length)
                                .reduce((previous, current) => previous + current);

console.log(containsA(names));
