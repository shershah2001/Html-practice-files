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
