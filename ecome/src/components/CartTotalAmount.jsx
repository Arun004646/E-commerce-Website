import React, { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import Title from './Title.jsx'

const CartTotalAmount = () => {
    const {currency , delivery_fee,getCartamount} = useContext(Shopcontext)
  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title text1={'CART'} text2={'TOTELS'}/>
        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
              <div className='flex justify-between'>
                   <p>subtotel</p>
                   <p>{currency}{getCartamount()}.00</p>
              </div>
              <hr />
              <div  className='flex justify-between'>
                      <p>shipping</p>
                      <p>{currency}{delivery_fee}.00</p>
              </div>
              <hr />
              <div className='flex justify-between'>
                <b>Totel</b>
                <b>{currency}{getCartamount() === 0 ? 0 : getCartamount() +delivery_fee }.00</b>
              </div>
        </div>
    </div>
  )
}

export default CartTotalAmount