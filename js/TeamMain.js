LooseGooses = {
    "VariablesPlayers":["Player1", "Player2", "Player3", "Player4", "Player5", "Player6"],
    "VariablesText":["TPlayer1", "TPlayer2", "TPlayer3", "TPlayer4", "TPlayer5", "TPlayer6"],
    "Players":["Angus Walker", "William Kim", "Clarrie Jones", "Christopher Tomkinson", "Mitch Yue", "Sam James"],
    "Images":["../../Images/Players/Angus.jpg","../../Images/Players/Kimmy.jpeg","../../Images/Players/Clarrie.jpeg","../../Images/Players/Christopher.jpeg","../../Images/Players/Mitch.jpeg","../../Images/Players/SamJ.jpg"],
    "PartA":[5,10]
}

function RunMain(variable) {
    for (i = 0; i < variable.VariablesPlayers.length; i++) {
        document.getElementById(variable.VariablesPlayers[i]).src = variable.Images[i]
        document.getElementById(variable.VariablesText[i]).innerHTML = variable.Players[i]
    }
    document.getElementById("tWins").innerHTML = variable.PartA[0]
    document.getElementById("tLoss").innerHTML = variable.PartA[1]
    document.getElementById("tPercent").innerHTML = (Math.round(variable.PartA[0]/variable.PartA[1]*1000))/10 + "%"
}

RunMain(LooseGooses)