const nomeTitular = "Leonardo Almeida Silva";
const agencia = "00001";
const numeroConta = "60006533"
let saldo = 100;


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function exibirMenu() {
rl.question(`
    === MENU ===
    1 - Consultat dados da conta
    2 - Consultar saldo
    3 - Realizar débito
    4 - Realizar crédito
    0 - Sair   

    Escolha uma opção: `, (opcao) => {
        
        switch (opcao) {
            case "1": 
                console.log("---DADOS DA CONTA---");

                console.log(`Nome: ${nomeTitular}`);
                console.log(`Agência: ${agencia}`);
                console.log(`Nº da Conta: ${numeroConta}`);
                exibirMenu();
            break;
            
            case "2":
                console.log("---SALDO ATUAL DA SUA CONTA---");

                console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`);
                exibirMenu();
            break;
            case "3":
                console.log("---FAÇA UM SAQUE---");
                
                rl.question("Digite o valor para debitar da conta: ", (debito) => {
                    const valor = Number(debito);

                    if (valor > saldo) {
                        console.log("Saldo insuficiente!!");
                    } else {
                        saldo = saldo - valor;
                        console.log(`Débito realizado com sucesso! Novo saldo: R$ ${saldo.toFixed(2)} `); 
                    }

                    exibirMenu(); 
                })
            break;
            case "4":
                console.log("---FAÇA UM DEPÓSITO---");
                
                rl.question("Digite o valor para depositar na conta: ", (credito) => {
                    const valor = Number(credito);

                    saldo = saldo + valor;
                    console.log(`Crédito realizado com sucesso! 
                                Novo saldo: R$ ${saldo.toFixed(2)}`);
                    exibirMenu(); 
                })
            break;
            case "0":
                console.log("Saindo... Até logo!");
                rl.close();
            break;
        } 
});

}
exibirMenu();

