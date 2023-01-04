const dias = document.getElementById('dias')
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const lancamento = "04 dec 2023"

function countDown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal /60) % 60;
    const finalsegundos = Math.floor(segTotal) % 60;


    dias.innerHTML = finalDias
    horas.innerHTML = formatoTempo(finalHoras)
    minutos.innerHTML = formatoTempo(finalMinutos)
    segundos.innerHTML = formatoTempo(finalsegundos)
    
}

function formatoTempo( tempo){
    return tempo < 10? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000)

