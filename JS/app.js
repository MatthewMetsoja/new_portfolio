function headerLoad(){

    const smokeVid = document.getElementById("smokeVideo");
    const fullName = document.getElementById("fullName");
    const burger = document.getElementById('hiddenCheck');

    
    burger.addEventListener('click', () => {
        if(burger.checked === false && YOffset <= main.offsetTop){
            burger.style.display = 'none';            
        }
        else{
            burger.style.display = 'flex';
        }
    });


    function navScroll() {
        const stickyNav = document.querySelector(".sticky");
        

        const main = document.getElementById("main");
        const YOffset = window.pageYOffset;
    
        if (YOffset >= main.offsetTop || burger.checked === true) {
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
