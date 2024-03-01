// const prob1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("hello world")
//         const arr = [1, 2, 3, 4, 5]
//         resolve(arr[1])
//         reject("Error So Much Problem")
//     }, 1000)
// })
// prob1.then((response) => {
//     console.log(response)
// }).catch((error) => {
//     console.log(error)
// })

// const prob2 = (complete) => {
//     return new Promise((resolve, reject) => {
//         const arr = [1, 2, 3, 4, 5]
//         if (complete) {
//             resolve(arr)
//         } else {
//             reject(`Error :- so went wrong`)
//         }
//     })
// }
// prob2(true).then((response) => {
//     console.log(response)
// }).catch((error) => {
//     console.log(error)
// })
// const mainDiv = document.querySelector(".mainDiv");
// const prob3 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             $.get('https://jsonplaceholder.typicode.com/posts', function (data) {
//                 resolve(data)
//             })
//             $.post('https://jsonplaceholder.typicode.com/posts',{
//                 name:"mohd shershah ",
//                 education:"Bachlor of Science",
//                 age:22
//             },function(data){
//                 resolve(data)
//             }).fail(err => reject("something went wrong"))
//         },1000)
//     })
// }

// prob3().then((response) => {
//     mainDiv.innerHTML = response.map((ele) => {
//         return (
//             `<div>
//         <p>${ele.userId}</p>
//         <p>${ele.name}</p>
//         <p>${ele.education}</p>
//         <p>${ele.age}</p>
//         <p>${ele.id}</p>
//         <p>${ele.title}</p>
//         <p>${ele.body}</p>
//         </div>`
//         )
//     }).join('')
// }).catch((error) => {
//     console.log(error);
// })

// const mainDiv = document.querySelector(".mainDiv");
// const prob4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         $.get('https://api.themoviedb.org/3/movie/popular?api_key=84ebc29e19fdea8a57a599a5928e7e0d',
//             (data) => resolve(data.results)).fail((err) => reject('something went wrong'))
//     }, 1000)

// })
// prob4.then((response) => {
//     console.log(response)
//     mainDiv.innerHTML = response.map((ele) => {
//         return (
//             `<div>
//             <img src='https://image.tmdb.org/t/p/w500${ele.poster_path}' alt="movie_image"/>
//             <p>${ele.id}</p>
//             <p>${ele.original_language}</p>
//             <p>${ele.original_title}</p>
//             <p>${ele.overview}</p>
//             <p>${ele.release_date}</p>
//             <p>${ele.vote_average}</p>
//             </div>`
//         )
//     }).join('')
// }).catch((error)=> console.log(error))

// const prob5 = (indexData) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let biodata = {
//                 name: "mohd. SherShah",
//                 age: "22"
//             }
//             resolve(`my name is ${biodata.name} and my age is ${biodata.age} and my roll number is ${indexData}`)
//             reject(`something went wrong`)
//         }, 1000)
//     })
// }
// prob5(1).then((response) => {
//     console.log(response);
// }).catch((error) => console.log(error))

// const prob6 = new Promise((resolve) => {
//     const arr = [1, 2, 3, 4]
//     setTimeout(() => {
//         resolve(arr)
//     }, 1000)
// })
// const getBioData = () => {
//     return new Promise((resolve) => {
//         const bioData = {
//             name: "shershah",
//             class: "graduation"
//         }
//         setTimeout(() => {
//             resolve(`${bioData.name} and ${bioData.class} and `)
//         }, 1000)
//     })
// }
// const getData = async () => {
//     try {
//         const rollData = await prob6;
//         const bioDatas = await getBioData()
//         return {
//             rollData,
//             bioDatas
//         };
//     } catch (error) {
//         console.log(`Error:- ${error}`)
//     }

// }
// const getname = getData().then((response) => console.log(response)).catch((error) => console.log(error))

// const mainDiv = document.querySelector(".mainDiv");
// const fetchData = async () => {
//     try {
//         const jsonOfdata = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=84ebc29e19fdea8a57a599a5928e7e0d');
//         console.log(jsonOfdata)
//         const readOfdata = await jsonOfdata.json();
//         return readOfdata.results;
//     } catch (error) {
//         console.log(error)
//     }
// }
// fetchData().then((response) => {
//     mainDiv.innerHTML = response.map((ele) => {
//         return (
//             `
//            <div>
//            <img src="https://image.tmdb.org/t/p/w500${ele.poster_path}" alt="movie_images"/>
//           <p>${ele.id}</p>
//           <p>${ele.original_language}</p>
//           <p>${ele.original_title}</p>
//           <p>${ele.overview}</p>
//           <p>${ele.release_date}</p>
//           <p>${ele.vote_average}</p>            
//            </div>       
//            `
//         )
//     }).join('')
// }).catch((err) => {
//     console.log(err)
// })


const mainDiv = document.querySelector(".mainDiv");
const fetchOfdata = async () => {
    const API_KEY = "84ebc29e19fdea8a57a599a5928e7e0d";
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (!data.results) {
            throw new Error(`No result in the response`)
        }
        return data.results;
    } catch (error) {
        mainDiv.innerHTML = `<p>Error fetching data: ${error.message}</p>`
        return []
    } 
}
fetchOfdata().then((res) => {
    mainDiv.innerHTML = res.map((ele) => {
        return (
            `
        <div>
        <img src="https://image.tmdb.org/t/p/w500${ele.poster_path}"
         alt="${ele.original_title}"/>
        <p>${ele.id}</p>
        <p>${ele.original_language}</p>
        <p>${ele.original_title}</p>
        <p>${ele.overview}</p>
        <p>${ele.release_date}</p>
        <p>${ele.vote_average}</p>                    
        </div>
        `
        )
    }).join('')
}).catch((error) => mainDiv.innerHTML = `Error:- ${error.message}`)