var audio = document.querySelector('#audio'),
    visual = document.querySelector('#visual'),
    light,
    debug = document.querySelector('#debug'),
    music = {
        light : '../audio/deepershadeofsoul.mp3',
        dark : '../audio/letsgetiton.mp3'
    };


    window.addEventListener("devicelight", function (event) {
        light = event.value;
        console.log(light);
        debug.textContent = light;
        
        if(light <= 30){
            //audio.src = music.dark;
            //audio.play();
            
            console.log("dark", light);
            visual.toggleClass('dark');
        }
        if(ligth <= 90){
            console.log('middle');
            visual.toggleClass('dim');
        }
        else{
            //audio.src = music.light;
            //audio.play();
            //audio.pause();
            
            console.log("bright", light);
            visual.toggleClass('light');
            //visual.classList.remove('oyeah');
        }

    });

//togglePlay = document.querySelector('#togglePlay');
//togglePlay.addEventListener('click', function(){
//}, false);


