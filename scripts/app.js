document.onload = typeIntroSplash()
document.onload = fadeInDelay()

// create active typing effect for intro splash
function typeIntroSplash() {
    let iName = "James Hare"; let iN = 0;
    let iTitle = "Computer Programmer Analyst"; let iT = 0;
    
    let outName = document.getElementById('introName');
    let outTitle = document.getElementById('introTitle');

    typeName();

    function typeName() {
        if (iN < iName.length) {
            if (iN == 0) { 
                outName.innerHTML = ""; 
                outName.style.color = "#000000" 
            }
            outName.innerHTML += iName[iN];
            iN++;

            setTimeout(function(){typeName()},100);
        }
        else setTimeout(function(){typeTitle()},750);
    }

    function typeTitle() {
        if (iT < iTitle.length) {
            if (iT == 0) { 
                outTitle.innerHTML = ""; 
                outTitle.style.color = "#000000" 
            }
            outTitle.innerHTML += iTitle[iT];
            iT++;

            setTimeout(function(){typeTitle()},50);
        }
    }
}

// 
function fadeInDelay() {
    let splashButtons = document.getElementById('fadeIn');
    splashButtons.style.opacity = 0;
    setTimeout(function(){ setOpacityOn() }, 6400);

    function setOpacityOn() {
        splashButtons.style.opacity = 1
    }
}

    // smooth scroll down to About Me section of the page
document.getElementById("btnAbout").addEventListener('click', function(){
    document.getElementById("about-page").scrollIntoView({behavior: 'smooth', block: 'start'});
})

// smooth scroll down to Portfolio section of page
document.getElementById("btnPortfolio").addEventListener('click', function(){
    document.getElementById("portfolio-page").scrollIntoView({behavior: 'smooth', block: 'start'});
})
