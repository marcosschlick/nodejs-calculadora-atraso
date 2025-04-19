import {
  calcularMulta,
  calcularJuros,
  calcularValorFinal,
} from "../services/debtService.js";

export const calcularDividaCompleta = (req, res) => {
  const { valorOriginal, taxaMulta, periodoMeses, taxaJurosMensal } = req.body;

  if (
    typeof valorOriginal !== "number" ||
    typeof taxaMulta !== "number" ||
    typeof periodoMeses !== "number" ||
    typeof taxaJurosMensal !== "number"
  ) {
    return res.status(400).json({ erro: "Todos os valores devem ser números" });
  }

  if (
    valorOriginal <= 0 ||
    periodoMeses < 0 ||
    taxaMulta < 0 ||
    taxaJurosMensal < 0
  ) {
    return res.status(400).json({ erro: "Valores não podem ser negativos" });
  }

  const multa = Number(calcularMulta(valorOriginal, taxaMulta)).toFixed(2);
  const juros = Number(
    calcularJuros(valorOriginal, periodoMeses, taxaJurosMensal),
  ).toFixed(2);
  const valorFinal = Number(
    calcularValorFinal(valorOriginal, multa, juros),
  ).toFixed(2);
  res.json({
    valorOriginal,
    multa,
    juros,
    valorFinal,
  });
};
