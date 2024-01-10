// console.log('jerald')

//1.js is a just in time compiled programming launguage
// so its starts interpretting at the beginning line by line so its basically fast as it interprets ther is also a other part that monitors everything as you then it makes assumptions in order to get optimization to make the code run faster , so what are these assumptions is when it sees a code repeating itself it coverts into assembly code this is where the compiler part comes into play so that next time this particular code is seems it wont interpret but instead use this assembly code to make it faster along with this functions with same arguments is also one of the optimization sometimes its assumtion will be wrong so it will deallocate things to be interpretted so basically its an hybrid

//2.js is FirstClassFunction - means functions are treated like any other varable.

//for example now i am using it as a variable
var foo = ( ) => { // this is an anonymous function -> function which dont have  the name
     //which is declared using the arrow function
// console.log("foo")
}
//then we use variable name to invoke the function like this 
foo();

//you can also declare the anonymous function using just the normal way but in this case also variable name is only used to call the function
var foo2 = function(){
    //console.log("foo2")
}
// foo2();

//you can also declare anonymous function using the name BUT you should only call it using the variable name (just for the case of debugging it will be helpful it seems using function name here)

var foo3 = function fooo3(){
    //console.log("fooo3")
}
//foo3();

//note:arrow functions has several advantage over the normal functions like lexical bounding and using simple test which we are going to discuss later.

//passing function as the argument
function greeting(){
    return "happy bday , "
}

function name2(greeting , name)
{
    console.log(greeting() + name)
}
// name2(greeting , "jerald")//here we are passing function

//now we are returing the functions
function sample(){
    return ()=>{
        console.log("Hello");
    }
}//here we are able to return because in js functions can be considered as values

//note imp : the function which takes in the other function or a function which returns the other functions is called higher order functions 