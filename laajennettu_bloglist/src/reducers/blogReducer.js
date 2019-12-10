/* eslint-disable linebreak-style */
import blogs from '../services/blogs'

const blogReducer = (state = [], action) => {

  console.log('blogReducer state now: ', state)
  console.log('blogReducer action', action)
  const paramBlog = action.data

  switch (action.type) {
  case 'NEW_BLOG':
    state = [...state,action.data]
    return state
  case 'DELETE_BLOG':
    state = state.filter(blog => blog.id !== paramBlog.id)
    return state
  case 'INIT_BLOGS':
    state = action.data
    return state
  case 'UPDATE_BLOG':
    state = state.map(blog => blog.id !== paramBlog.id ? blog : paramBlog)
    return state
  default:
    return state
  }
}

export const initializeBlogs = () => {
  return async dispatch => {
    const allblogs = await blogs.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: allblogs,
    })
  }
}

export const createBlog = (blog) => { // highlight-line
  return async dispatch => {
    const newBlog = await blogs.create(blog)
    dispatch({
      type: 'NEW_BLOG',
      data: newBlog
    })
  }
}

export const deleteBlog = (blog) => { // highlight-line
  return async dispatch => {
    await blogs.remove(blog.id)
    dispatch({
      type: 'DELETE_BLOG',
      data: blog
    })
  }
}

export const updateBlog = (blog) => { // highlight-line
  return async dispatch => {
    const updateBlog = await blogs.update(blog.id,blog)
    dispatch({
      type: 'UPDATE_BLOG',
      data: updateBlog
    })
  }
}

export const addComment = (blog,comment) => { // highlight-line
  console.log("addcomment",comment)
  return async dispatch => {
    const updateBlog = await blogs.addComment(blog.id,comment)
    dispatch({
      type: 'UPDATE_BLOG',
      data: updateBlog
    })
  }
}


export default blogReducer