let texto;
let resultado = document.getElementById("resultado");
var botaoCopiar = document.querySelector("#copy");

function obterTexto() {
    texto = document.getElementById('name').value;
}

function limparTexto() {
    document.getElementById('name').value = '';
}

function demonstrarResultado() {
    resultado.style.color = "rgb(6, 44, 103)";
    resultado.style.fontSize = "2rem";
    resultado.style.fontFamily = "Inter, sans-serif";
}

function ativarBotao() {
    botaoCopiar.style.display = "block";
}

function copiar() {

        navigator.clipboard.writeText(resultado.innerText);

}

function criptografar() {

    obterTexto();


    if (/[^a-z\s]/.test(texto)) {
        alert("O texto deve conter apenas letras minúsculas sem acentos e sem caracteres especiais.");
        return;
    }

    texto = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    limparTexto();
    demonstrarResultado()
    resultado.innerText = texto;
    ativarBotao();
}

function descriptografar() {

    obterTexto();

    if (/[^a-z\s]/.test(texto)) {
        alert("O texto deve conter apenas letras minúsculas sem acentos e sem caracteres especiais.");
        return;
    }

    texto = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");


    limparTexto();
    demonstrarResultado()
    resultado.innerText = texto;
}