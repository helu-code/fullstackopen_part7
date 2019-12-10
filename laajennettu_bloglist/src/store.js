/* eslint-disable linebreak-style */
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

//import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import blogReducer from './reducers/blogReducer'
import userReducer from './reducers/userReducer'
import settingsReducer from './reducers/settingsReducer'
import usersReducer from './reducers/usersReducer'
//import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  //anecdotes: anecdoteReducer,
  notification: notificationReducer,
  blogs: blogReducer,
  user: userReducer,
  settings: settingsReducer,
  users: usersReducer
  //filter: filterReducer
})

//const store = createStore(reducer, applyMiddleware(thunk))

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store