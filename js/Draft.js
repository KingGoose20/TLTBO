hasran = false

function mainDraft() {
    if (!hasran) {
        DraftText = document.getElementById("DraftText")
        DraftText.classList.add("Disappear")
        DraftElement = document.getElementById("DraftElement")
        setTimeout(() => { DraftElement.remove(); }, 5000);
        hasran = true
    }

}

if (screen.width > 850) {
    mainDraft()
} else {
    console.log((screen.width))
}