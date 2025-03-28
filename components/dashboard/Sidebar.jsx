import { BaggageClaim, BarChart3, BarChart4, Cable, ChevronLeft, Files, Home, ShoppingBag, ShoppingBasket, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react';
import SubscriptionCard from './SubsriptionCard';

export default function Sidebar() {
  return (
     <div className='w-64  min-h-screen bg-slate-800 text-slate-50 flex flex-col justify-between'>
            {/* Top part */}
            <div className="flex flex-col">
 
            {/* Logo */}
            <Link href="#" className="flex space-x-2 items-center bg-slate-950 py-3 px-2">
                <BaggageClaim/>
                <span className='font-semibold text-xl'>Inventory</span>
            </Link>


            {/* Links */}
            <nav className='flex flex-col space-y-3 px-3 py-4'>
                <Link className='flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-lg' href="#">
                <Home className='w-4 h-4'/>
                <span>Home</span>
                </Link>

                <button className='flex items-center space-x-2 p-2' href="">
                <Home className='w-4 h-4'/>
                <span>Inventory</span>
                </button>


                <button className='flex items-center space-x-2 p-2' href="">
                <ShoppingBasket className='w-4 h-4'/>
                <span>Sales</span>
                </button>


                <button className='flex items-center space-x-2 p-2' href="">
                <ShoppingBag className='w-4 h-4'/>
                <span>Purchases</span>
                </button>


                <Link className='flex items-center space-x-2 p-2' href="#">
                <Cable className='w-4 h-4'/>
                <span>Integrations</span>
                </Link>

                <Link className='flex items-center space-x-2 p-2' href="#">
                <BarChart3 className='w-4 h-4'/>
                <span>Reports</span>
                </Link>

                <Link className='flex items-center space-x-2 p-2' href="#">
                <Files className='w-4 h-4'/>
                <span>Documents</span>
                </Link> 

            </nav>
            </div>
            <SubscriptionCard />




            {/* Bottom part */}
            <div className="flex flex-col">
            <div className="flex space-x-2 items-center justify-center bg-slate-950 py-3 px-2">
                <ChevronLeft/>
            </div>


           
 



            {/* Subscription Card */}
            {/* Footer Icon */}
            </div>
          </div>
  )
}
