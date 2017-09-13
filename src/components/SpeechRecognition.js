export default class SpeechHandler {
	speechHandler = null;
	listening = false;
	history = [];
	
	constructor() {
		this.speechHandler = new window.webkitSpeechRecognition();
		this.speechHandler.lang = 'en-US';
		this.speechHandler.interimResults = false;
	}

	listen() {
		this.activateSpeech()
			.then((e) => this.processSpeechNode(e))
	}

	

	repeatLastSpeechNode() {
		if (!this.history.length) {
			console.log('no speech events to read')
		}
		const last = this.history.length - 1;
		const toSay = new SpeechSynthesisUtterance(this.history[last].transcript);
		speechSynthesis.speak(toSay);
	}

	processSpeechNode(speechEvent) {
		const result = speechEvent.results[0][0];
		this.history.push(result)
	}

	activateSpeech() {
		const speech = this.speechHandler;
		return new Promise((resolve, reject) => {
			speech.onresult = (event) => resolve(event);
			speech.onerror = err => reject(err);
			speech.start();
		});
	}
}