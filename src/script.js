function calcular() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let resultado = peso / (altura * altura);
    document.getElementById("restitulo").innerHTML = "Resultado:";
    document.getElementById("imc").innerHTML = "Seu IMC e: " + resultado.toFixed(2);
    
    if(resultado < 18.5){
        document.getElementById("class").innerHTML = "Classificacao: Baixo Peso"
    }else if(resultado <= 24.9){
        document.getElementById("class").innerHTML = "Classificacao: Peso Normal"
    }else if(resultado <= 29.9){
        document.getElementById("class").innerHTML = "Classificacao: Excesso de Peso"
    }else if(resultado <= 34.9){
        document.getElementById("class").innerHTML = "Classificacao: Obesidade Grau 1"
    }else if(resultado <= 39.9){
        document.getElementById("class").innerHTML = "Classificacao: Obesidade Grau 2"
    }else{
        document.getElementById("class").innerHTML = "Classificacao: Obesidade Morbida"
    }
}