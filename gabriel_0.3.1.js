const filmes = [
  {
    nome: 'O Senhor do Aneis: A Sociedade do Anel',
    lancamento: 2002,
    diretores: ['Peter Jackson'],
    generos: ['Fantasia', 'Aventura'],
  },
  {
    nome: 'Harry Potter e a Pedra Filosofal',
    lancamento: 2001,
    diretores: ['Chris Columbus'],
    generos: ['Fantasia'],
  },
  {
    nome: 'Matrix',
    lancamento: 1999,
    diretores: ['Lana Wachowski', 'Lilly Wachowski'],
    generos: ['Ação', 'Ficção Cientifica'],
  },
];

function filmes2(filme, index, array) {
  return { nome: filme.nome, lancamento: filme.lancamento };
}
const filmesSorted = filmes.map(filmes2);

console.log(filmesSorted);

function filmeId(filme, index, array) {
  return {
    id: index,
    nome: filme.nome,
    lancamento: filme.lancamento,
    generos: filme.generos,
  };
}
const filmesComId = filmes.map(filmeId);
console.log(filmesComId);
