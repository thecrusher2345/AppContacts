'use client'
import {  useState } from 'react'
import { Search } from '@/components/Search'
import { Contact } from '@/components/Contact'
import { Notification } from '@/components/Notification'

import { useContact } from './hooks/useAddContact'

import { ListContact } from '@/components/ListContact'



export default function App() {
  const { error, addContact, newName, setNewName, newNumber, setNewNumber, persons, deleteContact, updateContact, errorMessage } = useContact()
  const [search, setSearch] = useState('')



  const handleChangeSearch = (event) => {
    setSearch(event.target.value)

  }

  const handleDeleteContact = (id) => {
    deleteContact(id);
  };




  const handleChangeContact = (event) => {
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  

  console.log(persons)
  
 
  const personToshow = search ? persons.filter(person => person.name.toLowerCase().includes(search)) : persons


  return (
    <div className='flex justify-center items-center flex-col'>
      <h2 className='text-white font-semibold text-3xl bg-slate-900 px-28 py-4 rounded-lg shadow-2xl'
      >Phonebook</h2>
      <Search handleChangeSearch={handleChangeSearch} />
      <div className='flex flex-col gap-3'>


        <ListContact filter={personToshow} onDeleteContact={handleDeleteContact} />
        <Notification message={errorMessage} error={error} />
        <Contact
          newName={newName}
          newNumber={newNumber}
          handleChangeName={handleChangeContact}
          handleChangeNumber={handleChangeNumber}
          addContact={addContact}
          updateContact={updateContact}
        />

      </div>

    </div>
  )
}