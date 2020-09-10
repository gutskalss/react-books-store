import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchBooks, bookAddedToCart } from '../../redux/actions'
import withBookstoreService from '../hoc/withBookstoreService'
import compose from '../../utils/compose'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'
import './index.css'

class Book extends React.Component {
  componentDidMount() {
    const id = parseInt(this.props.match.params.id)

    this.props.fetchBooks(id)()
  }

  render() {
    const { error, loading, book } = this.props
    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }

    return (
      <div>
        <h2>Book: {book[0].title}</h2>
      </div>
    )
  }
}

const mapStateToProps = ({ booksList: { books, loading, error } }) => {
  return { book: books, loading, error }
}

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: id => fetchBooks(bookstoreService, dispatch, id),
    onAddedToCart: id => dispatch(bookAddedToCart(id)),
  }
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Book)
