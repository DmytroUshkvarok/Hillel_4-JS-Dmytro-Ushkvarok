;'use strict';

let mainContent = document.createElement('main');
mainContent.className = 'main-content';
globalWrapper.appendChild(mainContent);

function renderWelcomePage() {
    let welcomePage = document.createElement('div');
    welcomePage.className = 'main-content__page';
        
    let welcomePageHeader = document.createElement('h1');
    welcomePageHeader.className = 'main-content__header';
    welcomePageHeader.innerHTML = 'Welcome page!';
    welcomePage.appendChild(welcomePageHeader);
        
    let welcomePageText = document.createElement('p');
    welcomePageText.className = 'main-content__text';
    welcomePageText.innerHTML = 'Hello! This is my working layout page within the FRONT-END PRO course.\n' +
        'Here You can find my current JavaScript homeworks and studying results.';
    welcomePage.appendChild(welcomePageText);

    let welcomeImage = document.createElement('img');
    welcomeImage.className = 'welcome-page-image';
    welcomeImage.src = './images/welcome_page.jpg';
    welcomeImage.alt = 'welcome_image';
    welcomePage.appendChild(welcomeImage);

    mainContent.appendChild(welcomePage)
}

document.addEventListener('DOMContentLoaded', renderWelcomePage);

document.addEventListener('DOMContentLoaded', () => {

    welcomePageButton.addEventListener('click', () => {
        mainContent.innerHTML = '';
        renderWelcomePage();
    });
});

// Homework "CREATING TABLE"


document.addEventListener('DOMContentLoaded', function() {
    
    homeworkTableButton.addEventListener('click', function renderTablePage() {
        
        let tablePage = document.createElement('div');
        tablePage.className = 'main-content__page';
    
        let tablePageHeader = document.createElement('h1');
        tablePageHeader.className = 'main-content__header';
        tablePageHeader.innerHTML = 'Generating custom table';
        tablePage.appendChild(tablePageHeader);
    
        let tablePageText = document.createElement('p');
        tablePageText.className = 'main-content__text';
        tablePageText.innerHTML = 'Fill inputs by numbers to build a table please.';
        tablePage.appendChild(tablePageText);
    
        let rowsInput = document.createElement('input');
        rowsInput.className = 'table-input';
        rowsInput.type = 'text';
        rowsInput.placeholder = 'rows';
        tablePage.appendChild(rowsInput);
    
        let columnsInput = document.createElement('input');
        columnsInput.className = 'table-input';
        columnsInput.type = 'text';
        columnsInput.placeholder = 'columns';
        tablePage.appendChild(columnsInput);
    
        let buttonToTableBuilding = document.createElement('input');
        buttonToTableBuilding.className = 'table-button';
        buttonToTableBuilding.type = 'button';
        buttonToTableBuilding.value = 'Build';
        tablePage.appendChild(buttonToTableBuilding);

        mainContent.replaceChild(tablePage, mainContent.firstChild);
        
        buttonToTableBuilding.addEventListener('click', function buildTable() {
                
            let i;
            let j;
            let rows = rowsInput.value;
            let columns = columnsInput.value;    

            let table = document.createElement('table');
            table.className = 'custom-table';            
            
            for (i = 1; i <= rows; i++) {
                let tr = table.insertRow();
                
                for (j = 1; j <= columns; j++) {
                    let td = tr.insertCell();
                    td.title = `${i} x ${j}`;
                    td.i = i;
                    td.j = j;

                    td.addEventListener('click', function() {
                        alert(`Row ${td.i}` + `\n` + `Column ${td.j}`);
                    });
                }
            }

            if (tablePage.children.length > 5) {
                tablePage.removeChild(tablePage.lastChild);
            }

            tablePage.appendChild(table);
        });
    });
});


// Homework "UNIVERSAL CLICK_ME FUNCTION"

document.addEventListener('DOMContentLoaded', function() {
    
    homeworkClickMeButton.addEventListener('click', function renderClickMePage() {
        
        let clickMePage = document.createElement('div');
        clickMePage.className = 'main-content__page';
    
        let clickMePageHeader = document.createElement('h1');
        clickMePageHeader.className = 'main-content__header';
        clickMePageHeader.innerHTML = 'Universal clickMe(event) function';
        clickMePage.appendChild(clickMePageHeader);
    
        let clickMePageText = document.createElement('p');
        clickMePageText.className = 'main-content__text';
        clickMePageText.innerHTML = 'Push the button to colorise it. Push it again to uncolorise it.';
        clickMePage.appendChild(clickMePageText);
    
        let clickMeButtonGreen = document.createElement('input');
        clickMeButtonGreen.className = 'click-me-button';
        clickMeButtonGreen.type = 'button';
        clickMeButtonGreen.value = 'Green';
        clickMeButtonGreen.color = 'green';
        clickMePage.appendChild(clickMeButtonGreen);
    
        let clickMeButtonYellow = document.createElement('input');
        clickMeButtonYellow.className = 'click-me-button';
        clickMeButtonYellow.type = 'button';
        clickMeButtonYellow.value = 'Yellow';
        clickMeButtonYellow.color = 'yellow';
        clickMePage.appendChild(clickMeButtonYellow);
    
        let clickMeButtonRed = document.createElement('input');
        clickMeButtonRed.className = 'click-me-button';
        clickMeButtonRed.type = 'button';
        clickMeButtonRed.value = 'Red';
        clickMeButtonRed.color = 'red';
        clickMePage.appendChild(clickMeButtonRed);

        mainContent.replaceChild(clickMePage, mainContent.firstChild);

        clickMeButtonGreen.addEventListener('click', clickMe);
        clickMeButtonYellow.addEventListener('click', clickMe);
        clickMeButtonRed.addEventListener('click', clickMe);
        
        function clickMe(event) {
            let element = this;

            if (element.style.color == element.color) {
                element.style.color = 'black';
            } else {
                element.style.color = element.color;
            }
        
            return console.log(event);
        }
    });
});

