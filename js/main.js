
function clicou(){
    document.getElementById("agradecido").innerHTML = "<b>Obrigado por clica</b>";
    //console.log(document.getElementById("agradecido"));
    //alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://www.youtube.com/")
    //window.location.href = "https://www.youtube.com/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";  
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value); 
}


/*
function soma(n1, n2) {
    return n1 + n2;
}

alert(soma(5, 10));
*/

/*
function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade ?");
console.log(validaIdade(idade));
*/



/*
function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/



/*
var d = new Date();
alert(d.getDay);
alert(d.getHours);
alert(d.getMinutes);
alert(d.getSeconds);
*/

/*
var count;
for(count=0; count <= 5; count++) {
    alert(count);
};
*/


/*
var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count++;
};
*/



/*
var idade = prompt("Qual sua idade ?");
if (idade >= 18) {
    alert("Maior de idade!");
}else{
    alert("Menor de idade!");
};
*/




/*
var frutas = [{nome:"maçã", cor:"vermelho"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/


/*
var fruta = {nome:"maçã", cor:"vermelho"}
console.log(fruta.nome);
alert(fruta.cor);
*/




//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();


//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" / "));





//var nome = "Adriano Lincoln";
//var idade = 37;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo!";
//alert(nome + " tem " + idade + " anos ");//
//alert(idade + idade2);//
//console.log(nome);
//console.log(idade * idade2);
//console.log(frase.replace("Japão", "Brasil"));//
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());//
//alert(frase.replace("Japão", "Brasil"));//