
let songindex = 0;
let audioElement = new Audio('1.mpeg');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myprogressbar');
let songItem = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    { songName: "Har kisi ko", filepath: "1.mpeg", coverPath: "1.jpg" },
    { songName: "To brazil", filepath: "2.mpeg", coverPath: "2.jpg" },
    { songName: "Dilbar", filepath: "3.mpeg", coverPath: "3.jpg" },
    { songName: "Kar gayi chull", filepath: "4.mpeg", coverPath: "4.jpg" },
    { songName: "Subha Hone Na De", filepath: "5.mpeg", coverPath: "5.jpg" },
]
// audioElement.play();
songItem.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
})

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else {
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
    }
})
// listen to events
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeallplays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeallplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songindex}.mpeg`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', (e) => {
    if (songindex >= 9) {
        songindex = 0;
    } else {
        songindex += 1;
    }
    audioElement.src = `${songindex}.mpeg`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', (e) => {
    if (songindex <= 0) {
        songindex = 0;
    } 
    else{
        songindex -= 1;
    }
    audioElement.src = `${songindex}.mpeg`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})