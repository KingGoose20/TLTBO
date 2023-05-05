NewsTemplate = {
    "ArticleName":[""],
    "ArticleDescription":[""],
    "ArticleDate":[""],
    "ImageA":[""],
    "ImageB":[""],
    "ImageC":[""],
    "ImageD":[""],
    "ArticleLink":[""],
    "ArticleType":[""]
}

Preseason = {
    "ArticleName":["Explaining the Term 2 Draft and Tournament", "Preseason Summary by Rudy Hoschke!"],
    "ArticleDescription":["TLTBO CEO and GM Angus Walker breaks down how the second season of LTB will work, covering the draft, changes to the website, and changes to the game.", "EX-GM Rudy Hoschke has provided us with a detailed analysis on the results of the preseason, and what to expect from each team during the Term 2 Tournament."],
    "ArticleDate":["15/04", "20/04"],
    "ImageA":["Logo.png", "Logo.png"],
    "ImageB":["", "WW_Final.png"],
    "ImageC":["", ""],
    "ImageD":["", ""],
    "ArticleLink":["01.html", "02.html"],
    "ArticleType":["Normal", "Normal"]
}

Week1 = {
    "ArticleName":["All Lunch Team | Week 1 Day 1", "All Lunch Team | Week 1 Day 2"],
    "ArticleDescription":["Clarrie Jones has announced his All-Lunch top 5 offensive and defensive players from the first day of the tournament!", "Clarrie Jones has announced the All-Lunch top 5 offensive and defensive players from the second day of the tournament."],
    "ArticleDate":["24/04", "26/04"],
    "ImageA":["Logo.png", "Logo.png"],
    "ImageB":["LG_Final.png", "LG_Final.png"],
    "ImageC":["WW_Final.png", "WW_Final.png"],
    "ImageD":["5M_Final.png", "5M_Final.png"],
    "ArticleLink":["OD.html?Date=2404", "OD.html?Date=2604"],
    "ArticleType":["Black", "Black"]
}

Week2 = {
    "ArticleName":["All Lunch Team | Week 2 Day 1","All Lunch Team | Week 2 Day 2"],
    "ArticleDescription":["Clarrie Jones has announced his All-Lunch top 5 offensive and defensive players from the first day of the second week!","Clarrie Jones has announced the All-Lunch top 5 offensive and defensive players from the second day of the second week!"],
    "ArticleDate":["2/05","3/05"],
    "ImageA":["Logo.png", "Logo.png"],
    "ImageB":["LG_Final.png", "LG_Final.png"],
    "ImageC":["WW_Final.png", "WW_Final.png"],
    "ImageD":["5M_Final.png", "5M_Final.png"],
    "ArticleLink":["OD.html?Date=0205","OD.html?Date=0305"],
    "ArticleType":["Black","Black"]
}

Week3 = {
    "ArticleName":[""],
    "ArticleDescription":[""],
    "ArticleDate":[""],
    "ImageA":[""],
    "ImageB":[""],
    "ImageC":[""],
    "ImageD":[""],
    "ArticleLink":[""],
    "ArticleType":[""]
}

Week4 = {
    "ArticleName":[""],
    "ArticleDescription":[""],
    "ArticleDate":[""],
    "ImageA":[""],
    "ImageB":[""],
    "ImageC":[""],
    "ImageD":[""],
    "ArticleLink":[""],
    "ArticleType":[""]
}

Week5 = {
    "ArticleName":[""],
    "ArticleDescription":[""],
    "ArticleDate":[""],
    "ImageA":[""],
    "ImageB":[""],
    "ImageC":[""],
    "ImageD":[""],
    "ArticleLink":[""],
    "ArticleType":[""]
}

Finals = {
    "ArticleName":[""],
    "ArticleDescription":[""],
    "ArticleDate":[""],
    "ImageA":[""],
    "ImageB":[""],
    "ImageC":[""],
    "ImageD":[""],
    "ArticleLink":[""],
    "ArticleType":[""]
}

numberOfElements = 0

