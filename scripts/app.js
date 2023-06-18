// smooth scroll down to About Me section of the page
document.getElementById("btnAbout").addEventListener('click', function(){
    document.getElementById("about-page").scrollIntoView({behavior: 'smooth', block: 'start'})
})

// smooth scroll down to Skills section of page
document.getElementById("btnSkills").addEventListener('click', function(){
    document.getElementById("skills-page").scrollIntoView({behavior: 'smooth', block: 'start'});
})

// smooth scroll down to Portfolio section of page
document.getElementById("btnPortfolio").addEventListener('click', function(){
    document.getElementById("portfolio-page").scrollIntoView({behavior: 'smooth', block: 'start'})
})
