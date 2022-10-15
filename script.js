class User{

    constructor(email, name){

        this.email = email

        this.name = name

    }

}


const userOne = new User('brian@techfybiz.co.ke', 'Brian')

const userTwo = new User('michaelwafulaj@gmail.com', 'Mike')

console.log(userOne, userTwo)


// New keyword

// Creates a new empty object {}

// Sets the value of 'this' to be the new empty object 

// Calls the constructor method