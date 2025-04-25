
import FormHeader from "@/components/dashboard/FormHeader";
import CreateItemForm from "@/components/dashboard/CreateItemForm";
import { getData } from "@/lib/getData";

export default async function NewItem() {


  //sequentially fetch data => waterfall
  const categoriesData =  getData("categories");
  const unitsData = getData("units");
  const brandsData =  getData("brands");
  const warehousesData =  getData("warehouses");
  const suppliersData = getData("suppliers");

  //parallel fetch data
  const [categories, units, brands, warehouses, suppliers] = await Promise.all([
    categoriesData,
    unitsData,
    brandsData,
    warehousesData,
    suppliersData
  ]);


  return (
    <div>
      {/* header */}
      <FormHeader title="New Item" href="/dashboard/inventory/" />

      {/* form */}
     <CreateItemForm categories={categories} units={units} brands={brands} warehouses={warehouses} suppliers={suppliers}/>
    </div>
  );
}
