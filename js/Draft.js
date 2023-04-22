DraftText = document.getElementById("DraftText")
DraftText.classList.add("Disappear")
DraftElement = document.getElementById("DraftElement")
setTimeout(() => { DraftElement.remove(); }, 5000);