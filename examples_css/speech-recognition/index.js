// const grammar =
// 	"#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";

// const speechRecognitionList = new webkitSpeechGrammarList();
// speechRecognitionList.addFromString(grammar, 1);

const recognition = new webkitSpeechRecognition();
// recognition.grammars = speechRecognitionList;
recognition.continuous = true;
// recognition.lang = "en-US";
recognition.lang = "ru-RU";
// recognition.interimResults = false;
// recognition.maxAlternatives = 1;

const bg = document.querySelector("html");
const output = document.querySelector(".output");

const state = {
	started: false,
}
document.body.onclick = () => {
	if (state.started) return;
	recognition.start();
	state.started = true;
};

recognition.onresult = (event) => {
	console.log(event.results);
	const list = Array.from(event.results);
	const texts = list.map((iResult) => {
		return iResult[0].transcript;
	});
	const log = texts.join('<br />');

	output.innerHTML = log;
	// bg.style.backgroundColor = color;
};
