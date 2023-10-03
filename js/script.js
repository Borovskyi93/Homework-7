let numOrStr = prompt('Введите число или строку');
console.log(numOrStr);

switch (numOrStr) {
  case '':
    console.log('Empty String');
    break;
  case null:
    console.log('ви скасували');
    break;
  default:
    isNaN(+numOrStr) ? console.log(' number is Ba_NaN') : console.log('OK!')
}

// if(numOrStr === null) {
// console.log('ви скасували')
// } else if( numOrStr.trim() === '' ) {
// console.log('Empty String');
// } else if ( isNaN( +numOrStr ) ) {
// console.log(' number is Ba_NaN')
// } else {
// console.log('OK!')
// }