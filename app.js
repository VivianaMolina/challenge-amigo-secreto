let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);

    inputAmigo.value = "";

    actualizarLista();
}

function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        resultado.innerHTML = "<p style='color: red;'>No hay amigos en la lista para sortear.</p>";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    let amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `<p>El amigo secreto es: <strong>${amigoSorteado}</strong></p>`;
}

function Reiniciar(set){
    
    let divReiniciar = document.getElementById('reiniciar');
    
    if(set =='si'){
        divReiniciar.hidden = false;
    }
    else
    {
        divReiniciar.hidden = true;
    }
}

function limparArray(){
    amigos = [];
    numerosGenerados = [];
    let MiLista = document.getElementById('listaAmigos');
    MiLista.innerHTML = '';
    let sorteado = document.getElementById('resultado');
    sorteado.innerHTML = '';
    Reiniciar('no');
}