var myVid = document.getElementById("backgroundVideo");
switch (Math.floor(Math.random() * 5)) {
  case 0:
    myVid.src = "Videos/Decider Game.mp4"
    break;
  case 1:
    myVid.src = "Videos/Part 1.mp4"
    break;
  case 2:
    myVid.src = "Videos/Part 2.mp4"
    break;
  case 3:
    myVid.src = "Videos/Part 3.mp4"
    break;
  case 4:
    myVid.src = "Videos/Part 4.mp4"
}