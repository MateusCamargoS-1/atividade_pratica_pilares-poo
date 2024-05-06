// Dado o seguinte diagrama:

// Identifique os atributos e comportamentos que são comuns entre os
// 3 animais e encapsule - os na superclasse Animal.Crie pelo menos 1
// comportamento diferente para cada animal.

abstract class Animal {
    protected name: string;
    protected age: number;
    protected sound: string;

    constructor(name: string, age: number, sound: string) {
        this.name = name;
        this.age = age;
        this.sound = sound;
    }

    emitirSom(): void {
        console.log(`${this.name} esta ${this.sound}...`);
    }

    comer(): void {
        console.log('Comendo...');
    }
}

class Cachorro extends Animal {
    constructor(name: string, idade: number){
        super(name, idade, 'Latindo');
    }

    atrasBola(): void {
        console.log(`${this.name} esta correndo atras da bola.`);
    }
}

class Cavalo extends Animal {
    constructor(name: string, idade: number){
        super(name, idade, 'Relinchando...');
    }

    marchando(): void {
        console.log(`${this.name} esta marchando...`);
    }
}

class Gato extends Animal {
    constructor(name: string, idade: number) {
        super(name, idade, 'Miando...');
    }

    entediado(): void {
        console.log(`${this.name} esta entediado.`);
    }
}

const cachorro = new Cachorro("Thor", 3);
const cavalo = new Cavalo("Trovão", 5);
const gato = new Gato("Leão", 2);

cachorro.emitirSom();
cachorro.atrasBola(); 

cavalo.emitirSom();
cavalo.marchando(); 

gato.emitirSom();
gato.entediado(); 