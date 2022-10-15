function User(email, name) {
    
    this.email = email

    this.name = name

    this.online = false

}



User.prototype.login = function(){

    this.online = true

    console.log(this.email, 'has logged in')

}



User.prototype.logout = function(){

    this.online = false

    console.log(this.email, 'has logged out')

}



function Admin(...args) {
    
    console.log(args)

}




const userOne = new User('brian@techfybiz.co.ke', 'Brian')

const userTwo = new User('michaelwafulaj@gmail.com', 'Mike')

const admin = new Admin('bsimiyuj@gmail.com', 'Brayo');


console.log(userOne)

userTwo.login()