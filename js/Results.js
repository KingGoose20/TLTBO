Today = {
    "Date": ["26 April"],
    "Game Number":[1,2,3,4,5,6,7,8,9,10],
    "Winner":["Wet Willies","Wet Willies","5 Musketeers","5 Musketeers","5 Musketeers","Loose Gooses","Wet Willies","5 Musketeers","Loose Gooses","Loose Gooses"],
    "Loser":["5 Musketeers","Loose Gooses","Wet Willies","Loose Gooses","Wet Willies","5 Musketeers","Loose Gooses","Wet Willies","5 Musketeers","Wet Willies"],
    "Scorer":["Rudy Hoschke","Michael Iffland","Alex Hewes","Nick Szogi","Jasper Collier","Angus Walker","Rudy Hoschke","Nick Szogi","Mitch Yue","Sam James"],
    "Type":["Finish","Finish","Midrange","Finish","Midrange","Finish","Finish","Finish","Finish","Finish"],
    "WStreak":[1,2,1,2,3,1,1,1,1,2],
    "LStreak":[1,1,1,2,2,1,1,1,1,2],
    "SStreak":[1,1,1,1,1,1,1,1,1,1]
  }

LadderPoints = [4,2,6]
Leaders = ["Angus Walker", "Rudy Hoschke", "Nicholas Szogi"]
LeadersPoints = [2,1.5,2]
Override = false
OverrideOrder = ["WW", "WW", "5M"]
overRideDate = ""
overrideW = ""
overrideL = "Wet Willies"











