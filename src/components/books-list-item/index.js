import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const BooksListItem = ({ book, onAddedToCart }) => {
  const { id, title, author, published, price, coverImage } = book
  return (
    <div className='books-list-item'>
      <div className='book-cover'>
        <Link to={`/book/${id}`}>
          <img src={coverImage} alt='cover' />
        </Link>
      </div>
      <div className='book-details'>
        <Link to={`/book/${id}`}>
          <span className='book-title'>{title}</span>
        </Link>
        <div className='book-author'>Author: {author}</div>
        <div className='book-published'>Published: {published}</div>
        <div className='book-price'>${price}</div>
        <button onClick={onAddedToCart} className='btn btn-info add-to-cart'>
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default BooksListItem
