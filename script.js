let musicas = [
    {titulo:'Just Another Day', artista: 'Jon Secada', src:'musicas/Jon Secada - Just Another Day.mp3', img:'capas/jon-secada.jpg'}, {titulo:'Dont Look Any Futher', artista: 'M. People', src:'musicas/M People - Dont Look Any Futher.mp3', img:'capas/mpeople.jpg'}, {titulo:'Melo da Lagartixa', artista: 'Ndee Naldinho', src:'musicas/Ndee Naldinho - Melo da Lagartixa.mp3', img:'capas/ndeenaldinho.jpg'}, {titulo:'Nomes de Meninas (RMX)', artista: 'Pepeu', src:'musicas/Pepeu - Nomes de Meninas.mp3', img:'capas/pepeu.jpg'}, {titulo:'Spring Love', artista: 'Stevie B', src:'musicas/Stevie B - Spring Love.mp3', img:'capas/stevieb.jpg'}, {titulo:'Rockin Over The Beat', artista: 'Technotronic', src:'musicas/Technotronic - Rockin Over The Beat.mp3', img:'capas/technotronic.jpg'}
]

let musica = document.querySelector('audio');
let duracaoMusica = document.querySelector('.fim');
let capa = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

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
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}