/*
Define a function that takes an integer argument and returns logical value true or false depending on if the integer is a prime.
Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/

function isPrime(num) {
    let isNeedSave = false;
    let squart = Math.sqrt(num);
    if (num > 1) {
      if (num < 4) {
          isNeedSave = true;
      } else {
        for (let i = 2; i <= squart; i++) {
          if(num % i == 0) {
            isNeedSave = false;
            break;
          } else {
            isNeedSave = true;
          }
        }
      }
    }
    return isNeedSave;
  }