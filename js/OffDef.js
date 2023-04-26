template = {
    "Date":[""],
    "WeeklyPosition":[""],
    "Offensive":[""],
    "Defensive":[""],
    "OffensiveDescription":[""],
    "DefensiveDescription":[""]
}

weekOnedayOne = {
    "Date":["24/04"],
    "WeeklyPosition":["First day of the tournament"],
    "Offensive":["Alexander Galt", "Angus Walker", "Samuel McConaghy", "Rudy Hoschke", "Lukas Johnston"],
    "Defensive":["Samuel McConaghy", "Alexander Galt", "Clarrie Jones", "Angus Walker", "Nicholas Szogi"],
    "OffensiveDescription":["In a day of few scores (wind ☹) Alexander Galt and Angus Walker both finished on the same number of points on the day (3) however as the 5 Musketeers finished 1st Alexander takes the top spot. Samuel McConaghy played great as a playmaker, setting up Alex with loads of opportunity, while also coming through with 2 points of his own. Rudy and Lukas both finished the day with 1 point. There were no other point scorers on the day"],
    "DefensiveDescription":["Samuel McConaghy is back like he never left, with some trademark unbreachable defence, lightning quick hands to get steals, and insane hops to contest shots. Alex joined Samuel to create a wall of 5 Musketeers, and I come in at third with 3 blocks in one game. Angus proves again that he is him, spending all of lunch having to deal with the best players on the opposing teams. Nick rounds of the list at 5, with impressive all-round interior and perimeter defence."]
}

weekOneDayTwo = {
    "Date":["26/04"],
    "WeeklyPosition":["Second day of the tournament"],
    "Offensive":["Nicholas Szogi", "Rudy Hoschke", "Angus Walker", "Mitch Yue", "Michael Iffland"],
    "Defensive":["Alexander Galt", "Angus Walker", "Rudy Hoschke", "Nicholas Szogi", "William Kim"],
    "OffensiveDescription":["Nicholas Szogi had the equal highest points on the day (2) some of those being incredibly tough shots, as well as coming down with some quality boards. Rudy Hoschke played a similar game, also coming in with 2 points. Angus, as usual, created some high-quality scoring chances, with tough moves to get him and others open to score. Michael and Mitch both came in with 1 point, however Mitch shot 1 from 1, and was safe with the ball, which set him above Michael."],
    "DefensiveDescription":["Alex Galt was like a wall in the paint, his interior defence coming clutch to give the short-handed 5 musketeers the win today. Angus just did Angus things, making feats such as guarding Rudy and Alex look like child’s play. Rudy was much the same, coming in with a strong interior and perimeter game. Nicholas was also pivotal in the 5 musketeers win, and Will Kim played strongly, as well as stunning the crowd with a strong block on Alex."]
}

function main(setToUse) {
    document.getElementById("date").innerHTML = setToUse.Date[0]
    for (i = 0; i < setToUse.Offensive.length; i++) {
        toAdd = "<li>" + setToUse.Offensive[i] + "</li>"
        document.getElementById("offensive").insertAdjacentHTML("beforeend", toAdd)
    }
    for (i = 0; i < setToUse.Defensive.length; i++) {
        toAdd = "<li>" + setToUse.Defensive[i] + "</li>"
        document.getElementById("defensive").insertAdjacentHTML("beforeend", toAdd)
    }
    document.getElementById("offensiveDescription").innerHTML = setToUse.OffensiveDescription[0]
    document.getElementById("defensiveDescription").innerHTML = setToUse.DefensiveDescription[0]
    document.getElementById("WeeklyPosition").innerHTML = setToUse.WeeklyPosition[0]
}