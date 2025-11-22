function obterNomesAtletas(atletas) {
  let nomesAtletas = atletas.map(function(atleta) {
    return `Atleta: ${atleta.nome} `
  })
  return nomesAtletas
}

// dados utilizados para calcular a média

let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
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

console.log(obterNomesAtletas(atletas));

