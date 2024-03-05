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

