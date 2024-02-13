function encriptar() {
/*  La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"*/
    let original = document.getElementById(`entrada`).value;
    console.log(original.length);
    let tamaño = parseInt(original.length);
    let resultado = [];
    let j = 0;
    for (let i = 0; i < tamaño; i++) {
        if (original[i] == `a`) {
            resultado[j] =  `a`;
            j++;
            resultado[j] =  `i`;
        }
        else if (original[i] == `e`) {
            resultado[j] =  `e`;
            j++;
            resultado[j] =  `n`;
            j++;
            resultado[j] =  `t`;
            j++;
            resultado[j] =  `e`;
            j++;
            resultado[j] =  `r`;
        }
        else if (original[i] == `i`) {
            resultado[j] =  `i`;
            j++;
            resultado[j] =  `m`;
            j++;
            resultado[j] =  `e`;
            j++;
            resultado[j] =  `s`;
        }
        else if (original[i] == `o`) {
            resultado[j] = `o`
            j++;
            resultado[j] =  `b`;
            j++;
            resultado[j] =  `e`;
            j++;
            resultado[j] =  `r`;
        }
        else if (original[i] == `u`) {
            resultado[j] = `u`
            j++;
            resultado[j] =  `f`;
            j++;
            resultado[j] =  `a`;
            j++;
            resultado[j] =  `t`;
        }
        else{
            resultado[j] = original[i];
        }
        j++;
    }
    console.log(resultado);
    console.log(resultado.length);
    let elementoHTML = document.querySelector(`#salida`);
    document.getElementById('lupa').style.display = 'none';
    elementoHTML.innerHTML = resultado.join('')
}

function desencriptar() {
    let original = document.getElementById(`entrada`).value;
    let tamaño = parseInt(original.length);
    let resultado = [];
    let j = 0;
    for (let i = 0; i < tamaño; i++) {
        if(original[i] == `a`){
            resultado[j] = `a`
            i++
        }
        else if(original[i] == `e`) {
            resultado[j] = `e`;
            i += 4;
        }
        else if(original[i] == `i`) {
            resultado[j] = `i`;
            i += 3;
        }
        else if(original[i] == `o`) {
            resultado[j] = `o`;
            i += 3;
        }
        else if(original[i] == `u`) {
            resultado[j] = `u`;
            i += 3;
        }
        else{
            resultado[j] = original[i];
        }
        j++;
    }
    let elementoHTML = document.querySelector(`#salida`);
    document.getElementById('lupa').style.display = 'none';
    elementoHTML.innerHTML = resultado.join('')
}