// run `node index.js` in the terminal
//Faça uma função que irá receber como parâmetro dois numeros. O primeiro parâmetro irá representar o valor de um boleto e o segundo parâmetro irá representar a quantidade de dias que essa conta está atrasada. Para cada dia atrasado deve ser cobrado uma taxa de 0,033%. A função deve retornar o novo valor do boleto. Considere o cálculo de juros simples.

function calcularBoleto(valorBoleto, diasAtrasado) {
  const taxa = 0.033;
  const valorTaxa = valorBoleto * taxa;
  const valorMulta = valorTaxa * diasAtrasado;
  const valorAtualizado = valorBoleto + valorMulta;
  return console.log(valorAtualizado);
}
calcularBoleto(1000, 1);
