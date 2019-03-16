// largest Palindrome Product

var highest = 0;

function setup() {
   for (var i = 999; i > 99; i--) {
      for (var j = 999; j > 99 && j >= i; j--) {
         if (j * i < highest) {
            highest = j * i;
            break;
         }
      }
   }
   console.log(highest);
}

function r(num) {
   return int(str(num).split("").reverse().join(""));
}