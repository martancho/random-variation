let secondChoice;
	const scales = document.getElementById('scalesList');
	const chords = document.getElementById('chordsList');
	let choice = document.getElementById('choice');


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
		choice.innerHTML = secondChoice;
		console.log(secondChoice);
	}
	const getScale = (scale) => {
		secondChoice = scale;
		choice.innerHTML = secondChoice;
		console.log(secondChoice);
	}