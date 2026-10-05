
let nome = localStorage.getItem("nomeUsuario");
if (!nome) {
    nome = prompt("Digite o seu nome:");
    if (nome && nome.trim() !== "") {
        localStorage.setItem("nomeUsuario", nome);
    } else {
        nome = "Visitante";
    }
}

document.getElementById("nome").innerHTML = "Olá, " + nome + "!";

function pedirNovoNome() {
    let nome = prompt("Digite o seu nome:");
    localStorage.setItem("nomeUsuario", nome);
    document.getElementById("nome").innerHTML = "Olá, " + nome + "!";
}