// HOW TO MAKE PROTOTYPE INTO THE CLASS FUNCTION;

//const para = document.querySelector('#demo')
//class hello {

// constructor(name) {
//  this.name = name;
//}

// message() {
//    return para.textContent = this.name
//  }

//}
// const a = new hello('hello rohit');
//   const b = new hello('hello shershah');
//console.log("a", a.message())
//console.log("b", b.message())
//  const clickHandler = () => {
// const c = new hello('hello mohit')
// c.message();
// }

//  NOTE HOW TO USE EXTENDS INTO THE CLASS FUNCTION;

//const para = document.querySelector('#demo');
// class hello{
//constructor(name,year){
//this.name = name,
//this.year = year
// }
//}
//class dataAno extends hello{

// } 
// const a = new dataAno("hello shershah",2018);
// console.log(a.name, a.year)

// NOTE HOW CAN I CODE WHEN I MAKE TWO  CONSTRUCTOR INTO THE CHILD AND PARENT; 
// WHY SHOULD I USE SUPER KEYWORD

// const para = document.querySelector('#demo');
// class hello {
//     constructor(name, year, salary) {
//         this.name = name,
//             this.year = year,
//             this.salary = salary
//     }
// }
// class dataAno extends hello {
//     constructor(name, year, salary) {
//         super()
//         this.name = name,
//             this.year = year,
//             this.salary = salary
//     }

//     info() {
//         const la = 12000;
//         const pa = 500;
//         const totalSalary = this.salary + la + pa;
//         document.write(`<div>
//         <p>${this.name} ${this.year} ${totalSalary}</p>
//     </div>`)
//     }
// }
// const b = new hello('hello mohit', 2019, 20000)
// const a = new dataAno("hello shershah", 2018, 15000);
// console.log("a=>", a, "b=>", b) 

// WHEN SAME NAME OF PROTOTYPE IS EXISTING INTO THE PARENT AND CHILD THEN HOW CAN YOU CALL CHILD AND PARENT PROTOTYPE;

// const para = document.querySelector('#demo');
// class hello {
//     constructor(name, year, salary) {
//         this.name = name,
//             this.year = year,
//             this.salary = salary
//     }
//     info() {
//         const detail = `
//                           ${this.name} 
//                           ${this.year}
//                           ${this.salary}
//                  `
//         return detail
//     }

// }
// class dataAno extends hello {
//     constructor(name, year, salary) {
//         super()
//         this.name = name,
//             this.year = year,
//             this.salary = salary
//     }

//     info() {
//         super.info()
//         const la = 12000;
//         const pa = 500;
//         const totalSalary = this.salary + la + pa;
//         document.write(`<div>
//                 <p>${this.name} ${this.year} ${totalSalary}</p>
//             </div>`)
//     }
// }
// const b = new hello('hello mohit', 2019, 20000)
// const a = new dataAno("hello shershah", 2018, 15000);
// console.log("a=>", a, "b=>", b) 

//  WHAT IS PRIVATE AND WHAT IS PUBLIC

// class emp {
//     #name = '';
//     constructor(n) {
//         this.#name = n;
//     }
//     #getName(){
//         console.log(this.#name);
//     }
//     pubfuc(){
//         this.#getName();
//     }
// }
// const emp1 = new emp('hi shershah');
// console.log(emp1.pubfuc())

// WHAT IS MIXIN AND HOW TO USE MIXIN;

// let usefullmethod = {
//     sayHi(){
//       console.log('Hi...')
//     },
//     sayBye(){
//         console.log('Bye...')
//     }
// };
// class user{
//     constructor(){
//         this.name ='vishwajeet'
//     }
// }
// Object.assign(user.prototype,usefullmethod);
// let user_1 = new user();
// console.log(user_1.sayBye())

//HOW YOU CAN USE MIXIN IN CHILD PROTOTYPE;

// const usefullMethod ={
//     sayHi(){
//         console.log('Hi...');
//     },
//     sayBye(){
//         console.log('bye...')
//     }
// }
// class user{
//     constructor(){
//         this.name = 'vishwajeet'
//     }
// }
// class admin extends user{

// }
// Object.assign(admin.prototype,usefullMethod);
// const  newAdmin = new admin();
// console.log(newAdmin.sayBye())