import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";

export default async function Categories() {
  const categories = await getData("categories");
  const data = categories.map(obj =>{
    return {
      title: obj.title,
      description: obj.description,
    }
  })

  const columns = ["Category Title", "Category Description", "actions"];
  return (
    <div>
      {/* header */}
      <FixedHeader
        title="Categories"
        newLink="/dashboard/inventory/categories/new"
      />

      {/* content */}

      <div className="my-4 p-8">
        <DataTable data={data} columns={columns} />
      </div>
    </div>
  );
}
