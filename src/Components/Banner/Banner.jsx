import React from 'react'
import bannerImg from "../../../src/assets/banner.png"
import retangle from "../../../src/assets/group.png"
import playButton from "../../../src/assets/Play.png"

const Banner = () => {
  return (
    <div>
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      alt="Tailwind CSS hero component"
      src={bannerImg}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div className='space-y-2'>
        <div className='flex items-center gap-2'>
            <img src={retangle} alt="" />
            <p className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-xl font-bold"'>New: AI-Powered Tools Available</p>
        </div>
      <h1 className="text-7xl font-extrabold">Supercharge Your Digital Workflow</h1>
      <p className="py-6 text-xl leading-6 space-x-2.5 text-[#627382]">
        Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.

Explore Products
      </p>
      <div className='space-x-2.5'>

     <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-[16px] p-3 font-bold text-white">Explore Products</button>
     <button className="btn btn-outline btn-primary bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent rounded-full text-xl font-bold">
        <div className='flex items-center gap-2.5'>
            <img src={playButton} alt="" />
            <p>Watch Demo</p>
        </div>
        </button>


      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Banner