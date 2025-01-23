//  So there are two types of data types i the javascript languagae primitve types which is known as value types examples are number,string,bool,null,undefined,bigInt,symbol and non primitive type -objects , arrays,functions but let me clear you there are only ne refrence type which is object others like arrays , functions are variations of object let us see object in details;

// creating an object - this is the way to create an object
const user={
    firstname:'manish',
    lastName:'kumar',
    age:22
}

// accessing an object - this is the way 1 to access properties of an object
console.log(user.firstname);
console.log(user.age);


// accessing an object - this is the way 2 to access properties of an object
console.log(user["firstname"]);
console.log(user["age"]);


// updating a object - we can also update our object from outside the object
user.contactNo=9643623490;
user.address="Chirag Delhi 359 Near Bhagat Singh College";

console.log(user);