function ladder() {
  if (Override == false) {
    LG = false
    WW = false
    MM = false
    if ((LadderPoints[0] > LadderPoints[1]) && (LadderPoints[0] > LadderPoints[2])) {
      document.getElementById("firstName").innerHTML = "Loose Gooses";
      document.getElementById("firstPoints").innerHTML = LadderPoints[0];
      document.getElementById("firstImagea").src = "../Images/LG_Final.png"
      document.getElementById("firstImageb").src = "../Images/LG_Final.png"
      document.getElementById("firstLeader").innerHTML = Leaders[0]
      if (LeadersPoints[0] == 1) {
        document.getElementById("firstScoring").innerHTML = (LeadersPoints[0] + " point")
      } else {
        document.getElementById("firstScoring").innerHTML = (LeadersPoints[0] + " points")
      }
      leader = LadderPoints[0]
      LG = true
      AddData(LooseGooses, "teamLista")
    } else if ((LadderPoints[1] > LadderPoints[2]) && (LadderPoints[1] > LadderPoints[0])) {
      document.getElementById("firstName").innerHTML = "Wet Willies";
      document.getElementById("firstPoints").innerHTML = LadderPoints[1];
      document.getElementById("firstImagea").src = "../Images/WW_Final.png"
      document.getElementById("firstImageb").src = "../Images/WW_Final.png"
      document.getElementById("firstLeader").innerHTML = Leaders[1]
      if (LeadersPoints[1] == 1) {
        document.getElementById("firstScoring").innerHTML = (LeadersPoints[1] + " point")
      } else {
        document.getElementById("firstScoring").innerHTML = (LeadersPoints[1] + " points")
      }
      leader = LadderPoints[1]
      WW = true
      AddData(WetWillies, "teamLista")
    } else {
      document.getElementById("firstName").innerHTML = "5 Musketeers";
      document.getElementById("firstPoints").innerHTML = LadderPoints[2];
      document.getElementById("firstImagea").src = "../Images/5M_Final.png"
      document.getElementById("firstImageb").src = "../Images/5M_Final.png"
      document.getElementById("firstLeader").innerHTML = Leaders[2]
      if (LeadersPoints[2] == 1) {
        document.getElementById("firstScoring").innerHTML = (LeadersPoints[2] + " point")
      } else {
        document.getElementById("firstScoring").innerHTML = (LeadersPoints[2] + " points")
      }
      leader = LadderPoints[2]
      MM = true
      AddData(Musketeers, "teamLista")
    }






    if (((LadderPoints[0] > LadderPoints[1]) || (LadderPoints[0] > LadderPoints[2])) && LG != true) {
      document.getElementById("secondName").innerHTML = "Loose Gooses";
      document.getElementById("secondPoints").innerHTML = LadderPoints[0];
      document.getElementById("secondImagea").src = "../Images/LG_Final.png"
      document.getElementById("secondImageb").src = "../Images/LG_Final.png"
      document.getElementById("secondLeader").innerHTML = Leaders[0]
      if (LeadersPoints[0] == 1) {
        document.getElementById("secondScoring").innerHTML = (LeadersPoints[0] + " point")
      } else {
        document.getElementById("secondScoring").innerHTML = (LeadersPoints[0] + " points")
      }
      LG = true
      AddData(LooseGooses, "teamListb")
    } else if (((LadderPoints[1] > LadderPoints[2]) || (LadderPoints[1] > LadderPoints[0])) && WW != true) {
      document.getElementById("secondName").innerHTML = "Wet Willies";
      document.getElementById("secondPoints").innerHTML = LadderPoints[1];
      document.getElementById("secondImagea").src = "../Images/WW_Final.png"
      document.getElementById("secondImageb").src = "../Images/WW_Final.png"
      document.getElementById("secondLeader").innerHTML = Leaders[1]
      if (LeadersPoints[1] == 1) {
        document.getElementById("secondScoring").innerHTML = (LeadersPoints[1] + " point")
      } else {
        document.getElementById("secondScoring").innerHTML = (LeadersPoints[1] + " points")
      }
      WW = true
      AddData(WetWillies, "teamListb")
    } else {
      document.getElementById("secondName").innerHTML = "5 Musketeers";
      document.getElementById("secondPoints").innerHTML = LadderPoints[2];
      document.getElementById("secondImagea").src = "../Images/5M_Final.png"
      document.getElementById("secondImageb").src = "../Images/5M_Final.png"
      document.getElementById("secondLeader").innerHTML = Leaders[2]
      if (LeadersPoints[2] == 1) {
        document.getElementById("secondScoring").innerHTML = (LeadersPoints[2] + " point")
      } else {
        document.getElementById("secondScoring").innerHTML = (LeadersPoints[2] + " points")
      }
      MM = true
      AddData(Musketeers, "teamListb")
    }






    if(LG == false) {
      document.getElementById("thirdName").innerHTML = "Loose Gooses";
      document.getElementById("thirdPoints").innerHTML = LadderPoints[0];
      document.getElementById("thirdImagea").src = "../Images/LG_Final.png"
      document.getElementById("thirdImageb").src = "../Images/LG_Final.png"
      document.getElementById("thirdLeader").innerHTML = Leaders[0]
      if (LeadersPoints[0] == 1) {
        document.getElementById("thirdScoring").innerHTML = (LeadersPoints[0] + " point")
      } else {
        document.getElementById("thirdScoring").innerHTML = (LeadersPoints[0] + " points")
      }
      AddData(LooseGooses, "teamListc")
    } else if (WW == false) {
      document.getElementById("thirdName").innerHTML = "Wet Willies";
      document.getElementById("thirdPoints").innerHTML = LadderPoints[1];
      document.getElementById("thirdImagea").src = "../Images/WW_Final.png"
      document.getElementById("thirdImageb").src = "../Images/WW_Final.png"
      document.getElementById("thirdLeader").innerHTML = Leaders[1]
      if (LeadersPoints[1] == 1) {
        document.getElementById("thirdScoring").innerHTML = (LeadersPoints[1] + " point")
      } else {
        document.getElementById("thirdScoring").innerHTML = (LeadersPoints[1] + " points")
      }
      AddData(WetWillies, "teamListc")
    } else {
      document.getElementById("thirdName").innerHTML = "5 Musketeers";
      document.getElementById("thirdPoints").innerHTML = LadderPoints[2];
      document.getElementById("thirdImagea").src = "../Images/5M_Final.png"
      document.getElementById("thirdImageb").src = "../Images/5M_Final.png"
      document.getElementById("thirdLeader").innerHTML = Leaders[2]
      if (LeadersPoints[2] == 1) {
        document.getElementById("thirdScoring").innerHTML = (LeadersPoints[2] + " point")
      } else {
        document.getElementById("thirdScoring").innerHTML = (LeadersPoints[2] + " points")
      }
      AddData(Musketeers, "teamListc")
    }








    
  } else {
      for (i = 0; i < OverrideOrder.length; i ++) {
        switch (i) {
          case 0 :
            if (OverrideOrder[i] == "LG") {
              document.getElementById("firstName").innerHTML = "Loose Gooses";
              document.getElementById("firstPoints").innerHTML = LadderPoints[0];
              document.getElementById("firstImagea").src = "../Images/LG_Final.png"
              document.getElementById("firstImageb").src = "../Images/LG_Final.png"
              document.getElementById("firstLeader").innerHTML = Leaders[0]
              if (LeadersPoints[0] == 1) {
                document.getElementById("firstScoring").innerHTML = (LeadersPoints[0] + " point")
              } else {
                document.getElementById("firstScoring").innerHTML = (LeadersPoints[0] + " points")
              }
              leader = LadderPoints[0]
              LG = true
            } else if (OverrideOrder[i] == "WW") {
              document.getElementById("firstName").innerHTML = "Wet Willies";
              document.getElementById("firstPoints").innerHTML = LadderPoints[1];
              document.getElementById("firstImagea").src = "../Images/WW_Final.png"
              document.getElementById("firstImageb").src = "../Images/WW_Final.png"
              document.getElementById("firstLeader").innerHTML = Leaders[1]
              if (LeadersPoints[1] == 1) {
                document.getElementById("firstScoring").innerHTML = (LeadersPoints[1] + " point")
              } else {
                document.getElementById("firstScoring").innerHTML = (LeadersPoints[1] + " points")
              }
              leader = LadderPoints[1]
              WW = true
            } else {
              document.getElementById("firstName").innerHTML = "5 Musketeers";
              document.getElementById("firstPoints").innerHTML = LadderPoints[2];
              document.getElementById("firstImagea").src = "../Images/5M_Final.png"
              document.getElementById("firstImageb").src = "../Images/5M_Final.png"
              document.getElementById("firstLeader").innerHTML = Leaders[2]
              if (LeadersPoints[2] == 1) {
                document.getElementById("firstScoring").innerHTML = (LeadersPoints[2] + " point")
              } else {
                document.getElementById("firstScoring").innerHTML = (LeadersPoints[2] + " points")
              }
              leader = LadderPoints[2]
              MM = true
            }
            break;
          case 1 :
            if (OverrideOrder[i] == "LG") {
              document.getElementById("secondName").innerHTML = "Loose Gooses";
              document.getElementById("secondPoints").innerHTML = LadderPoints[0];
              document.getElementById("secondImagea").src = "../Images/LG_Final.png"
              document.getElementById("secondImageb").src = "../Images/LG_Final.png"
              document.getElementById("secondLeader").innerHTML = Leaders[0]
              if (LeadersPoints[0] == 1) {
                document.getElementById("secondScoring").innerHTML = (LeadersPoints[0] + " point")
              } else {
                document.getElementById("secondScoring").innerHTML = (LeadersPoints[0] + " points")
              }
            } else if (OverrideOrder[i] == "WW") {
              document.getElementById("secondName").innerHTML = "Wet Willies";
              document.getElementById("secondPoints").innerHTML = LadderPoints[1];
              document.getElementById("secondImagea").src = "../Images/WW_Final.png"
              document.getElementById("secondImageb").src = "../Images/WW_Final.png"
              document.getElementById("secondLeader").innerHTML = Leaders[1]
              if (LeadersPoints[1] == 1) {
                document.getElementById("secondScoring").innerHTML = (LeadersPoints[1] + " point")
              } else {
                document.getElementById("secondScoring").innerHTML = (LeadersPoints[1] + " points")
              }
            } else {
              document.getElementById("secondName").innerHTML = "5 Musketeers";
              document.getElementById("secondPoints").innerHTML = LadderPoints[2];
              document.getElementById("secondImagea").src = "../Images/5M_Final.png"
              document.getElementById("secondImageb").src = "../Images/5M_Final.png"
              document.getElementById("secondLeader").innerHTML = Leaders[2]
              if (LeadersPoints[2] == 1) {
                document.getElementById("secondScoring").innerHTML = (LeadersPoints[2] + " point")
              } else {
                document.getElementById("secondScoring").innerHTML = (LeadersPoints[2] + " points")
              }
            }
            break;
          case 2 :
            if (OverrideOrder[i] == "LG") {
              document.getElementById("thirdName").innerHTML = "Loose Gooses";
              document.getElementById("thirdPoints").innerHTML = LadderPoints[0];
              document.getElementById("thirdImagea").src = "../Images/LG_Final.png"
              document.getElementById("thirdImageb").src = "../Images/LG_Final.png"
              document.getElementById("thirdLeader").innerHTML = Leaders[0]
              if (LeadersPoints[0] == 1) {
                document.getElementById("thirdScoring").innerHTML = (LeadersPoints[0] + " point")
              } else {
                document.getElementById("thirdScoring").innerHTML = (LeadersPoints[0] + " points")
              }
            } else if (OverrideOrder[i] == "WW") {
              document.getElementById("thirdName").innerHTML = "Wet Willies";
              document.getElementById("thirdPoints").innerHTML = LadderPoints[1];
              document.getElementById("thirdImagea").src = "../Images/WW_Final.png"
              document.getElementById("thirdImageb").src = "../Images/WW_Final.png"
              document.getElementById("thirdLeader").innerHTML = Leaders[1]
              if (LeadersPoints[1] == 1) {
                document.getElementById("thirdScoring").innerHTML = (LeadersPoints[1] + " point")
              } else {
                document.getElementById("thirdScoring").innerHTML = (LeadersPoints[1] + " points")
              }
            } else {
              document.getElementById("thirdName").innerHTML = "5 Musketeers";
              document.getElementById("thirdPoints").innerHTML = LadderPoints[2];
              document.getElementById("thirdImagea").src = "../Images/5M_Final.png"
              document.getElementById("thirdImageb").src = "../Images/5M_Final.png"
              document.getElementById("thirdLeader").innerHTML = Leaders[2]
              if (LeadersPoints[2] == 1) {
                document.getElementById("thirdScoring").innerHTML = (LeadersPoints[2] + " point")
              } else {
                document.getElementById("thirdScoring").innerHTML = (LeadersPoints[2] + " points")
              }
            }
            break;
        }
      }
  }



}







