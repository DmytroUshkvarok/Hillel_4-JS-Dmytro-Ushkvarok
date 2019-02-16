;'use strict';

//  HOMEWORK SLIDER

document.addEventListener('DOMContentLoaded', function() {
    
    homeworkSliderButton.addEventListener('click', function renderSliderPage() {

        let sliderPage = document.createElement('div');
        sliderPage.className = 'main-content__page';
    
        let sliderPageHeader = document.createElement('h1');
        sliderPageHeader.className = 'main-content__header';
        sliderPageHeader.innerHTML = 'Here is a slider. Looks great!';
        sliderPage.appendChild(sliderPageHeader);

        const Slider = function(parent, arrayOfImagesNames, classIdentifier) {
            let slider = document.createElement('div');
            slider.className = 'slider';
            parent.appendChild(slider);

            let sliderButtonRight = document.createElement('input');
            sliderButtonRight.classList.add('slider__button', classIdentifier);
            sliderButtonRight.type = 'button';
            slider.appendChild(sliderButtonRight);

            let imageBox = document.createElement('div');
            imageBox.className = 'slider__image-box';
            slider.insertBefore(imageBox, sliderButtonRight);

            const IMAGES_NUMBERS = arrayOfImagesNames.length;

            arrayOfImagesNames.forEach(function(element) {
                
                const image = document.createElement('img');
                image.classList.add('slider__image', classIdentifier);                
                image.src = `./images/${element}`;
                image.alt = `${element}`
                imageBox.appendChild(image);
            });
    
            let sliderButtonLeft = sliderButtonRight.cloneNode(true);
            sliderButtonLeft.classList.add('slider__button--left');
            slider.insertBefore(sliderButtonLeft, imageBox);

            const IMAGE_MAX_WIDTH = 450;
            let sliderImages = document.getElementsByClassName(`slider__image ${classIdentifier}`);
            const IMAGE_MAX_SHIFT = IMAGE_MAX_WIDTH * (IMAGES_NUMBERS - 1);

            function showSlide() {

                let element = this;
    
                if (element === sliderButtonRight) {

                    changePositionRight();
    
                    let currentShift = parseInt(sliderImages[0].style.left, 10) || 0;
                    currentShift -= IMAGE_MAX_WIDTH;
                    
                    for (let i = 0; i < IMAGES_NUMBERS; i++) {
    
                        sliderImages[i].style.transition = 'left 600ms linear';
                        sliderImages[i].style.left = `${currentShift}px`;
                    }
    
                    sliderImages[IMAGES_NUMBERS - 1].addEventListener('transitionend', changePositionRight);
    
                    function changePositionRight() {
    
                        if (parseInt( sliderImages[IMAGES_NUMBERS - 1].style.left, 10) <= -IMAGE_MAX_SHIFT) {
                            
                            for (let i = 0; i < IMAGES_NUMBERS; i++) {
        
                                sliderImages[i].style.transition = 'none';
                                sliderImages[i].style.left = `0`;
                            }                    
                        }
    
                        sliderImages[IMAGES_NUMBERS - 1].removeEventListener('transitionend', changePositionRight);
                    }         
                }
                
                if (element === sliderButtonLeft) {
                    
                    changePositionLeft();

                    let currentShift = parseInt(sliderImages[0].style.left, 10) || 0;

                    //  Проблема при старте слайдера при клике на кнопку ВЛЕВО - to do fix

                    currentShift += IMAGE_MAX_WIDTH;

                    for (let i = 0; i < IMAGES_NUMBERS; i++) {
    
                        sliderImages[i].style.transition = 'left 600ms linear';
                        sliderImages[i].style.left = `${currentShift}px`;
                    }                
    
                    sliderImages[0].addEventListener('transitionend', changePositionLeft); 
    
                    function changePositionLeft() {
    
                        if (!parseInt(sliderImages[0].style.left, 10)) {

                            for (let i = 0; i < IMAGES_NUMBERS; i++) {
        
                                sliderImages[i].style.transition = 'none';
                                sliderImages[i].style.left = `-${IMAGE_MAX_SHIFT}px`;
                            }                    
                        }
                        
                        sliderImages[0].removeEventListener('transitionend', changePositionLeft);
                    }      
                }
            }
            
            sliderButtonRight.addEventListener('click', showSlide);
            sliderButtonLeft.addEventListener('click', showSlide);
    
            slider.addEventListener('mouseout', function startInterval() {
    
                interval = setInterval(showSlide.bind(sliderButtonRight), 3000);
            });
    
            slider.addEventListener('mouseover', function() {
    
                clearInterval(interval);
            });
    
            let interval = setInterval(showSlide.bind(sliderButtonRight), 3000);
        }

        const array1OfImagesNames = ['1.png', '2.png', '3.png', '4.png', '5.png', '1.png'];
        const array2OfImagesNames = ['11.jpg', '22.jpg', '33.jpg', '11.jpg'];

        const slider1 = Slider(sliderPage, array1OfImagesNames, "1");
        const slider2 = Slider(sliderPage, array2OfImagesNames, "2");
    
        mainContent.replaceChild(sliderPage, mainContent.firstChild);
    });
});