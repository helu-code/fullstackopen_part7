import blogService from '../services/blogs'

/* eslint-disable linebreak-style */
const parseUser = () => {
  const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
  const user = JSON.parse(loggedUserJSON)
  if (user)
    blogService.setToken(user.token)
  return user
}

const loggedUserJSON = parseUser()

const userReducer = (state = loggedUserJSON,action) => {
   console.log('user state now: ', state)
   console.log('user action', action)
  switch (action.type) {
  case 'SET_USER':
    state = action.data.user
    return state
  case 'REMOVE_USER':
    state = null
    return state
  default:
    return state
  }
}

export const setUser = (user) => {
  return async dispatch => {
    dispatch({
      type: 'SET_USER',
      data:{
        user: user,
      }
    })

    if (user !== null)
    {
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
    }
    else
    {
      window.localStorage.removeItem('loggedBlogappUser')
    }
  }
}

export default userReducer