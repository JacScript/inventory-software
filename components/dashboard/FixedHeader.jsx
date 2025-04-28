"use client";

import { HelpCircle, LayoutGrid, List, MoreHorizontal, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function FixedHeader({newLink, title}) {
  return (
    <div className="flex justify-between items-center bg-white py-5 px-4  ">
      {/* Left Section */}
      <div>
        <button className="text-2xl"> {title}</button>
      </div>

      {/* Right Section */}
      <div className="flex gap-4">
        {/* New */}
        <Link href={newLink} className="flex items-center gap-2 py-1.5 px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition ">
          <Plus size={18} />
          <span>New</span>
        </Link>

        {/* Layout (Placeholder) */}
        <div className="flex border border-gray-400 rounded-lg overflow-hidden">
          <button className="bg-gray-400 p-2 rounded-l  border-r border-gray-400">
            <List size={18}/>
          </button>
          <button className="p-2 bg-gray-100">
            <LayoutGrid size={18}/>
          </button>
        </div>
        {/* More (Placeholder) */}
        <button className="p-2 bg-gray-100 rounded" size={18}>
          <MoreHorizontal/>
          </button>

        {/* Help (Placeholder) */}
        <button className="p-2 bg-orange-500 text-white rounded" size={18}>
          <HelpCircle/>
        </button>
      </div>
    </div>
  );
}
