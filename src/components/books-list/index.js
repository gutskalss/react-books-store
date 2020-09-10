import React from 'react'
import { connect } from 'react-redux'
import withBookstoreService from '../hoc/withBookstoreService'
import { fetchBooks, bookAddedToCart } from '../../redux/actions'
import compose from '../../utils/compose'
import BooksListItem from '../books-list-item'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'
import './index.css'

class BooksList extends React.Component {
  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {
    const { error, loading, books, onAddedToCart } = this.props

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }

    return (
      <ul className='books-list'>
        {books.map(book => {
          return (
            <li key={book.id}>
              <BooksListItem
                onAddedToCart={() => onAddedToCart(book.id)}
                book={book}
              />
            </li>
          )
        })}
      </ul>
    )
  }
}

const mapStateToProps = ({ booksList: { books, loading, error } }) => {
  return { books, loading, error }
}

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: id => dispatch(bookAddedToCart(id)),
  }
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BooksList)
