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

//  HOMEWORK STUDENTS

document.addEventListener('DOMContentLoaded', function() {
    
    homeworkStudentsButton.addEventListener('click', function renderStudentsPage() {

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

        let arrayOfColumnsNames = ['№', 'Surname', 'Name', 'Start', 'Finish', 'Faculty', 'Phone', 'Change', 'Delete'];
        let studentsDataBase = {};

        let Student = function(id, surname, name, start, finish, faculty, phone = "Unknown") {

            this.id = id;
            this.surname = surname;
            this.name = name;
            this.start = start;
            this.finish = finish;
            this.fuculty = faculty;
            this.phone = phone;
        };

        let student1 = new Student(1, 'Ivanov', 'Ivan', 2010, 2015, "Faculty of law", "+380121234567");
        let student2 = new Student(2, 'Petrov', 'Petro', 2007, 2010, "Faculty of electronics");
        let student3 = new Student(3, 'Kozlov', 'Egor', 2011, 2015, "Faculty of law", "+380561234567");
        let student4 = new Student(4, 'Kusch', 'Gennadiy', 2011, 2016, "Faculty of computers");
        let student5 = new Student(5, 'Lyubomirov', 'Lyubomir', 2012, 2013, "Faculty of phisics", "+380121683467");

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

            let changeBox = tr.insertCell();
            let changeDataInput = document.createElement('input');
            changeDataInput.type = 'button';
            changeDataInput.className = 'students-form__change-button';
            changeBox.appendChild(changeDataInput);

            let deleteBox = tr.insertCell();
            let deleteDataInput = document.createElement('input');
            deleteDataInput.type = 'button';
            deleteDataInput.className = 'students-form__delete-button';
            deleteBox.appendChild(deleteDataInput);
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

        let studentFacultyInputText = document.createElement('span');
        studentFacultyInputText.className = 'students-form__text';
        studentFacultyInputText.innerHTML = `Faculty`;
        addingStudentForm.appendChild(studentFacultyInputText);

        let studentFacultyInput = document.createElement('input');
        studentFacultyInput.className = 'students-form__input';
        studentFacultyInput.type = 'text';
        studentFacultyInput.placeholder = 'Faculty of mathematics';
        studentFacultyInput.required = 'required';
        addingStudentForm.appendChild(studentFacultyInput);

        let studentPhoneInputText = document.createElement('span');
        studentPhoneInputText.className = 'students-form__text';
        studentPhoneInputText.innerHTML = `Phone`;
        addingStudentForm.appendChild(studentPhoneInputText);

        let studentPhoneInput = document.createElement('input');
        studentPhoneInput.className = 'students-form__input';
        studentPhoneInput.type = 'text';
        studentPhoneInput.placeholder = '+380501234567';
        addingStudentForm.appendChild(studentPhoneInput);

        let addingStudentToFormButton = document.createElement('input');
        addingStudentToFormButton.type = 'submit';
        addingStudentToFormButton.value = 'Add student';
        addingStudentToFormButton.className = 'students-form__submit';
        addingStudentForm.appendChild(addingStudentToFormButton);

        studentsPage.insertBefore(addingStudentForm, studentsTable);

        addingStudentForm.addEventListener('submit', function() {

            let tr = studentsTable.insertRow();

            let addingStudentFormInputs = document.getElementsByClassName('students-form__input');
            
            for (let input in addingStudentFormInputs) {
                
                if (input === '0' || +input) {

                    let td = tr.insertCell();
                    td.innerHTML = addingStudentFormInputs[input].value || "Unknown";
                    addingStudentFormInputs[input].value = '';
                }
            }

            let changeBox = tr.insertCell();
            let changeDataInput = document.createElement('input');
            changeDataInput.type = 'button';
            changeDataInput.className = 'students-form__change-button';
            changeBox.appendChild(changeDataInput);

            let deleteBox = tr.insertCell();
            let deleteDataInput = document.createElement('input');
            deleteDataInput.type = 'button';
            deleteDataInput.className = 'students-form__delete-button';
            deleteBox.appendChild(deleteDataInput);
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

//  HOMEWORK PROGRESS BAR 1

document.addEventListener('DOMContentLoaded', function() {
    
    homeworkProgressBar1Button.addEventListener('click', function renderProgressBar1Page() {

        let progressBar1Page = document.createElement('div');
        progressBar1Page.className = 'main-content__page';

        let progressBarLine = document.createElement('div');
        progressBarLine.className = 'progress-bar';
        progressBar1Page.appendChild(progressBarLine);

        let article = document.createElement('article');
        article.className = 'article';
        
        let articleHeader = document.createElement('h2');
        articleHeader.className = 'article__header';
        articleHeader.innerHTML = 'Джомолунгма - «Божественная Мать жизненной энергии»';
        article.appendChild(articleHeader);
        
        let articleText = document.createElement('p');
        articleText.className = 'article__text';
        articleText.innerHTML = 'Основной сезон восхождения на вершину — весна и осень, '
            + 'так как в это время отсутствуют муссоны.';
        article.appendChild(articleText);
        
        let articleImage = document.createElement('img');
        articleImage.className = 'article__image';
        articleImage.src = './images/mountain.jpg';
        articleImage.alt = 'mountain';
        article.appendChild(articleImage);

        progressBar1Page.appendChild(article);

        let article2 = article.cloneNode(true);
        let article3 = article.cloneNode(true);

        progressBar1Page.appendChild(article2);
        progressBar1Page.appendChild(article3);

        mainContent.replaceChild(progressBar1Page, mainContent.firstChild);

        const articleImages = document.getElementsByClassName('article__image');
        const articleTexts = document.getElementsByClassName('article__text');
        const articleHeaders = document.getElementsByClassName('article__header');
        const articles = document.getElementsByClassName('article');
        
        let promise = new Promise((resolve) => {

            setTimeout(function() {

                progressBarLine.style.width = 0;

                progressBarLine.addEventListener('transitionend', function removeImages() {
                    
                    for (let i = 0; i < articleImages.length; i++) {
                        articleImages[i].style.height = 0;
                    }
                    
                    progressBarLine.removeEventListener('transitionend', removeImages);

                    return resolve();
                });        
            }, 0);
        });

        promise.then(function() {

            const removeTexts = () => {
                
                for (let i = 0; i < articleTexts.length; i++) {
                    articleTexts[i].style.fontSize = 0;
                }

                articleImages[0].removeEventListener('transitionend', removeTexts);
            };
            
            articleImages[0].addEventListener('transitionend', removeTexts);
        })
        .then(function() {

            const removeHeaders = () => {
                
                for (let i = 0; i < articleHeaders.length; i++) {
                    articleHeaders[i].style.fontSize = 0;
                }

                articleTexts[0].removeEventListener('transitionend', removeHeaders);
            };

            articleTexts[0].addEventListener('transitionend', removeHeaders);    
        })
        .then(function() {

            const removeArticles = () => {                
                
                for (let i = 0; i < articles.length; i++) {
                    articles[i].style.height = 0;
                    articles[i].style.padding = 0;
                    articles[i].style.border = 'none';
                }

                articleHeaders[0].removeEventListener('transitionend', removeArticles);
            };

            const restoreAll = () => {
                
                for (let i = 0; i < articles.length; i++) {
                        
                    articles[i].style.height = 'auto';
                    articles[i].style.padding = '10px';
                    articles[i].style.border = '1px solid rgb(155, 218, 30)';
                    articleHeaders[i].style.fontSize = '18px';
                    articleTexts[i].style.fontSize = '15px';
                    articleImages[i].style.height = '50px';
                }

                progressBarLine.style.width = '100%';

                articleHeaders[0].removeEventListener('transitionend', restore);
            };

            articleHeaders[0].addEventListener('transitionend', removeArticles);            
            articleHeaders[0].addEventListener('transitionend', function restore() {
                setTimeout(restoreAll, 1000);            
            });            
        });
    });
});

//  HOMEWORK PROGRESS BAR 2

document.addEventListener('DOMContentLoaded', function() {
    
    homeworkProgressBar2Button.addEventListener('click', function renderProgressBar2Page() {

        let progressBar2Page = document.createElement('div');
        progressBar2Page.className = 'main-content__page';

        let progressBarLine = document.createElement('div');
        progressBarLine.className = 'progress-bar';
        progressBar2Page.appendChild(progressBarLine);

        let article = document.createElement('article');
        article.className = 'article';
        
        let articleHeader = document.createElement('h2');
        articleHeader.className = 'article__header';
        articleHeader.innerHTML = 'Джомолунгма - «Божественная Мать жизненной энергии»';
        article.appendChild(articleHeader);
        
        let articleText = document.createElement('p');
        articleText.className = 'article__text';
        articleText.innerHTML = 'Основной сезон восхождения на вершину — весна и осень, '
            + 'так как в это время отсутствуют муссоны.';
        article.appendChild(articleText);
        
        let articleImage = document.createElement('img');
        articleImage.className = 'article__image';
        articleImage.src = './images/mountain.jpg';
        articleImage.alt = 'mountain';
        article.appendChild(articleImage);

        progressBar2Page.appendChild(article);

        let article2 = article.cloneNode(true);
        let article3 = article.cloneNode(true);

        progressBar2Page.appendChild(article2);
        progressBar2Page.appendChild(article3);

        mainContent.replaceChild(progressBar2Page, mainContent.firstChild);

        const articleImages = document.getElementsByClassName('article__image');
        const articleTexts = document.getElementsByClassName('article__text');
        const articleHeaders = document.getElementsByClassName('article__header');
        const articles = document.getElementsByClassName('article');

        const promise = new Promise((resolve) => {

            setTimeout(function() {

                progressBarLine.style.width = 0;

                return resolve();     
            }, 0);
        });
        
        const promise1 = new Promise((resolve) => {

            articleHeaders[0].addEventListener('transitionend', () => resolve());
        });
        
        const promise2 = new Promise((resolve) => {

            articleHeaders[1].addEventListener('transitionend', () => resolve());
        });

        const promises = [promise, promise1, promise2];

        for (let i = 0; i < articles.length; i++) {

            const hideElements = async function() {
                
                await promises[i];

                const removeImage = () => {
                    articleImages[i].style.height = 0;
                    progressBarLine.removeEventListener('transitionend', removeImage);
                };
                progressBarLine.addEventListener('transitionend', removeImage);
                const removeText = () => {
                    articleTexts[i].style.fontSize = 0;
                    articleImages[i].removeEventListener('transitionend', removeText);
                };
                articleImages[i].addEventListener('transitionend', removeText);
                const removeHeader = () => {
                    articleHeaders[i].style.fontSize = 0;
                    articleTexts[i].removeEventListener('transitionend', removeHeader);
                };
                articleTexts[i].addEventListener('transitionend', removeHeader);
                const removeArticle = () => {
                    articles[i].style.height = 0;
                    articles[i].style.padding = 0;
                    articles[i].style.border = 'none';
                    articleHeaders[i].removeEventListener('transitionend', removeArticle);
                };
                articleHeaders[i].addEventListener('transitionend', removeArticle);
            }
            hideElements();
        }
        
        
        // promise.then(function() {

        //     const removeTexts = () => {
                
        //         for (let i = 0; i < articleTexts.length; i++) {
        //             articleTexts[i].style.fontSize = 0;
        //         }

        //         articleImages[0].removeEventListener('transitionend', removeTexts);
        //     };
            
        //     articleImages[0].addEventListener('transitionend', removeTexts);
        // })
        // .then(function() {

        //     const removeHeaders = () => {
                
        //         for (let i = 0; i < articleHeaders.length; i++) {
        //             articleHeaders[i].style.fontSize = 0;
        //         }

        //         articleTexts[0].removeEventListener('transitionend', removeHeaders);
        //     };

        //     articleTexts[0].addEventListener('transitionend', removeHeaders);    
        // })
        // .then(function() {

        //     const removeArticles = () => {                
                
        //         for (let i = 0; i < articles.length; i++) {
        //             articles[i].style.height = 0;
        //             articles[i].style.padding = 0;
        //             articles[i].style.border = 'none';
        //         }

        //         articleHeaders[0].removeEventListener('transitionend', removeArticles);
        //     };

        //     const restoreAll = () => {
                
        //         for (let i = 0; i < articles.length; i++) {
                        
        //             articles[i].style.height = 'auto';
        //             articles[i].style.padding = '10px';
        //             articles[i].style.border = '1px solid rgb(155, 218, 30)';
        //             articleHeaders[i].style.fontSize = '18px';
        //             articleTexts[i].style.fontSize = '15px';
        //             articleImages[i].style.height = '50px';
        //         }

        //         progressBarLine.style.width = '100%';

        //         articleHeaders[0].removeEventListener('transitionend', restore);
        //     };

        //     articleHeaders[0].addEventListener('transitionend', removeArticles);            
        //     articleHeaders[0].addEventListener('transitionend', function restore() {
        //         setTimeout(restoreAll, 1000);            
        //     });            
        // });
    });
});