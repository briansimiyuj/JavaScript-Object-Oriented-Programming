function User(email, name) {
    
    this.email = email

    this.name = name

    this.online = false


    this.login = function(){

        console.log(this.email, 'has logged in')

    }

}




const userOne = new User('brian@techfybiz.co.ke', 'Brian')

const userTwo = new User('michaelwafulaj@gmail.com', 'Mike')


console.log(userOne)

userTwo.login()