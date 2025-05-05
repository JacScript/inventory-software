import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";

export default async function Warehouse() {
  const warehouses = await getData("warehouses");
  // const warehouses = [];

  const columns = ["title", "location", "warehouseType"];
  return (
    <div>
      {/* header */}
      <FixedHeader
        title="Warehouses"
        newLink="/dashboard/inventory/warehouse/new"
      />

      {/* content */}

      <div className="my-4 p-8">
        <DataTable
          data={warehouses}
          columns={columns}
          updateLink="/dashboard/inventory/warehouse/new"
        />
      </div>
    </div>
  );
}
