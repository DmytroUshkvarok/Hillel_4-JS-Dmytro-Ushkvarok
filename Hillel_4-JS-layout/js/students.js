;'use strict';

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

        studentsPage.appendChild(addingStudentForm);

        studentIdInput.addEventListener('focus', function() {

            let tip = document.createElement('span');
            tip.className = 'students-form__tip';
            tip.innerHTML = 'Note: you need to use only numbers to fill ID';

            const studentsTable = document.getElementsByClassName('students-table')[0];
            studentsPage.insertBefore(tip, studentsTable);
        });

        studentIdInput.addEventListener('blur', function() {
            const tip = document.getElementsByClassName('students-form__tip')[0];           
            studentsPage.removeChild(tip);
        });

        function colorizeStudentIdInputAndShowTip() {

            const validationStatus = validateId(this.value);

            if (validationStatus === 'no data') {
                
                this.style.border = 'red 2px solid';
                this.style.outline = 'none';

                const tip = document.getElementsByClassName('students-form__tip')[0];
                tip.classList.remove('students-form__tip--fine');
                tip.classList.add('students-form__tip--error');
                tip.innerHTML = 'Enter ID using only numbers';
            }
            
            if (validationStatus === 'bad data') {
                
                this.style.border = 'red 2px solid';
                this.style.outline = 'none';

                const tip = document.getElementsByClassName('students-form__tip')[0];
                tip.classList.remove('students-form__tip--fine');
                tip.classList.add('students-form__tip--error');
                tip.innerHTML = 'You need to use only numbers';
            }
            
            if (validationStatus === 'already exists') {
                
                this.style.border = 'red 2px solid';
                this.style.outline = 'none';

                const tip = document.getElementsByClassName('students-form__tip')[0];
                tip.classList.remove('students-form__tip--fine');
                tip.classList.add('students-form__tip--error');
                tip.innerHTML = 'Student with this ID is already in database';
            }
            
            if (validationStatus === 'ok') {

                this.style.border = 'green 2px solid';
                this.style.outline = 'none';

                const tip = document.getElementsByClassName('students-form__tip')[0];
                tip.classList.remove('students-form__tip--error');
                tip.classList.add('students-form__tip--fine');
                tip.innerHTML = 'All is good =)';
            }
        }

        studentIdInput.addEventListener('input', colorizeStudentIdInputAndShowTip);

        function validateId(value) {
            
            const valueToNum = +value;

            if (!valueToNum) return 'no data';

            if (isNaN(valueToNum) || !isFinite(valueToNum)) return 'bad data';

            for (let i = 0; i < studentsDataBase.length; i++) {

                if (studentsDataBase[i].id === valueToNum) return 'already exists';
            }
            
            return 'ok';
        }


        studentSurnameInput.addEventListener('focus', showTipForTextDataInput);
        studentSurnameInput.addEventListener('blur', removeTip);
        studentSurnameInput.addEventListener('input', colorizeTextDataInputAndShowTip);

        studentNameInput.addEventListener('focus', showTipForTextDataInput);
        studentNameInput.addEventListener('blur', removeTip);
        studentNameInput.addEventListener('input', colorizeTextDataInputAndShowTip);

        studentFacultyInput.addEventListener('focus', showTipForTextDataInput);
        studentFacultyInput.addEventListener('blur', removeTip);
        studentFacultyInput.addEventListener('input', colorizeTextDataInputAndShowTip);

        function showTipForTextDataInput() {

            let tip = document.createElement('span');
            tip.className = 'students-form__tip';
            tip.innerHTML = 'Note: you need to use only latin letters to fill this area.' + 
                ' First letter need to be in uppercase.';

            const studentsTable = document.getElementsByClassName('students-table')[0];
            studentsPage.insertBefore(tip, studentsTable);
        }

        function removeTip() {
            const tip = document.getElementsByClassName('students-form__tip')[0];           
            studentsPage.removeChild(tip);
        }        

        function colorizeTextDataInputAndShowTip() {

            const validationStatus = validateText(this.value);

            if (validationStatus === 'no data') {
                
                this.style.border = 'red 2px solid';
                this.style.outline = 'none';

                const tip = document.getElementsByClassName('students-form__tip')[0];
                tip.classList.remove('students-form__tip--fine');
                tip.classList.add('students-form__tip--error');
                tip.innerHTML = 'You need to write something here.';
            }
            
            if (validationStatus === 'excess symbols') {
                
                this.style.border = 'red 2px solid';
                this.style.outline = 'none';

                const tip = document.getElementsByClassName('students-form__tip')[0];
                tip.classList.remove('students-form__tip--fine');
                tip.classList.add('students-form__tip--error');
                tip.innerHTML = 'You need to use only latin letters.';
            }
            
            if (validationStatus === 'check first letter') {
                
                this.style.border = 'red 2px solid';
                this.style.outline = 'none';

                const tip = document.getElementsByClassName('students-form__tip')[0];
                tip.classList.remove('students-form__tip--fine');
                tip.classList.add('students-form__tip--error');
                tip.innerHTML = 'First letter need to be in uppercase.';
            }

            if (validationStatus === 'ok') {

                this.style.border = 'green 2px solid';
                this.style.outline = 'none';

                const tip = document.getElementsByClassName('students-form__tip')[0];
                tip.classList.remove('students-form__tip--error');
                tip.classList.add('students-form__tip--fine');
                tip.innerHTML = 'All is good =)';
            }
        }        

        function validateText(value) {

            const text = value;
            const textToArray = text.split('');

            if (!textToArray.length) return 'no data';

            for (let i = 0; i < textToArray.length; i++) {

                if (!(textToArray[i] >= 'A' && textToArray[i] <= 'Z' || 
                    textToArray[i] >= 'a' && textToArray[i] <= 'z' || 
                    textToArray[i] === ' ' || textToArray[i] === '-')) {

                    return 'excess symbols';
                }
            }

            if (textToArray[0] > 'Z' || textToArray[0] < 'A') return 'check first letter';

            return 'ok';
        }



        addingStudentForm.addEventListener('submit', function() {

            const newId = studentIdInput.value;
            const newSurname = studentSurnameInput.value;
            const newName = studentNameInput.value;
            const newStart = studentStartInput.value;
            const newFinish = studentFinishInput.value;
            const newFaculty = studentFacultyInput.value;
            const newPhone = studentPhoneInput.value;

            const newStudent = new Student(newId, newSurname, newName, newStart, newFinish, newFaculty, newPhone);
            const addingStudentFormInputs = document.getElementsByClassName('students-form__input');
            
            for (let input in addingStudentFormInputs) {                
                addingStudentFormInputs[input].value = '';
            }

            studentsDataBase.push(newStudent);
            renderStudentsTable(studentsDataBase);
        });
        
        function renderStudentsTable(database) {

            if (document.getElementsByClassName('students-table').length !== 0) {
                studentsPage.removeChild(studentsPage.lastChild);
            }

            let studentsTable = document.createElement('table');
            studentsTable.className = 'students-table';

            let tr = studentsTable.insertRow();

            arrayOfColumnsNames.forEach(function(element) {

                let td = tr.insertCell();
                td.innerHTML = element;
                td.style.backgroundColor = 'yellow';
                td.style.fontWeight = '700';
            });

            studentsTable.appendChild(tr);

            let studentsKeys = Object.keys(database[0]);

            for (let student in database) {

                let studentProfile = database[student];
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
        }

        let arrayOfColumnsNames = ['ID', 'Surname', 'Name', 'Start', 'Finish', 'Faculty', 'Phone', 'Change', 'Delete'];
        let studentsDataBase = [];

        function Student(id, surname, name, start, finish, faculty, phone = 'Unknown') {

            this.id = id;
            this.surname = surname;
            this.name = name;
            this.start = start;
            this.finish = finish;
            this.fuculty = faculty;
            this.phone = phone;
        };

        studentsDataBase[0] = new Student(1, 'Ivanov', 'Ivan', 2010, 2015, 'Faculty of law', '+380121234567');
        studentsDataBase[1] = new Student(2, 'Petrov', 'Petro', 2007, 2010, 'Faculty of electronics');
        studentsDataBase[2] = new Student(3, 'Kozlov', 'Egor', 2011, 2015, 'Faculty of law', '+380561234567');
        studentsDataBase[3] = new Student(4, 'Kusch', 'Gennadiy', 2011, 2016, 'Faculty of computers');
        studentsDataBase[4] = new Student(5, 'Lyubomirov', 'Lyubomir', 2012, 2013, 'Faculty of phisics', '+380121683467');

        renderStudentsTable(studentsDataBase);

        mainContent.replaceChild(studentsPage, mainContent.firstChild);
    });
});