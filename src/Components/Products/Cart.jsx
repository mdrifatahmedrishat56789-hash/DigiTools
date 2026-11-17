import React from 'react'

import { MdDelete } from 'react-icons/md'

const Cart = ({ isProduct, setIsProduct, isCoin}) => {

 const handleDelete = (products) =>{
  const filterProduct = isProduct.filter((isProducts) => isProducts.name !== products.name)

  setIsProduct(filterProduct)
 }

 const handleProcedButton =() =>{
  setIsProduct([])
 }


  return (
    <div className='space-y-6 '>

      <div>
        <h2 className='text-3xl font-extrabold'>Your Cart</h2>
      </div>

      {isProduct.length === 0 ? <div className='text-center'>
        <h2 className='text-4xl font-bold'>No Card Select</h2>
        <p className='text-xl '>Please Select Cart</p>
      </div> 
      : 

      
        isProduct.map((products) =>(
       <div className='space-y-8'>
         <div className=' flex items-center justify-between p-5'>
          <div className='flex gap-5'>
            <img src={products.icon} alt="" />
            <div>
              <h3 className='text-xl font-bold'>{products.name}</h3>
              <h4 className='text-[16px] font-bold'>${products.price}</h4>
            </div>
          </div>
          <div>
            <button onClick={()=>handleDelete(products)} className='btn btn-active btn-error'><MdDelete></MdDelete> </button>
          </div>
        </div>

        
       </div>

                   

        ))
        
      
      
      }

   {isProduct.length === 0 ? null :    <div className='space-y-7'>
          <div className='flex justify-between '>
            <h3 className='text-2xl font-extrabold'>Total</h3>
            <h3 className='text-2xl font-extrabold'>$ {isCoin}</h3>
          </div>
          <div>
            <button onClick={handleProcedButton} className="btn btn-primary bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-full text-2xl font-bold p-7">Proceed to Checkout</button>
          </div>
        </div>}

    </div>
  )
}

export default Cart