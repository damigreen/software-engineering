'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Authenticated {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, auth, response }, next) {
    // call next to advance the request
    try {
      // Check for user
      await auth.check()

      return response.redirect('home')
    } catch (e) {
      console.log(e)
    }
    await next()
  }
}

module.exports = Authenticated
