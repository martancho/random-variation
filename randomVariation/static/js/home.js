let firstChoice;
const notes = document.getElementById("notesList");
const toneRow = document.getElementById("toneRow");

// clear local storage
const clearStorage = () => {
	let choiceNum = 1;

	while (true) {
		const choice = JSON.parse(localStorage.getItem('choice' + choiceNum));
		if (choice) {
			localStorage.removeItem('choice' + choiceNum);
		} else {
			break;
		}
		choiceNum += 1;
	}
};
clearStorage();

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