//  HOMEWORK SLIDER

document.addEventListener('DOMContentLoaded', function() {
    
    homeworkSliderButton.addEventListener('click', function renderSliderPage() {

        let sliderPage = document.createElement('div');
        sliderPage.className = 'main-content__page';
    
        let sliderPageHeader = document.createElement('h1');
        sliderPageHeader.className = 'main-content__header';
        sliderPageHeader.innerHTML = 'Here is a slider. Looks great!';
        sliderPage.appendChild(sliderPageHeader);

        let slider = document.createElement('div');
        slider.className = 'slider';
        sliderPage.appendChild(slider);

        let sliderButtonRight = document.createElement('input');
        sliderButtonRight.className = 'slider__button';
        sliderButtonRight.type = 'button';
        slider.appendChild(sliderButtonRight);

        let imageBox = document.createElement('div');
        imageBox.className = 'slider__image-box';
        slider.insertBefore(imageBox, sliderButtonRight);
       
        for ( let i = 1; i <= 5; i++) {

            let image = document.createElement('img');
            image.classList.add('slider__image');
            
            if (i !== 1) image.classList.add('slider__image--hidden');
                
            image.src = `./images/${i}.png`;
            image.alt = `${i}.png`
            imageBox.appendChild(image);
        }

        let sliderButtonLeft = sliderButtonRight.cloneNode(true);
        sliderButtonLeft.classList.add('slider__button--left');
        slider.insertBefore(sliderButtonLeft, imageBox);

        let sliderImages = document.getElementsByClassName('slider__image');
        
        function showSlide() {

            let element = this;

            for (let i = 0; i < sliderImages.length; i++) {

                sliderImages[i].classList.add('slider__image--hidden');
            }

            if (element === sliderButtonRight) {

                (currentImageIndex == sliderImages.length - 1)
                    ? currentImageIndex = 0
                    : currentImageIndex++;

            }
            
            if (element === sliderButtonLeft) {

                (currentImageIndex == 0)
                    ? currentImageIndex = sliderImages.length - 1
                    : currentImageIndex--;
            }

            sliderImages[currentImageIndex].classList.remove('slider__image--hidden');                                  
        }
        
        let currentImageIndex = 0;
        
        sliderButtonRight.addEventListener('click', showSlide);
        sliderButtonLeft.addEventListener('click', showSlide);

        slider.addEventListener('mouseout', function startInterval() {

            interval = setInterval(showSlide.bind(sliderButtonRight), 3000);
        });

        slider.addEventListener('mouseover', function() {

            clearInterval(interval);
        });

        let interval = setInterval(showSlide.bind(sliderButtonRight), 3000);
    
        mainContent.replaceChild(sliderPage, mainContent.firstChild);
    });
});

//  HOMEWORK STUDENTS

