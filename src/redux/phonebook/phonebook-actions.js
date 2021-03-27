import shortid from 'shortid'
import types from './phonebook-types'


const addContact = (name, number) => ({
    type: types.ADD,
    payload: {
        id: shortid.generate(),
      name,
      number,
    }
})

const deleteContacts = (contactId) => ({
    type: types.DELETE,
    payload: contactId
})

const filterContacts = (value) => ({
    type: types.FILTERS,
        payload: value
    
})

export default { addContact, deleteContacts, filterContacts };