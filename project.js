window.addEventListener('DOMContentLoaded', () => {
    mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));
    
    let projects = [];

    let proj1 = {
        name: "Chicago City-Owned Land Searcher",
        desc: "Installable site that utilizes City of Chicago API to retrieve\n City-Owned Land using user selected criteria.",
        tools: "ServiceWorker, JSON, JavaScript, CSS, HTML.",
        repo: "https://github.com/hcedenoindri/IT202-Spring2021-project1.git",
        url: "https://hcedenoindri.github.io/IT202-Spring2021-project1/",
        img: "proj1.png",
        display: true
    };
    projects.push(proj1);

    let proj2 = {
        name: "The Plane Game",
        desc: "Installable side-scrolling game that uses basic spritesheets and HTML Canvas animation.",
        tools: "Canvas, ServiceWorker, JSON, JavaScript, CSS, HTML.",
        repo: "https://github.com/hcedenoindri/it202-Spring2021-project2.git",
        url: "https://hcedenoindri.github.io/it202-Spring2021-project2/",
        img: "proj2.png",
        display: true        
    };
    projects.push(proj2);

    projects.forEach( (proj) => {
        if (proj.display === true) {
            // // create and append card
            // let card = document.createElement("div");
            // let card_img = document.createElement("div");
            // card_img.class = "mdc-card__media";
            // card_img.style.backgroundImage = url(proj.img);
            // card.class = "mdc-card";

        }
    });

});