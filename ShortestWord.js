/**
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
    let numberLetter = 0;
    let array = s.split(" ");
    for (let el of array) {
      if (numberLetter == 0) {
        numberLetter = el.length;
      } else {
        if (numberLetter > el.length) {
          numberLetter = el.length;
        }
      }
    }
    return numberLetter;
}