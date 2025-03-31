import { Building2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function HomeNavbar() {
 
    const navLinks = [
        {
            id: 1,
            title : "Dashboard",
            href : "/"
        },
        {
            id: 2,
            title : "Getting Started",
            href : "/"
        },
        {
            id: 1,
            title : "Recents Updates",
            href : "/"
        },
        {
            id: 1,
            title : "Announcements",
            href : "/"
        },
    ]

  return (
    <div className='h-32 bg-slate-50 px-5  pt-5 pb-1 header-bg flex flex-col justify-between border-b border-slate-300'>
        <div className="flex space-x-3" >
            <div className="flex w-12 h-12 items-center justify-center bg-white rounded-lg ">
                <Building2 />
            </div>
            <div className='flex flex-col'>
                <p className='font-bold text-slate-700'>Hello, Heritage Software</p>
                <span className='text-sm'>Miles</span>
            </div>
        </div>

        {/* Nav */}
        <nav className='sticky space-x-2'>
            {
                navLinks.map((navLink) => {
                    return (
                        <Link  key={navLink.id} className='border-b-4 p-1 border-blue-600' href={navLink.href}>{navLink.title}</Link>
                    )
                })
            }
        </nav>
    </div>
  )
}
HomeNavbar
HomeNavbar