import React from 'react'
import Code from '../Ui/Code'


const Products = ({Productss, isProduct, setIsProduct}) => {
  return (
    <div className='mb-15'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6' >
        {
          Productss.map((Product)=>(
            <Code isProduct={isProduct} setIsProduct={setIsProduct} Product={Product}></Code>
          )
        )
        }
      </div>
      
    </div>
  )
}

export default Products