let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = 'Sim';

let secondInfo = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let key in info) {
  if (info[key] === secondInfo[key]) {
    console.log('Ambos recorrentes');
  } else {
    console.log(`${info[key]} e ${secondInfo[key]}`);
  }
}
