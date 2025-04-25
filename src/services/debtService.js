export function calcularMulta(valorOriginal, taxaMulta) {
  return valorOriginal * (taxaMulta / 100);
}

export function calcularJuros(valorBase, periodoMeses, taxaJurosMensal) {
  let valorJurosAcumulados = valorBase;
  let juros = 1 + taxaJurosMensal / 100;
  for (let mes = 0; mes < periosdoMeses; mes++) {
    valorJurosAcumulados *= juros;
  }
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
