
import { useState, useEffect } from 'react';
import { getAll, create, update, deletes } from '../services/notes';


export function useContact() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [ errorMessage, setErrorMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      })
      .catch(error => {
        console.error('Error al obtener los contactos:', error);
      });
  }, []);

  const addContact = (event) => {
    event.preventDefault();
    const contactObject = {
      name: newName,
      number: newNumber
    };
    const existedContact = persons.map(person => person.name);

    if (existedContact.includes(newName)) {
      if (window.confirm('Ya existe un contacto con ese nombre, ¿desea editarlo?')) {
        updateContact(contactObject);
      }
    } else {
      create(contactObject)
        .then(returnedContact => {
          setPersons([...persons, returnedContact]); // Actualizar estado agregando el nuevo contacto
          setNewName('');
          setNewNumber('');
        setErrorMessage(`Contact '${returnedContact.name}' fue agregado`)
        setTimeout(() => {
          setErrorMessage(null)
          setError(true)
        }, 3000)
        }
        )
        .catch(() => {
          setErrorMessage(`Contact no fue agregado`)
        setTimeout(() => {
          setErrorMessage(null)
          setError(true)
        }, 3000)
        });
    }
  };

  const updateContact = (contactName) => {
    const newPerson = persons.find(c => c.name === contactName.name);
    const newId = newPerson.id;
    update(newId, contactName)
      .then(returnedContact => {
        setPersons(persons.map(person => person.id !== newId ? person : returnedContact));
        setErrorMessage(`Contact '${returnedContact.name}' fue actualizado`)
        setTimeout(() => {
          setErrorMessage(null)
          setError(true)
        }, 3000)
      })
      .catch(error => {
        console.error('Error al actualizar el contacto:', error);
      });
  };

  const deleteContact = (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este contacto?')) {
      deletes(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
          setErrorMessage(`Contact '${persons.name}' fue eliminado`)
        setTimeout(() => {
          setErrorMessage(null)
          setError(true)
        }, 3000)
        })
        .catch(error => {
          console.error('Error al eliminar el contacto:', error);
        });
    }
  };

  

  return {
    addContact,
    newName,
    setNewName,
    newNumber,
    setNewNumber,
    persons,
    deleteContact,
    updateContact,
    errorMessage,
    error
  };
}
