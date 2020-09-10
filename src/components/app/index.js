import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from '../header'
import Home from '../pages/home'
import Cart from '../pages/cart-page'
import Book from '../pages/book'
import './index.css'

const App = () => {
  return (
    <main className='container-fluid'>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/book/:id' component={Book} />
        <Route path='/cart' component={Cart} />
        <Redirect to='/' />
      </Switch>
    </main>
  )
}

export default App
