let thirdChoice;
let secondSelection = JSON.parse(localStorage.getItem('choice2'));
let firstSelection = JSON.parse(localStorage.getItem('choice1'));
let result = [];
const scales = document.getElementById('scalesList');
const chords = document.getElementById('chordsList');
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
	location.href ='#';
}
const getScale = (scale) => {
	thirdChoice = scale;
	location.href ='#';
}

const generate = () =>{
 result.push(firstSelection, secondSelection);
 displayBox.innerHTML= result[0].type + " " + result[1];
}