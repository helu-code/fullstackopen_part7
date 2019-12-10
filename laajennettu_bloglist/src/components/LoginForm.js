/* eslint-disable linebreak-style */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useField from '../hooks/index'
import { connect } from 'react-redux'
import { setUser } from '../reducers/userReducer'
import { setNotification } from '../reducers/notificationReducer'
import loginService from '../services/login'
import { Form, Button } from 'semantic-ui-react'
import { createUser } from '../reducers/usersReducer'

const LoginForm = (props) => {

  const [createUser, setCreateUser] = useState(false)

  const user = useField('text','username')
  const pw = useField('password','password')
  const name = useField('text','name')

  const newUserSubmitHanlder = async (event) => {
    event.preventDefault()
    
    event.preventDefault()
    const userObject = {
      username: user.value,
      name: name.value,
      password: pw.value,
    }
    props.createUser(userObject)
    setCreateUser(false)
    props.setNotification(name.value +' added!',1,5)
    //resetHandler()
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    const username = user.value
    const password = pw.value
    try {
      const user = await loginService.login({
        username, password,
      })

      props.setUser(user)

      props.setNotification('User '+user.name + ' logged in',1,5)
      props.history.push('/')
    } catch (exception) {
      console.log(exception)
      props.setNotification('Error logging',2,5)
    }
  }

  if (createUser)
  {
    return (
    <>
		<h2>New user</h2>

      <Form onSubmit={newUserSubmitHanlder}>
		  <Form.Field>
			  <label>Username:</label>
		    <input  {...user} />
		  </Form.Field>
        <Form.Field>
			  <label>Name:</label>
		    <input  {...name} />
		  </Form.Field>
		  <Form.Field>
			  <label>Password:</label>
		    <input  {...pw} />
		  </Form.Field>
		  <Button type="submit">Create user</Button>
      </Form>
      <Button onClick = { () => setCreateUser(false)} >Cancel</Button>

		</>
    )

  }
  else
  {
    return(
		<>
		<h2>Login</h2>

      <Form onSubmit={submitHandler}>
		  <Form.Field>
			  <label>Username:</label>
		    <input  {...user} />
		  </Form.Field>
		  <Form.Field>
			  <label>Password:</label>
		    <input  {...pw} />
		  </Form.Field>
		  <Button type="submit">login</Button>
      </Form>
      <Button onClick = { () => setCreateUser(true)} >Create new user</Button>

		</>
    )
  }
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(
  mapStateToProps,
  { setUser, setNotification,  createUser, }
) (LoginForm)

//export default LoginForm