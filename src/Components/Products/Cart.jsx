import React from 'react'

import { MdDelete } from 'react-icons/md'

const Cart = ({ isProduct, setIsProduct}) => {
  return (
    <div className='space-y-6 '>

      <div>
        <h2 className='text-3xl font-extrabold'>Your Cart</h2>
      </div>

      {isProduct.length === 0 ? <div className='text-center'>
        <h2 className='text-2xl font-bold'>No Card Select</h2>
        <p className='text-xl '>Please Select Cart</p>
      </div> 
      : 

      
        isProduct.map((products) =>(
       <div className='space-y-8'>
         <div className='border-[1px] flex items-center justify-between p-5'>
          <div className='flex gap-5'>
            <img src={products.icon} alt="" />
            <div>
              <h3 className='text-xl font-bold'>{products.name}</h3>
              <h4 className='text-[16px] font-bold'>${products.price}</h4>
            </div>
          </div>
          <div>
            <button className='btn btn-active btn-error'><MdDelete></MdDelete> </button>
          </div>
        </div>
       </div>
        ))
      
      
      }
    </div>
  )
}

export default Cart