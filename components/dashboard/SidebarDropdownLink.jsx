"use client"
import React from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import CollapsableLink from './CollapsibleLink'
// import { ShoppingCart } from 'lucide-react'

export default function SidebarDropdownLink({title,items, icon}) {
  const Icon = icon;
  return (
    <Collapsible>
            <CollapsibleTrigger className="flex items-center space-x-2 p-2">
              <Icon className="w-4 h-4" />
              <span>{title}</span>
            </CollapsibleTrigger>
            <CollapsibleContent>
              {items.map((item) => {
                return (
                  <CollapsableLink
                   item={item.title} 
                   key={item.id} 
                   href={item.href} />
                );
              })}
            </CollapsibleContent>
          </Collapsible>
  )
}
