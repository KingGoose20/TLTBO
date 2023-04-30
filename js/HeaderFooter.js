function header(location) {
    const template = document.createElement('template');

    template.innerHTML = `
        <div class="Whole">
        <div class="w-container">
        <a href="replacerindex.html" class="heading w--current" style="padding:8px;">
            <h1 class="title animate-character"><img src="replacerImages/Logo.png" style="width:0.75em"><span class="heading-hide">   Lunch Time Basketballers</span><span class="inverseheading-hide">   TLTBO</span></h1>
        </a>
        <nav class="navbar heading-links w-nav-menu">
            <ul class="nav-menu">
            <li class="nav-item">
                <a href="replacerDocumentsAndIco/Ladder.html" class="navigation-link w-nav-link">Ladder</a>
            </li>
            <li class="nav-item">
                <a href="replacerDocumentsAndIco/Results.html" class="navigation-link w-nav-link">Results</a>
            </li>
            <li class="nav-item">
                <a href="replacerDocumentsAndIco/News.html" class="navigation-link w-nav-link">News</a>
            </li>
            <li class="nav-item">
                <a href="replacerDocumentsAndIco/Stats.html" class="navigation-link w-nav-link">Stats</a>
            </li>
            <li class="nav-item">
                <a href="replacerDocumentsAndIco/Rules.html" class="navigation-link w-nav-link">Rules + More</a>
            </li>
            </ul>
            <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            </div>
        </nav>
        </div>
        </div>
    `;

    if (location == "news") {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "../../");
        template.innerHTML = template.innerHTML.replace('w-nav-link">News</a>', 'w-nav-link w--current">News</a>')
    } else if (location == "index") {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "")
    } else {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "../")
    }

    switch (document.title.slice(0,-8)) {
        case "Ladder" :
            template.innerHTML = template.innerHTML.replace('w-nav-link">Ladder</a>', 'w-nav-link w--current">Ladder</a>')
            break;
        case "Results" :
            template.innerHTML = template.innerHTML.replace('w-nav-link">Results</a>', 'w-nav-link w--current">Results</a>')
            break;
        case "News" :
            template.innerHTML = template.innerHTML.replace('w-nav-link">News</a>', 'w-nav-link w--current">News</a>')
            break;
        case "Stats" :
            template.innerHTML = template.innerHTML.replace('w-nav-link">Stats</a>', 'w-nav-link w--current">Stats</a>')
            break;
        case "Rules" :
            template.innerHTML = template.innerHTML.replace('w-nav-link">Rules + More</a>', 'w-nav-link w--current">Rules + More</a>')
            break;
        case "App" :
            template.innerHTML = template.innerHTML.replace('w-nav-link">Stats</a>', 'w-nav-link w--current">Stats</a>')
            break;
            
    }

    document.getElementById("header").appendChild(template.content);

}







function footer(location) {
    const template = document.createElement('template');

    template.innerHTML = `
        <div class="section accent">
        <div class="w-container">
            <div class="footer">
            <div class="w-container">
                <div class="w-row">
                <div class="spc w-col w-col-6">
                    <h5>About the Lunch Time Basketball Organisation</h5>
                    <p>This website is a free source of knowledge to learn more about the lunch time basketball.</p>
                </div>
                <div class="spc w-col w-col-6">
                    <h5>useful links</h5>
                    <a href="replacerDocumentsAndIco/Ladder.html" class="footer-link">Ladder</a>
                    <a href="replacerDocumentsAndIco/Results.html" class="footer-link">Results</a>
                    <a href="replacerDocumentsAndIco/News.html" class="footer-link">News</a>
                    <a href="replacerDocumentsAndIco/Stats.html" class="footer-link">Stats</a>
                    <a href="replacerDocumentsAndIco/Rules.html" class="footer-link">Rules</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div class="footer center">
        <div class="w-container">
            <div class="footer-text">© 2023 The Lunchtime Basketball Organisation</a>
            <br>
            <br>
            <img src="replacerImages/Logo.png" style="height: 20%; width:20%;">
            </div>
        </div>
        </div>
    `;

    if (location == "news") {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "../../");
    } else if (location == "index") {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "")
    } else {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "../")
    }
    
    if (location == "stats"){
        x = `
        accent">
        <div>
            <a href="../Stat Tracker/Main.html" class="button">Click here to go to stat tracking app</a>
        </div>
        `;
        
        template.innerHTML = template.innerHTML.replace('accent">', x)
    }
    if (location == "results" || location == "stats") {
        template.innerHTML = template.innerHTML.replace('accent', "")
    }

    document.getElementById("footer").appendChild(template.content);

}
