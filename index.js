function calcularBoleto(valorBoleto, diasAtraso) {
  const taxa = 0.00033;
  const valorTaxa = valorBoleto * taxa;
  const valorMulta = valorTaxa * diasAtraso;
  const valorAtualizado = valorBoleto + valorMulta;
  return valorAtualizado;
}
console.log(calcularBoleto(1000, 1));
