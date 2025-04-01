"use client"
import { Building2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function HomeNavbar() {

    const pathname = usePathname();
    console.log(pathname)
 
    const navLinks = [
        {
            id: 1,
            title : "Dashboard",
            href : "/dashboard/home/overview"
        },
        {
            id: 2,
            title : "Getting Started",
            href : "/dashboard/home/getting-started"
        },
        {
            id: 3,
            title : "Recents Updates",
            href : "/dashboard/home/updates"
        },
        {
            id: 4,
            title : "Announcements",
            href : "/dashboard/home/announcements"
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
        <nav className='sticky space-x-4 mt-[30px] flex ' >
            {
                navLinks.map((navLink) => {
                    return (
                        <Link  key={navLink.id} className={`${pathname === navLink.href ? "border-b-2 border-blue-600 py-[2px] transition-all ease-in duration-200" : "py-[2px]"} `} href={navLink.href}>{navLink.title}</Link>
                    )
                })
            }
        </nav>
    </div>
  )
}
HomeNavbar
HomeNavbar