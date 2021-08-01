'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')

class LoginController {
  showLoginForm ({ view }) {
    return view.render('auth.login')
  }

  async login({ request, session, response, auth }) {
    // Get form data
    const { email, password, remember } = request.all()

    // Retrieve user from database using form data
    const user = await User.query()
      .where( 'email', email)
      .where('is_active', true)
      .first()

      if (user) {
      // Verify password
      const passwordVerified = await Hash.verify(password, user.password)
      console.log('isVerified--------', passwordVerified)

      
      if (passwordVerified) {
        // Login user
        await auth.remember(!!remember).login(user)

        return response.route('/home ')
      }
    }

    // Display error message
    session.flash({ 
      notification: {
        type: 'danger',
        message: 'We are unable to verify your credentials. Please confirm your email or register'
      }
    })

    return response.redirect('back')
  }
}

module.exports = LoginController
