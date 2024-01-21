//1.what is function declaration
// ->function declaration aka function statement
// ->aka function defination
// ->its a function with function name
// ->must have variable name but does not require a variable
// assignment

//2.what is functional expression
// ->its a function without the function name
// ->always returns a value 
//->when you store a function inside the variable
// ->usally stored on a variable when like this done until
// and unless the interpreter reach this line it wont be 
// available 

//3.what is first class functions
//->if the function can be treated as variable

//4.what is IIFE?
(function square(num){
    console.log(num*num)
})(5) //iife doest not remain in the memory
//we can call it this way square(5);
// square(5) // normal calling remains in the memory and you can call it as many times as you want