"use client";
import FixedHeader from "@/components/dashboard/FixedHeader";
import OptionCard from "@/components/dashboard/OptionCard";
import { Boxes, Component, ScrollText, Shirt } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Inventory() {
  const optionCards = [
    {
      title: "Items Groups",
      desc: "Create multiple variants of the same item using item Groups.",
      link: "/dashboard/inventory/items/new",
      linkTitle: "Create new item Groups",
      enabled: true,
      icon: Boxes,
    },
    {
      title: "Items",
      desc: "Create standalone items and services that you buy and sell",
      link: "/dashboard/inventory/items/new",
      linkTitle: "Create new item",
      enabled: true,
      icon: Shirt,
    },
    {
      title: "Composite Items",
      desc: "Bundle different items together and sell them as a single item",
      link: "/new",
      linkTitle: "Create new item",
      enabled: false,
      icon: Component,
    },
    {
      title: "Price Lists", 
      desc: "Tweak your item prices for specific contacts or transactions",
      link: "/new",
      linkTitle: "Create new Composite item",
      enabled: false,
      icon: ScrollText,
    },
  ];

  return (
    <div>
      <FixedHeader newLink="/dashboard/inventory/items/new "/>
      <div className="grid grid-col-1 lg:grid-cols-2 py-8 px-16 gap-6">
        {optionCards.map((card, idx) => {
          return <OptionCard optionData={card} key={idx} />;
        })}
      </div>
    </div>
  );
}

// https://www.youtube.com/watch?v=xpTRmfL3YRI
