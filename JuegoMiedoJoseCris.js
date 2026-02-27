let puertaCorrecta = Math.floor(Math.random() * 3) + 1;
let intentosRestantes=3;
let sonido = new Audio("audio/u_thxw0i7h4n-terror-213743.mp3");
sonido.loop = true;
let sonidoFinal = new Audio("audio/uefa-champions-league-leagu.mp3"); 
sonidoFinal.loop = true;
let sonidoFinal2 = new Audio("audio/voicebosch-maniacal-laughter-177313.mp3");
sonidoFinal2.loop = true;
function musicajuego(){
    sonido.play();
}

function cambiarMusicaFinal() {
    sonido.pause();
    sonido.currentTime = 0;
    sonidoFinal.play();
}

function cambiarMusicaFinal2(){
    sonido.pause();
    sonido.currentTime = 0;
    sonidoFinal2.play();
}


function segundo() {
    musicajuego();
    let principal = document.getElementById("Principal");
    let texto = document.getElementById("inicio");
    principal.style.backgroundImage = "url(img/SegundaEscena.jpg)";
    principal.style.backgroundSize = "contain";
    principal.style.backgroundAttachment = "scroll";
    texto.innerHTML = "El balon sale volando en frente de una casa";
    let zonaClic = document.getElementById("segunda");
    zonaClic.style.display = "none";
    document.getElementById("segunda").style.display = "none"; 
    document.getElementById("tercera").style.display = "block";

}

function tercero() {
    document.getElementById("tercera").style.display = "none";
    let principal = document.getElementById("Principal");
    let texto = document.getElementById("inicio");


    let zonaClic = document.getElementById("tercera");

    let respuesta = 452;
    alert("Primer numero: numero de patas que tiene un gato:")
    alert("¿Cuantos dedos tiene en una pata delantera?:")
    alert("¿Que numero viene después del 1?:")
    respuesta = prompt("Tu respuesta es: ")
    if (respuesta != 452) {
        alert("Intentalo otra vez")
        document.getElementById("tercera").style.display = "block";
    } else {
        principal.style.backgroundImage = "url(img/TerceraEscena.jpg)";
        principal.style.backgroundSize = "contain";
        principal.style.backgroundAttachment = "scroll";
        texto.innerHTML = "Toca el balon para cogerlo y poder irte";
        zonaClic.style.display = "none";
        document.getElementById("cuarta").style.display= "none";
    }
}

function cuarta() {
    document.getElementById("cuarta").style.display= "block";
    let principal = document.getElementById("Principal");
    let texto = document.getElementById("inicio");

    texto.style.display = "none";

    let miVideo = document.createElement("video");
    miVideo.src = "video/VideoModificado.mp4";
    miVideo.autoplay = true;
    miVideo.style.width = "100%";
    miVideo.style.height = "100%";
    miVideo.style.objectFit = "cover";

    principal.appendChild(miVideo);

    miVideo.addEventListener('ended', function () {
        miVideo.remove();
        quinto();
    });
    document.getElementById("cuarta").style.display = "none"; 
    document.getElementById("quinta").style.display = "block";
}





function quinto() {
    document.getElementById("quinta").style.display = "none";
    let principal = document.getElementById("Principal");
    let texto = document.getElementById("inicio");
    principal.style.backgroundImage = "url(img/QuintaEscena.jpg)";
    texto.innerHTML = "Una linterna no vendría mal para iluminar";
    texto.style.display = "block";
    document.getElementById("quinta").style.display = "none";
    document.getElementById("sexta").style.display = "block";

}


function sexto() {
    document.getElementById("sexta").style.display = "none";
    let principal = document.getElementById("Principal");
    let texto = document.getElementById("inicio");
    alert("Soy más rápida que el viento...");
    alert("Llego cada mañana...");
    alert("Puedo atravesar el cristal...");
    alert("Soy el enemigo de la oscuridad...");
    let respuesta = prompt("Tu respuesta es:");
    if (respuesta && respuesta.toLowerCase().trim() === "luz") {
        principal.style.backgroundImage = "url(img/SextaEscena.jpg)";
        texto.innerHTML = "Esa puerta nos puede llevar a la salida";
        document.getElementById("sexta").style.display = "none";
        document.getElementById("septima").style.display = "block";
    } else {
        alert("Inténtalo otra vez");
        document.getElementById("sexta").style.display = "block";
        return;
    }
}

