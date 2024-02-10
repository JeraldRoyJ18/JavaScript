// console.log('jerald')
/*
just in time - technique used to improve the performace of the programming launguage
1.js is a just in time compiled programming launguage
just in time and just in time compiler are both same
so its starts interpretting at the beginning line by line so its basically fast as it interprets ther is also a other part that monitors everything as you interpret and then it makes assumptions in order to get optimization to make the code run faster , so what are these assumptions is when it sees a code repeating itself it coverts into assembly code(machine code) this is where the compiler part comes into play so that next time this particular code repeats elsewhere it seems it wont interpret but instead use this assembly code to make it faster along with this functions with same arguments is also one of the optimization sometimes its assumtion will be wrong so it will deallocate things to be interpretted so basically its an hybrid
there is the difference between the scripting launguage and the just in time programming launguage ok scripting - they are kind of the programming launguage , generally used for automating tasks,
but  jit-its a technique for the interrepted launguage 
2.js is FirstClassFunction - means functions are treated like any other varable.
*/

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

//here is the breif and more clear and clean stuff about jit compilation process 
/*
Parsing: The JavaScript engine first parses the source code into an Abstract Syntax Tree (AST). This is a tree-like representation of the source code that abstracts the syntactic structure of the code.
Compilation to Bytecode: The AST is then compiled into bytecode, which is a lower-level representation of the code that is still platform-independent.
Interpretation and Profiling: The bytecode is then interpreted line by line. While this is happening, a profiler monitors the code to identify “hot” spots that are executed frequently.
JIT Compilation: The JIT compiler kicks in for these “hot” spots and compiles the bytecode into machine code, which can be executed directly by the computer’s processor. This step is where the major optimizations happen.
Execution: The machine code is then executed. If the same “hot” spot is encountered again, the engine can skip directly to executing the machine code, bypassing the interpretation step.
So, while there is an interpretation step involved, it’s part of a larger process that includes parsing, compiling, and optimizing the code for better performance. This is the essence of how a JIT compiler works in languages like JavaScript */

/*javascript is the prototype based programming launguage means allows the creation of the object without first defining its class
-its an multiparadigm programming launguage
-its single threaded but asynchronous nature is balancing it out and also provide the advantage of enabling the non blocking operations
-dynamic launguage - means assigns the data type at the run time! 
 */