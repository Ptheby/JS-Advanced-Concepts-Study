// // Video 2 Coding Along
// // class Address {
// //     constructor(zip,street) {
// //         this.zip= zip
// //         this.street=street
// //     }
// // }
// // class User {
// //     constructor(name){
// //         this.name= name
        
// // }
// // }
// // const user= new User('Paul', undefined, undefined, new Address('1', 'main'))
// // console.log(user);



// // class UserBuilder {
// //     constructor(name) {
// //         this.user = new User(name)
// //     }
// //     setAge(age) {
// //         this.user.age= age
// //         return this
// //     }
// //     setPhone(phone) {
// //         this.user.phone= phone
// //         return this
// //     }
// //     setAddress(Address) {
// //         this.user.Address= Address
// //         return this
// //     }
// //     build() {
// //         return this.user
// //     }
// // }
// // let builder = new UserBuilder('Paul').setAge("88").build()
// // console.log(user)

// //Video 3 Coding Along with FACADE DESIGN PATTERN



// //not coding along it's very garbled and makes no sense anyways

// //4 Observable Design Patterns

// class Observable {
//     constructor() {
//         this.subscribers= []
//     }
//     subscriber(fn) {
//         this.subscribers.push(fn);
//     }
//     unsubsribe(fn) {
//         this.subscribers =this.subscribers.filter((item) => item !== fn);
//     }
// broadcast(data) {
//     for( let i=0; i<this.subscribers.length; i++) {
//         this.subscribers[i](data);
//     }
// }
// }

// const observer= new Observable()

// const fn= (data) => {
//     console.log('Callback was executed with data', data)
// };
// observer.subscriber(fn);

// observer.broadcast('Hello from the observable!');

// //can also do this as a function



// function createObservable() {
//     return  {
//         subscribers: [],
    
        
//         subscribe(fn) {
//             this.subscribers.push(fn);
//         },
        
//         unsubsribe(fn) {
//             this.subscribers =this.subscribers.filter((item) => item !== fn);
//         },
        
//         broadcast(data) {
//         for( let i=0; i<this.subscribers.length; i++) {
//             this.subscribers[i](data);
//         }
//     },
//     };

// }
// function callbackFn(count) {
//     document.getElementById('count').innerText=count;
// }
       
        
//  obersever.subscribe(callbackFn);  

//  document.getElementById('inc').addEventListener('click', function()){
//     observer.broadcast(
//         parseInt(document.getElementById('count').innerText, 10) +1
//     );
//  };
    
    
 
 
 
//  const observer= createObservable();
    
//     const fn= (data) => {
//         console.log('Callback was executed with data', data)
//     };
//     observer.subscribe(fn);
    
//     observer.broadcast('Hello from the observable!');


//VIDEO 5- Destructuring 

//Objects in practice

// let person = { 
//     firstName: "Sonny",
//     lastName: "Sangha"
// }
// //old way
// let personFirstName= person.firstName;
// let personLastName= person.lastName;
// console.log(personLastName); //Sangha

//new way
// let {firstName, lastName} = person;
// console.log(firstName);//Sonny


//Default values and some changing of property names 
// let person = { 
//     firstName: "Sonny",
//     lastName: "Sangha",
//     currentAge: 28
// }

// let {firstName,lastName,middleName= '', currentAge: age=20} = person;

// console.log(middleName); // nothing
// console.log(age); //28

// // DESTRUCTURING ARRAYS
// const arr= [1,2,3];
// let [x,y,z] = arr;
// console.log(x,z);//my guess it is will be 1 3//  CORRECT!

// const arrValue= [ 'one', 'two', 'three'];

// const[x,,z]= arrValue;
// console.log(x);  //one
// console.log(z);  //three

// const names= ['Paul','Laura','Mckenna','Walker'];

// const [x,...y]= names;

// console.log(x); //Paul
// console.log(y); // (3)['Laura', 'Mckenna', 'Walker']


//SWAPPING VARIABLES

// let name1= "Paul";
// let name2= "Mckenna";
// [name1,name2]=[name2, name1];
// console.log(name1); //MCkenna



//VIDEO 6- Spread Operator....

//Function Calls  //Object Literals  //Array Literals



// // Combining Array

// const parents= ['Paul', ' Laura'];
// const kids= ['Mckenna', ' Walker'];
// const fullFamily= [...parents,...kids];
// console.log(fullFamily); //Array 4 "Paul" "Laura" "Mckenna" "Walker"

// // Combining Objects
// const lion = {hasTail:true, legs:4};
// const eagle= {canFly:true, wings:2};
// const hybrid= { name: "Gryphon", ...lion,...eagle};
// console.log(hybrid);  ///works correctly!



















