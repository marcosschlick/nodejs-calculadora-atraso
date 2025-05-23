document.getElementById("debtForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const getVal = (id) => Number(document.getElementById(id).value);

  try {
    const response = await fetch("http://localhost:3333/divida", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        valorOriginal: getVal("valorOriginal"),
        taxaMulta: getVal("taxaMulta"),
        periodoMeses: getVal("periodoMeses"),
        taxaJurosMensal: getVal("jurosMensal"),
      }),
    });

    const resultado = await response.json();

    const formatoTexto =
      `Valor original: R$ ${resultado.valorOriginal.toFixed(2)}\n` +
      `Multa: R$ ${resultado.multa.toFixed(2)}\n` +
      `Juros: R$ ${resultado.juros.toFixed(2)}\n` +
      `Valor final: R$ ${resultado.valorFinal.toFixed(2)}`;

    document.getElementById("resultado").value = formatoTexto;
  } catch (error) {
    document.getElementById("resultado").value = `Erro: ${error.message}`;
  }
});
