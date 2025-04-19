document.getElementById("debtForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const getVal = (id) => Number(document.getElementById(id).value);

  try {
    const response = await fetch("http://localhost:3000/divida", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        valorOriginal: getVal("valorOriginal"),
        taxaMulta: getVal("taxaMulta"),
        periodoMeses: getVal("periodoMeses"),
        taxaJurosMensal: getVal("taxaJurosMensal"),
      }),
    });

    const resultado = await response.json();

    const formatoTexto =
      `Valor original: ${resultado.valorOriginal}\n` +
      `Multa: ${resultado.multa}\n` +
      `Juros: ${resultado.juros}\n` +
      `Valor final: ${resultado.valorFinal}`;

    document.getElementById("result").value = formatoTexto;
  } catch (error) {
    document.getElementById("result").value = `Erro: ${error.message}`;
  }
});
