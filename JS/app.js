function headerLoad(){

    const smokeVid = document.getElementById("smokeVideo");
    const fullName = document.getElementById("fullName");
    const burger = document.getElementById('hiddenCheck');
    const stickyNav = document.getElementById('sticky');

    function navScroll() {
        const stickyNav = document.querySelector(".sticky");
        

        const main = document.getElementById("main");
        const YOffset = window.pageYOffset;
    
        if (YOffset >= main.offsetTop || burger.checked === true) {
            stickyNav.style.top = 0;
            stickyNav.style.transition = 'all .4s ease';
            stickyNav.style.display = 'flex';
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

    burger.addEventListener('click', () => {
        if(burger.checked === false) {   
            stickyNav.style.top = '-20rem'; 
        }
    });
    
}


function carousel() {
    const container = document.querySelector('.skills');

    const leftBtn = document.querySelector('.btn--left');
    const rightBtn = document.querySelector('.btn--right');

    const slide1 = document.querySelector('.skills__slide--1');
    const slide2 = document.querySelector('.skills__slide--2');
    const slide3 = document.querySelector('.skills__slide--3');

    const dotsContainer = document.querySelector('.skills__dots');
    const dot1 = dotsContainer.firstElementChild;

    //  create array from parent so we can see all the indicator dots
    const indicatorArray = Array.from(dotsContainer.children);

    // get the size of the slide container, this returns an array with all that good stuff.
    let slideWidth = slide1.getBoundingClientRect().width;
   
    // update slide container width on resize;
    window.onresize = function(){
        slideWidth = slide1.getBoundingClientRect().width;
        setSlidePositions();
    }

    // arrange the slides original positions, added as function so we can use inside the page resize 
    function setSlidePositions(){
        slide1.style.left = 0;
        slide2.style.left = -slideWidth + 'px';
        slide3.style.left = -(slideWidth * 2) + 'px';
    }
    
    // as above
    setSlidePositions();

    // when I click left move slide to the left
    leftBtn.addEventListener('click', () => {
        
        // get the current slide
        let oldSlide = document.querySelector('.skills__slide--current');
        
        if(oldSlide.classList.contains('skills__slide--1')){
            oldSlide.classList.remove('skills__slide--current');
            document.querySelector('.skills__slide--3').classList.add('skills__slide--current');
            
            // update dots
            indicatorArray[0].classList.remove('skills__dots__indicator--current');
            indicatorArray[2].classList.add('skills__dots__indicator--current');
        }
        else if(oldSlide.classList.contains('skills__slide--3')){
            oldSlide.classList.remove('skills__slide--current');
            document.querySelector('.skills__slide--2').classList.add('skills__slide--current');

             // update dots
             indicatorArray[2].classList.remove('skills__dots__indicator--current');
             indicatorArray[1].classList.add('skills__dots__indicator--current');
        }
        else if(oldSlide.classList.contains('skills__slide--2')){
            oldSlide.classList.remove('skills__slide--current');
            document.querySelector('.skills__slide--1').classList.add('skills__slide--current');

             // update dots
             indicatorArray[1].classList.remove('skills__dots__indicator--current');
             indicatorArray[0].classList.add('skills__dots__indicator--current');
        }
        console.log(oldSlide);
    });
    // when I click right move slide to the right
    rightBtn.addEventListener('click', () => {
        
        // get the current slide
        let oldSlide = document.querySelector('.skills__slide--current');
        
        if(oldSlide.classList.contains('skills__slide--1')){
            oldSlide.classList.remove('skills__slide--current');
            document.querySelector('.skills__slide--2').classList.add('skills__slide--current');
            
            // update dots
            indicatorArray[0].classList.remove('skills__dots__indicator--current');
            indicatorArray[1].classList.add('skills__dots__indicator--current');
        }
        else if(oldSlide.classList.contains('skills__slide--2')){
            oldSlide.classList.remove('skills__slide--current');
            document.querySelector('.skills__slide--3').classList.add('skills__slide--current');

             // update dots
             indicatorArray[1].classList.remove('skills__dots__indicator--current');
             indicatorArray[2].classList.add('skills__dots__indicator--current');
        }
        else if(oldSlide.classList.contains('skills__slide--3')){
            oldSlide.classList.remove('skills__slide--current');
            document.querySelector('.skills__slide--1').classList.add('skills__slide--current');

             // update dots
             indicatorArray[2].classList.remove('skills__dots__indicator--current');
             indicatorArray[0].classList.add('skills__dots__indicator--current');
        }
        console.log(oldSlide);
    });

    // when I click the indicator move slide to indicated position
    dotsContainer.addEventListener('click', (e) => {
            
            // check we are not clicking on aready active, add the current class to the new target if ok
            if (e.target.classList.contains('skills__dots__indicator') && !e.target.classList.contains('skills__dots__indicator--current')) {
       
                // remove old current/active class
                indicatorArray.forEach(i => {
                    if (i.classList.contains('skills__dots__indicator--current')) {
                        i.classList.remove('skills__dots__indicator--current');
                    }
                });

                // create a function to remove to old slide and bring the new one in
                function moveSlide(){

                }
                
                // add current class
                e.target.classList.add('skills__dots__indicator--current');
                if(e.target.classList.contains('dot1')){
                    alert(1);
                }
                if(e.target.classList.contains('dot2')){
                    alert(2);
                }
                if(e.target.classList.contains('dot3')){
                    alert(3);
                }

            }

    });
    



}

headerLoad();
carousel();