document.addEventListener('DOMContentLoaded', function() {
    
    homeworkSStudentsButton.addEventListener('click', function renderStudentsPage() {

        let studentsPage = document.createElement('div');
        studentsPage.className = 'main-content__page';
    
        let studentsPageHeader = document.createElement('h1');
        studentsPageHeader.className = 'main-content__header';
        studentsPageHeader.innerHTML = 'Here is a table of students!';
        studentsPage.appendChild(studentsPageHeader);

        let studentsPageText = document.createElement('p');
        studentsPageText.className = 'main-content__text';
        studentsPageText.innerHTML = 'You can add somebody filling the existable form.';
        studentsPage.appendChild(studentsPageText);

        let studentsTable = document.createElement('table');
        studentsTable.className = 'students-table';

        let arrayOfColumnsNames = ['№', 'Surname', 'Name', 'Start', 'Finish'];
        let studentsDataBase = {};

        let Student = function(id, surname, name, start, finish) {

            this.id = id;
            this.surname = surname;
            this.name = name;
            this.start = start;
            this.finish = finish;
        };

        let student1 = new Student(1, 'Ivanov', 'Ivan', 2010, 2015);
        let student2 = new Student(2, 'Petrov', 'Petro', 2007, 2010);
        let student3 = new Student(3, 'Kozlov', 'Egor', 2011, 2015);
        let student4 = new Student(4, 'Kusch', 'Gennadiy', 2011, 2016);
        let student5 = new Student(5, 'Lyubomirov', 'Lyubomir', 2012, 2013);

        studentsDataBase[0] = student1;
        studentsDataBase[1] = student2;
        studentsDataBase[2] = student3;
        studentsDataBase[3] = student4;
        studentsDataBase[4] = student5;

        let tr = studentsTable.insertRow();

        arrayOfColumnsNames.forEach(function(element) {

            let td = tr.insertCell();
            td.innerHTML = element;
            td.style.backgroundColor = 'yellow';
            td.style.fontWeight = '700';
        });
        studentsTable.appendChild(tr);

        let studentsKeys = Object.keys(studentsDataBase[0]);

        for (let student in studentsDataBase) {

            let studentProfile = studentsDataBase[student];
            let tr = studentsTable.insertRow();

            studentsKeys.forEach(function(element) {

                let td = tr.insertCell();
                td.innerHTML = studentProfile[element];
            });
        }

        studentsPage.appendChild(studentsTable);

        let addingStudentForm = document.createElement('form');
        addingStudentForm.className = 'students-form';

        let studentIdInputText = document.createElement('span');
        studentIdInputText.className = 'students-form__text';
        studentIdInputText.innerHTML = `Student's ID`;
        addingStudentForm.appendChild(studentIdInputText);

        let studentIdInput = document.createElement('input');
        studentIdInput.className = 'students-form__input';
        studentIdInput.type = 'text';
        studentIdInput.placeholder = 'ID';
        studentIdInput.required = 'required';
        addingStudentForm.appendChild(studentIdInput);

        let studentSurnameInputText = document.createElement('span');
        studentSurnameInputText.className = 'students-form__text';
        studentSurnameInputText.innerHTML = `Surname`;
        addingStudentForm.appendChild(studentSurnameInputText);

        let studentSurnameInput = document.createElement('input');
        studentSurnameInput.className = 'students-form__input';
        studentSurnameInput.type = 'text';
        studentSurnameInput.placeholder = 'Ivanov';
        studentSurnameInput.required = 'required';
        addingStudentForm.appendChild(studentSurnameInput);

        let studentNameInputText = document.createElement('span');
        studentNameInputText.className = 'students-form__text';
        studentNameInputText.innerHTML = `Name`;
        addingStudentForm.appendChild(studentNameInputText);

        let studentNameInput = document.createElement('input');
        studentNameInput.className = 'students-form__input';
        studentNameInput.type = 'text';
        studentNameInput.placeholder = 'Ivan';
        studentNameInput.required = 'required';
        addingStudentForm.appendChild(studentNameInput);

        let studentStartText = document.createElement('span');
        studentStartText.className = 'students-form__text';
        studentStartText.innerHTML = `Start year`;
        addingStudentForm.appendChild(studentStartText);

        let studentStartInput = document.createElement('input');
        studentStartInput.className = 'students-form__input';
        studentStartInput.type = 'text';
        studentStartInput.placeholder = '2003';
        studentStartInput.required = 'required';
        addingStudentForm.appendChild(studentStartInput);

        let studentFinishInputText = document.createElement('span');
        studentFinishInputText.className = 'students-form__text';
        studentFinishInputText.innerHTML = `Finish year`;
        addingStudentForm.appendChild(studentFinishInputText);

        let studentFinishInput = document.createElement('input');
        studentFinishInput.className = 'students-form__input';
        studentFinishInput.type = 'text';
        studentFinishInput.placeholder = '2008';
        studentFinishInput.required = 'required';
        addingStudentForm.appendChild(studentFinishInput);

        let addingStudentToFormButton = document.createElement('input');
        addingStudentToFormButton.type = 'submit';
        addingStudentToFormButton.value = 'Add student';
        addingStudentToFormButton.className = 'students-form__submit';
        addingStudentForm.appendChild(addingStudentToFormButton);

        studentsPage.insertBefore(addingStudentForm, studentsTable);

        addingStudentForm.addEventListener('submit', function() {

            let tr = studentsTable.insertRow();

            let addingStudentFormInputs = document.getElementsByClassName('students-form__input');
            console.log(addingStudentFormInputs);

            for (let input in addingStudentFormInputs) {
                
                if (input === '0' || +input) {

                    let td = tr.insertCell();
                    td.innerHTML = addingStudentFormInputs[input].value;
                    addingStudentFormInputs[input].value = '';
                }
            }
        });


        // studentIdInput.addEventListener('focus', function() {

        //     this.style.borderColor = 'blue';
        //     this.style.borderWidth = '1px';
        //     this.style.outline = 'none';
        //     let tip = document.createElement('span');
        //     tip.className = 'students-form__tip';
        //     tip.innerHTML = 'Note: you need to use only numbers to fill ID';
        //     studentsPage.insertBefore(tip, studentsTable);
        // });

        // studentIdInput.addEventListener('blur', function() {

        //     this.style.borderColor = 'inherit';
        //     this.style.border = 'inherit';
        //     this.style.outline = 'inherit';
        //     let tip = document.createElement('span');
            
        //     studentsPage.removeChild(tip);
        // });



        mainContent.replaceChild(studentsPage, mainContent.firstChild);
    });
});