function setup() {
   //Problem 3
   var num = 600851475143;
   var root = floor(sqrt(num));
   var n = floor(num / 2);
   for (var i = n; i >= root; i--) {
      if (num % i == 0) {
         if (checkPrime(i)) {
            console.log(i);
         }
      }
   }
}

function checkPrime(num) {
   var s = floor(sqrt(num));
   var flag = 0;
   for (var i = s; i > 0; i--) {
      if (s % i == 0) {
         flag = 1;
         return true;
      }
   }
   if (flag == 0) return false;
}
