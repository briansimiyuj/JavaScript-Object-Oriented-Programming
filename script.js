const userOne = {

    email: 'brian@techfybiz.co.ke',
    
    name: 'Brian',



    login(){

        console.log(this.email, 'has logged in')      

    },



    logout(){

        console.log(this.email, 'has logged out')

    }

}  



userOne.login()
userOne.logout()