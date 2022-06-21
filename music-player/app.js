
const container=document.querySelector(".container");
const image=document.querySelector("#music-img");
const title=document.querySelector("#music-detalies .title");
const singer=document.querySelector("#music-detalies .singer");
const prev=document.querySelector("#controls #prev");
const play=document.querySelector("#controls #play");
const next=document.querySelector("#controls #next");
const progressBar=document.querySelector("#progress-bar");
const currentTimee=document.querySelector("#current-time");
const duration=document.querySelector("#duration");
const volume=document.querySelector("#volume");
const volumeBar=document.querySelector("#volume-bar");
const ul=document.querySelector("ul");

const player=new MusicPlayer(musicList);

//------------------Click events and load-----------------------------------------------------------------


window.addEventListener("load",()=>{
    let music=player.getMusic();
    displayMusic(music);
    progressBar.value=audio.currentTime;
    displayMusicList(player.musicList);
});



function displayMusic(music){
   
    title.innerText=music.getName();
    singer.innerText=music.singer;
    image.src="img/"+music.img;
    audio.src="mp3/"+music.file;

};


play.addEventListener("click",()=>{

 const isMusicPlay=container.classList.contains("playing");

 isMusicPlay ? pauseMusic() : playMusic();
});


function playMusic(){
 container.classList.add("playing");
 play.querySelector("i").classList="fa-solid fa-pause";
 audio.play();
 
};
function pauseMusic(){
    container.classList.remove("playing");
    play.querySelector("i").classList="fa-solid fa-play";
    audio.pause();
};

next.addEventListener("click",()=>{
    player.next();
    let music=player.getMusic();
    displayMusic(music);
    playMusic();
});

prev.addEventListener("click",()=>{
    player.prev();
    let music=player.getMusic();
    displayMusic(music);
    playMusic();
});


function calculateTime(second){
 
    let dakika=Math.floor(second/60);
    let saniye=Math.floor(second%60);
    let guncellenensaniye=saniye<10 ? `0${saniye}`: `${saniye}`;
    let sonuc=`${dakika}:${guncellenensaniye}`;
   
    return sonuc;

};



audio.addEventListener("loadedmetadata",()=>{
    duration.textContent=calculateTime(audio.duration);
    progressBar.max=Math.floor(audio.duration);
});

audio.addEventListener("timeupdate",()=>{
    progressBar.value=Math.floor(audio.currentTime);
    currentTimee.textContent=calculateTime(audio.currentTime);
    // console.log(currentTimee.textContent);
    // console.log(audio.duration);
    
   if(currentTimee.textContent==calculateTime(audio.duration)){
    player.next();
    let music=player.getMusic();
    displayMusic(music);
    playMusic();
    }
});


progressBar.addEventListener("input",()=>{
    currentTimee.textContent=calculateTime(progressBar.value);
    audio.currentTime=progressBar.value;
});


// //ses volume
let sesDurumu="sesli";

function seskonrol(){
    if(sesDurumu==="sesli"){
       audio.muted=true;
       sesDurumu="sessiz";
       volume.classList="fa-solid fa-volume-xmark";
        volumeBar.value=0;
    }
    else{
        audio.muted=false;
        sesDurumu="sesli";
       volume.classList="fa-solid fa-volume-high";
        volumeBar.value=100;
    }
}


volume.addEventListener("click",()=>{
seskonrol();
});

volumeBar.addEventListener("input",(e)=>{
    const value=e.target.value;
    audio.volume=value/100;
    if(value==0){
        audio.muted=true;
       sesDurumu="sessiz";
       volume.classList="fa-solid fa-volume-xmark";
    }else{
        audio.muted=false;
        sesDurumu="sesli";
       volume.classList="fa-solid fa-volume-high";
    }
});


function displayMusicList(list){
    for(let i=0; i<list.length;i++){
        let liTag=`
                <li li-index='${i}' onclick="selectedMusic(this)" class="list-group-item  d-flex justify-content-between align-items-center">
                    <span>${list[i].getName()}</span>
                    <span id="music-${i}" class="badge bg-primary rounded-pill">3.40</span>
                    <audio class="music-${i}" src="mp3/${list[i].file}"></audio>
                </li>
        
        `;
        
        ul.insertAdjacentHTML("beforeend",liTag);

        let liAudioTag=ul.querySelector(`.music-${i}`);
        let liAudioDuration=ul.querySelector(`#music-${i}`);

        liAudioTag.addEventListener("loadeddata",()=>{
           liAudioDuration.innerText=calculateTime(liAudioTag.duration);
        })
    }
};


function selectedMusic(li){
player.Index=li.getAttribute("li-index");
displayMusic(player.getMusic());
 playMusic();
}



const isplayingnow=()=>{

    for(let li of ul.querySelectorAll("li")){
        if(li.classList(".playing")){
            
        }

    }

}















//for(let i=0;i<list.length;i++){
    //     let liTag=`
        
    //     <li class="list-group-item  d-flex justify-content-between align-items-center">
    //        <span>${list[i].getName()}</span>
    //        <span id="music-${i}" class="badge bg-primary rounded-pill">3.40</span>
    //        <audio class="music-${i}" src="mp3/${list[i].file}"></audio>
    //     </li>
        
    //     `;
    //     ul.insertAdjacentHTML("beforeend",liTag);

    //     let liAudioTag=ul.querySelector(`.music-${i}`)
    //     let liAudioDuration=ul.querySelector(`#music-${i}`)

    //     liAudioTag.addEventListener("loadeddata",()=>{
    //         liAudioDuration.innerText=calculateTime(liAudioTag.duration);
    //     });
    // }