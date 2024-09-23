import React, { useReducer } from 'react';
import { createContext } from 'react';
import products from '../data.json'
import { cartReducer } from './Reducers';
import { useContext } from 'react';
import { faker } from '@faker-js/faker'; // Use named import from @faker-js/faker
faker.seed(99);

const cart = createContext();

const Context = ({ children }) => {

  console.log(products);
    const  [state , dispatch] = useReducer(cartReducer , {
        products : products  , 
        cart : []
    })
  return (
    <cart.Provider value={{ state, dispatch }}>
      {children}
    </cart.Provider>
  );
};

export default Context;
    
export const useCartState = ()=>{
    return useContext (cart)
}

