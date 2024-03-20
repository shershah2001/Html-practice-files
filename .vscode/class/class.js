class person{
   constructor(name, subject){
    this.name = name;
    this.subject = subject;
   }
   info(parameter){
    return `this is my name ${this.name} ${this.subject} ${parameter}`
   }
}
const per = new person('shershah','hindi');
// console.log(per.info('hello  world'))


class anotherPerson extends person {
  constructor(name,subject){
    super()
    this.name=name,
    this.subject = subject
  }
}
class secondPerson extends person{
   info(){
     return `this is my name ${this.name} ${this.subject}`
   }
}
const sec = new secondPerson('rohit','mohit')
console.log(sec.info())
// const ano = new anotherPerson('sher','shah');
// console.log(ano.info('hello  world'))

let usefullmethod={
    sayHi(){
        console.log('hi...')
    },
    sayHello(){
        console.log('hello...')
    }
}

class perison{
   constructor(name){
    this.name = 'shershah'
   }
}
class laptop extends  perison{
  
 }
 Object.assign(perison.prototype,usefullmethod)
Object.assign(laptop.prototype,usefullmethod)
const  pri = new perison();
const lap = new laptop
console.log(pri.sayHi())
console.log(lap.sayHi())