var startQuestions = document.getElementById("startQuestions")

function N (){
	alert("I'm sorry, but there is no place for liars on this website ;)")
	N()
}

function questionVerify (questionAnswer, correctAnswer){
	
	if(correctAnswer == "Y"){
		var incorrectAnswer = "N"
	}else{
		var incorrectAnswer = "Y"
	}
	if(questionAnswer === correctAnswer){

	}else if(questionAnswer === incorrectAnswer){
		N()
	}else{
		alert("Next time, answer the question correctly!")
		startQuestionsRun()
	}
}

function startStage2 (){
var start = prompt("Were you redirected here? Y/N")
if(start == "Y"){
	}else if(start =="N"){
		N()
	}else{
		startStage2()
	}
}
startStage2()

function startQuestionsRun (){
	makeQuestion("Hello, Alexander Sutherland. Is that your name? Y/N","Y")
	makeQuestion("Do you have a daughter? Y/N","N")
	makeQuestion("Do you have a chalkboard in your office? Y/N","N")
	makeQuestion("Is your mother's father alive? Y/N","N")
	makeQuestion("Is your father's mother alive? Y/N","Y")
	makeQuestion("Is your father's mother's husband alive? Y/N","Y")
	makeQuestion("Did your father's wife's daughter-in-law's youngest-son's brother make this website? Y/N","Y")
	var getHug = confirm("Identity verified, please press ok to claim your hug!")
	alert(getHug)
	//alert("Processing error. Please go to the website linked below to report this issue")
}

function makeQuestion(question,correctAnswer){
	var answer = prompt(question)
	questionVerify(answer,correctAnswer)
}

startQuestions.addEventListener("click", startQuestionsRun)