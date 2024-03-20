
// const prob = () =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const arr = [1,2,3,4,5]
//          if(arr[12]!==undefined){
//             resolve(arr[12])
//          }else{
//             reject("something went wrong")
//          }
//         },1000)
//     })
// }
// prob().then((response)=>{
//     console.log(response)
// }).catch((error)=>{
//     console.log(error)
// })

// const prob = (complete) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (complete) {
//                 resolve("shershah is good")
//             } else {
//                 reject("shershah is bad")
//             }
//         }, 1000)
//     })
// }
// prob(false).then((response)=>{
//     console.log(response)
// }).catch((error)=>{
//     console.log(error)
// })

//how to use promises with get method start 

// const mapDiv = document.querySelector(".mapDiv");
// const prob = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             $.get('https://api.themoviedb.org/3/movie/popular?api_key=84ebc29e19fdea8a57a599a5928e7e0d&language=en-US&page=1&page=2', (data) => resolve(data.results)).fail((error) => reject("something went wrong the api"))
//         }, 1000)
//     })
// }
// prob().then((res) => {
//     mapDiv.innerHTML = res.map((items) => {
//         console.log(items)
//         return `<div>
//             <img src="https://image.tmdb.org/t/p/w500${items.poster_path}" alt="movie_images" />
//             <p>${items.id}</p>
//             <p>${items.original_language}</p>
//             <p>${items.original_title}</p>
//             <p>${items.overview}</p>
//             <p>${items.release_date}</p>
//             <p>${items.vote_average}</p>
//         </div>`
//     }).join('')
// }).catch(error=> console.log(error))

//how to use promises with get method end 

const mapDiv = document.querySelector(".mapDiv");
const porb = async () => {
    try {
        const API_KEY = "84ebc29e19fdea8a57a599a5928e7e0d";
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=4`);
       

        if (!response.ok) {
            throw new Error(`HTTP error! status ${response.status}`);
        }
        const data = await response.json();
        if (!data.results) {
            throw new Error(`NO RESULT IN THE RESPONSE`)
        }
      console.log(data)
        return data.results;
    } catch (error) { console.log(error) }
}
porb().then((response) => {
    mapDiv.innerHTML = response.map((items) => {
        return `
        <div>
            <img 
            src="https://image.tmdb.org/t/p/w500${items.poster_path} "
            alt="" />
              <p>${items.id}</p>
               <p>${items.title}</p>
               <p>${items.overview}</p>
               <p>${items.original_language}</p>
               <p>${items.vote_average}</p>
        </div>`
    }).join('')
}).catch((error) => mapDiv.innerHTML = error)