let firstChoice;
const notes = document.getElementById("notesList");
const toneRow = document.getElementById("toneRow")

const displayNotes = () =>{
	if(notes.style.display === "none"){
		notes.style.display = "block";
	}else{
		notes.style.display = "none";
	}
}

const displaySeq = () =>{
	if(toneRow.style.display === "none"){
		toneRow.style.display = "block";
	}else{
		toneRow.style.display = "none";
	}
}

const getNote = (note) =>{
	firstChoice = note;
	localStorage.setItem('choice1', JSON.stringify(firstChoice));
	location.href = '../secondLayer';
}

const getRow = (row) =>{
	firstChoice = row;
	localStorage.setItem('choice1', JSON.stringify(firstChoice));
	location.href = '../rowSecondLayer';
}