function N (){
	alert("I'm sorry, but there is no place for liars on this website ;)")
	N()
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