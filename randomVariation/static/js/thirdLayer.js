//const generate = require('../scripts/generator/');
const scales = document.getElementById('scalesList');
const chords = document.getElementById('chordsList');

let thirdChoice;
let thirdSelection; 
let secondSelection = JSON.parse(localStorage.getItem('choice2'));
let firstSelection = JSON.parse(localStorage.getItem('choice1'));
let result = [];
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

const getChord = (chord) => {
	thirdChoice = chord;
	localStorage.setItem('choice3', JSON.stringify(thirdChoice));
	thirdSelection = JSON.parse(localStorage.getItem('choice3'));
}
const getScale = (scale) => {
	thirdChoice = scale;
	localStorage.setItem('choice3', JSON.stringify(thirdChoice));
	thirdSelection = JSON.parse(localStorage.getItem('choice3'));
}

const create = () =>{
 result.push(firstSelection, secondSelection, thirdSelection);
 displayBox.innerHTML= JSON.stringify(result[0]) + " " + JSON.stringify(result[1]) + " " + JSON.stringify(result[2]);
}