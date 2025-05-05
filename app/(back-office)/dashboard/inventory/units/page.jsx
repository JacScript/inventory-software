import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";

export default async function Units() {
  const units = await getData("units");
// const units = [];

  const columns = ["title","abbreviation"];
  return (
    <div>
      {/* header */}
      <FixedHeader
        title="Units"
        newLink="/dashboard/inventory/units/new"
      />

      {/* content */}

      <div className="my-4 p-8">
        <DataTable
         data={units}
         columns={columns}
         updateLink="/dashboard/inventory/units/new"
         />
      </div>
    </div>
  );
}
