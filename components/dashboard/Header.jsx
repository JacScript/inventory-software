import { AlignJustify, Bell, ChevronDown, History, LayoutGrid, Plus, Settings, Users } from "lucide-react";
import React from "react";
import SearchInput from "./SearchInput";
import Image from "next/image";

export default function Header({setShowSidebar}) {

 
  return (
    <div className="bg-gray-100 h-12 flex justify-between items-center px-8 border-b border-slate-200 shadow">
      {/* First Div */}

      <button onClick={() => setShowSidebar(true)} className="lg:hidden">
        <AlignJustify className="w-6 h-6"/>
      </button>
      <div className="flex gap-3 ">
        {/* Recent activities*/}
        <button className="hidden lg:block">
          <History className="w-6 h-6" />
        </button>

        {/* Search */}
        <SearchInput />
      </div>

      {/* Second Div */}
      <div className="items-center gap-3 hidden lg:flex">
        {/*  Plus Icon*/}
        <div className="pr-2 border-r border-gray-300">
          <button className="p-1 bg-blue-600 rounded-lg ">
            <Plus className="text-slate-50 w-4 h-4" />
          </button>
        </div>
        <div className="flex border-r border-gray-300 space-x-2">
          <button className="p-1 hover:bg-blue-200 rounded-lg ">
            <Users className="text-slate-900 w-4 h-4" />
          </button>
          <button className="p-1 hover:bg-blue-200 rounded-lg ">
            <Bell className="text-slate-900 w-4 h-4" />
          </button>
          <button className="p-1 hover:bg-blue-200 rounded-lg ">
            <Settings className="text-slate-900 w-4 h-4" />
          </button>
        </div>

        {/*  */}
        <div className="flex gap-3">
          <button className="flex items-center">
            <span>Garat</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="">
            <Image
              src="/dog.jpg"
              alt=""
              height={40}
              width={40}
              className="h-8 w-8 rounded-full border border-slate-800"
            />
          </button>
          <button>
            <LayoutGrid className="w-6 h-6 text-slate-900"/>
          </button>
        </div>

        {/*  */}
      </div>

      <button className="lg:hidden">
            <Image
              src="/dog.jpg"
              alt=""
              height={40}
              width={40}
              className="h-8 w-8 rounded-full border border-slate-800"
            />
          </button>
    </div>
  );
}
