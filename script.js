let speech = new SpeechSynthesisUtterance();
let input_text = document.querySelector('.input-text');

let voices = [];
let option = document.querySelector('select');

speechSynthesis.onvoiceschanged = ()=>{
    voices = speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i)=>{option.innerHTML += `<option value = "${i}">${voice.name}</option>`})
}

option.onchange = () =>{
    speech.voice = voices[option.value];
}
document.querySelector('.btn').addEventListener('click',()=>{
    console.log("hello");
    speech.text = input_text.value;
    window.speechSynthesis.speak(speech);
})