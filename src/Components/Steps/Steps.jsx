import React from 'react'
import User from "../../../src/assets/user.png"
import Package from "../../../src/assets/package.png"
import Rocket from "../../../src/assets/rocket.png"
import GroupNine from "../../../src/assets/Group9.png"
import Group10 from "../../../src/assets/Group10.png"
import Group11 from "../../../src/assets/Group11.png"

const Steps = () => {
  return (
    <div className='mt-10 mb-10 space-y-7'>
        <div className='text-center space-y-2'>
            <h2 className='text-5xl font-extrabold'>Get Started in 3 Steps</h2>
            <p className='text-[16px] text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-3 mt-20'>
            <div>
                <div className="card bg-base-100 w-90 shadow-sm">
                    <div className=' flex justify-end'>
        <img src={GroupNine} alt="" />
     </div>
  <figure>
     
     

    <img
      src={User}
      alt="user" />
  </figure>
  <div className="card-body text-center">
    <h2 className=" text-xl font-bold ">Create Account</h2>
    <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
            </div>

            <div>
                <div className="card bg-base-100 w-90 shadow-sm">
                    <div className=' flex justify-end'>
        <img src={Group10} alt="" />
     </div>
  <figure>
     
     

    <img
      src={Package}
      alt="user" />
  </figure>
  <div className="card-body text-center">
    <h2 className=" text-xl font-bold ">Choose Products</h2>
    <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
            </div>


            <div>
                <div className="card bg-base-100 w-90 shadow-sm">
                    <div className=' flex justify-end'>
        <img src={Group11} alt="" />
     </div>
  <figure>
     
     

    <img
      src={Rocket}
      alt="user" />
  </figure>
  <div className="card-body text-center">
    <h2 className=" text-xl font-bold ">Start Creating</h2>
    <p className='text-[#627382]'>Download and start using your premium  tools immediately.</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
            </div>

            

            
        </div>
    </div>
  )
}

export default Steps