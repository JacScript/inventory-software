import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";

export default async function Brands() {
  const brands = await getData("brands");
//   const data = brands.map(obj =>{
//     return {
//       title: obj.title,
//          }
//   })

  const columns = ["title"];
  return (
    <div>
      {/* header */}
      <FixedHeader
        title="Brands"
        newLink="/dashboard/inventory/brands/new"
      />

      {/* content */}

      <div className="my-4 p-8">
        <DataTable data={brands} columns={columns} />
      </div>
    </div>
  );
}
