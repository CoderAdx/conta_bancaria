import leia = require("readline-sync");
import  {colors}  from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {
    let opcao: number;

    while(true) {
            

        console.log(colors.fg.red,
                    "=============================================== ");
        console.log("            🦀  SIRIGUEIJO CASH  💰            ");
        console.log("===============================================");
        console.log(" ");
        console.log("  1 - Criar Conta");
        console.log("  2 - Listar todas as Contas");
        console.log("  3 - Buscar Conta por Número");
        console.log("  4 - Atualizar Dados da Conta");
        console.log("  5 - Apagar Conta");
        console.log("  6 - Sacar");
        console.log("  7 - Depositar");
        console.log("  8 - Transferir valores entre Contas");
        console.log("  9 - Sair");
        console.log(" ");
        console.log("===============================================",
        colors.reset );

        console.log("👉  Entre com a opção desejada:");
        opcao = leia.questionInt("");

        if(opcao == 9){
            console.log(colors.fg.yellowstrong,
            'Seu dinheiro em boas garras! 🦀');
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                "\n🦀 Criando nova conta...", colors.reset);
                break;

            case 2:
                console.log(colors.fg.whitestrong,
                    "\n📋 Listando todas as contas...", colors.reset);
                break;

            case 3:
                console.log(colors.fg.whitestrong,
                    "\n🔍 Buscando conta por número...", colors.reset);
                break;

            case 4:
                console.log(colors.fg.whitestrong,
                    "\n✏️ Atualizando dados da conta...", colors.reset);
                break;

            case 5:
                console.log(colors.fg.whitestrong,
                    "\n🗑 Apagando conta...", colors.reset);
                break;

            case 6:
                console.log(colors.fg.whitestrong,
                    "\n💸 Sacando valor...", colors.reset);
                break;

            case 7:
                console.log(colors.fg.whitestrong,
                    "\n💰 Depositando valor...", colors.reset);
                break;

            case 8:
                console.log(colors.fg.whitestrong,
                    "\n🔄 Transferindo valores entre contas...", colors.reset);
                break;

            case 9:
                console.log(colors.fg.whitestrong,
                    "\n🦀 Saindo do SirigueijoCash... até logo!", colors.reset);
                break;
            
            default:
                console.log(colors.fg.whitestrong,
                    "\n❌ Opção inválida! Tente novamente.", colors.reset);
        }

    }
}

export function sobre(): void{
    console.log("=======================================");
    console.log("        Projeto desenvolvido por:       ");
    console.log("=======================================");
    console.log("👤 Nome: Ádrya Giuly");
    console.log("📧 Email: adryagiulyy@gmail.com");
    console.log("💻 GitHub: https://github.com/CoderAdx");
    console.log("=======================================");
}

function keypress(): void{
    console.log(colors.reset, "");
    console.log("\nPressiocne para continuar...");
    leia.prompt();
}

main();