import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function CollapsibleLink({href, item,id}) {
  return (
    <Link className='flex items-center justify-between pl-8 pr-2 hover:bg-slate-900 transition-all duration-300 rounded-lg py-2 space-x-3' href={href}
    key={id}>
    <span className='text-sm'>{item}</span>
    <PlusCircle size={18}/>
    </Link>
  )
}
