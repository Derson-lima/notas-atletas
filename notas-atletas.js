let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas: [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

calculaMedia(atletas);

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


