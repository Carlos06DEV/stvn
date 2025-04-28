function saveFicha() {
    /*let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;*/
    let btn = document.getElementById('cta');

    /*if (!email||!nome) {
        alert("O email e nome são obrigatórios!");
        return;
    }

    fetch('http://127.0.0.1:5000/save', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            }),
            mode: 'cors'
        })
    */
    btn.disabled = true;
    btn.innerHTML = "Carregando...";
    window.location.href = "https://www.youtube.com/";
}