function qs(qs) {
	return document.getElementById(qs)
}
var debug = qs('debug'),
	light;

function PlaySound() {
	this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	
	this.soundOsc = this.audioCtx.createOscillator();
	this.soundOsc.type = 'sine'; //'square';
	
	this.soundOsc.detune.value = 210;
}
PlaySound.prototype = {
	SetFrequency : function(param) {
		this.soundOsc.frequency.value = (parseInt(param) * 50);
		//console.log(this.soundOsc.frequency.value);
	},

	Play : function() {
		//this.audioCtx.resume();
		this.soundOsc.start(this.audioCtx.currentTime);
		this.soundOsc.connect(this.audioCtx.destination);

	},

	Stop : function() {
		this.soundOsc.stop(this.audioCtx.currentTime);
		this.soundOsc.disconnect(this.audioCtx.destination);

		//this.audioCtx.suspend();

		//this.audioCtx.close();
			
		console.log('sound was finished');
	}
};


function UiVisual() {
	this.element = document.getElementById('visual');
}
UiVisual.prototype = {
	SetBgColor : function(param) {
		this.element.style.background = 'rgb('+ param + ','+ param +','+ param +')';
	}
};


var sound, 
	isPlaying = 0,
	bgScreen = new UiVisual();



var playBtn = document.getElementById('play'),
	stopBtn = document.getElementById('stop');


playBtn.addEventListener('click', function() {
	
	if(isPlaying) {
		isPlaying = 0;
		
		//sound.Stop();

		sound.Stop();
		sound = null;
		console.log('stop');


		removeEventListener("devicelight", function (event) {console.log('removed')});
	}
	else{
		isPlaying = 1;
		
		sound = new PlaySound();
		
		sound.Play();
		//sound.soundOsc.start(1);
		console.log('play');


		addEventListener("devicelight", function (event) {
			light = event.value;
			//console.log(light);

			//visual debug
			debug.textContent = light;

			//set sound frequency based on light value
			sound.SetFrequency(light);

			//set background color screen based on light value
			bgScreen.SetBgColor(light);

			if(light >= 100) {
				//console.log("bright", light);
				sound.Stop();
			}
			else{
				//console.log("dark", light);
				//sound.Play();
			}

		});
	}

	console.log(isPlaying);
});






















