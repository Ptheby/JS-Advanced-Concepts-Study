class Address {
    constructor(zip,street) {
        this.zip= zip
        this.street=street
    }
}
class User {
    constructor(name){
        this.name= name
        
}
}
const user= new User('Paul', undefined, undefined, new Address('1', 'main'))
console.log(user);



class UserBuilder {
    constructor(name) {
        this.user = new User(name)
    }
    setAge(age) {
        this.user.age= age
        return this
    }
    setPhone(phone) {
        this.user.phone= phone
        return this
    }
    setAddress(Address) {
        this.user.Address= Address
        return this
    }
    build() {
        return this.user
    }
}
let builder = new UserBuilder('Paul').setAge("88").build()
console.log(user)
