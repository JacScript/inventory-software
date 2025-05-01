import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";

export default async function Adjustments() {
  const addAdjustments =  getData("adjustments/add");
  const transferAdjustments =  getData("adjustments/transfer");

  const [addAdjustmentsData, transferAdjustmentsData] = await Promise.all([
    addAdjustments,
    transferAdjustments,
  ]);
  
  // Columns for each table
  const addStockColumns = ["referenceNumber", "addStockQty"];
  const transferStockColumns = ["referenceNumber", "transferStockQty"];
  


//   const [addAdjustmentsData, transferAdjustmentsData] = await Promise.all([
//     addAdjustments,
//     transferAdjustments,
//   ]);
// //   const data = units.map(obj =>{
// //     return {
// //       title: obj.title,
// //          }
// //   })

//   const columns = ["referenceNumber","addStockQty || transferStockQty"];
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
        <DataTable data={addAdjustmentsData} columns={addStockColumns} />
      </div>

      <div className="my-4 p-8">
        <h2 className="mb-2 pl-6 text-xl font-bold uppercase">Stock Transfer Adjustments</h2>
        <DataTable data={transferAdjustmentsData} columns={transferStockColumns} />
      </div>
    </div>
  );
}
