import React from 'react'
import { useCartState } from '../context/Context'
import SingleProduct from './SingleProduct'
import Filters from './Filters'
import './styles.css'
const Home = () => {
    const {state } = useCartState()
    console.log(state)
  return (
    <div className='home'>
     <Filters/>
     <div className='productContainer '>
        {
            state.products.map((item , key)=>(
                <SingleProduct prod ={item} />
            ))
        }
     </div>
    </div>
  )
}

export default Home
