"use client"
import { CreditCard, X } from 'lucide-react'
import React, { useState } from 'react'

export default function DashboardBanner() {
   const [hidden, setHidden ] = useState(false)


  return (
      <div className={`${hidden ? "hidden" : 'grid grid-cols-12 py-6 px-16  bg-white gap-3 relative'}`}>


          {/* Icon */}
          <div className='col-span-2'>
            <CreditCard className='w-16 h-16 text-slate-500'/>
          </div>


          {/* Text */}
          <div className="col-span-6 flex flex-col mr-6">
            <h2 className='font-bold text-2xl'>Start accepting online payments.</h2>
            <p>Bussinesses are moving towards online payments as they're, secure and fast. try them for your bussiness today</p>
          </div>


          {/* button */}
          <div className='col-span-4'>
            <button className='py-2 px-8 bg-blue-500 text-xl text-white rounded-lg uppercase'>Enable</button>
          </div>
          {/* close button */}
          <button  onClick={() => setHidden(true)} className='absolute top-4 right-40'>
            <X className='text-slate-600'/>
          </button>
    </div>
  )
}
