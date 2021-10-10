const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
  const View = use('View')
  const Env = use('Env')
  const Exception = use('Exception')
  

  View.global('appUrl', path => {
    const APP_URL = Env.get('APP_URL')

    return path ? `${APP_URL}/${path}` : APP_URL
  })

  // Handle InvalidSessionException
  try {
    Exception.handle('InvalidSessionException', (error, { response }) => {
        return response.redirect('/login')
    })
  } catch (e) {
    response.send('User present')
  }
})
