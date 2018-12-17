'use strict';

let studentsBase = [];
studentsBase[0] = {
    name: 'Egor Ba',
    startDate: 2002,
    finishDate: 2006
};
studentsBase[1] = {
    name: 'Ira Nos',
    startDate: 2004,
    finishDate: 2009
};
studentsBase[2] = {
    name: 'Eva Duda',
    startDate: 2000,
    finishDate: 2002
};
studentsBase[3] = {
    name: 'Zhen Shen',
    startDate: 2013,
    finishDate: 2015
};
studentsBase[4] = {
    name: 'Duglas Cosak',
    startDate: 2008,
    finishDate: 2013
};
studentsBase[5] = {
    name: 'Di Lykas',
    startDate: 2001,
    finishDate: 2007
};
studentsBase[6] = {
    name: 'Egor Nul',
    startDate: 2005,
    finishDate: 2010
};
studentsBase[7] = {
    name: 'Gdama Bura',
    startDate: 2011,
    finishDate: 2016
};
studentsBase[8] = {
    name: 'Urka Murka',
    startDate: 1999,
    finishDate: 2004
};
studentsBase[9] = {
    name: 'Nerod Basurin',
    startDate: 2006,
    finishDate: 2006
};
studentsBase[10] = {
    name: 'Cosak Mamay',
    startDate: 1998,
    finishDate: 2005
};
studentsBase[11] = {
    name: 'Tony Honey',
    startDate: 2009,
    finishDate: 2013
};
studentsBase[12] = {
    name: 'Goga Gaga',
    startDate: 2003,
    finishDate: 2008
};
studentsBase[13] = {
    name: 'Kala Kala',
    startDate: 2015,
    finishDate: 2018
};
studentsBase[14] = {
    name: 'Krysa Larisa',
    startDate: 1995,
    finishDate: 1999
};
studentsBase[15] = {
    name: 'Alik Narik',
    startDate: 2012,
    finishDate: 2017
};
studentsBase[16] = {
    name: 'Tor Mor',
    startDate: 1993,
    finishDate: 2000
};
studentsBase[17] = {
    name: 'Pupa Pipa',
    startDate: 2011,
    finishDate: 2014
};
studentsBase[18] = {
    name: 'Nana Nuna',
    startDate: 2016,
    finishDate: 2017
};
studentsBase[19] = {
    name: 'Ziza Zozo',
    startDate: 2009,
    finishDate: 2013
};
studentsBase[20] = {
    name: 'Rama Hare',
    startDate: 2007,
    finishDate: 2012
};

studentsBase.showStudents = function (startOfInterval, endOfInterval = startOfInterval) {
    let i;
    let listOfStudents = '';
    
    for (i = 0; i < this.length; i++) {
        let student = this[i];
        if (student.startDate < startOfInterval && student.finishDate < startOfInterval
            || student.startDate > endOfInterval && student.finishDate > endOfInterval) {
            continue;
        }
        listOfStudents += student.name + '\n';
    }
    
    if (listOfStudents === '') {
        console.log( `Were no students studying from ${startOfInterval} to ${endOfInterval}.` );
    } else {
        console.log(`Years of search: ${startOfInterval} - ${endOfInterval}. Names of students are:`);
    }
    
    return listOfStudents;
};

studentsBase.calcTestingInterval = function (startOfInterval, endOfInterval) {
    let i;
    let auxiliaryMin = Infinity;
    let auxiliaryMax = 0;
    
    for (i = 0; i < this.length; i++) {
        let student = this[i];
        
        if (student.startDate < auxiliaryMin) {
            auxiliaryMin = student.startDate;
        }
        
        if (student.finishDate > auxiliaryMax) {
            auxiliaryMax = student.finishDate;
        }
    }
    
    this.startingTestingYear = auxiliaryMin > startOfInterval
        ? auxiliaryMin
        : startOfInterval;
    
    this.endingTestingYear = auxiliaryMax < endOfInterval
        ? auxiliaryMax
        : endOfInterval;
};

studentsBase.showMaxPeriod = function (startOfInterval, endOfInterval) {
    let i;
    let j;
    let maxPeriod;
    let counterOfStudents;
    let numberOfStudents = 0;
    
    this.calcTestingInterval(startOfInterval, endOfInterval);
    
    for (i = studentsBase.startingTestingYear; i <= studentsBase.endingTestingYear; i++) {
        counterOfStudents = 0;
        
        for (j = 0; j < this.length; j++) {
            let student = this[j];
    
            if (student.startDate < i && student.finishDate < i || student.startDate > i && student.finishDate > i) {
                continue;
            }
            counterOfStudents++;
        }
        
        if (counterOfStudents > numberOfStudents) {
            numberOfStudents = counterOfStudents;
            maxPeriod = i;
        }
    }
    
    return `In interval from ${startOfInterval} to ${endOfInterval} max period is ${maxPeriod}
     number of students in ${maxPeriod} is ${numberOfStudents}.`;
};

console.dir(studentsBase);
// console.log( studentsBase.showStudents(2000, 2005) );
// console.log( studentsBase.showStudents(2007, 2009) );
console.log( studentsBase.showStudents(2010, 2018) );
// console.log( studentsBase.showStudents(2000, 2001) );
// console.log( studentsBase.showStudents(1999, 2003) );
// console.log( studentsBase.showStudents(2001) );
console.log( studentsBase.showStudents(2002) );
console.log( studentsBase.showStudents(340, 890) );

console.log(studentsBase.showMaxPeriod(2000, 2004));
console.log(studentsBase.showMaxPeriod(2014, 2018));
console.log(studentsBase.showMaxPeriod(569, 29580));

