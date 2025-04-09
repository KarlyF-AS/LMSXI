let button=document.querySelector(".Miboton")
let audio_=document.querySelector("audio")

button.addEventListener("click",emitSound)

function emitSound(){
audio.currentTime=0
audio.play()
}