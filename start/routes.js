'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.post('auth/register','UserController.register')
  Route.post('auth/login','UserController.login')

  Route.get('schedule','ScheduleController.index').middleware('auth')
  Route.post('schedule/create','ScheduleController.create').middleware('auth')
  Route.delete('schedule/destroy/:id','ScheduleController.destroy').middleware('auth')
  Route.patch('schedule/update/:id','ScheduleController.update').middleware('auth')
}).prefix('api')
