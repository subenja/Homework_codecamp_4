
let arr9 = [0,1,2,3,4,5,6,7,8,9,10];

let result = new Array();
for (let i=0; i<=arr9.length; i++) {
    let value = arr9[i];
    if ((value%2)===1) {
        result.push(value);
    }
}

console.log(result);