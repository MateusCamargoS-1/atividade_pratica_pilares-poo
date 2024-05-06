// Crie a classe Imovel, que possui um endereço e um preço.
// a. crie uma classe Novo, que herda Imovel e possui um adicional
// no preço. Crie métodos de acesso e impressão deste valor
// adicional.
// b. crie uma classe Velho, que herda Imovel e possui um desconto
// no preço. Crie métodos de acesso e impressão para este
// desconto.

// Para executar utiliza o comando: npm run ex2

abstract class Imovel {
    public endereco: string;
    public preco: number;

    constructor(endereco: string, preco: number) {
        this.endereco = endereco;
        this.preco = preco;
    }
}

class Novo extends Imovel {
    valorAdicional: number;
    constructor(endereco: string, valor: number, valorAdicional: number) {
        super(endereco, valor);
        this.valorAdicional = valorAdicional;
    }

    imprimirValorAdicional():void {
        console.log(`O valor adicional é de: R$${this.valorAdicional}`);
    }

    imprimirInformacao(): void {
        const valorTotal = this.valorAdicional + this.preco;
        console.log(`Endereço: ${this.endereco}`);
        console.log(`Preço: ${valorTotal}`);
    }

}
class Velho extends Imovel {
    valorDesconto: number;
    constructor(endereco: string, valor: number, valorDesconto: number) {
        super(endereco, valor);
        this.valorDesconto = valorDesconto;
    }

    imprimirValorAdicional():void {
        console.log(`O Desconto é de: R$${this.valorDesconto}`);
    }

    imprimirInformacao(): void {
        const valorTotal = this.preco - this.valorDesconto;
        console.log(`Endereço: ${this.endereco}`);
        console.log(`Preço: ${valorTotal}`);
    }
}

const imovel1 = new Novo('Av.Brasil, n38.', 150000, 5000);
imovel1.imprimirValorAdicional();
imovel1.imprimirInformacao();

const imovel2 = new Velho('Av.Brasil, n38.', 150000, 5000);
imovel2.imprimirValorAdicional();
imovel2.imprimirInformacao();