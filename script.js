let musica = document.querySelector('audio');
let duracaoMusica = document.querySelector('.fim');
let capa = document.querySelector('img');
duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

document.querySelector('.bt-play').addEventListener('click', tocaMusic);
document.querySelector('.bt-pause').addEventListener('click', pausaMusic);
musica.addEventListener('timeupdate', atualizaBarra)

function tocaMusic(){
    musica.play();
    document.querySelector('.bt-pause').style.display = 'block';
    document.querySelector('.bt-play').style.display = 'none';
}

function pausaMusic(){
    musica.pause();
    document.querySelector('.bt-pause').style.display = 'none';
    document.querySelector('.bt-play').style.display = 'block';
}

function atualizaBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = Math.floor(musica.currentTime);
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}