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
        






    /* Past Results Section  */

    
    dayOne = document.getElementById("dOne")

    dayOne.innerHTML = "<td>" + String(dayOneArray.Date[number]) + "</td>" + 
    "<td>" + String(dayOneArray.Points[number]) + "</td>" + 
    "<td>" + String(dayOneArray.Finishes[number]) + "</td>" + 
    "<td>" + String(dayOneArray.Midranges[number]) + "</td>" + 
    "<td>" + String(dayOneArray.ThreePointers[number]) + "</td>"

    dayTwo = document.getElementById("dTwo")

    dayTwo.innerHTML = "<td>" + String(dayTwoArray.Date[number]) + "</td>" + 
    "<td>" + String(dayTwoArray.Points[number]) + "</td>" + 
    "<td>" + String(dayTwoArray.Finishes[number]) + "</td>" + 
    "<td>" + String(dayTwoArray.Midranges[number]) + "</td>" + 
    "<td>" + String(dayTwoArray.ThreePointers[number]) + "</td>"

}   
