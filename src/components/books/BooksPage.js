import React from 'react'
import BooksList from './BooksList'
import booksStore from '../../stores/BooksStore'
import ReactPaginate from 'react-paginate'

export default class BooksPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      perPage: 5,
      offset: 0,
      pageCount: 0
    }

    this.getBooks()
  }

  getBooks () {
    booksStore.getAll()
      .then(books => {
        let pageCount = Math.ceil(books.length / this.state.perPage)
        this.setState({pageCount: pageCount})
      })
  }

  handlePageClick (data) {
    let selected = data.selected
    let offset = Math.ceil(selected * this.state.perPage)

    this.setState({offset: offset})
  }

  render () {
    return (
      <div>
        <h2>Our Books</h2>
        <BooksList count='5' sortBy='date' order='desc' page={this.state.offset} />
        <ReactPaginate previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={<a href=''>...</a>}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick.bind(this)}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'} />
      </div>
    )
  }
}
