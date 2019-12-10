/* eslint-disable linebreak-style */
import React from 'react'
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'

const Notification = (props) => {

  const notification = props.notification


  if (notification.msgtype === 0) {
    return null
  }

  if (notification.msgtype === 0)
  {
    return (
      <Message>
        {notification.msg}
      </Message>
    )
  }
  else
  {

    return (
      <Message negative>
        {notification.msg}
      </Message>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  }
}

const mapDispatchToProps = {
  setNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(Notification)