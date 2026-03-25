// Seleciona o botão de calcular pelo ID e armazena na variável 'calcular'
const calcular = document.getElementById('calcular');

// Cria a função principal que será executada quando o botão for clicado
function imc(){
    // .value pega o texto que o usuário digitou dentro do campo de entrada (input)
 const nome = document.getElementById('nome').value;
 const altura = document.getElementById('altura').value;
 const peso = document.getElementById('peso').value;
 // Aqui pegamos o elemento da div de resultado (sem o .value, pois queremos o elemento todo)
 const resultado = document.getElementById('resultado');

 // O IF verifica se os campos não estão vazios antes de fazer a conta
    // Correção: usamos apenas 'nome' porque o .value já foi pego lá em cima
 if (nome !== '' && altura !== '' && peso !== '' ){

    // Realiza o cálculo matemático: Peso dividido por (Altura vezes Altura)
        // .toFixed(2) serve para arredondar o número para apenas 2 casas decimais
    const valorImc=(peso/(altura*altura)).toFixed(2);

    // Cria uma variável vazia para guardar o texto da classificação
    let classificacao="";

    // Início da estrutura de decisão para definir a frase e a cor
    if (valorImc < 18.5){
        classificacao='Abaixo do peso.';
        resultado.style.color = "#ffc107"; // Amarelo/Laranja
    }else if(valorImc < 25){
        classificacao='Com peso ideal.Parabens!!!';
        resultado.style.color = "#28a745"; // Verde
    }else if(valorImc <30){
        classificacao='levevemente acima do peso';
        resultado.style.color = "#ffc107"; // Amarelo/Laranja
    }else if (valorImc < 35){
        classificacao='Com obesidade grau 1.';
        resultado.style.color = "#dc3545"; // Vermelho
    }else if(valorImc < 40){
        classificacao='Com obesidade gra 2'
        resultado.style.color = "#dc3545"; // Vermelho
    }else{
        classificacao='com ocbesidade grau 3.Cuidado!!';
        resultado.style.color = "#dc3545"; // Vermelho
    }

    // .textContent escreve a frase final dentro da div de resultado no HTML
        // As crases `` permitem usar variáveis dentro do texto usando ${}
    resultado.textContent=`${nome} seu IMC é ${valorImc} e voce está ${classificacao}`;

}else{
    // Se algum campo estiver vazio, cai aqui e avisa o usuário
    resultado.textContent = 'Preencha todos os campos!!!'
    resultado.style.color = "red"; // Garante que o aviso de erro apareça em preto
    }
    
 }



    

// O 'Ouvinte de Eventos' fica vigiando o botão. Quando detectar um 'click', chama a função imc
calcular.addEventListener('click', imc);  