function results() { 
  LGwins = 0
  WWwins = 0
  Mwins = 0
  LGloss = 0
  WWloss = 0
  Mloss = 0

  for (i = 0; i < Today.Winner.length; i++) {
    if (Today.Winner[i] == "Loose Gooses") {
      LGwins += 1
    } else if (Today.Winner[i] == "Wet Willies") {
      WWwins += 1
    } else {
      Mwins += 1
    }
  }

  for (i = 0; i < Today.Loser.length; i++) {
    if (Today.Loser[i] == "Loose Gooses") {
      LGloss += 1
    } else if (Today.Loser[i] == "Wet Willies") {
      WWloss += 1
    } else {
      Mloss += 1
    }
  }

  if ((LGwins/LGloss) > (WWwins/WWloss) && (LGwins/LGloss) > (Mwins/Mloss)) {
    document.getElementById("winning").innerHTML = "Loose Gooses";
  } else if ((WWwins/WWloss) > (LGwins/LGloss) && (WWwins/WWloss) > (Mwins/Mloss)) {
    document.getElementById("winning").innerHTML = "Wet Willies";
  } else {
    document.getElementById("winning").innerHTML = "5 Musketeers";
  }

  if ((LGwins/LGloss) < (WWwins/WWloss) && (LGwins/LGloss) < (Mwins/Mloss)) {
    document.getElementById("losing").innerHTML = "Loose Gooses";
  } else if ((WWwins/WWloss) < (LGwins/LGloss) && (WWwins/WWloss) < (Mwins/Mloss)) {
    document.getElementById("losing").innerHTML = "Wet Willies";
  } else {
    document.getElementById("losing").innerHTML = "5 Musketeers";
  }

  if (overrideW != "") {
    document.getElementById("winning").innerHTML = overrideW;
  }

  if (overrideL != "") {
    document.getElementById("losing").innerHTML = overrideL;
  }

  table = document.getElementById("mainTable");
  boxtable = document.getElementById("scoringTable")

  for (i = 0; i < Today.Winner.length; i++) {
    row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    cell1.innerHTML = i + 1;
    cell2.innerHTML = Today.Winner[i];
    cell3.innerHTML = Today.Loser[i];
    cell4.innerHTML = Today.Scorer[i];
    cell5.innerHTML = Today.Type[i];
    cell6.innerHTML = Today.WStreak[i];
    cell7.innerHTML = Today.LStreak[i];
    cell8.innerHTML = Today.SStreak[i];
  }

  players = ["Jasper Collier", "Conor Farrington", "Alexander Galt", "Rudy Hoschke", 
            "Michael Iffland", "Lukas Johnston", "Clarrie Jones", "William Kim",
            "Samuel McConaghy", "Ryan Pattemore", "Nick Szogi", "Christopher Tomkinson", 
            "Angus Walker", "Willie Weekes", "Mitch Yue", "Sam James"
    ]

  for (x = 0; x < players.length; x ++) {
    finishes = 0
    midrange = 0
    threes = 0

    for (i = 0; i < Today.Winner.length; i++) {
      if (Today.Scorer[i] == players[x]) {
        if (Today.Type[i] == "Finish") {
          finishes += 1
        } else if (Today.Type[i] == "Midrange") {
          midrange += 1
        } else {
          threes += 1
        }
      }
    }

    row = boxtable.insertRow(-1);
    row.classList.add("boxScore")
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    
    cell1.innerHTML = players[x];
    cell2.innerHTML = boldNumber((finishes + midrange + (2 * threes)));
    cell3.innerHTML = boldNumber(finishes);
    cell4.innerHTML = boldNumber(midrange);
    cell5.innerHTML = boldNumber(threes);
  }

}





function asOf() {
  if (overRideDate == "") {
    x = document.getElementById("asOf");
    extra = "th"
    dateNumber = Number(Today.Date[0].slice(0,2))
    dateMonth = Today.Date[0].slice(getlength(dateNumber) + 1)

    if (dateNumber == 1 || dateNumber == 21 || dateNumber == 31) {
      extra = "st"
    } else if (dateNumber == 2 || dateNumber == 22) {
      extra = "nd"
    } else if (dateNumber == 3 || dateNumber == 23) {
      extra = "rd"
    }

    x.innerHTML = dateNumber + extra + " of " + dateMonth
  } else {
    x = document.getElementById("asOf");
    x.innerHTML = overRideDate
  }

}

function getlength(number) {
  return number.toString().length;
}

function boldNumber(number) {
  if (number != 0) {
    return("<span class='boldNumber'>" + number + "</span>")
  } else {
    return(number)
  }
}



function AddData(array, elementID) {
  for (i = 0; i < array.length; i++) {
    element = document.createElement("p")
    if (i==0) {
      element.innerHTML = "<strong>GM - " + array[i] + "</strong>"
    } else {
      element.innerHTML = array[i]
    }
    
    document.getElementById(elementID).appendChild(element)
  }
}