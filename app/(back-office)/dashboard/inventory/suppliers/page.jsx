import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";

export default async function Suppliers() {
  const suppliers = await getData("suppliers");
  // const data = suppliers.map(obj =>{
  //   return {
  //     name: obj.name,
  //     phone: obj.phone,
  //     email: obj.email
  //   }
  // })

  const columns = ["name", "phone", "email"];
  return (
    <div>
      {/* header */}
      <FixedHeader
        title="Supplier"
        newLink="/dashboard/inventory/suppliers/new"
      />

      {/* content */}

      <div className="my-4 p-8">
        <DataTable data={suppliers} columns={columns} />
      </div>
    </div>
  );
}
