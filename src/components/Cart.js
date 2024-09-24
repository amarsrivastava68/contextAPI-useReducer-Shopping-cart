import React from 'react'
import { useCartState } from '../context/Context'

const Cart = () => {
  const {state : {cart } , dispatch}= useCartState()
  return (
    <div className='home'>
      this is cart
    </div>
  )
}

export default Cart
