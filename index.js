function calcularBoleto(valorBoleto, diasAtrasado) {
  const taxa = 0.033;
  const valorTaxa = valorBoleto * taxa;
  const valorMulta = valorTaxa * diasAtrasado;
  const valorAtualizado = valorBoleto + valorMulta;
  return valorAtualizado;
}
console.log(calcularBoleto(1000, 1));
