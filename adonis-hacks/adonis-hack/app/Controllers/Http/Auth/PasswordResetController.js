'use strict'

const User = use('App/Models/User')
const { validate, validateAll } = use('Validator')
const passwordReset = use('App/Models/PasswordReset')
const randomString = require('random-string')
const mail = use('Mail')
const Hash = use('Hash')

class PasswordRestController {
  showLinkRequetForm ({ view }) {
    return view.render('auth.password.email')
  }


  async sendResetLinkEmail ({ request, session, response }) {
    // Validate form input
    const validation = await validate(request.only('email'), {
      email: 'required|email'
    })

    if (validation.fails()) {
      session.withErrors(validation.messages()).flashExcept(['password', 'password_confirmation'])
      
      return response.redirect('back')
    }
    
    try {
      // Get user
      const user = await User.findBy('email', request.input('email'))
      await passwordReset.query().where('email', user.email).delete()
      
      // Create new token
      const { token } = await passwordReset.create({
        email: user.email,
        token: randomString({ length: 45 })
      })
      
      const mailData = {
        user: user.toJSON(),
        token
      }

      // Send message to user 
      await mail.send('auth.emails.password_reset', mailData, message => {
        message
          .to(user.email)
          .from('hello@avios.com')
          .subject('Password reset link')
        })
        
        // Send success message
        session.flash({
          notification: {
            type: 'success',
            message: 'A  password reset link has been sent to your email address'
          }
        })
        
        return response.redirect('back')
    } catch (e) {
      console.log(e)
      
      // Error success message
      session.flash({
        notification: {
          type: 'danger',
          message: 'Sorry! there is no user with this email address'
        }
      })
    }
  }
  
  showResetForm ({ view, params }) {
    return view.render('auth.password.reset', { token: params.token })
  }
  
  async reset({ request, session, response }) {
    // Validate form input 
    const validation = await validateAll(request.all(), {
      token: 'required',
      email: 'required',
      password: 'required|confirmed'
    })
    
    if (validation.fails()) {
      // session.withErrors(validation.messages()).flashExcept(['password'])
      session.withErrors(validation.messages()).flashAll()
      
      return response.redirect('back')
    }
    
    try {
      // Get user by the provider email 
      const user = await User.findBy('email', request.input('email'))
      
      // Check if password reset token exist for user
      const token = await passwordReset.query()
        .where('email', user.email)
        .where('token', request.input('token'))
        .first()
      
        if (!token) {
          // Display error message
          session.flash({ 
            notification: {
              type: 'danger',
              message: 'Password reset token does not exist'
            }
          })
        }
        
        // It the token exist
        // Hash passord and save to the database
        user.password = await Hash.make(request.input('password'))
        await user.save()
        
        // Delete password reset token
        await passwordReset.query()
        .where('email', user.email)
        .delete()
        
      // Display success message
      session.flash({ 
        notification: { 
          type: 'success',
          message: "Your password has been reset"
        }
      })

      response.redirect('/login')

    } catch (e) {
      session.flash({ 
        notification: { 
          type: 'danger',
          message: 'There is no user with this email'
        }
      })
    }
  }

}

module.exports = PasswordRestController
