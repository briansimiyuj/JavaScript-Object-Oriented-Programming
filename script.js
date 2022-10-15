class User{

    constructor(email, name){

        this.email = email

        this.name = name

    }



    login(){

        console.log(this.email, 'just logged in')

    }



    logout(){

        console.log(this.email, 'just logged out')

    }

}


const userOne = new User('brian@techfybiz.co.ke', 'Brian')

const userTwo = new User('michaelwafulaj@gmail.com', 'Mike')


userOne.login()

userTwo.logout()