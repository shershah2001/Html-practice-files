// class data {
//     constructor(name, year) {
//         this.name = name,
//             this.year = year
//     }
//     method(){
//          const info = `this is my name ${this.name} and i am born in ${this.year}`
//          return info
//     }
// }
// let a = new data("shershah", 2001)
// let b = new data("rohit", 24)
// console.log(a.method())
// console.log(b.method())
// document.write(a.name, a.year)

// class data {
//     constructor(name, year) {
//         this.name = name,
//             this.year = year
//     }
// }
// class dataAno extends data {
//     constructor(name, year) {
//         super()
//         this.name = name,
//             this.year = year
//     }
// }
// let a = new data("shershah", 2001);
// let b = new dataAno("rohit", 2001);
// console.log(a,b)

// class data {
//     constructor(name, year) {
//         this.name = name,
//             this.year = year
//     }
//     info(){
//         console.log(this.name, this.year)
//     }
// }
// class dataAno extends data {

// }
// const a = new dataAno("shershah",2001);
// console.log(a)

class data {
    constructor(name, age, salary) {
        this.name = name,
            this.age = age,
            this.salary = salary
    }
    info() {
        document.write(`
        <h1>Parent data</h1>
        <p>
          ${this.name} ${this.age} ${this.salary}
        </p>
      `)
    }
}
class dataAno extends data {
    info() {
        let la = 12000;
        let pa = 500;
        const totalSalary = this.salary + la + pa ;
        document.write(`
        <h1>children data</h1>
        <p>
        ${this.name} ${this.age} ${totalSalary}
        </p>
        `)
    }
}
const a = new data("shershah", 22, 20000);
const b = new dataAno("rohit", 24, 21000)
a.info();
b.info()

