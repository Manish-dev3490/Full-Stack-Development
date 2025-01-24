// In this file we are going to learn about variation of object - Array - Array is a data structure which is used to store the elements in the contigous location .

let arr=['manish','kumar',undefined,null,true,false];


let user ={
    fname:"manish",
    lname:"kumar"
}

// let user2=user;
// user2.age=22;
// user2="manish kumar the great";

//  copying a object with duplicate values
const user2={...user};
user.age=22;
user.fname="khushi";
