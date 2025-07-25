let musicas = [
    {titulo:'Dont Look Any Further', artista: 'M People', src:'musicas/M People - Dont Look Any Further.mp3', img:'capas/mpeople.jpg'}, 
    {titulo:'Enjoy The Silence', artista: 'Depeache Mode', src:'musicas/Depeache Mode - Enjoy The Silence.mp3', img:'capas/depeache-mode.jpg'}, 
    {titulo:'Come Undone', artista: 'Duran Duran', src:'musicas/Duran Duran - Come Undone.mp3', img:'capas/duran-duran.jpg'}, 
    {titulo:'Melo da Lagartixa', artista: 'Ndee Naldinho', src:'musicas/Ndee Naldinho - Melo da Lagartixa.mp3', img:'capas/ndeenaldinho.jpg'}, 
    {titulo:'Nomes de Meninas', artista: 'Pepeu', src:'musicas/Pepeu - Nomes de Meninas.mp3', img:'capas/pepeu.jpg'}, 
    {titulo:'Tô Ouvindo Alguém Me Chamar', artista: 'Racionais MCs', src:'musicas/Racionais Mcs - Tô Ouvindo Alguém Me Chamar.mp3', img:'capas/racionais-mcs.jpg'}, 
    {titulo:'Spring Love', artista: 'Stevie B', src:'musicas/Stevie B - Spring Love.mp3', img:'capas/stevieb.jpg'}, 
    {titulo:'Rockin Over The Beat', artista: 'Technotronic feat. Ya Kid K', src:'musicas/Technotronic - Rockin Over The Beat.mp3', img:'capas/technotronic.jpg'}, 
    {titulo:'Just Another Day', artista: 'Jon Secada', src:'musicas/Jon Secada - Just Another Day.mp3', img:'capas/jon-secada.jpg'},
]

let musica = document.querySelector('audio');
let indexMusica = 0;
let duracaoMusica = document.querySelector('.fim');
let capa = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));


//EVENTOS
document.querySelector('.bt-play').addEventListener('click', tocaMusic);
document.querySelector('.bt-pause').addEventListener('click', pausaMusic);
musica.addEventListener('timeupdate', atualizaBarra);

musica.addEventListener('ended', () => {
    indexMusica++;
    if(indexMusica >= musicas.length){
        indexMusica = 0; // Reiniciar a playlist
    }
    renderizarMusica(indexMusica);
    musica.play();
});

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if(indexMusica < 0){
        indexMusica = musicas.length - 1;
    }
    renderizarMusica(indexMusica)
});

// Alteração na função do botão "próxima" para reiniciar o tempo e tocar automaticamente
document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if(indexMusica >= musicas.length){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica)
    musica.currentTime = 0; // Reinicia a barra de tempo
    musica.play(); // Inicia automaticamente a música
});


//FUNÇÕES
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        capa.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

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

