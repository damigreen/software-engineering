'use strict'

const Property = use('App/Models/Property');

const { validate } = use('Validator');

class PropertyController {

  async index({ view, params }) {
    const propertiesHeader = [
      { type: 'propertyName', value: 'Property Name' },
      { type: 'value', value: 'Value' },
      { type: 'tenant', value: 'Tenant' },
      { type: 'rent', value: 'Rent' },
    ]

    const properties = await Property.all()

    // console.log(params)
    return view.render('properties.index', {
      propertiesHeader: propertiesHeader,
      properties: properties.toJSON(),
    })
  }

  async details({ params, view }) {
    const property = await Property.find(params.id)    
    return view.render('properties.details', {
      property: property,
    })
  }

  async new({ view }) {
    return view.render('properties.new')
  }

  async store({ request, response, session }) {
    const validation = await validate(request.all(), {
      propertyName: 'required|min:3|max:255',
      value: 'required',
      tenants: 'required',
      rent: 'required',
    })

    if (validation.fails()) {
      session.withErrors(validation.messages()).flashAll()
      return response.redirect('back')
    }

    const property = new Property();
    property.propertyName = request.input('propertyName')
    property.value = request.input('value')
    property.tenants = request.input('tenants')
    property.image = request.input('image')
    property.rent = request.input('rent')

    await property.save()

    session.flash({ notification: "Success: Property Added!!" })

    return response.redirect('/properties') 

  }

  async edit({ params, view }) {
    const property = await Property.find(params.id)

    return view.render('properties.edit', {
      property: property,
    })
  }

  async update({ params, request, response, session}) {
    const property = await Property.find(params.id)

    property.propertyName = request.input('propertyName')
    property.value = request.input('value')
    property.tenants = request.input('tenants')
    property.rent = request.input('rent')
    property.image = request.input('image')

    await property.save()

    session.flash({ notification: 'Sucess! Property Updated'})

    response.redirect('/properties')
  }

  async destroy({ params, response, session }) {
    const property = await Property.find(params.id)
    await property.delete()

    session.flash({ notification: 'Success! Property deleted'})

    return response.redirect('/properties')
  }

  async display ({ view, params }) {
    const property = await Property.find(params.id)
    console.log(property)
    return view.render('properties.display', {
      property: property.toJSON(),
    })
  }

}

module.exports = PropertyController
