function calculaMedia(atletas) {
  atletas.forEach(atleta => {
    // Copia e ordena as notas (ordem padrão do sort)
    let notasOrdenadas = atleta.notas.slice().sort();

    // Remove a maior e a menor nota
    let notasValidas = notasOrdenadas.slice(1, notasOrdenadas.length - 1);

    // Calcula a média
    let soma = notasValidas.reduce((acc, nota) => acc + Number(nota), 0);
    let media = soma / notasValidas.length;

    // Exibe o resultado
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${notasOrdenadas.join(",")}`);
    console.log(`Média Válida: ${media}`);
    console.log("");
  });
}


