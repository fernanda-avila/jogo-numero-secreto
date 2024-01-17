alert('Boas vindas ao jogo do número secreto!');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
// math random gera numeros aleatorios de 0 a 1, x10 pra que tenha uma casa antes da virgula e parseint para pegar so a parte inteira do numero randomizado.
console.log(numeroSecreto);
let chute;
// Se o chute for igual ao numero secreto, o comando é executado
let tentativas = 1;
// while significa enquanto e indica que o comando vai se repetir até que o resultado correto seja alcançado

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // não é igual no js "!="
    if (chute == numeroSecreto) {
        break;
        // para PARA para tudo mesmo, pra que o while nao funcione se você acertar de primeira.
        alert(`Isso aí! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
        // Usar crase!!
        // a variavel vai dentro de ${}

    }
    // se não for igual...o else diz, SE NÃO
    else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        // tentativas = tentativas + 1; ou
        tentativas++;
    }


}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
// simplificado. operador ternário!!



// Usar crase quando for por variável !!
// a variavel vai dentro de ${}
