# ⚔️ Desafio de Código: Classes de um Jogo

Este repositório contém a resolução para o desafio de lógica de programação **"Escrevendo as Classes de um Jogo"**. O objetivo foi aplicar conceitos fundamentais de programação orientada a objetos (POO) e estruturas de controle.

## 📋 Sobre o Desafio

O desafio consiste em criar uma classe genérica que represente um herói de uma aventura, com propriedades específicas e um método de ataque que varia de acordo com o tipo do herói.

### Requisitos

1. **Classe `Heroi`** com as propriedades:
   - `nome`
   - `idade`
   - `tipo` (ex: guerreiro, mago, monge, ninja)

2. **Método `atacar()`**:
   - Deve exibir a mensagem: `"o {tipo} atacou usando {ataque}"`.
   - A descrição do ataque deve seguir a lógica:

| Tipo      | Ataque              |
|-----------|---------------------|
| Mago      | usou magia          |
| Guerreiro | usou espada         |
| Monge     | usou artes marciais |
| Ninja     | usou shuriken       |

## 🚀 Tecnologias Utilizadas

- **JavaScript** (Lógica e POO)
- **Node.js** (Para execução do código no console)

## 💻 Exemplo de Código

```javascript
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            // ... outros casos
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}
