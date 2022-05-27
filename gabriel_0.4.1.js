const alunos = [
  {
    nome: 'Mathias',
    notas: [
      { cadeira: 'DW2', nota: 10 },
      { cadeira: 'BD2', nota: 7 },
    ],
  },
  {
    nome: 'Luiza',
    notas: [
      { cadeira: 'DW2', nota: 8 },
      { cadeira: 'BD2', nota: 8 },
    ],
  },
  {
    nome: 'Pedro',
    notas: [
      { cadeira: 'DW2', nota: 10 },
      { cadeira: 'BD2', nota: 10 },
    ],
  },
];

function gerarMediaGeral(notas) {
  let mediaGeral = 0;
  for (let nota of notas) {
    mediaGeral = mediaGeral + nota.nota;
  }
  return mediaGeral / notas.length;
}

function gerarMediaGeral2(notas) {
  let mediaGeral = 0;
  notas.forEach((nota) => {
    mediaGeral = mediaGeral + nota.nota;
  });
  return mediaGeral / notas.length;
}

const mediaGeralCb = (acumulador, proximoValor) => {
  const { nota } = proximoValor;
  return acumulador + nota;
};

function gerarMediaGeral3(notas) {
  const mediaGeral = notas.reduce(mediaGeralCb, 0);
  return mediaGeral / notas.length;
}

const alunosComMediaGeral = alunos.map((aluno) => {
  const mediaGeral = gerarMediaGeral3(aluno.notas);
  aluno.mediaGeral = mediaGeral;
  return aluno;
});

console.log(alunosComMediaGeral);
