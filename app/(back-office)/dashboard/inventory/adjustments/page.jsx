import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";

export default async function Adjustments() {
  const addAdjustments =  getData("adjustments/add");
  const transferAdjustments =  getData("adjustments/transfer");
  // const transferAdjustments = []

  const [addAdjustmentsData, transferAdjustmentsData] = await Promise.all([
    addAdjustments,
    transferAdjustments,
  ]);
  
  // Columns for each table
  const addStockColumns = ["referenceNumber", "addStockQty"];
  const transferStockColumns = ["referenceNumber", "transferStockQty"];
  



  return (
    <div>
      {/* header */}
      <FixedHeader
        title="Adjustments"
        newLink="/dashboard/inventory/adjustments/new"
      />

      {/* content */}

      <div className="my-4 p-8">
        <h2 className="mb-2 text-xl pl-6 font-bold uppercase">Stock Increments Adjustments</h2>
        <DataTable data={addAdjustmentsData} columns={addStockColumns} updateLink="/dashboard/inventory/adjustments/new"/>
      </div>

      <div className="my-4 p-8">
        <h2 className="mb-2 pl-6 text-xl font-bold uppercase">Stock Transfer Adjustments</h2>
        <DataTable data={transferAdjustmentsData} columns={transferStockColumns} updateLink="/dashboard/inventory/adjustments/new" />
      </div>
    </div>
  );
}
