/* sticky nav */
const stick = () => {
const nav = document.querySelector('nav');
const navSticky = document.querySelector('nav.nav--sticky');

if(window.pageYOffset > (1.4 * nav.offsetHeight)) {
    navSticky.style.top = 0; 
} else {
    navSticky.style.top = '-100%';
};
};

window.addEventListener('scroll', stick);


/* menu links */
const addLinks = () => {
const navLinks = document.querySelectorAll('.nav.nav--desktop .nav__links a');
const navLinksSticky = document.querySelectorAll('.nav.nav--sticky .nav__links a');
const ico = document.querySelector('.header');
const team = document.querySelector('.team');
const contact = document.querySelector('.contact');

        if(window.pageYOffset >= (ico.offsetTop) && window.pageYOffset < (ico.clientHeight + ico.offsetTop - 90)) {
            navLinks[0].classList.add('nav__link--active');
            navLinksSticky[0].classList.add('nav__link--active');
        } else {
            navLinks[0].classList.remove('nav__link--active');
            navLinksSticky[0].classList.remove('nav__link--active');
            }
        if (window.pageYOffset >= (team.offsetTop - 90) && window.pageYOffset < (team.clientHeight + team.offsetTop - 90)){
            navLinks[1].classList.add('nav__link--active');
            navLinksSticky[1].classList.add('nav__link--active');
        } else {            
            navLinks[1].classList.remove('nav__link--active');
            navLinksSticky[1].classList.remove('nav__link--active');
        }
        if (window.pageYOffset >= contact.offsetTop - 90) {
            navLinks[2].classList.add('nav__link--active');
            navLinksSticky[2].classList.add('nav__link--active');
        } else {
            navLinks[2].classList.remove('nav__link--active');
            navLinksSticky[2].classList.remove('nav__link--active');
        }
    }
    document.addEventListener('scroll', addLinks);

/* team modal */

const boxes = document.querySelectorAll('.team__data');
const modal = document.querySelectorAll('.team__modal');
const closeBtn = document.querySelectorAll('.team__modal-close');

const openModal = () => {

    boxes.forEach((el, index) => {
        el.addEventListener('click', () => {
            modal[index].classList.toggle('active')
            document.body.classList.toggle('shadow');
            closeModal(); 
        });       
    });
    };

const closeModal = () => {
    closeBtn.forEach((btn,index) => {
        btn.addEventListener('click', () => {
            modal[index].classList.remove('active');
            document.body.classList.remove('shadow');
        });
    });
    };

window.addEventListener('DOMContentLoaded', openModal);

/* video modal */

const playVideo = () => {
const openVideo = document.querySelector('.header__container-play');
const headerModal = document.querySelector('.header__modal');
const closeVideo = document.querySelector('.header__modal-close');

openVideo.addEventListener('click', () => {
    headerModal.classList.add('active');
    document.body.classList.add('shadow');
    closeVideo.addEventListener('click', () => {
        headerModal.classList.remove('active');
        document.body.classList.remove('shadow');
    });      
});
};
playVideo();

/* slider */

/*const mobileSlider = () => {*/
    const slides = document.querySelectorAll('.slider__slides');
    const dots = document.querySelectorAll('.slider__dot');

    dots.forEach((dot, index) => {

        switch(index) {
            case 0:
                dot.addEventListener('click', () => {
                    dots.forEach(dot => dot.classList.remove('slider__dot--selected'));
                    dot.classList.add('slider__dot--selected');
                    slides.forEach(slide => {
                        slide.style.left = '34%';
                        slide.style.animation = 'none';
                }); 
            });
                break;
            case 1:
                dot.addEventListener('click', () => {
                    dots.forEach(dot => dot.classList.remove('slider__dot--selected'));
                    dot.classList.add('slider__dot--selected');
                    slides.forEach(slide => {
                        slide.style.left = '-4%';
                        slide.style.animation = 'none';
                    });
                });
                break;
            case 2: 
            dot.addEventListener('click', () => {
                dots.forEach(dot => dot.classList.remove('slider__dot--selected'));
                dot.classList.add('slider__dot--selected');
                slides.forEach(slide => {
                    slide.style.left = '-42%';
                    slide.style.animation = 'none';
                });
            });
                break;
            case 3: 
            dot.addEventListener('click', () => {
                dots.forEach(dot => dot.classList.remove('slider__dot--selected'));
                dot.classList.add('slider__dot--selected');
                slides.forEach(slide => {
                    slide.style.left = '-81%';
                    slide.style.animation = 'none';
                });
            });
            break;       
    };
    });
