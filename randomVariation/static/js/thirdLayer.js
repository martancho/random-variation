	let thirdChoice;
	const scales = document.getElementById('scalesList');
	const chords = document.getElementById('chordsList')

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