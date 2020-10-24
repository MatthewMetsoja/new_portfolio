const smokeVid = document.getElementById("smokeVideo");

setTimeout( () => {
    
    smokeVid.style.opacity = 1;
    smokeVid.play();
}, 1000);


setTimeout( () => {
    // const smokeVid = document.getElementById("smokeVideo");
    smokeVid.style.opacity = 0;
    
}, 7000);

