function calcularBoleto(valorBoleto, diasAtraso) {
  const taxa = 0.033;
  const valorTaxa = (valorBoleto * taxa) / 100;
  const valorMulta = valorTaxa * diasAtraso;
  const valorAtualizado = valorBoleto + valorMulta;
  return valorAtualizado;
}
console.log(calcularBoleto(1000, 1));
