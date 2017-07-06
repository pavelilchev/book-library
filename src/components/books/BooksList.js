import React from 'react'
import booksStore from '../../stores/BooksStore'
import Book from './Book'

export default class BooksList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      books: []
    }
  }

  componentDidMount () {
    this.getBooks()
  }

  getBooks () {
    booksStore.getAll()
      .then(books => {
        books = this.sortBooks(books)
        books = books.splice(0, this.props.count)
        this.setState({books})
      })
  }

  sortBooks (books) {
    if (this.props.sortBy === 'date') {
      return this.sortByDate(books)
    } else if (this.props.sortBy === 'author') {
      return this.sortByAuthor(books)
    } else if (this.props.sortBy === 'title') {
      return this.sortByTitle(books)
    }

    return books
  }

  sortByDate (books) {
    if (this.props.order === 'asc') {
      return books.sort(function (a, b) {
        let firstDate = new Date(a.date)
        let secondDate = new Date(b.date)

        return firstDate > secondDate
      })
    } else {
      return books.sort(function (a, b) {
        let firstDate = new Date(a.date)
        let secondDate = new Date(b.date)

        return firstDate < secondDate
      })
    }
  }

  sortByAuthor (books) {
    return books
  }

  sortByTitle (books) {
    return books
  }

  render () {
    let books = this.state.books.map(b => {
      return <Book key={b.id} book={b} />
    })

    return (
      <div className='row'>
        {books}
      </div>
    )
  }
}
