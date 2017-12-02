let firstChoice;
const notes = document.getElementById("notesList");

const displayNotes = () =>{
	if(notes.style.display === "none"){
		notes.style.display = "block";
	}else{
		notes.style.display = "none";
	}
}

const getNote = (note) =>{
	firstChoice = note;
	location.href = '../secondLayer';
	console.log(firstChoice);
	return firstChoice;
}

const getRow = (row) =>{
	firstChoice = row;
	location.href = '../rowSecondLayer';
	return firstChoice;
}