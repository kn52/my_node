// var list : number[] = [1, 3, 5];
var list = [1, 3, 5];

// var list : Array<number> = [1, 3, 5]; Generic array
var list  = [1, 3, 5];    

// Declare a tuple  
// let a: [string, number];  
let a;  
// Initialize it  
a = ["hi", 8, "how", 5]; // OK  

// interface Calc {  
//     subtract (first: number, second: number): any;  
// }  
   
// let Calculator: Calc = {  
//     subtract(first: number, second: number) {  
//         return first - second;  
//     }  
// }  

// interface Calcl {  
//     subtract (first, second);  
// }  
   
// let Calculator: Calcl = {  
//     subtract(first, second) {  
//         return first - second;  
//     }  
// }  

// class Student  
// {  
//     RollNo: number;  
//     Name: string;   
//     constructor(_RollNo: number, Name: string)   
//     {  
//         this.RollNo = _rollNo;  
//         this.Name = _name;  
//     }  
//     showDetails()  
//     {  
//         console.log(this.rollNo + " : " + this.name);  
//     }  
// }  

class Student  
{  
    RollNo;  
    Name;   
    constructor(RollNo, Name)   
    {  
        this.RollNo = _rollNo;  
        this.Name = _name;  
    }  
    showDetails()  
    {  
        console.log(this.rollNo + " : " + this.name);  
    }  
}  

// enum Color {  
//     Red, Green, Blue  
// };  
// let c: Color;  
// ColorColor = Color.Green;  

// enum Color {  
//     Red, Green, Blue  
// };  
// let c;  
// ColorColor = Color.Green; 

// function identity<T>(arg: T): T {  
//     return arg;  
// }  
// let output1 = identity<string>("myString");  
// let output2 = identity<number>( 100 );  


function identity(arg) {  
    return arg;  
}  
let output1 = identity("myString");  
let output2 = identity( 100 );  