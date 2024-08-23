function criptografar() {
    let texto = document.getElementById("input-text").value;
    console.log(texto)
    
    if (!/^[a-z\s]*$/.test(texto)) {
        alert("Escreva apenas letras minúsculas e sem acentos.");
        return;
    }

    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    mostrarResultado(textoCriptografado);
    mostrarBotaoCopiar();
    aumentarTexto();
}

function descriptografar() {
    let texto = document.getElementById("input-text").value;

    if (!/^[a-z\s]*$/.test(texto)) {
        alert("Escreva apenas letras minúsculas e sem acentos.");
        return;
    }

    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    mostrarResultado(textoDescriptografado);
    mostrarBotaoCopiar();
    aumentarTexto();
}

function mostrarResultado(texto) {
    // Ocultar a imagem e o título padrão
    document.getElementById("output-image").style.display = "none";
    document.getElementById("output-title").style.display = "none";
    
    // Atualizar o texto de saída
    let outputText = document.getElementById("output-text");
    outputText.textContent = texto;
}

function mostrarBotaoCopiar() {
    var botaoCopiar = document.querySelector('.copiar-btn');
    botaoCopiar.style.display = 'block';
}

function aumentarTexto() {
    var outputText = document.getElementById("output-text");
    outputText.style.fontSize = "24px";
}

function copiarTexto() {
    const texto = document.getElementById('output-text').innerText;
 
    const input = document.createElement('input');
    input.value = texto;
    document.body.appendChild(input);
 
    input.select();
    document.execCommand('copy');
   
    document.body.removeChild(input);
 
}
 