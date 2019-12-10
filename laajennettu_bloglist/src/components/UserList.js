/* eslint-disable linebreak-style */
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'

const UserList = (props) => {

  const users = props.users


  return (

    <div>
      <h1>Users</h1>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>User</Table.HeaderCell>
            <Table.HeaderCell>Blog counts</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {users.map(user =>
            <Table.Row key={user.id}>
              <Table.Cell>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </Table.Cell>
              <Table.Cell>
                {user.blogs.length}
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  null
)(UserList)