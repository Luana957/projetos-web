

function calculadora(){
    var numero1 =parseFloat(document.getElementById('numero1').value);
    var numero2 =parseFloat(document.getElementById('numero2').value);
    var operacao =document.getElementById('operacao').value;
  
   var resultado=document.getElementById('resultado');


if (operacao === "" || numero1 === "" || numero2 === ""){
   alert('Preencha todos os campos')
   return;
  
}
  
var valor=0;

switch (operacao){
    case '+':
        valor= numero1 + numero2;
        resultado.textContent=valor;
        break;
    case '-':
        valor=numero1-numero2;
        resultado.textContent=valor;
        break; 
    case '*':
        valor=numero1*numero2;
        resultado.textContent=valor;
        break;
    case '/':
         valor=numero1/numero2;
         if(numero2 === 0){
            alert('Não existe denominador com zero!');
            break;
        }
         resultado.textContent=valor;
    default:
      alert('Operação invalida!')

}
}
 document.getElementById('calculando').addEventListener('click', calculadora)
