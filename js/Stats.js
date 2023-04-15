let images = ['./images/one.jpg','./images/two.jpg','./images/three.jpg'];
let main = document.getElementById("main")
let points = document.getElementById("points")
let finishes = document.getElementById("finishes")
let midranges = document.getElementById("midranges")
let threepointers = document.getElementById("threepointers")
let accolade1 = document.getElementById("accolade1")
let accolade2 = document.getElementById("accolade2")
let accolade3 = document.getElementById("accolade3")
let accolade4 = document.getElementById("accolade4")
let accolade5 = document.getElementById("accolade5")
let accolade6 = document.getElementById("accolade6")
let accolade7 = document.getElementById("accolade7")
let accolade8 = document.getElementById("accolade8")
let history = document.getElementById("history")
let TeamImage = document.getElementById("TeamImage")
let PlayerImage = document.getElementById("PlayerImage")
let number = -1
let mainArea = document.getElementById("mainArea")
mainArea.style.display = "none"
let pastDetails = document.getElementById("pastDetails")
pastDetails.style.display = "none"


  let selectDiv = document.getElementById('changer');
  selectDiv.addEventListener('change',function(e){

switch (e.target.value) {
  case 'zero' :
    number = 0
    break;
  case 'one' :
    number = 1
    break;
  case 'two' :
    number = 2
    break;
  case 'three' :
    number = 3
    break;
  case 'four' :
    number = 4
    break;
  case 'five' :
    number = 5
    break;
  case 'six' :
    number = 6
    break;
  case 'seven' :
    number = 7
    break;
  case 'eight' :
    number = 8
    break;
  case 'nine' :
    number = 9
    break;
  case 'ten' :
    number = 10
    break;
  case 'eleven' :
    number = 11
    break;
  case 'twelve' :
    number = 12
    break;
  case 'thirteen' :
    number = 13
    break;
  case 'fourteen' :
    number = 14
    break;
}
RunMain()
  });

function RunMain() {
    points.innerHTML = String(mainArray.PPG[number]) + "/" + String(mainArray.TP[number])
    finishes.innerHTML = String(mainArray.FPG[number]) + "/" + String(mainArray.TF[number])
    midranges.innerHTML = String(mainArray.MPG[number]) + "/" + String(mainArray.TM[number])
    threepointers.innerHTML = String(mainArray.TPG[number]) + "/" + String(mainArray.TT[number])
    accolade1.innerHTML = mainArray.AccoladesOne[number]
    accolade2.innerHTML = mainArray.AccoladesTwo[number]
    accolade3.innerHTML = mainArray.AccoladesThree[number]
    accolade4.innerHTML = mainArray.AccoladesFour[number]
    accolade5.innerHTML = mainArray.AccoladesFive[number]
    accolade6.innerHTML = mainArray.AccoladesSix[number]
    accolade7.innerHTML = mainArray.AccoladesSeven[number]
    accolade8.innerHTML = mainArray.AccoladesEight[number]
    history.innerHTML = mainArray.History[number]
    TeamImage.src = mainArray.TeamImage[number]
    PlayerImage.src = mainArray.PlayerImage[number]
    mainArea.style.display = ''
    pastDetails.style.display = ""



    /* Past Results Section  */
    dayArrayOne = ["dOne", "dTwo", "da", "db", "dc", "dd", "de", "df"]
    
    for (let i = 0; i < dayArrayOne.length; i++) {
      x = document.getElementById(dayArrayOne[i])
      day = dayTwoArray;
      
      switch (i) {
        case 0:
          day = dayOneArray;
          break;
        case 3:
          day = dayOneArray;
          break;
        case 7:
          day= dayOneArray;
          break;
      }
      x.innerHTML = "<td>" + String(day.Date) + "</td>" + 
      "<td>" + String(day.Points[number]) + "</td>" + 
      "<td>" + String(day.Finishes[number]) + "</td>" + 
      "<td>" + String(day.Midrange[number]) + "</td>" + 
      "<td>" + String(day.ThreePointers[number]) + "</td>"
    }
}   
