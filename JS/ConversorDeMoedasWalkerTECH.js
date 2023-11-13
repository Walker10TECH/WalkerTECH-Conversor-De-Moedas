function converter() {
  const valorInicial = parseFloat(document.getElementById("valorInicial").value);
  const moedaInicial = document.getElementById("moedaInicial").value;
  const moedaFinal = document.getElementById("moedaFinal").value;

  const taxaConversao = {
    USD_BRL: 5.40,
    USD_EUR: 0.88,
    USD_GBP: 0.75,
    EUR_USD: 1.14,
    EUR_BRL: 6.10,
    EUR_GBP: 0.86,
    GBP_USD: 1.33,
    GBP_EUR: 1.17,
    GBP_BRL: 7.10,
    BRL_USD: 0.19,
    BRL_EUR: 0.16,
    BRL_GBP: 0.14,
    // Exemplos adicionais de taxas de conversão:
    JPY_USD: 0.0092,
    JPY_EUR: 0.0079,
    JPY_GBP: 0.0066,
    JPY_BRL: 0.049,
    AUD_USD: 0.73,
    AUD_EUR: 0.63,
    AUD_GBP: 0.53,
    AUD_BRL: 4.35,
    CAD_USD: 0.79,
    CAD_EUR: 0.68,
    CAD_GBP: 0.57,
    CAD_BRL: 4.75,
    CHF_USD: 1.08,
    CHF_EUR: 0.93,
    CHF_GBP: 0.78,
    CHF_BRL: 6.45,
    CNY_USD: 0.16,
    CNY_EUR: 0.14,
    CNY_GBP: 0.12,
    CNY_BRL: 1.02,
    // Adicione outras taxas de conversão conforme necessário
  };
  

  const chave1 = `${moedaInicial}_${moedaFinal}`;
  const chave2 = `${moedaFinal}_${moedaInicial}`;

  let valorConvertido;

  if (chave1 in taxaConversao) {
    valorConvertido = valorInicial * taxaConversao[chave1];
  } else if (chave2 in taxaConversao) {
    valorConvertido = valorInicial / taxaConversao[chave2];
  } else {
    document.getElementById("valorConvertido").innerText = "Taxa de conversão não encontrada.";
    return;
  }

  if (!isNaN(valorConvertido)) {
    document.getElementById("valorConvertido").innerText = valorConvertido.toLocaleString('pt-BR', { style: 'currency', currency: moedaFinal });
  } else {
    document.getElementById("valorConvertido").innerText = "Erro na conversão. Verifique os valores inseridos.";
  }
}
