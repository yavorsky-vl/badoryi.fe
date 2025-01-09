import { legacy_createStore as createStore } from 'redux'
import { initialState } from 'types/systemVariable.types'

const initialValues: initialState = {
  sidebarShow: true,
  theme: 'light',
}

const changeState = (state = initialValues, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
