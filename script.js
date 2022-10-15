class User{

    constructor(email, name){

        this.email = email

        this.name = name

        this.score = 0        

    }



    login(){

        console.log(this.email, 'just logged in')

        return this

    }



    logout(){

        console.log(this.email, 'just logged out')

        return this

    }



    updateScore(){

        this.score++

        console.log(this.email, 'score is now', this.score)

        return this

    }

}


const userOne = new User('brian@techfybiz.co.ke', 'Brian')

const userTwo = new User('michaelwafulaj@gmail.com', 'Mike')


userOne.login().updateScore().updateScore().logout()