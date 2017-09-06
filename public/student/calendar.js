
var classCalendar = document.getElementsByClassName("calendar-link");
var calModal = document.getElementById("cal-modal");

for(var i=0; i<classCalendar.length; i++){
	classCalendar[i].addEventListener("click", showCalModal);
}

function showCalModal(event){
	if(event.target.parentNode.classList.contains("calendar-link")){
		$('#cal-modal').modal("show", calModal.innerHTML);
	}
	else if(event.target.classList.contains("calendar-link")){
		$('#myModal').modal("show");
	}
}


