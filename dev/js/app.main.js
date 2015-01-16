var audio = document.querySelector('#audio'),
    visual = document.querySelector('#visual'),
    light,
    //togglePlay = document.querySelector('#togglePlay'),
    music = {
        light : '../audio/deepershadeofsoul.mp3',
        dark : '../audio/letsgetiton.mp3'
    };

//togglePlay.addEventListener('click', function(){
    window.addEventListener("devicelight", function (event) {
        light = event.value;
        //console.log(light);

        if(light < 70){
            audio.src = music.dark;
            audio.play();
            //console.log("escuro", light);
            visual.classList.add('oyeah');
        }
        else{
            //audio.src = music.light;
            //audio.play();
            audio.pause();
            //console.log("claro", light);
            visual.classList.remove('oyeah');
        }

    });
    //return false;

//}, false);


