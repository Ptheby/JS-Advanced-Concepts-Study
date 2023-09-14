// setTimeout(() => {
//     console.log('Hello')
// },100
// )

// console.log("1");
// setTimeout(() => {
//     console.log('2')
// }, 100)
// console.log("3");   //my guess is that it will log 1 and 3 in the order they appear and not 3 because the function is not called? And i was wrong it was 1,3,2 WHY!


const names = [ "Laura" , "Paul", "Louie"]

names.forEach((name) => console.log(name))
//in this case forEach is a method that uses a callback (name) in the form of an arrowfunction to be called once for each element
//in the names array. it takes one parameter, a name, and logs it to the console. and i have learned
//through searching that the "forEach" method that calls a function for each element in an array


const myForEach(arr, cb) => {
    for (let i=0; i < arr.length; i++) {
        const element=arr[i];
        cb(element)
    }
}
myForEach(names, (name) => {
    console.log(name);

})

//he completely loses me when he goes into asynchronus 