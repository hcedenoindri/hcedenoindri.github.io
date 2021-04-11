window.addEventListener('DOMContentLoaded', () => {
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
        display: false        
    };
    projects.push(proj2);

    const card = document.querySelector('.my-card');
    projects.forEach( (proj) => {
        if (proj.display === true) {
            // create and append card
            card.querySelector('.my-card__media').style.background = 'url(' + proj.img +')';
            card.querySelector('.my-card__title').innerText = proj.name;
            card.querySelector('.my-card__subhead').innerText = proj.tools;
            card.querySelector('.my-card__supporting-text').innerText = proj.desc;
            card.querySelector('#b1').href = proj.url;
            card.querySelector('#b2').href = proj.repo;
        }
    });

});