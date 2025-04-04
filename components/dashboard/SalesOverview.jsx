import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SalesActivityCard from './SalesActivityCard';
import InventorySummaryCard from './InventorySummaryCard';

export default function SalesOverview() {
  const saleActivity = [
    {
      id: 1,
      title: "To be Packed",
      number : 10,
      unit: "Qtys",
      href : "#",
      color: "text-red-600"
    },
    {
      id: 2,
      title: "To be Shipped",
      number : 9,
      unit: "Pkgs",
      href : "#",
      color: "text-blue-600"
    },
    {
      id: 3,
      title: "To be Delivered",
      number : 5,
      unit: "Pkgs",
      href : "#",
      color: "text-green-600"
    },
    {
      id: 4,
      title: "To be Invoiced",
      number : 3,
      unit: "Qtys",
      href : "#",
      color: "text-yellow-600"
    }
  ];


  const inventorySummary = [
    {
      title: "Quantity in Hand",
      number : 10,
    },
    {
      title: "Quantity to be received",
      number : 0,
    }
  ]


  return (
    <div className='bg-blue-50 border-b border-slate-300 grid grid-cols-12 gap-4'>


        {/* SALES ACTIVITY */}
        <div className='border-r border-slate-300 p-8 col-span-9 mr-8'>
          <h2 className='mb-6 text-xl'>Sales Activity</h2>
          <div className=" pr-8 grid grid-cols-4 gap-4">
            {/* card */}
            {
              saleActivity.map((item,idx) => {
                return (
                 <SalesActivityCard item={item}  key={idx}/>
                )
              })
            }
          
          </div>
        </div>

        {/* INVENTORY SUMMARY */}
        <div className='col-span-3 p-8'>
        <h2 className='mb-6 text-xl'>Inventory Summary</h2>
           <div className='flex flex-col space-y-4'>

            {
              inventorySummary.map((item, idx) => {
                return (
                  <InventorySummaryCard item={item} key={idx}/>
                );
              })
            }
            
           </div>
        </div>
    </div>
  )
}
