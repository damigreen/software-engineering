'use strict'

class HomeController {
  showHomepage ({ view }) {
    return view.render('home');
  }
}

module.exports = HomeController
