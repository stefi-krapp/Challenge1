function encriptar() {
    var textoOriginal = document.getElementById("textoOriginal").value.toLowerCase();
    var textoEncriptado = "";
    for (var i = 0; i < textoOriginal.length; i++) {
        switch (textoOriginal[i]) {
            case 'e':
                textoEncriptado += "enter";
                break;
            case 'i':
                textoEncriptado += "imes";
                break;
            case 'a':
                textoEncriptado += "ai";
                break;
            case 'o':
                textoEncriptado += "ober";
                break;
            case 'u':
                textoEncriptado += "ufat";
                break;
            default:
                textoEncriptado += textoOriginal[i];
                break;
        }
    }
    document.getElementById("resultado").innerText = textoEncriptado;
}

function desencriptar() {
    var textoEncriptado = document.getElementById("textoOriginal").value.toLowerCase();
    var textoDesencriptado = "";
    var i = 0;
    while (i < textoEncriptado.length) {
        switch (textoEncriptado.substr(i, 5)) {
            case 'enter':
                textoDesencriptado += "e";
                i += 5;
                break;
            case 'imes':
                textoDesencriptado += "i";
                i += 4;
                break;
            case 'ai':
                textoDesencriptado += "a";
                i += 2;
                break;
            case 'ober':
                textoDesencriptado += "o";
                i += 4;
                break;
            case 'ufat':
                textoDesencriptado += "u";
                i += 4;
                break;
            default:
                textoDesencriptado += textoEncriptado[i];
                i++;
                break;
        }
    }
    document.getElementById("resultado").innerText = textoDesencriptado;
}

function copiar() {
    var resultado = document.getElementById("resultado").innerText;
    navigator.clipboard.writeText(resultado)
            alert("Texto copiado");
}

