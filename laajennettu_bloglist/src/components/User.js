/* eslint-disable linebreak-style */
import React from 'react'
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const User = (props) => {

  if (props.user === undefined)
    return null

  return(
    <div>
      <h1>{props.user.name}</h1>

      <Table striped celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Blog name</Table.HeaderCell>
            <Table.HeaderCell>Author</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.user.blogs.map(blog =>
            <Table.Row key={blog.id}>
              <Table.Cell>
                <Link to={`/blogs/${blog.id}`}>
                  {blog.title}
                </Link>
              </Table.Cell>
              <Table.Cell>
                {blog.author}
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
 
  )


}

export default User