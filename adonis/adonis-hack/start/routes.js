'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('welcome')
Route.on('/').render('home').as('home').middleware('auth')

Route.get('/posts', 'PostController.index')
Route.get('/posts/add', 'PostController.add')
Route.get('/posts/edit/:id', 'PostController.edit')
Route.get('/posts/:id', 'PostController.details')
Route.post('/posts', 'PostController.store')
Route.put('/posts/:id', 'PostController.update')
Route.delete('/posts/:id', 'PostController.destroy')

Route.get('/customers', 'CustomerController.index')
Route.get('/customers/add', 'CustomerController.add')
Route.get('/customers/:id', 'CustomerController.details')

Route.get('/properties', 'PropertyController.index')
Route.get('/properties/new', 'PropertyController.new')
Route.get('/properties/:id', 'PropertyController.details')
Route.post('/properties', 'PropertyController.store')
Route.get('/properties/edit/:id', 'PropertyController.edit')
Route.put('/properties/:id', 'PropertyController.update')
Route.delete('/properties/:id', 'PropertyController.destroy')
Route.get('/properties/:id/display', 'PropertyController.display')

Route.get('/home', 'HomeController.showHomepage')
// Route.get('register', 'Auth/RegisterController.showRegisterForm').middleware(['authenticated'])
Route.get('register', 'Auth/RegisterController.showRegisterForm')
Route.post('/register', 'Auth/RegisterController.register').as('register')
Route.get('/register/confirm/:token', 'Auth/RegisterController.confirmEmail')
// Route.get('/login', 'Auth/LoginController.showLoginForm').middleware(['authenticated'])
Route.get('/login', 'Auth/LoginController.showLoginForm')
Route.post('/login', 'Auth/LoginController.login').as('login')
Route.get('/logout', 'Auth/AuthenticatedController.logout')
Route.get('/password/reset', 'Auth/PasswordResetController.showLinkRequetForm')
Route.post('password/email', 'Auth/PasswordResetController.sendResetLinkEmail')
Route.get('/password/reset/:token', 'Auth/PasswordResetController.showResetForm')
Route.post('/password/reset', 'Auth/PasswordResetController.reset')

// Routes for Adonis-Vue-Todo App
Route.group('auth/register', () => {
  Route.post('auth/register', 'Vue-Todo/UserController.register')
  Route.post('auth/login', 'Vue-Todo/UserController.login')
}).prefix('vue-todo')
