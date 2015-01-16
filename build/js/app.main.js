
var audio=document.querySelector('#audio'),visual=document.querySelector('#visual'),light,music={light:'../audio/deepershadeofsoul.mp3',dark:'../audio/letsgetiton.mp3'};window.addEventListener("devicelight",function(event){light=event.value;if(light<70){audio.src=music.dark;audio.play();visual.classList.add('oyeah');}
else{audio.pause();visual.classList.remove('oyeah');}});