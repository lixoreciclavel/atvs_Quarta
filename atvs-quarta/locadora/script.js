const duracaoFilme = document.getElementById('duracaoM');
const converterBtn = document.getElementById("converter");

converterBtn.addEventListener("click", () => {
    let minutos = Number(duracaoFilme.value);
    let horas = Math.floor(minutos / 60);
    minutos = Math.floor(minutos % 60)

    document.getElementById("info").innerHTML = `horas: ${horas} : minutos: ${minutos}`; 
});



