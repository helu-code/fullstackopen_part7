/* eslint-disable linebreak-style */
import users from '../services/users'

const usersReducer = (state = [], action) => {

  console.log('usersReducer state now: ', state)
  console.log('usersReducer action', action)


  switch (action.type) {
  case 'NEW_USER':
    state = [...state,action.data]
    return state
  case 'INIT_USERS':
    state = action.data
    return state
  // case 'UPDATE_USER':
  //   const updatedBlog = action.data
  //   console.log("??????",updatedBlog)
  //   state = state.map(blog => blog.id !== updatedBlog.id ? blog : updatedBlog)
  //   return state
  default:
    return state
  }
}

export const initializeUsers = () => {
  return async dispatch => {
    const allUsers = await users.getAll()
    dispatch({
      type: 'INIT_USERS',
      data: allUsers,
    })
  }
}

export const createUser = (user) => { // highlight-line
  return async dispatch => {
    const newUser = await users.create(user)
    dispatch({
      type: 'NEW_USER',
      data: newUser
    })
  }
}

export const updateUser = (user) => { // highlight-line
  return async dispatch => {
    const updateUser = await users.update(user.id,user)
    dispatch({
      type: 'UPDATE_BLOG',
      data: updateUser
    })
  }
}

export default usersReducer