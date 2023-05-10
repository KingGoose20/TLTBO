LooseGooses = {
    "VariablesPlayers":["Player1", "Player2", "Player3", "Player4", "Player5", "Player6"],
    "VariablesText":["TPlayer1", "TPlayer2", "TPlayer3", "TPlayer4", "TPlayer5", "TPlayer6"],
    "Players":["Angus Walker", "William Kim", "Clarrie Jones", "Christopher Tomkinson", "Mitch Yue", "Sam James"],
    "Images":["../../Images/Players/Angus.jpg","../../Images/Players/Kimmy.jpeg","../../Images/Players/Clarrie.jpeg","../../Images/Players/Christopher.jpeg","../../Images/Players/Mitch.jpeg","../../Images/Players/SamJ.jpg"],
    "PartA":[43,48],
    "PartB":[14,"Angus Walker",10,"Angus Walker",6,"William Kim",3,"Clarrie Jones"],
    "PartC":[6.9,3.7,3.7,0.7,6.1,6.9],
    "PartD":[21,26,44.7,22,22,50],
    "Date":["24-Apr","26-Apr","2-May","3-May","8-May","9-May","10-May"],
    "Wins":[3,3,8,7,4,5,13],
    "Losses":[5,3,6,8,6,13,7],
    "Points":[2,2,3,2,1,1,3],
    "TA":["Angus Walker","Sam James","Angus Walker","Sam James","Angus Walker","William Kim","William Kim"],
    "TB":["Angus Walker","Angus Walker, Mitch Yue","Angus Walker, Clarrie Jones","William Kim","William Kim","W Kim, C Jones, M Yue","William Kim"]     
}

WetWillies = {
    "VariablesPlayers":["Player1", "Player2", "Player3", "Player4", "Player5"],
    "VariablesText":["TPlayer1", "TPlayer2", "TPlayer3", "TPlayer4", "TPlayer5"],
    "Players":["Michael Iffland", "Rudy Hoschke", "Lukas Johnston", "Conor Farrington", "Will Weekes"],
    "Images":["../../Images/Players/Michael.jpeg","../../Images/Players/Rudy.jpeg","../../Images/Players/Lukas.jpeg","../../Images/Players/Conor.jpeg","../../Images/Players/Willie.jpeg"],
    "PartA":[50,47],
    "PartB":[26,"Rudy Hoschke",24,"Rudy Hoschke",12,"Michael Iffland",0,"N/A"],
    "PartC":[7.1,5,2.1,0,7.1,6.7],
    "PartD":[26,21,55.3,24,26,48],  
    "Date":["24-Apr","26-Apr","2-May","3-May","8-May","9-May","10-May"],
    "Wins":[3,3,5,4,6,19,10],
    "Losses":[5,4,8,10,6,6,8],
    "Points":[1,1,1,1,2,3,2],
    "TA":["Rudy Hoschke","Michael Iffland, Rudy Hoschke","Rudy Hoschke","Rudy Hoschke, Michael Iffland","Michael Iffland, Conor Farrington","Rudy Hoschke","Rudy Hoschke"],
    "TB":["Lukas Johnston","Rudy Hoschke","Michael Iffland","Conor Farrington, Rudy Hoschke","Michael Iffland","Rudy Hoschke","Rudy Hoschke"]  
    }

