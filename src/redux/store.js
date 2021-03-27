import { combineReducers, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import phonebookReduser from './phonebook/phonebook-reducer'


const rootReduser = combineReducers({
  contacts: phonebookReduser,
})

const store = createStore(rootReduser, composeWithDevTools())
console.log(store)
export default store