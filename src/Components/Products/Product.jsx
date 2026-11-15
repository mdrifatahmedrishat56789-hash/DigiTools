import React from 'react'

const Product = () => {
  return (
    <div className='mt-24 space-y-12'>
        <div className='space-y-5'>
            <h2 className='text-5xl font-extrabold text-center'>Premium Digital Tools</h2>
            <p className='text-[16px] text-[#627382] text-center leading-6 w-[] space-y-2.5'>Choose from our curated collection of premium digital products designed
                <br />
                to boost your productivity and creativity.</p>
        </div>

    <div className='flex items-center justify-center'>
        <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-[16px] p-3 font-bold text-white">Products</button>
        <button className="btn btn-ghost">Cart (2)</button>

    </div>

    <div>
        
    </div>

    </div>
  )
}

export default Product