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

  const multa = calcularMulta(valorOriginal, taxaMulta);
  const juros = calcularJuros(valorOriginal, periodoMeses, taxaJurosMensal);
  const valorFinal = calcularValorFinal(valorOriginal, multa, juros);
  res.json({
    valorOriginal,
    multa,
    juros,
    valorFinal,
  });
};
