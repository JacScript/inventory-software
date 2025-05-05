import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";

export default async function Categories() {
  const categories = await getData("categories");
  // const categories = [];

  const columns = ["title", "description"];
  return (
    <div>
      {/* header */}
      <FixedHeader
        title="Categories"
        newLink="/dashboard/inventory/categories/new"
      />

      {/* content */}

      <div className="my-4 p-8">
        <DataTable data={categories} columns={columns} updateLink="/dashboard/inventory/categories/new" />
      </div>
    </div>
  );
}
