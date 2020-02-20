let arr5 = [0,9,1,8,2,7,3,6,4,5];
for (let i=1; i<=arr5.length; i++) {
    for (let j=0; (j<=i-1); j++) {
        let tempNumber = arr5[j];
        if (arr5[i]<arr5[j]) {
            arr5[j] = arr5[i];
            arr5[i] = tempNumber;
        }
    }
}
console.log(arr5);