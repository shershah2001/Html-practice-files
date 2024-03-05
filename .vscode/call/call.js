// WHAT IS CALL METHOD. WHEN YOU WANT TO ACCESS THE METHOD OF ANOTHER OBJECT THEN CALL METHOD IS VERY USE FULL. 

// const person = {
//     name: "shershah",
//     class: "graduation",
//     feature: function (rating, support) {
//         console.log(`${this.name} ${this.class} ${rating} ${support}`)
//     }
// }

// const person2 = {
//     name: 'rohit',
//     class: "post graduation",
// }

// person.feature.call(person2, 5, "subscribe")


// HOW YOU CAN USE CALL METHOD. WITH FUNCTION HERE IS THE EXAMPLE

// function Prison(name, lastname) {
//     this.name = name;
//     this.lastname = lastname;
//     this.fullname = function() {
//         console.log(`${this.name} ${this.lastname}`);
//     };
// }

// function Prison1(name, lastname) {
//     this.name = name;
//     this.lastname = lastname;
// }

// const prison = new Prison('john','Doe');
// const prison1 = new Prison1('sher','shah');

// prison.fullname.call(prison1);

//NOTE HOW TO USE CALL METHOD WHEN FUNCTION IS NOT IN THE OBJECT OR ANOTHER FUNCTION LIKE THE ABOVE THE TWO CASES. 

// function arr() {
//     console.log(`${this.name} ${this.lastname}`)
// }

// function Prison1(name, lastname) {
//     this.name = name;
//     this.lastname = lastname;
// }
// const pri = new Prison1('sher', 'shah')
// arr.call(pri)

// How can you use call method with function and object;

// const prison = {
//     name: "mohit",
//     lastname: "shah"
// }
// arr.call(prison)

//{
//NOTE
// apply method is similar to call method but the difference is that apply method accept
//arguments in the form of array but call method accept arguments separatly
//}

// HOW TO USE APPLY METHOD IF YOU WANT PASS YOUR ARRUGUMENT IN THE ONE ARRAY NOT SEPARATELY LIKE 
// CALL MEHTOD 

// const person = {
//     name: 'mohit',
//     class: "graduation",
//     gender: 'male',
//     fullInfo: function (school, collage) {
//         console.log(`${this.name} ${this.class} ${this.gender} ${school} ${collage}`)
//     }
// }

// const person1 = {
//     name: 'shershah',
//     class: 'graduation',
//     gender: "male"
// }
// person.fullInfo.apply(person1, ['sarvodaya bal vidhyala', 'ignou']);

// HOW YOU CAN USE APPLY METHOD WITH FUNCTION;

// function  person(name, lastname){
//     this.name = name ;
//     this.lastname = lastname;
//     this.fullName = function(){
//         console.log(`${this.name} ${this.lastname}`)
//     }
// }
// function person1(name,lastname){
//     this.name = name;
//     this.lastname = lastname;
// }
// const per = new person('sher','shah');
// const per1 = new person1('rohit','shah');
// per.fullName.apply(per1)


//NOTE 
//WHEN TO USE BIND METHOD INSTEAD OF CALL AND APPLY METHOD;
// WHEN YOU TO STORE YOU METHOD IN A VARIABLE AND YOU WANT TO USE IT 
// SOME TIME LATER WHEN YOU WANT THEN USE THIS BIND METHOD INSTEAD OF CALL AND APPLY METHOD BECAUSE THIS TWO METHOD DO NOT  GIVE YOU THIS  FACILITY LIKE BIND 

// const peri = {
//     name: 'sher',
//     last: 'shah',
//     fullName: function (school, graduation) {
//         console.log(`${this.name} ${this.last} ${school} ${graduation}`)
//     }
// }
// function full(school, graduation) {
//     console.log(`${this.name} ${this.last} ${school} ${graduation}`)
// }
// const per = {
//     name: 'mohit',
//     last: 'shah',
// }
// let prison = peri.fullName.bind(per)
// prison('svd school', 'graduation')

// let prison2 = full.bind(per)
// prison2('bharat convert school','graduation')