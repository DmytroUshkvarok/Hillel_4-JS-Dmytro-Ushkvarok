'use strict';

//  Task 2

let incomingString = prompt(`Enter some string please`, ``);
const CONTROL_LENGTH_OF_STRING = 10;

printString(incomingString, isStringLengthLessThanControlLength(incomingString, CONTROL_LENGTH_OF_STRING) );

function isStringLengthLessThanControlLength(string, length) {
  return string.length < length;
}

function printString(string, isLengthLess) {
  if (isLengthLess) {
    let i;

    for (i = 0; i < string.length; i++) {
      console.log( string[i] );
    }

  } else {
    console.log( string.substring(0, 7) );
    console.log( string.substring(9) );
  }
}