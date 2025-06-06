import AdjustmentForm from "@/components/dashboard/AdjustmentForm";
import { getData } from "@/lib/getData";


import React from "react";

export default async function NewAdjustments() {

  const itemsData =  getData("items"); 
  const warehousesData =  getData("warehouses");

  const [items, warehouses] = await Promise.all([itemsData, warehousesData]);
   return (
   <AdjustmentForm items={items} warehouses={warehouses}/>
  );
}
