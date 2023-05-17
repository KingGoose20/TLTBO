LooseGooses = {
    "VariablesPlayers":["Player1", "Player2", "Player3", "Player4", "Player5", "Player6"],
    "VariablesText":["TPlayer1", "TPlayer2", "TPlayer3", "TPlayer4", "TPlayer5", "TPlayer6"],
    "Players":["Angus Walker", "William Kim", "Clarrie Jones", "Christopher Tomkinson", "Mitch Yue", "Sam James"],
    "Images":["../../Images/Players/Angus.jpg","../../Images/Players/Kimmy.jpeg","../../Images/Players/Clarrie.jpeg","../../Images/Players/Christopher.jpeg","../../Images/Players/Mitch.jpeg","../../Images/Players/SamJ.jpg"],
    "PartA":[60,69],
    "PartB":[17,"Angus Walker",13,"Angus Walker",10,"William Kim",5,"Clarrie Jones"],
    "PartC":[6.7,3.4,1.9,0.7,6,6.9],
    "PartD":[28,38,42.4,32,31,50.8],          
    "Date":["24-Apr","26-Apr","2-May","3-May","8-May","9-May","10-May","15-May","16-May","17-May"],
    "Wins":[3,3,8,7,4,5,13,6,5,6],
    "Losses":[5,3,6,8,6,13,7,7,10,4],
    "Points":[2,2,3,2,1,1,3,2,1,3],
    "TA":["Angus Walker","Sam James","Angus Walker","Sam James","Angus Walker","William Kim","William Kim","Mitch Yue, Christopher Tomkinson","Christopher Tomkinson, Clarrie Jones","Christopher Tomkinson, Clarrie Jones, William Kim"],
    "TB":["Angus Walker","Angus Walker, Mitch Yue","Angus Walker, Clarrie Jones","William Kim","William Kim","W Kim, C Jones, M Yue","William Kim","Clarrie Jones","Angus Walker","William Kim"]
    }

WetWillies = {
    "VariablesPlayers":["Player1", "Player2", "Player3", "Player4", "Player5"],
    "VariablesText":["TPlayer1", "TPlayer2", "TPlayer3", "TPlayer4", "TPlayer5"],
    "Players":["Michael Iffland", "Rudy Hoschke", "Lukas Johnston", "Conor Farrington", "Will Weekes"],
    "Images":["../../Images/Players/Michael.jpeg","../../Images/Players/Rudy.jpeg","../../Images/Players/Lukas.jpeg","../../Images/Players/Conor.jpeg","../../Images/Players/Willie.jpeg"],
    "PartA":[72,64],
    "PartB":[36,"Rudy Hoschke",33,"Rudy Hoschke",12,"Michael Iffland",1,"Michael Iffland"],
    "PartC":[7.5,4.9,2,0.3,7.2,6.4],
    "PartD":[38,28,57.6,34,36,48.6],       
    "Date":["24-Apr","26-Apr","2-May","3-May","8-May","9-May","10-May","15-May","16-May","17-May"],
    "Wins":[3,3,5,4,6,19,10,13,7,2],
    "Losses":[5,4,8,10,6,6,8,3,9,5],
    "Points":[1,1,1,1,2,3,2,3,2,1],
    "TA":["Rudy Hoschke","Michael Iffland, Rudy Hoschke","Rudy Hoschke","Rudy Hoschke, Michael Iffland","Michael Iffland, Conor Farrington","Rudy Hoschke","Rudy Hoschke","Michael Iffland","Rudy Hoschke","Rudy Hoschke"],
    "TB":["Lukas Johnston","Rudy Hoschke","Michael Iffland","Conor Farrington, Rudy Hoschke","Michael Iffland","Rudy Hoschke","Rudy Hoschke","Rudy Hoschke","Rudy Hoschke","Conor Farrington"]
    }

Musketeers = {
    "VariablesPlayers":["Player1", "Player2", "Player3", "Player4", "Player5"],
    "VariablesText":["TPlayer1", "TPlayer2", "TPlayer3", "TPlayer4", "TPlayer5"],
    "Players":["Samuel McConaghy", "Alexander Galt", "Nicholas Szogi", "Ryan Pattemore", "Jasper Collier"],
    "Images":["../../Images/Players/SamM.jpeg","../../Images/Players/Alex.jpeg","../../Images/Players/Nicholas.jpeg","../../Images/Players/Ryan.jpeg","../../Images/Players/Jasper.jpeg"],
    "PartA":[67,66],
    "PartB":[23,"Samuel McConaghy",18,"Alexander Galt",17,"Samuel McConaghy",1,"N/A"],
    "PartC":[6.8,3.5,3,0.1,6.7,6.6],
    "PartD":[31,32,49.2,36,34,51.4],          
    "Date":["24-Apr","26-Apr","2-May","3-May","8-May","9-May","10-May","15-May","16-May","17-May"],
    "Wins":[7,4,8,12,7,7,3,1,13,5],
    "Losses":[3,3,7,5,5,12,11,10,6,4],
    "Points":[3,3,2,3,3,2,1,1,3,2],
    "TA":["Alexander Galt","Nicholas Szogi","Nick S, Alex G, Ryan P, Sam M","Alexander Galt","Alexander Galt","Samuel McConaghy","Jasper Collier","N/A","Alexander Galt","Samuel McConaghy, Nicholas Szogi"],
    "TB":["Samuel McConaghy","Jasper Collier, Nicholas Szogi","Samuel McConaghy","Alexander Galt, Nicholas Szogi","Samuel McConaghy","Samuel McConaghy","Samuel McConaghy","Samuel McConaghy","Samuel McConaghy","Jasper Collier, Nicholas Szogi"]
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