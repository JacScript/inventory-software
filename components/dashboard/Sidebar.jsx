"use client"
import { BaggageClaim, BarChart3, BarChart4, Cable, ChevronLeft, Files, Home, PlusCircle, ShoppingBag, ShoppingBasket, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react';
import CollapsableLink from './CollapsibleLink';
import SubscriptionCard from './SubscriptionCard';
import SidebarDropdownLink from './SidebarDropdownLink';



export default function Sidebar() {
     const inventoryLinks = [
      {
        id: 1,
        title: "Items",
        href:"/dashboard/inventory/items/new",
      },
      {
        id: 2,
        title: "Categories",
        href:"/dashboard/inventory/categories/new",
      },
      {
        id: 3,
        title: "Brands",
        href:"/dashboard/inventory/brands/new",
      },
      {
        id: 4,
        title: "Units",
        href:"/dashboard/inventory/units/new",
      },
      {
        id: 5,
        title: "Warehouse",
        href:"/dashboard/inventory/warehouse/new",
      },
      {
        id: 6,
        title: "Inventory Adjustments",
        href:"/dashboard/inventory/adjustments/new",
      },
     ]

     const salesLinks = [
      {
        id: 1,
        title: "Customers ",
        href:"#"
      },
      {
        id: 2,
        title: "Sales Orders",
        href:"#",
      },
      
      {
        id: 3,
        title: "Packages",
        href:"#",
      },

      {
        id: 4,
        title: "Shipments",
        href:"#",
      },
      {
        id: 5,
        title: "Invoices",
        href:"#",
      },
      {
        id: 6,
        title: "Sales Receipts",
        href:"#",
      },
      {
        id: 7,
        title: "Payments Received",
        href:"#",
      },
      {
        id: 8,
        title: "Sales Returns",
        href:"#",
      },
      {
        id: 3,
        title: "Credit Notes",
        href:"#",
      },
     ]
  return (
    <div className="w-64  min-h-screen bg-slate-800 text-slate-50 flex flex-col justify-between fixed">
      {/* Top part */}
      <div className="flex flex-col">
        {/* Logo */}
        <Link
          href="#"
          className="flex space-x-2 items-center bg-slate-950 py-3 px-2"
        >
          <BaggageClaim />
          <span className="font-semibold text-xl">Inventory</span>
        </Link>

        {/* Links */}
        <nav className="flex flex-col space-y-3 px-3 py-4">
          <Link
            className="flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-lg"
            href="#"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>

          {/* collapsible  inventory component */}
      <SidebarDropdownLink title="Inventory" items={inventoryLinks} icon={BaggageClaim}/>
          {/* collapsible  sales component */}
      <SidebarDropdownLink title="Sales" items={salesLinks} icon={ShoppingBasket}/>


          {/* <button className="flex items-center space-x-2 p-2" href="">
            <ShoppingBasket className="w-4 h-4" />
            <span>Sales</span>
          </button> */}

          <button className="flex items-center space-x-2 p-2" href="">
            <ShoppingBag className="w-4 h-4" />
            <span>Purchases</span>
          </button>

          <Link className="flex items-center space-x-2 p-2" href="#">
            <Cable className="w-4 h-4" />
            <span>Integrations</span>
          </Link>

          <Link className="flex items-center space-x-2 p-2" href="#">
            <BarChart3 className="w-4 h-4" />
            <span>Reports</span>
          </Link>

          <Link className="flex items-center space-x-2 p-2" href="#">
            <Files className="w-4 h-4" />
            <span>Documents</span>
          </Link>
        </nav>
      </div>
      {/* Subscription Card */}
      {/* <SubscriptionCard /> */}
      <SubscriptionCard />

      {/* Bottom part */}
      <div className="flex flex-col">
        <button className="flex space-x-2 items-center justify-center bg-slate-950 py-3 px-2">
          <ChevronLeft />
        </button>

        {/* Footer Icon */}
      </div>
    </div>
  );
}
