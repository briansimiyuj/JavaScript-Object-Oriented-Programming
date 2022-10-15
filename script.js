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
    
    User.apply(this, args)

    this.role = 'super admin'

}



Admin.prototype = Object.create(User.prototype)


Admin.prototype.deleteUser = function(u){

    users = users.filter(user =>{

        return user.email != u.email

    })

}




const userOne = new User('brian@techfybiz.co.ke', 'Brian')

const userTwo = new User('michaelwafulaj@gmail.com', 'Mike')

const admin = new Admin('bsimiyuj@gmail.com', 'Brayo');

let users = [userOne, userTwo, admin]


console.log(admin)

admin.deleteUser(users[1])

console.log(users)