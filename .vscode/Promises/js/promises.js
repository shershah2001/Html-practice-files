const myDiv = document.querySelector('#myDiv');
// const prob = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             $.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=84ebc29e19fdea8a57a599a5928e7e0d`, (data) => resolve(data.results)).fail((error) => reject(error ,'something went wrong'))
//         }, 1000)
//     })
// }

// prob().then((res) => {
//     myDiv.innerHTML = res.map((ele) => {
//         return `
//       <div>
//          <img src="https://image.tmdb.org/t/p/w500/${ele.poster_path}" alt="images">
//           <p>${ele.title}</p>
//        </div>
//           `
//     }).join('')
// }).catch((error) => console.log(error.message))



// const prob = async () => {
//     try {
//         const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=84ebc29e19fdea8a57a599a5928e7e0d`);
//         if (!res.ok) {
//             throw new Error('something went wrong', res.status)
//         }
//         const data = await res.json();
//         if (!data.results) {
//             throw new Error('no result response')
//         }
//         return data.results
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// prob().then((res) => {
//     myDiv.innerHTML = res.map((ele) => {
//         return `
//                <div>
//                  <img src="https://image.tmdb.org/t/p/w500/${ele.poster_path}" alt="images">
//                  <p>${ele.title}</p>
//               </div>
//         `
//     })
// }).catch((error)=>{
//     console.log(error)
// })

// const myfirstDiv = document.querySelector('#myfirstDiv');
// const closurefun = (color) => {
//     return function () {
//          myfirstDiv.style.backgroundColor = color;
//     }
// }
// const fullName = function (rating,support) {
//     return `${this.name} ${this.last} ${rating} ${support}`
// }
// const person = {
//     name: 'Md. sher',
//     last: 'shah',
   
// }
// const reason = {
//     name: 'rohit',
//     last: 'shah'
// }
// const full = fullName.bind(reason,2,'subscribe')
// console.log(full())
// console.log(fullName.apply(reason, [5,'subscribe']))

// const func1 = (sum) => {
// console.log(sum)
// }
// const func2 = (sum)=>{
// console.log(sum)
// }
// const callbackfun = (one, two,callback)=>{
//  const sum = one + two;
//  callback(sum)
// }

// callbackfun(20,30,func1)
// callbackfun(20,40,func2)


