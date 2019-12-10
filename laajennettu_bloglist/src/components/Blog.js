import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { updateBlog } from '../reducers/blogReducer'
import { deleteBlog } from '../reducers/blogReducer'
import { addComment } from '../reducers/blogReducer'
import { connect } from 'react-redux'
import useField from '../hooks/index'


const Blog = (props) => {

  const commentField = useField('text')

  if (props.blog === undefined)
    return null

  const blog = props.blog

  const blogLiked = async (blog) => {
    const updateObject = { ...blog, likes: blog.likes + 1 }
    props.updateBlog(updateObject)
  }

  const deleteHandler = async (blog) => {
    if (window.confirm(`Do you want to remove "${blog.title}" by ${blog.author}?`)) {
      props.deleteBlog(blog)
    }
    props.history.push('/')
  }

  const commentHandler = async (event) => {
    event.preventDefault()
    props.addComment(blog,commentField.value)
    commentField.ResetField()
  }

  const isRights = props.user &&  blog.user.name === props.user.name

  return (

    <div>
      <h1>{blog.title} by {blog.author}</h1>
      <p>URL: <a href={blog.url}>{blog.url}</a></p> {/*links obviously are fake anyway, but I did not manage to get them to work externally*/}
      <p>{blog.likes} likes <button onClick = {() => blogLiked(blog)}>like</button></p>
      <p>added by {blog.user.name}</p>
      {isRights ?
        <div><p><button onClick = {() => deleteHandler(blog)}>remove</button></p> </div> : null}
      <div>
        <h3>Comments</h3>
        <form onSubmit={commentHandler}>
          <input {...commentField}></input> <button type="submit">Add comment</button>
        </form>
        <ul>
          {blog.comments.map(comment => <li>{comment}</li>)}
        </ul>
      </div>

    </div>
  )
}

Blog.propTypes =  {
  blog: PropTypes.object.isRequired,

}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = {
  updateBlog,
  deleteBlog,
  addComment
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Blog)

//export default Blog
