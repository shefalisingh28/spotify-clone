console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/gwtt.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:" girl with the tattoo", filePath: "songs/gwtt.mp3", coverPath: "covers/cover1.jpeg"},
    {songName: "Sure Thing", filePath: "songs/2.mp3", coverPath: "covers/cover2.jpeg"},
    {songName: "Sky Walker", filePath: "songs/3.mp3", coverPath: "covers/cover3.jpeg"},
    {songName: "Damned", filePath: "songs/3.mp3", coverPath: "covers/cover4.jpeg"},
    {songName: "coffee", filePath: "songs/3.mp3", coverPath: "covers/cover5.jpeg"},
    {songName: "Squirrliiii", filePath: "songs/WhatsApp Audio 2026-09-09 at 21.01.41.mp3", coverPath: "covers/cover6.jpeg"},
   
    
]
songItems.forEach((element, i) => {
    if (songs[i]) {
        let img = element.getElementsByTagName("img")[0];
        let name = element.getElementsByClassName("songName")[0];
        if (img) img.src = songs[i].coverPath;
        if (name) name.innerText = songs[i].songName;
    }
});

// songItems.forEach((element, i)=>{ 
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
// })
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        // audioElement.src = `songs/${songIndex+1}.C:\Users\Anil kumar modi\Downloads\spotify\songs\gwtt.mp3`;
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
