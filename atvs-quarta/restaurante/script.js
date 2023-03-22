const precoFinalBtn = document.getElementById('precoFinal');

precoFinalBtn.addEventListener("click", () =>{
    const buffetKg = document.getElementById('buffetKg').value;
    const consumoGm = document.getElementById('consumoCliente').value;

    let valorFinal = (consumoGm / 1000) * buffetKg;

    document.getElementById("info").innerHTML = `Valor a pagar: ${valorFinal}`
})
