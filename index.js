const nome = "Joao Victor Mendes";
const idade = 16;
const curso = "DEV";
const matriculado = "Sim!";

let nota1 = 10;
let nota2 = 10;
let nota3 = 10;
let faltas = 0;

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Curso:", curso);
console.log("Matriculado:", matriculado);

let media = (nota1 + nota2 + nota3) / 3;

console.log("Media:", media);

let situacao;

if (media >= 7) {
    situacao = "Aprovado";
} else if (media >= 5) {
    situacao = "Recuperacao";
} else {
    situacao = "Reprovado";
}

console.log("Situacao:", situacao);

const totalAulas = 40;
let aulasFrequentadas = totalAulas - faltas;
let frequencia = (aulasFrequentadas / totalAulas) * 100;

console.log("Frequencia:", frequencia + "%");

if (frequencia >= 75) {
    console.log("Frequencia suficiente");
} else {
    console.log("Frequencia insuficiente");
}

if (media >= 7 && frequencia >= 75 && matriculado === "Sim!") {
    console.log("Aprovado nos criterios finais");
} else {
    console.log("Nao aprovado nos criterios finais");
}

