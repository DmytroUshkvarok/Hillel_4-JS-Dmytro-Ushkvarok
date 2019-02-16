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