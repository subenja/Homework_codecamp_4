let person = new Map();
person.set('Adam',28);
person.set('Sophie',22);
person.set('Aorum',13);

for (let [key, value] of person) {
    console.log("key is " + key);
}