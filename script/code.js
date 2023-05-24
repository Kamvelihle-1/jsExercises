//Answers Q1
/*
 >Variable : A variable is a container that can hold different values and be used in a program to store and manipulate data, and can only be accessed using the name they are given during declaration.

 >Value : A value is data that can be stored in a variable or used in a program.

 >Data type :A data type defines the kind of data that can be stored in a variable, specifying the possible values and the operations that can be performed on it.

 >Initialization : Declaring and assigning a value to a variable at the same time.

 >Difference between var, let and const : var has function scope, let has block scope and allows reassignment but no redeclaration, while const has block scope and creates a read-only constant variable.

 >What is a variable scope : the area in which a variable is visible, accessable and can be manipulated

 >When can you decide when to use a for or while, forEach and do while loop? : FOR is for when you know the number of iterations or want to iterate over a certain range 

 >Define hoisting and variable scoping? : Hoisting is a mechanism in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase.
 Variable scoping refers to the visibility and accessibility of variables in different parts of a program. 

 How to create a function called fullName that returns your full name and displays it
on the console.

function fullName(){
    let fName="Kamvelihle Sikalana";
    console.log(fName);
    return fName;
}
*/ 

// Answer Q2

let student={
    firstName:"Mamboyi",
    lastName:"Bhokhwe",
    age: 43,
    subjects:["Maths","IT","Physics"]
}
let address={
    streetName:"Imam Haron Rd",
    streetNum:"1274",
    suburb: "Lansdowne",
    city: "Cape Town",
    country:"South Africa"
}
console.log(student);
console.log( address);

