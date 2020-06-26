function check(){
	var email1 = document.getElementById('email_main');
	var email2 = document.getElementById('email_repeat');
	if (email1.value!=email2.value){
		alert("The two emails must match!");
		return false;
	}
}

function login(){
	document.getElementById("sign").style.display="none";
	document.getElementById("log").style.display="block"
}

function signup(){
	document.getElementById("sign").style.display="block";
	document.getElementById("log").style.display="none";
}
