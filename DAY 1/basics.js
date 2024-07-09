let names=["Arun","Malu","Jose",1,23,5];
console.log(names[1]); // second position of list
console.log("The length of the list is",names.length)
names.push("Renu");// add to last position of list
console.log(names)
names.pop()//remove last elemnt of list
names.unshift("Anu")// add as first elemnt of list
console.log(names)
let person={
    name:"Meera",
    age:41
}
console.log(person.name) //print name
let persons=[
    {
        name:"Abishek",
        age: 23
    },
    {
        name:"Meera",
        age: 56
    },
    {
        name:"Afra",
        age: 27
    }
]
console.log(persons)
console.log(persons[2].name) //print only the 3rd name of list
