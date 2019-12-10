/* eslint-disable linebreak-style */

const Settings = () => {

  const openedBlogs = []

  return {
    openedBlogs: openedBlogs,
    settingX: null
  }
}

const initialState = Settings()

const settingsReducer = (state = initialState, action) => {

  console.log('settings state now: ', state)
  console.log('settings action', action)

  switch (action.type) {
  case 'ADD_OPENED_BLOG':
    state.openedBlogs = [...state.openedBlogs,action.id]
    return state
  case 'REMOVE_OPENDED_BLOG':
    state.openedBlogs = state.openedBlogs.filter(item => item !== action.id)
    return state

  default:
    return state
  }
}

export const addOpenedBlog = id => {
  return {
    type: 'ADD_OPENED_BLOG',
    id,
  }
}

export const removeOpenedBlog = id => {
  return {
    type: 'REMOVE_OPENDED_BLOG',
    id,
  }
}

export default settingsReducer