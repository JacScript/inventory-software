"use client";
import FixedHeader from "@/components/dashboard/FixedHeader";
import OptionCard from "@/components/dashboard/OptionCard";
import { Diff, LayoutDashboard, LayoutPanelTopIcon, Scale, ScrollText, Slack, Warehouse } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Inventory() {



  const optionCards = [
    {
      title: "Items",
      desc: "Create multiple variants of the same item using item Groups.",
      link: "/dashboard/inventory/items/new",
      linkTitle: "Create New Item",
      enabled: true,
      icon: LayoutDashboard,
    },
    {
      title: "Categories",
      desc: "Create standalone items and services that you buy and sell",
      link: "/dashboard/inventory/categories/new",
      linkTitle: "Create New Category",
      enabled: true,
      icon: LayoutPanelTopIcon,
    },
    {
      title: "Brands",
      desc: "Bundle different items together and sell them as a single item",
      link: "/dashboard/inventory/brands/new",
      linkTitle: "Create New Brand",
      enabled: true,
      icon: Slack,
    },
    {
      title: "Warehouses", 
      desc: "Tweak your item prices for specific contacts or transactions",
      link: "/dashboard/inventory/warehouse/new",
      linkTitle: "Create New Warehouse",
      enabled: true,
      icon: Warehouse,
    },
    {
      title: "Units", 
      desc: "Tweak your item prices for specific contacts or transactions",
      link: "/dashboard/inventory/units/new",
      linkTitle: "Create New Unit",
      enabled: true ,
      icon: Scale,
    },
    {
      title: "Inventory Adjustments", 
      desc: "Transfer Stock from the Main Warehouse",
      link: "/dashboard/inventory/adjustments /new",
      linkTitle: "Create New Adjustments",
      enabled: true ,
      icon: Diff ,
    },
  ];

  return (
    <div>
      <FixedHeader newLink="/dashboard/inventory/items/new"/>
      <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 py-8 px-16 gap-6">
        {optionCards.map((card, idx) => {
          return <OptionCard optionData={card} key={idx} />;
        })}
      </div>
    </div>
  );
}

// https://www.youtube.com/watch?v=xpTRmfL3YRI
