oPlayers = []
dPlayers = []
oDescription = ""
dDescription = ""

function LogPlayers() {
    o = document.getElementById("oPlayer")
    d = document.getElementById("dPlayer")
    oPlayers.push(o.options[o.selectedIndex].text)
    dPlayers.push(d.options[d.selectedIndex].text)
    document.getElementById("number").innerHTML = oPlayers.length + 1
    node = document.createElement("td")
    textnode = document.createTextNode(oPlayers.length + ". " + (o.options[o.selectedIndex].text));
    node.appendChild(textnode);
    document.getElementById("oPlayersTable").appendChild(node);

    node = document.createElement("td")
    textnode = document.createTextNode(dPlayers.length + ". " + (d.options[d.selectedIndex].text));
    node.appendChild(textnode);
    document.getElementById("dPlayersTable").appendChild(node);

    alert("Logged")
}


function SaveDetails() {
    oDescription = document.getElementById("offensiveDescription").value
    dDescription = document.getElementById("defensiveDescription").value
    oTable = document.getElementById("oDescriptionTable")
    dTable = document.getElementById("dDescriptionTable")
    node = document.createElement("td")
    for (i = 1; i < document.getElementById("dDescriptionTable").children.length; i++) {
        oTable.removeChild(oTable.lastElementChild)
        dTable.removeChild(dTable.lastElementChild)
    }

    textnode = document.createTextNode(dDescription);
    node.appendChild(textnode);
    document.getElementById("dDescriptionTable").appendChild(node);

    node = document.createElement("td")
    textnode = document.createTextNode(oDescription);
    node.appendChild(textnode);
    document.getElementById("oDescriptionTable").appendChild(node);
}

function exportToEmail() {
    elements = ["", "", "", ""]
    for (i = 0; i<4; i++) {
        console.log("ran")
        if (i < 2) {
            if (i==0) {
                middle = ""
                for (x = 0; x<oPlayers.length; x++) {
                    middle = middle + '"' + oPlayers[x] + '"'
                    if (x+1 < oPlayers.length) {
                        middle = middle + ','
                    }
                }
                elements[i] = '"Offensive":[' + middle + '],'
            } else {
                middle = ""
                for (x = 0; x<dPlayers.length; x++) {
                    middle = middle + '"' + dPlayers[x] + '"'
                    if (x+1 < dPlayers.length) {
                        middle = middle + ','
                    }
                }
                elements[i] = '"Defensive":[' + middle + '],'
            }

        } else {
            if (i == 2) {
                elements[i] = '"OffensiveDescription":["' + oDescription + '"],'
            } else {
                elements[i] = '"DefensiveDescription":["' + dDescription + '"]'
            }
        }
    }
    toExport = elements[0] + "\n" + elements[1] + "\n" + elements[2] + "\n" + elements[3];
    console.log(toExport)

    // Copy the text inside the text field
    navigator.clipboard.writeText(toExport);

    // Alert the copied text
    alert("The following text has been copied to the clipboard: \n\n" + toExport + "\n\nPlease send me this directly.");
}