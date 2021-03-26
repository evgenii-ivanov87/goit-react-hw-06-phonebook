import { createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const phonebook = {
  contacts: {
    items: [],
    filter: ''
  }
}

const store = createStore(phonebook, composeWithDevTools)

export default store