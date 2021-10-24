let n1  = 12.0;       
let n2 = 0x37CF;    
let n3 = 0o377 ;     
let n4 = 0b111001;

console.log("====Number Type====");
console.log("n1 "+n1);
console.log("n2 "+n2);
console.log("n3 "+n3);
console.log("n4 "+n4);


let username = "Aashish";
let hello1  = "Hi " + username;
let hello2  = `"Hi " + ${username}`;

console.log("====String Type====");
console.log("name "+username);
console.log("hello1 "+hello1);
console.log("hello2 "+hello2);

let boolean = false;
console.log("====Boolean Type====");
console.log("boolean "+boolean);

let var1 = undefined;
let var2 = null;

console.log("====Void Type====");
console.log("var1 "+var1);
console.log("var2 "+var2);
console.log("let var3:void = 3244; Error");


let anytype1 = 1;
let anytype2 = "Hi";
let anytype3 = true;

console.log("====Any Type====");
console.log("anytype1 "+anytype1);
console.log("anytype2 "+anytype2);
console.log("anytype3 "+anytype3);