let nome;

const nomeNulo = null;

const aluno = {
    id:12345,
    nome: "Leonardo",
    ativo: true,
    pós: null,
    dataNascimento: new Date("2000-01-01"),
    endereco: {
        rua: "Rua 1",
        numero: 123,
        bairro: "Centro",
        cidade: "Cascavel",

    }
    
}

function soma(n1, n2) {

    return n1 + n2;
}

console.log(soma(10, 20,))
// () => o que você quer executar
    () => console.log(2 + 6)

const valor1 = "2";
const valor2 = 2;

// dois iguial == checa valor
if (valor1 == valor2) {
    console.log("É igual!!")
}

// três iguais === checa valor e tipo
if (valor1 === valor2) {
    console.log("É igual!!")
}

const frutas = ["banana", "maça", "laranja", "uva"]

frutas.forEach(frutas => console.log(frutas))




