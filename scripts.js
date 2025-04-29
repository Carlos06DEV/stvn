const openBtns = document.querySelectorAll('.cta');
const closeBtn = document.getElementById('closeModalBtn');
const overlay = document.getElementById('overlay');

openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      overlay.style.display = 'flex';
    });
  });

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
  }
});


function saveFicha() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let cargo = document.getElementById('cargo').value
    let btn = document.getElementById('save');

    if (!cargo) {
        cargo = 'null'
    }

    if (!email||!nome) {
        alert("O email e o nome são obrigatórios!");
        return;
    }

    btn.disabled = true;
    btn.innerHTML = "Carregando...";

    fetch('http://127.0.0.1:5000/save', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            cargo: cargo,
            }),
            mode: 'cors'
        })

    window.location.href = "https://www.youtube.com/";
}
