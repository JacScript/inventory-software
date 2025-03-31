import Link from 'next/link'
import React from 'react'

export default function SubsriptionCard() {
  return (
    <div className='mx-2 mt-12 bg-slate-900 py-2 rounded-lg'>
       
       <div className='border-l-4 border-orange-400 rounded-[3px] mx-2 px-2 mb-2'>
        
         <p className='text-md'>Your Premium plan's trial expires in <span className='text-orange-400 text-sm'>13 days</span>.</p>
        </div>

        <div className='border-t border-slate-600 flex space-x-4 justify-center' >
          <button className=' border-r border-slate-600 pr-2 pt-2 '>Change Plan</button>
          <Link href="#" className='pt-2'>Upgrade </Link>
        </div>
    </div>
  )
}
