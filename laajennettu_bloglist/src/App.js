import React, { useState, useEffect } from 'react'
import BlogList from './components/BlogList'
import UserList from './components/UserList'
import User from './components/User'
import CreateBlogForm from './components/CreateBlogForm'
import Togglable from './components/Togglable'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'
import Navi from './components/Menu'
import { connect } from 'react-redux'
import { setNotification } from './reducers/notificationReducer'
import { initializeBlogs } from './reducers/blogReducer'
import { initializeUsers } from './reducers/usersReducer'
import { setUser } from './reducers/userReducer'
import {
  BrowserRouter as Router,
  Route, withRouter,Redirect } from 'react-router-dom'
import Blog from './components/Blog'
import { Container } from 'semantic-ui-react'

const App = (props) => {

 
  useEffect(() => {
    props.initializeBlogs()
    props.initializeUsers()
  }, [])

  const userById = (id) => {
    return props.users.find(a => a.id === id)
  }
  const blogById = (id) => {
    return props.blogs.find(a => a.id === id)
  }

  const BlogWithRouter = withRouter(Blog)
  const CreateBlogWithRouter = withRouter(CreateBlogForm)
  const CreateLoginFormWithRouter = withRouter(LoginForm)

  return (
    <Container>
      <div>
        <Router>

          {props.user === null ?
            <div>
              <Notification></Notification>
              <CreateLoginFormWithRouter />  </div>:
            <div>


              <div><Navi/></div>
              <h1>Blogs</h1>

              { <Notification /> }
              <div>

                <Route exact path="/" render={() => <BlogList />} />
                <Route exact path="/blogs" render={() => <BlogList />} />
                <Route exact path="/blogs/create" render={() => <CreateBlogWithRouter />} />
                <Route path="/blogs/:id" render={({ match }) =>
                  <BlogWithRouter blog={blogById(match.params.id)} />} />
                <Route exact path="/users" render={() => <UserList/>} />
                <Route path="/users/:id" render={({ match }) =>
                  <User user={userById(match.params.id)} />} />
                <Route exact path="/login" render={() => <CreateLoginFormWithRouter />} />
                {/* <Route path="/about" render={() => <About />} />
        <Route path="/anecdotes/:id" render={({ match }) =>
            <Anecdote anecdote={anecdoteById(match.params.id)} />} />
          <UserList></UserList> */}

                {/* <BlogList></BlogList> */}
              </div>

            </div>
          }
        </Router>
      </div>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    users: state.users,
    blogs: state.blogs

  }
}

export default connect(mapStateToProps, { setNotification,initializeBlogs, initializeUsers,setUser })(App)
