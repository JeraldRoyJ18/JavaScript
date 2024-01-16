//there are many ways to create objects in js

//1.singleton
//Object.create()

//this is way you define symbol
let sym = Symbol("key1");
//2.object literalss
const justUser = {
    name:"jerald",
    [sym]:"mysymbol",//this is how you declare Symbol(data type) inside the object
    area:"private",
    age:"private",
    "full name":"private"//you can only access this kind of property using the second way
}

//there are 2 ways to access the object
// console.log(justUser.age)
// console.log(justUser["full name"])
// console.log(justUser[sym])

//you can also freeze the object using 
// Object.freeze(justUser)
// console.log(justUser);

justUser.greeting = function(){
    console.log("hello , good afternoon!");
}
console.log(justUser.greeting)
console.log(justUser.greeting());