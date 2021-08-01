'use strict'

const Customer = use('App/Models/Customer')

class CustomerController {
  async index({ view }) {
    const tableHead = [
      { type: 'name', value: 'Name'},
      { type: 'phone', value: 'Phone Number'},
      { type: 'email', value: 'Email'},
      { type: 'type', value: 'Type'}
    ]

    const customers = await Customer.all()

    return view.render('customers.index', {
      tableHead: tableHead,
      customers: customers.toJSON(),
    })
  }

  async details({ params, view }) {
    const customer = await Customer.find(params.id);

    return view.render('customers.details', {
      customer: customer,
    })
  }

  async add({ view }) {
    return view.render('customers.add')
  }
}

module.exports = CustomerController
