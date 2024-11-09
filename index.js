let numVitorias = 100;
let numDerrotas = 2;
let nivel;

function calcularSaldoVitorias(numVitorias, numDerrotas) {
    return numVitorias - numDerrotas;
}

const saldoVitorias = calcularSaldoVitorias(numVitorias, numDerrotas);

if (numVitorias < 10) {
    nivel = "Ferro";
} else if (numVitorias <= 20) {
    nivel = "Bronze";
} else if (numVitorias <= 50) {
    nivel = "Prata";
} else if (numVitorias <= 80) {
    nivel = "Ouro";
} else if (numVitorias <= 90) {
    nivel = "Diamante";
} else if (numVitorias <= 100) {
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}

console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`);
