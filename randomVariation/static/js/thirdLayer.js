const scales = document.getElementById('scalesList');
const chords = document.getElementById('chordsList');
const chordDirections = document.getElementById('chordDirections');
const scaleDirections = document.getElementById('scaleDirections');
let thirdChoice, thirdChoiceDir;
let thirdSelection; 
let secondSelection = JSON.parse(localStorage.getItem('choice2'));
let firstSelection = JSON.parse(localStorage.getItem('choice1'));
let displayBox = document.getElementById('output');


// for now only display scale and chord options if sequence was second
if (secondSelection.type === 'sequence') {
	document.getElementById('scaleSelect').style.display = 'block';
	document.getElementById('chordSelect').style.display = 'block';
}

const displayScales = () =>{
	if(scales.style.display === 'none'){
		scales.style.display = 'block';
	}else{
		scales.style.display = "none";
	}
}

const displayChords = () =>{
	if(chords.style.display === 'none'){
		chords.style.display = 'block';
	}else{
		chords.style.display = "none";
	}
}

const getChord = (chord) => {
	thirdChoice = chord;
	localStorage.setItem('choice3', JSON.stringify(thirdChoice));
	thirdSelection = JSON.parse(localStorage.getItem('choice3'));
	if(chordDirections.style.display === 'none'){
		chordDirections.style.display = 'block';
	}else{
		chordDirections.style.display = 'none';
	}
}
const getScale = (scale) => {
	thirdChoice = scale;
	localStorage.setItem('choice3', JSON.stringify(thirdChoice));
	thirdSelection = JSON.parse(localStorage.getItem('choice3'));
	if(scaleDirections.style.display === 'none'){
		scaleDirections.style.display = 'block';
	}else{
		scaleDirections.style.display = 'none';
	}
}

const getDirection = (dir) =>{
	thirdChoiceDir = dir;
}

const getChoices = () => {
	const choices = [];

	let choiceNum = 1;
	while (true) {
		const choice = JSON.parse(localStorage.getItem('choice' + choiceNum));
		if (choice) {
			choices.push(choice);
		} else {
			break;
		}
		choiceNum += 1;
	}

	return choices;
};

const create = () =>{
	// get return from function that will populate array until nothing in localstorage
	const choices = getChoices();

	// log choices
	for (item of choices) {
		for (a in item) {
			console.log(item[a]);
		}
	}

	let generatedMeasures = window.generate(choices);
	let displayMeasures = generatedMeasures.map(measure => {
		return JSON.stringify(measure) + '<br>';
	});

	displayBox.innerHTML = displayMeasures;
}