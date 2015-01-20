var video = document.querySelector('#youtubeplayer'),
    visual = document.querySelector('#visual'),
    light,
    debug = document.querySelector('#debug'),
    videoUrl = {
        day : "M7lc1UVf-VE",
        night : "pq3ji_kjAUE"
    },
    youtubeSrc = function (videoId) {
        return "https://www.youtube.com/embed/" + videoId + "?autoplay=1&controls=0&disablekb=1&enablejsapi=1&fs=0&playsinline=1&rel=0&showinfo=0";
    };


    window.addEventListener("devicelight", function (event) {
        light = event.value;
        //console.log(light);
        
        //visual debug
        debug.textContent = light;
        
        if(light >= 50){
            video.src = youtubeSrc(videoUrl.day);
            console.log("bright", light);
            visual.classList.add('oyeah');
        }
        else{
            video.src = youtubeSrc(videoUrl.night);

            console.log("dark", light);
            if( visual.classList.contains('oyeah') ){
                visual.classList.remove('oyeah');
            }
        }

    });




















