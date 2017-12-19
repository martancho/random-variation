let firstSelection = JSON.parse(localStorage.getItem('choice1'));
let secondChoice;
const scales = document.getElementById('scalesList');
const chords = document.getElementById('chordsList');
let choice = document.getElementById('choice');
let result = [];


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
	secondChoice = chord;
	localStorage.setItem('choice2', JSON.stringify(secondChoice));
	let secondSelection = JSON.parse(localStorage.getItem('choice2'));
	choice.innerHTML = JSON.stringify(secondSelection);
}

const getScale = (scale) => {
	secondChoice = scale;
	localStorage.setItem('choice2', JSON.stringify(secondChoice));
	let secondSelection = JSON.parse(localStorage.getItem('choice2'));
	choice.innerHTML = JSON.stringify(secondSelection);
}