var nome = document.getElementById("nome");
var resposta = document.getElementById("resposta");
var nascimento = document.getElementById("nascimento");
var dataDigitada;
var escrita = "";
var i = 0;
var minhasImagens = ["coruja40","coruja60","coruja80","coruja100"];
var index = 3;
var fps = 0;



function enviar(){
    dataDigitada = nascimento.value;
    dataDigitada = dataDigitada.split("-");
    let signo = "";

    //janeiro
    if(dataDigitada[1] === "01"){
        if(Number(dataDigitada[2]) <= 20){
            signo = "capricórnio";
        }else{
            signo = "aquário"; 
        }
        
    }
    //fevereiro
    if(dataDigitada[1] === "02"){
        if(Number(dataDigitada[2]) <= 19){
            signo = "aquário";
        }else{
            signo = "peixes";
        }
    }
    //março
    if(dataDigitada[1] === "03"){
        if(Number(dataDigitada[2]) <= 20){
            signo = "peixes";

        }else{
            signo = "Áries";
        }
    }
    //abril
    if(dataDigitada[1] === "04"){
        if(Number(dataDigitada[2]) <= 19){
            signo = "Áries";
        }else{
            signo = "Touro"
        }
    }
    //maio
    if(dataDigitada[1] === "05"){
        if(Number(dataDigitada[2]) <= 20){
            signo = "Touro";
        }else{
            signo = "Gêmeos";
        }
    }
    //junho
    if(dataDigitada[1] === "06"){
        if(Number(dataDigitada[2]) <= 20){
            signo = "Gêmeos";
        }else{
            signo = "Câncer";
        }
    }
    //julho
    if(dataDigitada[1] === "07"){
        if(Number(dataDigitada[2]) <= 21){
            signo = "Câncer";
        }else{
            signo = "Leão";
        }        
    }
    //agosto
    if(dataDigitada[1] === "08"){
        if(Number(dataDigitada[2]) <= 22){
            signo = "Leão";
        }else{
            signo = "Virgem";
        }
    }
    //setembro
    if(dataDigitada[1] === "09"){
        if(Number(dataDigitada[2]) <= 22){
            signo = "Virgem";
        }else{
            signo = "Libra";
        }
    }
    //outubro
    if(dataDigitada[1] === "10"){
        if(Number(dataDigitada[2]) <= 22){
            signo = "Libra";
        }else{
            signo = "Escorpião";
        }
    }
    //novembro
    if(dataDigitada[1] === "11"){
        if(Number(dataDigitada[2]) <= 21){
            signo = "Escorpião";
        }else{
            signo = "Sagitário";
        }
    }
    //Dezembro
    if(dataDigitada[1] === "12"){
        if(Number(dataDigitada[2]) <= 21){
            signo = "Sagitário";
        }else{
            signo = "Carpicórnio";
        }
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////    

    resp(nome.value, signo);
}


function resp(nome, signo){
    

    resposta.innerHTML = "Olá "+nome+", vejo que você é do signo de "+signo+"!";

    animacao(0);
    
       
//aqui tem que entrar o um pause pra coruja não entrar super rápido e a pessoa não ler a msg acima
}
function animacao(passo){
    if(index == 3){
        passo = -1;
    }
    if(index == 0){
        passo = +1;
    }
    console.log(index);
    index = index + passo;
    fps++;
    if(fps >= 100){
        return false;
    }
    setTimeout(setCoruja, 200, minhasImagens[index], passo);
}

function setCoruja(nomeImagem, passo){
    //aqui entra a animação da coruja enquanto ela fala
    removeCoruja();
    var img = document.createElement("IMG");
    img.src = "./imagens/"+nomeImagem+".png";
    img.setAttribute("height","500px");
    img.setAttribute("width", "500px");
    img.setAttribute("text-align", "center");
    document.getElementById('imagem').appendChild(img);

    animacao(passo);

}

function removeCoruja(){
    var coruja = document.getElementById( 'imagem' );
    if(coruja.childElementCount){
        coruja.removeChild(coruja.children[0]);
    }
}


