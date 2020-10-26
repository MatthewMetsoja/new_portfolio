function headerLoad(){

    const smokeVid = document.getElementById("smokeVideo");
    const fullName = document.getElementById("fullName");
    const fullNameSticky = document.getElementById("stickyFullName");

    function navScroll() {

        const stickyNav = document.querySelector(".sticky");
        // const header = document.getElementById("header");
        const main = document.getElementById("main");
        const YOffset = window.pageYOffset;
    
        if (YOffset >= main.offsetTop) {
            stickyNav.style.top = 0;
            stickyNav.style.transition = 'all .4s ease';
        } else {
            stickyNav.style.top = '-6rem';
        }
    }
    
    function runSmoke(){
        setTimeout( () => {     
                 smokeVid.style.opacity = 1,
                 smokeVid.play()            
        }, 1000)
    };
   
    function removeVideo(){
        setTimeout( () => {
            smokeVid.style.opacity = 0;
            smokeVid.style.display = 'none';
            
        }, 7000);
    }

    function addNeon(){
        setTimeout( () => {
            fullName.classList.add('glow');  
        }, 8000);
    }

    window.addEventListener('scroll', navScroll);
    
    runSmoke();
    removeVideo();
    addNeon();
                   
}


headerLoad();
