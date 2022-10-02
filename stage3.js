var nameVerify = document.getElementById("nameVerify")
var chitchat = document.getElementById("chitchat")

function nameVerifyRun(){
	var nameCheck = prompt("Please enter your first name and last name with proper capitalization")
	if(nameCheck == "Alexander Sutherland"){
		alert("Name Verified. Please talk to a staff member to sort out your problem")
		chitchat.addEventListener("click", chitchatRun)
	}else{
		alert("Name not found.")
	}
}

function chitchatRun(){
	var pass = prompt("PLEASE ENTER PASSWORD")
	if(pass == "201276"){
		alert("PASSWORD CORRECT")
		talkTime()
	}else{
		alert("PASSWORD INCORRECT")
	}
}

function talkTime (){
	var Q1 = prompt("HELLO ALEXANDER SUTHERLAND, IT SEEMS THAT YOU ARE HAVING TROUBLE RECIEVING YOUR HUG, PLEASE TELL ME WHY YOU NEED THE HUG")
	var Q2 = confirm("SO YOU WANT A HUG BECAUSE " + Q1 + ". VERY GOOD REASON. WOULD YOU LIKE YOUR HUG DELIVERED VIA A LETTER TELLING SOMEONE TO HUG YOU")
	if(Q2 == true){
		document.body.innerHTML = "Please wait for your letter to arrive!"
	}else{
		var Q3 = confirm("SINCE YOU DO NOT WANT YOUR HUG TO BE DELIVERED VIA A LETTER, WOULD YOU LIKE TO HAVE IT DELIVERED VIA A PERSON SHOWING UP AT YOUR HOUSE?")
		if(Q3 == true){
			document.body.innerHTML = "Please wait for your delivery person to arrive!"
		}else{
			alert("WE ARE OUT OF WAYS TO DELIVER YOUR HUG, GOODBYE")
			document.body.innerHTML = "Out of options. <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><p style = 'color:white'>Right? Tell Owen to give his dad a hug and click the smiley face! <span id='urmomjustwon'>:)</span></p>"
		}
	}
}

function win (){
	alert("FINAL STAGE CLEAR")
	document.body.innerHTML = "U R WINNAR"
}

nameVerify.addEventListener("click", nameVerifyRun)
var urmomjustwon = document.getElementById("urmomjustwon")
console.log(urmomjustwon)
urmomjustwon.addEventListener("click",win)