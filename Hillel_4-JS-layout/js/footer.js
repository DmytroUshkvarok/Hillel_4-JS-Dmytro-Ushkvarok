;'use strict';

//  Footer wrapper

let footer = document.createElement('footer');
footer.classList.add('footer');
globalWrapper.appendChild(footer);

//  Footer buttons

let footerItemsList = document.createElement('ul');
footerItemsList.classList.add('footer__items-list');
footer.appendChild(footerItemsList);

let footerLinksNames = ['I', 'LIKE', 'TO', 'LEARN', 'JavaScript'];
let addFooterButtons = function () {
    
    for (let i = 0; i < footerLinksNames.length; i++) {
        let footerButton = document.createElement('li');
        footerButton.classList.add('footer__list-item');
        let footerLink = document.createElement('a');
        footerLink.classList.add('footer__link');
        footerLink.innerHTML = footerLinksNames[i];
        footerLink.href = '#';
        footerButton.appendChild(footerLink);
        footerItemsList.appendChild(footerButton);
    }
};

addFooterButtons();

//  Footer socials

let footerSocials = socials.cloneNode(true);
footerSocials.classList.remove('socials--sidebar');
footer.appendChild(footerSocials);

//  Footer signature

let footerSignature = signature.cloneNode(true);
footerSignature.classList.remove('signature--sidebar');
footer.appendChild(footerSignature);


//  Creating date visualising

let dateBox = document.createElement('div');
dateBox.className = 'date-box';
footerItemsList.appendChild(dateBox);

let dateField = document.createElement('div');
dateField.className = 'date-box__field';
dateBox.appendChild(dateField);

let monthField = document.createElement('div');
monthField.className = 'date-box__field';
dateBox.appendChild(monthField);

let yearField = document.createElement('div');
yearField.className = 'date-box__field';
dateBox.appendChild(yearField);

let dayField = document.createElement('div');
dayField.className = 'date-box__field';
dateBox.appendChild(dayField);



addWorkingDate();
setInterval(addWorkingDate, 1000);

function addWorkingDate() {
    let dateObject = new Date();
    let dateToRender = dateObject.getDate();
    let monthToRender = function() {
        let currentMonth = dateObject.getMonth();
        let months = {
            0: 'January',
            1: 'February',
            2: 'March',
            3: 'April',
            4: 'May',
            5: 'June',
            6: 'July',
            7: 'August',
            8: 'September',
            9: 'October',
            10: 'November',
            11: 'December'
        };

        for (let key in months) {
            
            if (key == currentMonth) {
                return months[key];
            }
        }
    }();

    let yearToRender = dateObject.getFullYear();
    let dayToRender = function() {
        let currentDay = dateObject.getDay();
        let days = {
            0: 'Sunday',
            1: 'Monday',
            2: 'Tuesday',
            3: 'Wednesday',
            4: 'Thursday',
            5: 'Friday',
            6: 'Saturday',
        };

        for (let key in days) {
            
            if (key == currentDay) {
                return days[key];
            }
        }
    }();

    renderValue(dateField, dateToRender);
    renderValue(monthField, monthToRender);
    renderValue(yearField, yearToRender);
    renderValue(dayField, dayToRender);
}

let userTimingScreen = document.createElement('div');
userTimingScreen.className = 'timing-screen';
dateBox.appendChild(userTimingScreen);
userTimingScreen.style.width = '100%';
userTimingScreen.innerHTML = `Timing: 00 sec`;

function showUsersTiming() {
    let seconds = 0;

    document.onkeyup = function() {
        if (event.keyCode === 27) {
            userTimingScreen.innerHTML = `Timing: 00 sec`;
            seconds = 0;
        }  
    }

    return function showCounter() {
        
        let counter = setInterval(function() {
            userTimingScreen.innerHTML = `Timing: ${checkTimeValue(seconds)} sec`;
            return seconds++;
        }, 1000);

        userTimingScreen.addEventListener('mouseover', function() {
            clearInterval(counter);
        });
        userTimingScreen.addEventListener('mouseout', showCounter);
    }
}

document.onload = showUsersTiming()();