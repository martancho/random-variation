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
	localStorage.setItem('choice1', JSON.stringify(firstChoice));
	location.href = '../secondLayer';
}

const getRow = (row) =>{
	firstChoice = row;
	localStorage.setItem('choice1', JSON.stringify(firstChoice));
	location.href = '../rowSecondLayer';
}