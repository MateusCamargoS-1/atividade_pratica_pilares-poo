// Crie uma classe abstrata chamada Ingresso que possui um valor
// em reais e um método imprimeValor()
// a. crie uma classe Normal, que herda Ingresso..
// b. crie uma classe VIP, que herda Ingresso e possui um valor
// adicional. Altere o método imprimeValor para mostrar o valor
// do ingresso somado com o adicional.
// c. crie uma classe Camarote, que herda ingresso e possui um
// valor adicional. Altere o método imprimeValor para mostrar o
// valor do ingresso somado com o adicional.

// Para executar o codigo abaixo utiliza o comando: npm run ex1.

abstract class Ingresso {
    protected valorIngresso: number;
    constructor(valor: number) {
        this.valorIngresso = valor;
    }

    abstract imprimeValor(): void;
}

class Normal extends Ingresso {
    imprimeValor(): void {
        console.log(`Ingresso normal: R$${this.valorIngresso.toFixed(2)}`);
    }
}

class Vip extends Ingresso {
    valorAdicional: number;
    constructor(valor: number, valorAdcional: number) {
        super(valor);
        this.valorAdicional = valorAdcional;
    }   

    imprimeValor(): void {
        const valorTotal = this.valorIngresso + this.valorAdicional;
        console.log(`Ingresso Vip: ingresso Normal: R$${this.valorIngresso.toFixed(2)} + adiconal de:R$${this.valorAdicional.toFixed(2)} = R$${valorTotal.toFixed(2)}.`);
    }
}

class Camarote extends Ingresso {
    valorAdicional: number;
    constructor(valor: number, valorAdcional: number) {
        super(valor);
        this.valorAdicional = valorAdcional;
    }   

    imprimeValor(): void {
        const valorTotal = this.valorIngresso + this.valorAdicional;
        console.log(`Ingresso Camarote: ingresso Norma: R$${this.valorIngresso.toFixed(2)} + adiconal de:R$${this.valorAdicional.toFixed(2)} = R$${valorTotal.toFixed(2)}.`);
    }
}

const ingressoNormal = new Normal(50);
ingressoNormal.imprimeValor();

const ingressoVip = new Vip(50, 80);
ingressoVip.imprimeValor();

const ingressoCamarote = new Camarote(50, 100);
ingressoCamarote.imprimeValor();