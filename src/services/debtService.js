export function calcularMulta(valorOriginal, taxaMulta) {
  return valorOriginal * (taxaMulta / 100);
}

export function calcularJuros(valorBase, periodoMeses, taxaJurosMensal) {
  let valorJurosAcumulados =
    valorBase * (1 + taxaJurosMensal / 100) ** periodoMeses;
  return valorJurosAcumulados - valorBase;
}

export function calcularValorFinal(
  valorOriginal,
  valorMultaAplicada,
  valorTotalJuros,
) {
  return (
    Number(valorOriginal) + Number(valorMultaAplicada) + Number(valorTotalJuros)
  );
}
