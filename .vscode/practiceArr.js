// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ,shershah";
// console.log(text.length)
// console.log(text.at(-1));
// console.log(text.charAt(text.length -1));
// const slicetext=text.substr(0,8)
// console.log(slicetext)

// let str = "Apple, Banana, Kiwi";
// document.getElementById("demo").innerHTML = str.substr(-4,1);

// console.log(text.replace(/d/ig,"shershah"))
// console.log(text.trim().split(''))
// console.log(text.indexOf("D"))
// console.log(text.search(/d/ig))
// console.log(text.match(/ABCDEF/ig,/shershah/ig))
// console.log(text.endsWith("shershah"))
// let x = 10;
// let y = "20";
// let z = x + y;
// // console.log(z)
// // console.log(x-y)
// console.log(typeof x.toString());

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.length);
// console.log(typeof fruits.toString());
// console.log(fruits.at(-1));
// console.log( fruits.pop())
// console.log(fruits);
// console.log(fruits.push("shershah"))
// console.log(fruits)
// console.log(fruits.shift());
// console.log(fruits)
// console.log(fruits.unshift('shershah'));
// delete fruits;
// console.log(fruits)
// const myArr = [[1,2],[3,4],[5,6]];
// console.log(myArr.flat())
// console.log(myArr)
// const fruit = ["Banana", "Orange", "Apple", "Mango"];
// fruit.splice(2,2)
// console.log(fruit)
// console.log(fruit.slice(-4));
// console.log(fruit.indexOf("Orange"));
// console.log(fruit.lastIndexOf("Mango"));
// const age = [18, 10, 20, 40, 50]
// const demo = document.querySelector("#demo");
// const findArr = age.findLastIndex((items,index)=>items>18)
// console.log(findArr)
// console.log(fruit.sort().reverse());
// const reverseArr = fruit.map((item)=> item.split('').reverse())
// console.log(reverseArr.flat().join(','))
// const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort((a,b)=> a - b))

// fisher yates method start here 
// const clickHandler = () => {
//     for (let i = age.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random()*(i+1));
//         [age[i], age[j]] = [age[j], age[i]];
//     }
//     demo.innerText = age;
// }
// fisher yates method end here 
// const agefun = (age) =>{
// //  return Math.min.apply(null,age);   
// return Math.max.apply(null,age)
// }
// const clickHandler = () =>{
//    const minage = agefun(age)
//    document.querySelector("#demo").innerText = minage
//     }


// home made method for finding the max value;
// const age = [18, 10, 20, 40, 50];
// let len = age.length;
// let maxValue = -Infinity;
// while (len--) {
//     if (age[len] > maxValue) {
//         maxValue = age[len]
//     }
// }
// console.log(maxValue);
// home made method for finding the max value end;

// home made method for finding the min value start
// let le = age.length;
// let minValue = Infinity;
// while(le--){
//     if(age[le]<minValue){
//         minValue = age[le]
//     }
// }
// console.log(minValue)

// home made method for finding the min value end 

// const numbers = [[45, 45], [10, 8], [9, 8]];
// let text = ''
// numbers.forEach((value)=>{
//  text += value+"<br>";
// })
// console.log(text);
// const mapArr = numbers.map((items) => {
//     return `
//          <div>
//           <p>${items}</p>
//           </div>`
// })
// document.write(mapArr.join(''))
// const numArr = numbers.flatMap((items)=>{
//     return  `
//              <div>
//               <p>${items}</p>
//               </div>`
// })
// console.log(numArr.join(''))
// document.write(numArr.join(''))
// const myArr = [1, 2, 3, 4, 5,6];
//  const numArr = myArr.filter((items,index)=>items !== myArr[2])
//  console.log(numArr)
// const numArr = myArr.reduce((acc,curr)=>{
//    return acc + curr
// })
// console.log(numArr)

// How to use Reduce method with Array;
// const arr = [1, 2, 3, 4, 5, 6];
// const redArr = arr.reduce((acc, curr, index) => {
//   acc.push(curr); // Push the current element into the accumulator
//   return acc; // Return the accumulator for the next iteration
// }, []);
// console.log(redArr);

// How to use Reduce method with object;
// const str = "this is a ajavascript interview and you have to code";
// const strArr = str.replace(/\s+/g, '').split('');
// // console.log(strArr);
// const redArr = strArr.reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1
//     return acc;
// }, {})
// // console.log(redArr);
// let maxValue = 0;
// let maxChar=''

// for (let max in redArr) {
//     // console.log(max)
//     if(redArr[max] > maxValue ){
//         maxValue = redArr[max]
//         maxChar = max
//     }
// }
// console.log(maxChar)

// how to use every method in array

const numbers = [45, 4, 9, 16, 25];
// const numEvery = numbers.every((ele)=> ele>0)
// console.log(numEvery)
// const numSome = numbers.some((ele)=> ele>4)
// console.log(numSome)

// const Obj = {
//     car: "volvo",
//     bike: "honda",
//     laptop: "dell",
//     money: "no"
// }
// const objArr = Array.from(Object.values(Obj), (items) => {
//     return `
//          <div>
//          <p>${items}</p>
//          </div>
//     `
// })
// document.write(objArr)


const Obj = {
    car: "volvo",
    bike: "honda",
    laptop: "dell",
    money: "no"
}

const objArr = Object.values(Obj);
let txt=''
// for(let x in objArr){
//     txt += objArr[x]+"<br>"
// }
// console.log(txt)
// for(let x of objArr){
//     txt += x
// }
// console.log(txt)