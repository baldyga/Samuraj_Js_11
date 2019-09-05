const input = document.getElementById('pass');
const div = document.querySelector('.message');
const passwords = ["user", "wiosna"];
const messages = ["Coraz najlepiej!", "Piękna pora roku!"];

// funkcja strzałkowa dziedziczy (nie tworzy) this, jeśli nie znajdzie w obiekcie globalnym przekazuje undifine
input.addEventListener("keyup", (e) => {
    // console.log(e.target.value);
    div.textContent = "";
    const text = e.target.value;
    passwords.forEach((password, index)=> {
        if (password === text) {
            div.textContent = messages[index];
            e.target.value = "";
        }
    });
})

input.addEventListener("focus", (e) => {
    e.target.classList.add('active')
});

input.addEventListener("blur", (e) => {
    e.target.classList.remove('active')
});