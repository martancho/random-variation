let firstSelection = JSON.parse(localStorage.getItem('choice1'));
let secondChoice;
let secondSelection;
const scales = document.getElementById('scalesList');
const chords = document.getElementById('chordsList');
let choice = document.getElementById('choice');
let result = [];
const btn3 = document.getElementById('btn3');


const displayScales = () =>{
	if(scales.style.display === 'none'){
		scales.style.display = 'block';
	}else{
		scales.style.display = "none";
	}
	if(btn3.style.display === 'none'){
		btn3.style.display = 'block';
	}else{
		btn3.style.display = "none";
	}
}

const displayChords = () =>{
	if(chords.style.display === 'none'){
		chords.style.display = 'block';
	}else{
		chords.style.display = "none";
	}
	if(btn3.style.display === 'none'){
		btn3.style.display = 'block';
	}else{
		btn3.style.display = "none";
	}
}

const getChord = (chord) => {
	secondChoice = chord;
	localStorage.setItem('choice2', JSON.stringify(secondChoice));
	secondSelection = JSON.parse(localStorage.getItem('choice2'));
}

const getScale = (scale) => {
	secondChoice = scale;
	localStorage.setItem('choice2', JSON.stringify(secondChoice));
	secondSelection = JSON.parse(localStorage.getItem('choice2'));
}

const create = () =>{
	let output = result.push(firstSelection, secondSelection);
	choice.innerHTML = JSON.stringify(result[0]) + " " + JSON.stringify(result[1]);
}