const smokeVid = document.getElementById("smokeVideo");
const fullName = document.getElementById("fullName");

setTimeout( () => {
    
    smokeVid.style.opacity = 1;
    smokeVid.play();
}, 1000);


setTimeout( () => {
    // const smokeVid = document.getElementById("smokeVideo");
    smokeVid.style.opacity = 0;
    
}, 7000);

setTimeout( () => {
    // const smokeVid = document.getElementById("smokeVideo");
    smokeVid.style.display = 'none';
    
}, 8000);

setTimeout( () => {
    // const smokeVid = document.getElementById("smokeVideo");
    fullName.classList.add('fullName');
    
}, 7000);

