import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function CollapsibleLink({item}) {
  return (
    <Link className='flex items-center justify-between pl-8 pr-2 hover:bg-slate-900 transition-all duration-300 rounded-lg py-2 space-x-3' href={item.href} key={item.id}>
    <span className='text-sm'>{item.title}</span>
    <PlusCircle size={18}/>
    </Link>
  )
}
