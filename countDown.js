const btnIniciar = document.getElementById("btnIniciar")
const inputTempo = document.getElementById("inputTempo")
const timer = document.getElementById("timer")
const btnResetar = document.getElementById("btnResetar")

const home = document.getElementById("div__home")
const countDown = document.getElementById("div__countDown")
const sucess = document.getElementById("div__sucess")
const body = document.getElementById("bodyJS");

function resetaTelas(){
    home.style.display = "none";
    countDown.style.display = "none";
    sucess.style.display = "none";
}
function startHome(){
    resetaTelas();
    home.style.display = "flex";
    body.style.backgroundColor = "#ffffff"
    inputTempo.value = "1";
}
function verificaValor(){
    const valorTempo = inputTempo.value;
    if(valorTempo < 1){
        alert("O valor do tempo deve ser um número inteiro positivo!");
    }
    else{
        startCountDown(valorTempo);
    }
}
function startCountDown(time){
    resetaTelas();
    countDown.style.display = "flex";
    
    let intervalo;
    let tempoRestante = time;
    let x;
    timer.innerText = `Faltam ${tempoRestante} segundos`;

    intervalo = setInterval(() => {
        tempoRestante --;
        if(tempoRestante === 0){
            clearInterval(intervalo);
            startSucess();
        }
        timer.innerText = `Faltam ${tempoRestante} segundos`;
        x = Math.ceil(tempoRestante / time * 255)   
        body.style.backgroundColor = `rgb(${x}, 255, ${x})`
        console.log(tempoRestante);
    }, 1000); 

}
function startSucess(){
    resetaTelas();
    sucess.style.display = "flex";

}