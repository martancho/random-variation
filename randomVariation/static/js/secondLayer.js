	let firstSelection = JSON.parse(localStorage.getItem('choice1'));
	let secondChoice;
	const scales = document.getElementById('scalesList');
	const chords = document.getElementById('chordsList');
	const sequences = document.getElementById('sequenceList');


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
		location.href ='../thirdLayer';
	}
	const getScale = (scale) => {
		secondChoice = scale;
		localStorage.setItem('choice2', JSON.stringify(secondChoice));
		location.href ='../thirdLayer';
	}
	const getSeq = (seq) => {
		secondChoice = seq;
		localStorage.setItem('choice2', JSON.stringify(secondChoice));
		location.href ='../thirdLayer';
	}