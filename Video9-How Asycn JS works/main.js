// //VIDEO 8- HOW ASYNC JS WORKS
// console.log(1)
// console.log(2)
// console.log(3)

// console.log("message")
// logger()

// console.log(1)

// function logger () {
//     console.log(2)
//     finish()
//     console.log(3)
//     function finish() {
//         console.log("finished")
// //     }
// // }
// //how will this log? My first guess is:
// //in order:  Message   2    finished 3 1  --correct

// //what are callbacks? 


// function first() {
//     console.log(1)
// }

// function second(callback) {
//     setTimeout(() => {
//         console.log(2)
//         callback()
//     }, 0)
// }
// function third() {
//     console.log(3)
// }
// first()
// second(third)


//Another Example from video

// function callbackHell() {
//     setTimeout(() => {
//         const data = { user:"Johnny"}
//         console.log(data)
//         setTimeout(() => {
//             console.log("Data has been updated")
//         },1000)
//     },500)
// }
// callbackHell()


const promise= new Promise((resolve,reject) => {
    resolve('We did it baby')
})
promise.then(data => {
    console.log(data)
})
.catch()

//completetly lost on Promises in the time given--




