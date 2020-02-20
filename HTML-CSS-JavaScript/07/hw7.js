function getOddNumbers(arrInput) {
  let result = new Array();
  for (i in arrInput) {
      let value = arrInput[i];
      if ((value%2) == 1) {
          result.push(value);
      } 
  }
  return result;
}

let arr1 = [0,1,2,3,4,5,6,7,8,9,10];
console.log(getOddNumbers(arr1));