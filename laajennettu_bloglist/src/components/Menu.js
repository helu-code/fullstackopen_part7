/* eslint-disable linebreak-style */
import React from 'react'
import { Link } from 'react-router-dom'
import { Menu,Button, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setUser } from '../reducers/userReducer'
import { setNotification } from '../reducers/notificationReducer'

const Navi = (props) => {

  const handleLogout = async (event) => {
    event.preventDefault()

    window.localStorage.removeItem('loggedBlogappUser')
    props.setNotification('User '+props.user.name + ' logged out',1,5)
    props.setUser(null)
  }

  return (
    <div>
      {/* <Router> */}
      <Menu size='small'>
        <Menu.Item link>
          <Link to="/">Blogs</Link>
        </Menu.Item>
        <Menu.Item link>
          <Link to="/users">Users</Link>
        </Menu.Item>
        <Menu.Item link>
          <Link to="/blogs/create">New blog</Link>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Label >{props.user.name} logged in</Label>
            <Button primary onClick={handleLogout} >Log out</Button>
          </Menu.Item>
        </Menu.Menu>

      </Menu>
      {/* </Router> */}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(
  mapStateToProps,
  { setUser, setNotification }
) (Navi)


//export default Navi