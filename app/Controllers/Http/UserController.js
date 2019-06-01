'use strict'

const User = use('App/Models/User')

class UserController {
  //register
  async register({ request }) {
    const { email, password } = request.all()

    const user = await User.create({
      email,
      password,
      username:email,
    })

    return user;
  }

  //Login
  async login({ auth, request }){
    const { email, password } = request.all()
    const token = await auth.attempt(email,password)

    return token;
  }

}

module.exports = UserController
