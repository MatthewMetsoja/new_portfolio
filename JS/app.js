function headerLoad(){

    const smokeVid = document.getElementById("smokeVideo");
    const fullName = document.getElementById("fullName");
    const burger = document.getElementById('hiddenCheck');
    const stickyNav = document.getElementById('sticky');
    const firstDownArrow = document.querySelector('.down-arrow');

    const myskills = document.querySelector('.skills__container');

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

   

    function watchIntro(){
        document.body.classList.add('watchIntro');
        firstDownArrow.style.display = 'none';

        setTimeout( () => {
            document.body.classList.remove('watchIntro');
            firstDownArrow.style.display = 'inline-block';
        }, 18000);
    }
    
    // function runSmoke(){
    //     setTimeout( () => {     
    //              smokeVid.style.opacity = 1,
    //              smokeVid.play()            
    //     }, 1000)
    // };
   
    function removeVideo(){
        setTimeout( () => {
            smokeVid.style.opacity = 0;
            smokeVid.style.display = 'none';
            
        }, 7000);
    }

    function addNeon(){
        setTimeout( () => {
            fullName.classList.add('glow');  
        }, 14000);
    }

    function bringInSkills(){
        setTimeout( () =>{
            myskills.style.transform = 'translateX(0)';
        },2000);
    }

    // window.addEventListener('scroll', navScroll); //! disabled for now
    
    // runSmoke();
    // removeVideo();
    watchIntro();
    addNeon();
    bringInSkills();
   

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
   
    // arrange the slides original positions, added as function so we can use inside the page resize 
    function setSlidePositions(){
        
        // do slide movement
        slide1.style.left = 0;
        slide2.style.left = -slideWidth + 'px';
        slide3.style.left = -(slideWidth * 2) + 'px';

          // add current class to slide
          slide1.classList.add('skills__slide--current');
          // remove it from the other slides   
          slide2.classList.remove('skills__slide--current');
          slide3.classList.remove('skills__slide--current');
    }
    
     // set default positions on load
     setSlidePositions();

    function setSlidePositions2(){
        slide1.style.left = slideWidth + 'px';
        slide2.style.left = 0
        slide3.style.left = -slideWidth + 'px';

         // add current class to slide
         slide2.classList.add('skills__slide--current');
         
          // remove it from the other slides   
          slide1.classList.remove('skills__slide--current');
          slide3.classList.remove('skills__slide--current');

           
    }

    function setSlidePositions3(){
        slide1.style.left = (slideWidth * 2) + 'px';
        slide2.style.left = slideWidth + 'px';
        slide3.style.left = 0;

         // add current class to slide
         slide3.classList.add('skills__slide--current');
         
          // remove it from the other slides   
          slide1.classList.remove('skills__slide--current');
          slide2.classList.remove('skills__slide--current');

          // update dots
          indicatorArray[1].classList.remove('skills__dots__indicator--current');
          indicatorArray[2].classList.add('skills__dots__indicator--current');
    }
    

     //! Right button functionallity
     rightBtn.addEventListener('click', () => {
        
        // get the current slide
        let oldSlide = document.querySelector('.skills__slide--current');
        
        if(oldSlide.classList.contains('skills__slide--1')){
            oldSlide.classList.remove('skills__slide--current');
            document.querySelector('.skills__slide--2').classList.add('skills__slide--current');
            
            // move the slide
            setSlidePositions2();
            
            // update dots
            indicatorArray[0].classList.remove('skills__dots__indicator--current');
            indicatorArray[1].classList.add('skills__dots__indicator--current');
            
            // show left back button 
            leftBtn.style.visibility = 'visible';
        }
        else if(oldSlide.classList.contains('skills__slide--2')){
            oldSlide.classList.remove('skills__slide--current');
            document.querySelector('.skills__slide--3').classList.add('skills__slide--current');

            setSlidePositions3();

            

              //  hide right button as we are on last slide
            rightBtn.style.visibility = 'hidden';
        }
      
    });

   

    //! Left button functionallity
    leftBtn.addEventListener('click', () => {
        
        // get the current slide
        let oldSlide = document.querySelector('.skills__slide--current');
        
        // middle dot
        if(oldSlide.classList.contains('skills__slide--2')){
            oldSlide.classList.remove('skills__slide--current');
            document.querySelector('.skills__slide--1').classList.add('skills__slide--current');

             // update dots
             indicatorArray[1].classList.remove('skills__dots__indicator--current');
             indicatorArray[0].classList.add('skills__dots__indicator--current');

            //  set slide back original 
             setSlidePositions();

             //  hide left button as we are on first slide
            leftBtn.style.visibility = 'hidden';
        }
         // last dot
         if(oldSlide.classList.contains('skills__slide--3')){
            oldSlide.classList.remove('skills__slide--current');
            document.querySelector('.skills__slide--2').classList.add('skills__slide--current');

             //  set slide 
             setSlidePositions2();

             // update dots
             indicatorArray[2].classList.remove('skills__dots__indicator--current');
             indicatorArray[1].classList.add('skills__dots__indicator--current');

            //  reshow right button
            rightBtn.style.visibility = 'visible';
        }
        console.log(oldSlide);
    });
    
   
   
   
    //! DOT indicator functionality
    dotsContainer.addEventListener('click', (e) => {
            
            // check we are not clicking on aready active, add the current class to the new target if ok
            if (e.target.classList.contains('skills__dots__indicator') && !e.target.classList.contains('skills__dots__indicator--current')){
       
                // remove old current/active class to DOTs
                indicatorArray.forEach(i => {
                    if (i.classList.contains('skills__dots__indicator--current')) {
                        i.classList.remove('skills__dots__indicator--current');
                    }
                });

                  
                // add current class 
                e.target.classList.add('skills__dots__indicator--current');
                if(e.target.classList.contains('dot1')){

                    // move slide back to original position 
                    setSlidePositions();
                  
                    // remove left arrow if we are on slide 1
                    leftBtn.style.visibility = 'hidden';

                }
                if(e.target.classList.contains('dot2')){
                   
                    // move slide to middle position 
                   setSlidePositions2();

                    // show both arrows as we are on middle slide 
                    leftBtn.style.visibility = 'visible';
                    rightBtn.style.visibility = 'visible';
                }

                if(e.target.classList.contains('dot3')){
                    
                    // move slide all the way over 
                    setSlidePositions3();

                    // hide right button as we can go no further
                    rightBtn.style.visibility = 'hidden';
                }

            }

    });
    



}

headerLoad();
carousel();
