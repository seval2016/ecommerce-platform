import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Products from 'productList/Products'
import ShoppingCart from 'shoppingCart/ShoppingCart'
import OrderHistory from 'orderHistory/OrderHistory'
import UserAuthentication from 'userAuthentication/UserAuthentication'


const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: core</div>
    <Products/>
    <ShoppingCart/>
    <OrderHistory/>
    <UserAuthentication/>
    
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)