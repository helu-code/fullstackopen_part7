/* eslint-disable linebreak-style */
import React from 'react'
import Blog from '../components/Blog'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'


const BlogList = (props) => {


  return (

    <div>
      <Table striped celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Blog name</Table.HeaderCell>
            <Table.HeaderCell>Author</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.blogs.map(blog =>
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


  // <div>
  //   {blogs.map(blog =>
  //     <ul key={blog.id} style={blogStyle}>
  //       <Link  to={`/blogs/${blog.id}`}>{blog.title}</Link>
  //     </ul>
  //   )}
  // </div>
  )
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  null
)(BlogList)