/*
Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.
*/

String.prototype.isLetter = function() {
    let element = this.slice();
    let isNeedSave = false;
    if (element.match(/[a-zA-Z]/)) {
      isNeedSave = true;
    }
    if (element.length !== 1) {
      isNeedSave = false;
    }
    return isNeedSave;
}