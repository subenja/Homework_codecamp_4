function sortAsc(arrInput) {
  for (let i=1; i<=arrInput.length; i++) {
      for (let j=0; (j<=i-1); j++) {
          let tempNumber = arrInput[j];
          if (arrInput[i]<arrInput[j]) {
              arrInput[j] = arrInput[i];
              arrInput[i] = tempNumber;
          }
      }
  }
  return arrInput;
}

let arr2 = [0,9,1,8,2,7,3,6,4,5];
console.log(sortAsc(arr2));