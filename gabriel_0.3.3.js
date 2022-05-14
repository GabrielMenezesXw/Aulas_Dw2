const medicos = [
  {
    nome: 'Leticia',
    sobrenome: 'Costa',
    genero: 'feminino',
  },
  {
    nome: 'Adimaldo',
    sobrenome: 'Pinto',
    genero: 'masculino',
  },
  {
    nome: 'Noah',
    sobrenome: 'Lutus',
    genero: 'nao-binario',
  },
];

function medicoGenerate(medico, index, array) {
  if (medico.genero === 'masculino') {
    return 'Dr. ' + medico.nome + ' ' + medico.sobrenome;
  } else if (medico.genero === 'feminino') {
    return 'Dra. ' + medico.nome + ' ' + medico.sobrenome;
  } else return 'Dre. ' + medico.nome + ' ' + medico.sobrenome;
}

const medicoSelect = medicos.map(medicoGenerate);

console.log(medicoSelect);
