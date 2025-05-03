"use client"
import React from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import CollapsableLink from './CollapsibleLink'
import { ChevronRight} from 'lucide-react'

export default function SidebarDropdownLink({title,items, icon , setShowSidebar}) {
  const Icon = icon;
  return (
    <Collapsible>
            <CollapsibleTrigger className="flex justify-between items-center w-full">
              <div className="flex items-center space-x-2 p-2">
              <Icon className="w-4 h-4" />
              <span>{title}</span>
              </div>
              <ChevronRight size={18}/>
            </CollapsibleTrigger>
            <CollapsibleContent>
              {items.map((item) => {
                return (
                  <CollapsableLink
                  setShowSidebar={setShowSidebar}
                   item={item.title} 
                   key={item.id} 
                   href={item.href} />
                );
              })}
            </CollapsibleContent>
          </Collapsible>
  )
}
