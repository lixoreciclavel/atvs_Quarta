const precoVeiculo = document.getElementById('precoV');
const converterBtn = document.getElementById('promocao');

converterBtn.addEventListener("click", () =>
{
    let reais = Number(precoVeiculo.value);
    let valorEntrada = Math.floor(reais * 0.5);
    parcela = Math.floor(reais / 12);
    
    document.getElementById("info").innerHTML = `Valor de entrada: ${valorEntrada} : parcelas em 12x : ${parcela}`
})