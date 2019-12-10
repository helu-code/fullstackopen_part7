/* eslint-disable linebreak-style */
import React from 'react'
import { connect } from 'react-redux'
import { createBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
import { Form, Button } from 'semantic-ui-react'

import useField from '../hooks/index'

const CreateBlogForm = ( props ) => {

  const title = useField('text','title')
  const author = useField('text','author')
  const url = useField('url','url')

  const resetHandler = (event) => {
    event.preventDefault()
    title.ResetField()
    author.ResetField()
    url.ResetField()

  }



  const submit = (event) => {
    event.preventDefault()
    const blogObject = {
      title: event.target[0].value,
      author: event.target[1].value,
      url: event.target[2].value,
      likes: 0
    }
    props.createBlog(blogObject)

    props.history.push('/')
    //resetHandler()
  }

  return (
    <>
    <Form onSubmit={submit}>
      <Form.Field>
        <label>title</label>
        <input {...title} />
      </Form.Field>
      <Form.Field>
        <label>author</label>
        <input {...author} />
      </Form.Field>
      <Form.Field>
        <label>url</label>
        <input {...url}/>
      </Form.Field>
      <Button type="submit">create</Button>
      <Button onClick={resetHandler}>Reset</Button>

    </Form>
      
      </>
  )

}

const mapDispatchToProps = {
  createBlog,
  setNotification
}

export default connect(
  null,
  mapDispatchToProps
) (CreateBlogForm)

//export default CreateBlogForm