function septima() {
    document.getElementById("septima").style.display = "none";
    let principal = document.getElementById("Principal");
    let texto = document.getElementById("inicio");
    texto.style.display = "none";
    let miVideo = document.createElement("video");
    miVideo.src = "video/VideoSotanoModificado.mp4";
    miVideo.autoplay = true;
    miVideo.style.width = "100%";
    miVideo.style.height = "100%";
    miVideo.style.objectFit = "cover";
    principal.appendChild(miVideo);
    miVideo.addEventListener('ended', function () {
        miVideo.remove();
        octavo();
    });
}

function octavo() {
    let principal = document.getElementById("Principal");
    let texto = document.getElementById("inicio");
    principal.style.backgroundImage = "url(img/OctavaImagen.jpg)";
    texto.style.display = "block";
    texto.innerHTML = "Elige una puerta...";
    document.getElementById("puerta1").style.display = "block";
    document.getElementById("puerta2").style.display = "block";
    document.getElementById("puerta3").style.display = "block";
}


function noveno(numeroPuerta) {
    let puertaCorrecta = 3;
    if (numeroPuerta === puertaCorrecta) {
        decimo();
    } else {
        susto();
    }
}


function susto() {
    let principal = document.getElementById("Principal");
    principal.style.backgroundImage = "url(img/susto.jpg)";
    setTimeout(() => {
        principal.style.backgroundImage = "url(img/OctavaImagen.jpg)";
    }, 1500);
}

function decimo() {
    let principal = document.getElementById("Principal");
    let texto = document.getElementById("inicio");
    principal.style.backgroundImage = "url(img/NovenaEscena.jpg)";
    principal.style.backgroundSize = "contain";
    principal.style.backgroundAttachment = "scroll";;
    texto.style.display = "block";
    texto.innerHTML = "Hay está la puerta para salir";
    document.getElementById("puerta1").style.display="none";
    document.getElementById("puerta2").style.display="none";
    document.getElementById("puerta3").style.display="none";
    if(document.getElementById("decimo")) {
        document.getElementById("decimo").style.display = "none";
    }
    let acertijo = document.getElementById("final");
    zonaClic = false;
    document.getElementById("final").style.display = "block";
}

function final() {
    document.getElementById("final").style.display = "none"; 
    let principal = document.getElementById("Principal");    
    let texto = document.getElementById("inicio");
    alert("Blanca por dentro, verde por fuera");
    alert("Si quieres que te lo diga, espera");
    let respuesta=prompt("Tu respuesta: ");
    if (respuesta === "pera") {
        final1();
        return;
    }
    intentosRestantes = restaIntento(intentosRestantes);

    if (intentosRestantes <= 0) {
        final2();
    } else {
        alert("Inténtalo otra vez... Intentos restantes: " + intentosRestantes);
        decimo();
    }
}


function final1() {
    document.getElementById("final1").style.display = "none";
    cambiarMusicaFinal();
    let principal= document.getElementById("Principal");
    let texto = document.getElementById("inicio");
    principal.style.backgroundImage = "url(img/UltimaEscena.jpg)"
    texto.style.display = "block";
    texto.innerHTML = "FUTBO FUTBO FUTBO";
}

function final2() {
    document.getElementById("final2").style.display = "none";
    cambiarMusicaFinal2();
    let principal= document.getElementById("Principal");
    let texto = document.getElementById("inicio");
    principal.style.backgroundImage = "url(img/FinalAlternativo.jpg)"
    texto.style.display = "block";
    texto.innerHTML = "¿Salir de aquí? Ja, ja, ja, ja, ¿tú? Ja, ja, ja, ja";
}

function restaIntento(intentosRestantes) {
    intentosRestantes--;
    return intentosRestantes;
}