Musketeers = {
    "VariablesPlayers":["Player1", "Player2", "Player3", "Player4", "Player5"],
    "VariablesText":["TPlayer1", "TPlayer2", "TPlayer3", "TPlayer4", "TPlayer5"],
    "Players":["Samuel McConaghy", "Alexander Galt", "Nicholas Szogi", "Ryan Pattemore", "Jasper Collier"],
    "Images":["../../Images/Players/SamM.jpeg","../../Images/Players/Alex.jpeg","../../Images/Players/Nicholas.jpeg","../../Images/Players/Ryan.jpeg","../../Images/Players/Jasper.jpeg"],
    "PartA":[48,46],
    "PartB":[16,"Samuel McConaghy",13,"Alexander Galt",13,"Samuel McConaghy",0,"N/A"],
    "PartC":[6.7,3.7,3,0,6.9,6.6],
    "PartD":[22,22,50,26,24,52],    
    "Date":["24-Apr","26-Apr","2-May","3-May","8-May","9-May","10-May"],
    "Wins":[7,4,8,12,7,7,3],
    "Losses":[3,3,7,5,5,12,11],
    "Points":[3,3,2,3,3,2,1],
    "TA":["Alexander Galt","Nicholas Szogi","Nick S, Alex G, Ryan P, Sam M","Alexander Galt","Alexander Galt","Samuel McConaghy","Jasper Collier"],
    "TB":["Samuel McConaghy","Jasper Collier, Nicholas Szogi","Samuel McConaghy","Alexander Galt, Nicholas Szogi","Samuel McConaghy","Samuel McConaghy","Samuel McConaghy"]
    }



function RunMain(variable) {
    for (i = 0; i < variable.VariablesPlayers.length; i++) {
        document.getElementById(variable.VariablesPlayers[i]).src = variable.Images[i]
        document.getElementById(variable.VariablesText[i]).innerHTML = variable.Players[i]
    }
    document.getElementById("tWins").innerHTML = variable.PartA[0]
    document.getElementById("tLoss").innerHTML = variable.PartA[1]
    document.getElementById("tPercent").innerHTML = (Math.round(variable.PartA[0]/(variable.PartA[1]+variable.PartA[0])*1000))/10 + "%"
    document.getElementById("lPointsS").innerHTML = variable.PartB[0]
    document.getElementById("lPointsN").innerHTML = variable.PartB[1]
    document.getElementById("lFinishesS").innerHTML = variable.PartB[2]
    document.getElementById("lFinishesN").innerHTML = variable.PartB[3]
    document.getElementById("lMidrangesS").innerHTML = variable.PartB[4]
    document.getElementById("lMidrangesN").innerHTML = variable.PartB[5]
    document.getElementById("lThreesS").innerHTML = variable.PartB[6]
    document.getElementById("lThreesN").innerHTML = variable.PartB[7]
    document.getElementById("aPoints").innerHTML = variable.PartC[0]
    document.getElementById("aFinishes").innerHTML = variable.PartC[1]
    document.getElementById("aMidranges").innerHTML = variable.PartC[2]
    document.getElementById("aThrees").innerHTML = variable.PartC[3]
    document.getElementById("aWins").innerHTML = variable.PartC[4]
    document.getElementById("aLosses").innerHTML = variable.PartC[5]
    document.getElementById("AWins").innerHTML = variable.PartD[0]
    document.getElementById("ALoss").innerHTML = variable.PartD[1]
    document.getElementById("APercent").innerHTML = variable.PartD[2] + "%"
    document.getElementById("BWins").innerHTML = variable.PartD[3]
    document.getElementById("BLoss").innerHTML = variable.PartD[4]
    document.getElementById("BPercent").innerHTML = variable.PartD[5] + "%"


    table = document.getElementById("dayByDay")
    template = document.getElementsByTagName("template")[0];
    for (let i = 0; i < variable.Date.length; i++) {
      clone = template.content.cloneNode(true);
      clone.getElementById("Date").innerHTML = String(variable.Date[i])
      clone.getElementById("Wins").innerHTML = String(variable.Wins[i])
      clone.getElementById("Losses").innerHTML = String(variable.Losses[i])
      clone.getElementById("Points").innerHTML = String(variable.Points[i])
      clone.getElementById("TeamA").innerHTML = String(variable.TA[i])
      clone.getElementById("TeamB").innerHTML = String(variable.TB[i])
      table.appendChild(clone)
    }
}

RunMain(LooseGooses)