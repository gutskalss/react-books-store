import updateBooksList from './books-list'
import updateCart from './cart'

const reducer = (state, action) => {
  return {
    booksList: updateBooksList(state, action),
    cart: updateCart(state, action),
  }
}
export default reducer
