// Video 2 Coding Along
// class Address {
//     constructor(zip,street) {
//         this.zip= zip
//         this.street=street
//     }
// }
// class User {
//     constructor(name){
//         this.name= name
        
// }
// }
// const user= new User('Paul', undefined, undefined, new Address('1', 'main'))
// console.log(user);



// class UserBuilder {
//     constructor(name) {
//         this.user = new User(name)
//     }
//     setAge(age) {
//         this.user.age= age
//         return this
//     }
//     setPhone(phone) {
//         this.user.phone= phone
//         return this
//     }
//     setAddress(Address) {
//         this.user.Address= Address
//         return this
//     }
//     build() {
//         return this.user
//     }
// }
// let builder = new UserBuilder('Paul').setAge("88").build()
// console.log(user)

//Video 3 Coding Along with FACADE DESIGN PATTERN



//not coding along it's very garbled and makes no sense anyways

//4 Observable Design Patterns

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

//can also do this as a function



function createObservable() {
    return  {
        subscribers: [],
    
        
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
//     document.getElementById('ocount').innerText=count;
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
































