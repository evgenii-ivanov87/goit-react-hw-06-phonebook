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
    pauload: contactId
})


export default { addContact, deleteContacts };