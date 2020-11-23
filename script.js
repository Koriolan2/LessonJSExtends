let num = 266219;
let numStr = num.toString();

let rez = 1;

for (let i = 0; i<numStr.length; i++) {
    rez *= numStr.substr(i,1);
}

rez **= 3;
let rStr = rez.toString();

console.log(rStr.substring(0, 3));