function createArticles(variableToUse, elementID) {
    isEven = false
    if ((variableToUse.ArticleName.length % 2) == 0) {
        isEven = true
    }
    main = document.getElementById(elementID)
    template = document.getElementsByTagName("template")[0];
    rowToUse = ""
    for (i = 0; i < variableToUse.ArticleName.length; i++) {
        if ((i%2) == 0) {
            rowToUse = document.createElement("div")
            rowToUse.id = i
            rowToUse.classList.add("NewsHeader")
        }
        clone = template.content.cloneNode(true);
        clone.getElementById("Title").innerHTML = variableToUse.ArticleName[i]
        clone.getElementById("Description").innerHTML = variableToUse.ArticleDescription[i]
        clone.getElementById("Date").innerHTML = variableToUse.ArticleDate[i]
        clone.getElementById("Link").href = "NewsPages/" + variableToUse.ArticleLink[i]
        switch (variableToUse.ArticleType[i]) {
            case "Normal" :
                break;
            case "White" :
                clone.getElementById("startImages").style.backgroundColor = "rgb(230,230,230)";
                clone.getElementById("Title").style.color = "rgb(0,0,0)"
                clone.getElementById("Description").style.color = "rgb(0,0,0)"
                clone.getElementById("Date").style.color = "rgb(0,0,0)"
                break;
            case "Black" :
                clone.getElementById("startImages").style.backgroundColor = "rgb(0,0,0)";
                break;
        }

        if (variableToUse.ImageA[i] != "") {
            clone.getElementById("ImageA").src = "../Images/" + variableToUse.ImageA[i]
        } else {
            clone.getElementById("ImageA").remove();
        }

        if (variableToUse.ImageB[i] != "") {
            clone.getElementById("ImageB").src = "../Images/" + variableToUse.ImageB[i]
        } else {
            clone.getElementById("ImageB").remove();
        }

        if (variableToUse.ImageC[i] != "") {
            clone.getElementById("ImageC").src = "../Images/" + variableToUse.ImageC[i]
        } else {
            clone.getElementById("ImageC").remove();
        }

        if (variableToUse.ImageD[i] != "") {
            clone.getElementById("ImageD").src = "../Images/" + variableToUse.ImageD[i]
        } else {
            clone.getElementById("ImageD").remove();
        }
        if ((variableToUse.ArticleName.length % 2) == 0) {
            if ((i % 2) != 0 ) {
                
                clone.getElementById("Header").style.float = "left";
            } else {
                
                clone.getElementById("Header").style.float = "right";
            }
        } else {
            if (i == (variableToUse.ArticleName.length-1)) {
            clone.getElementById("Header").style.width = "100%";
            clone.getElementById("Header").style.float = "position";
            clone.getElementById("Header").style.marginBottom = "50px"
        } else if ((i % 2) == 0 ) {
            clone.getElementById("Header").style.float = "right";
        } else {
            clone.getElementById("Header").style.float = "left";
        }
        }

        clone.getElementById("Header").id = "Element" + numberOfElements
        rowToUse.insertBefore(clone, rowToUse.children[0])

        main.insertBefore(rowToUse, main.children[0])
        numberOfElements += 1
    }
}


function onHover(elementToUse) {
    if (elementToUse.getElementsByTagName("div")[0].style.backgroundColor == "rgb(230, 230, 230)") {
        elementToUse.getElementsByTagName("h3")[0].classList.add("TitleHoverInverse")
        elementToUse.getElementsByTagName("p")[0].classList.add("TitleHoverInverse")
        elementToUse.getElementsByTagName("h5")[0].classList.add("TitleHoverInverse")
    } else {
        elementToUse.getElementsByTagName("h3")[0].classList.add("TitleHover")
        elementToUse.getElementsByTagName("p")[0].classList.add("TitleHover")
        elementToUse.getElementsByTagName("h5")[0].classList.add("TitleHover")
    }

}

function offHover(elementToUse) {
    elementToUse.getElementsByTagName("h3")[0].classList.remove("TitleHover")
    elementToUse.getElementsByTagName("p")[0].classList.remove("TitleHover")
    elementToUse.getElementsByTagName("h5")[0].classList.remove("TitleHover")
    elementToUse.getElementsByTagName("h3")[0].classList.remove("TitleHoverInverse")
    elementToUse.getElementsByTagName("p")[0].classList.remove("TitleHoverInverse")
    elementToUse.getElementsByTagName("h5")[0].classList.remove("TitleHoverInverse")
}