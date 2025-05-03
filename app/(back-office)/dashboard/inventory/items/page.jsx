import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";

export default async function Categories() {
  const items = await getData("items");
  // const data = categories.map(obj =>{
  //   return {
  //     title: obj.title,
  //     description: obj.description,
  //   }
  // })


  const columns = ["title", "sellingPrice","buyingPrice"];
  return (
    <div>
      {/* header */}
      <FixedHeader
        title="Items"
        newLink="/dashboard/inventory/items/new"
      />

      {/* content */}

      <div className="my-4 p-8">
        <DataTable data={items || []} columns={columns} />
      </div>
    </div>
  );
}
