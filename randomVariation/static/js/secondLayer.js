let firstSelection = JSON.parse(localStorage.getItem('choice1'));
let secondChoice;
const scales = document.getElementById('scalesList');
const chords = document.getElementById('chordsList');
const scaleDirections = document.getElementById('scaleDirections');
const chordDirections = document.getElementById('chordDirections');
const sequences = document.getElementById('sequenceList');
let displayBox = document.getElementById('output');

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

const displaySeq = () =>{
	if(sequences.style.display === 'none'){
		sequences.style.display = 'block';
	}else{
		sequences.style.display = "none";
	}
}

const getChord = (chord) => {
	secondChoice = chord;
	localStorage.setItem('choice2', JSON.stringify(secondChoice));
	if(chordDirections.style.display === 'none'){
		chordDirections.style.display = 'block';
	}else{
		chordDirections.style.display = "none";
	}
}
const getScale = (scale) => {
	secondChoice = scale;
	localStorage.setItem('choice2', JSON.stringify(secondChoice));
	if(scaleDirections.style.display === 'none'){
		scaleDirections.style.display = 'block';
	}else{
		scaleDirections.style.display = "none";
	}
}
const getSeq = (seq) => {
	secondChoice = seq;
	localStorage.setItem('choice2', JSON.stringify(secondChoice));
}

const getDirection = (dir) =>{
	secondChoiceDir = dir;
	location.href = '../thirdLayer';
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

const create = () => {
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