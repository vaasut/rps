let selection = 0

function chooseOption(picture_id){
    if (picture_id==="rock"){  //change solid line to rock
        document.getElementById("rock").style = "border:3px solid black";
        document.getElementById("paper").style = "border:3px dotted black";
        document.getElementById("scissors").style = "border:3px dotted black";
        document.getElementById("gameText").innerText = "You've selected Rock!";
        selection = 0;
    }

    else if (picture_id==="paper"){ //change solid line to paper
        document.getElementById("paper").style = "border:3px solid black";
        document.getElementById("rock").style = "border:3px dotted black";
        document.getElementById("scissors").style = "border:3px dotted black";
        document.getElementById("gameText").innerText = "You've selected Paper!";
        selection = 1;
    }

    else if (picture_id ==="scissors"){  //change solid line to scissors
        document.getElementById("scissors").style = "border:3px solid black";
        document.getElementById("rock").style = "border:3px dotted black";
        document.getElementById("paper").style = "border:3px dotted black";
        document.getElementById("gameText").innerText = "You've selected Scissors!";
        selection = 2;
    }
}

function play(){
    computerOption = Math.floor(Math.random()*3);
    let textComputerChoice = "The computer option is " + ["rock","paper","scissors"][computerOption] + "."
    if (computerOption == selection) {
        alert(textComputerChoice + " It's a draw.");
    }
    else if ((computerOption == 0 && selection == 1) || (computerOption == 1 && selection == 2) || (computerOption == 2 && selection == 0)){
        alert(textComputerChoice + " You win!");
    }
    else{
        alert(textComputerChoice + " You lose.");
    }



}