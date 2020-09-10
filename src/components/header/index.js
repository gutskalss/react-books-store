import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import withBookstoreService from '../hoc/withBookstoreService'
import compose from '../../utils/compose'

import './index.css'

const Header = ({ itemsTotal, orderTotal }) => {
  return (
    <header className='header navbar navbar-dark bg-dark row'>
      <Link to='/'>
        <div className='navbar-brand'>Books Store</div>
      </Link>
      <Link to='/cart'>
        <div className='shopping-cart btn btn-outline-info'>
          <i className='cart-icon fa fa-shopping-cart' />
          {itemsTotal} items (${orderTotal})
        </div>
      </Link>
    </header>
  )
}

const mapStateToProps = ({ cart: { itemsTotal, orderTotal } }) => {
  return { itemsTotal, orderTotal }
}

export default compose(withBookstoreService(), connect(mapStateToProps))(Header)
