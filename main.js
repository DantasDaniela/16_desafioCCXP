/*function addRedBorder(id)
{
    element = document.querySelector("#" + id);
    element.style.border = "5px solid red";
}

addRedBorder("quinta");*/

//TROQUEI MINHA ESTRUTURA DE FUNÇÃO COMUN POR ARROW FUNCTION

const ingressos = [];

addRedBorder = (id) =>
{
    element = document.querySelector(`#${id})`);
    element.style.border = "5px solid red";
}

highLightCard = (selector) =>
{
    var element = document.querySelector(selector);
    element.classList.toggle("card-highLight");
}

checkKeyboardCode = () =>
{
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;
        //Alert the key name and key code on keydown
        alert(`Tecla Pressionada ${name} \r\n key code: ${code}`);
    }, false);
}

addKeyboardEventListeners = ()  =>
{
    document.addEventListener('keydown', 
    (event) => {

        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");

        var code = event.code;
        if(code == 'Numpad1') {
            ingresso1.classList.toggle("card-highLight");
            ingresso2.classList.remove("card-highLight");
            ingresso3.classList.remove("card-highLight");
            ingresso4.classList.remove("card-highLight");
        }

        if (code == 'Numpad2') {
            ingresso1.classList.remove("card-highLight");
            ingresso2.classList.toggle("card-highLight");
            ingresso3.classList.remove("card-highLight");
            ingresso4.classList.remove("card-highLight");
        }

        if (code == 'Numpad3') {
            ingresso1.classList.remove("card-highLight");
            ingresso2.classList.remove("card-highLight");
            ingresso3.classList.toggle("card-highLight");
            ingresso4.classList.remove("card-highLight");
         }

        if (code == 'Numpad4') {
            ingresso1.classList.remove("card-highLight");
            ingresso2.classList.remove("card-highLight");
            ingresso3.classList.remove("card-highLight");
            ingresso4.classList.toggle("card-highLight");
    }

    }, 
    false
    );

}

selectCard = (selector) =>
{
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if (ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector)
}

showSelectedCards = () =>
{
    if (ingressos.length > 0) alert("Ingressos Selecionados:" + ingressos);
}
    
/*checkKeyboardCode()*/
addKeyboardEventListeners();

