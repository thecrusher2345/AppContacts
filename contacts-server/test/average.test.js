import { test, describe } from 'node:test'

import Contacts from '../models/contacts.js'
import { average } from '../utils/for_testing.js'

import { strictEqual } from 'node:assert'
import contacts from '../models/contacts.js'


describe('average', () => {
  

  test('cuantos valores recibo en un get por ID', async() => {
    try {
      const contact = await Contacts.findById('66f0ba5f1dad584cc8e54326')
      strictEqual(contact !== null, true)
      strictEqual(typeof contact, 'object')
    } catch (error) {
      console.log(error)
      
      
    }

  })

  
})