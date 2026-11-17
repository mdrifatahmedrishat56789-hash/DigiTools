import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Code = ({Product, isProduct, setIsProduct}) => {

  const [selectProduct, IsSelectedproduct] = useState(false)

  const handleButton = () =>{
    IsSelectedproduct(true)
    toast.success(`${Product.name} is Selected` )

    setIsProduct([...isProduct, Product])
  }

  return (
    <div>
        <div className="card w-96   shadow-sm">
  <div className="card-body">

    <div className='flex justify-end'>
            <span className="badge badge-[16px] badge-warning">{Product.tag}</span>

    </div>

    <div>
        <img src={Product.icon} alt="" className='h-[40px] w-auto' />
    </div>

    <div className="space-y-2.5">
      <h2 className="text-2xl font-bold">{Product.name}</h2>
      <p className='text-[16px] text-[#627382]'>{Product.description}</p>
      <span className="text-2xl font-bold">${Product.price}/Mo</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xl">
      
      
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{Product.feature1}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{Product.feature2}</span>
      </li>
      <li>
       <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span >{Product.feature3}</span>
      </li>
      
    </ul>
    <div className="mt-6">
      <button onClick={handleButton} disabled ={selectProduct ? true : false} className={`btn ${selectProduct===true ? "bg-green-500" :" bg-gradient-to-r from-[#4F39F6] to-[#9514FA]"} text-white text-xl font-bold rounded-full btn-block`}>{selectProduct===true ? "Added to Cart" : "Buy Now"}</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Code