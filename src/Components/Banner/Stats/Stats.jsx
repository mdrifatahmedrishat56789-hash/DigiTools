import React from 'react'

const Stats = () => {
  return (
    <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-2 mb-1.5'>
        <div className="stats  stats-vertical lg:stats-horizontal flex justify-center items-center text-center shadow">
  <div className="stat border-r-2 border-white">
    <div className="stat-value text-5xl font-extrabold text-white">50K +</div>
    <div className="stat-desc text-xs font-medium text-white">Active Users</div>
  </div>

  <div className="stat border-r-2 border-white">
    <div className="stat-value text-5xl font-extrabold text-white">200+</div>
    <div className="stat-desc text-xs font-medium text-white">Premium Tools</div>
  </div>

  <div className="stat">
    <div className="stat-value text-5xl font-extrabold text-white">4.9</div>
    <div className="stat-desc text-xs font-medium text-white">Rating</div>
  </div>
</div>
    </div>
  )
}

export default Stats