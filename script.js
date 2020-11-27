'use strict'

const arr = ['2345', '567', '400', '3353', '13131', '23487', '28906'];

let twoStart = function(a) {
    let count = a.length;
   
    for(let i = 0; i<count; i++) {

       let c =  a[i].slice(0,1);

       if (c==='2' || c==='4') {
            console.log(a[i]);
       }
    }
};

twoStart(arr);

/* Второе задание */

let  allPrime = function() {

    let n = 100;

    nextPrime:
    for (let i = 2; i <= n; i++) { 
    
      for (let j = 2; j < i; j++) { 
        if (i % j == 0) continue nextPrime; 
      }
    
      console.log(i + ' Делители этого числа 1 и '+ i);
    }
};

allPrime();