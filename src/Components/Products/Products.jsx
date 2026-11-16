import React from 'react'
import Code from '../Ui/Code'


const Products = ({Productss}) => {
  return (
    <div className='mb-15'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6' >
        {
          Productss.map((Product)=>(
            <Code Product={Product}></Code>
          )
        )
        }
      </div>
      
    </div>
  )
}

export default Products