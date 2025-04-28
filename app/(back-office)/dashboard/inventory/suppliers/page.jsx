import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";

export default async function Suppliers() {
  const suppliers = await getData("suppliers");
  const data = suppliers.map(obj =>{
    return {
      title: obj.name,
      phone: obj.phone,
      email: obj.email
    }
  })

  const columns = ["Title", "phone", "Email "];
  return (
    <div>
      {/* header */}
      <FixedHeader
        title="Supplier"
        newLink="/dashboard/inventory/categories/new"
      />

      {/* content */}

      <div className="my-4 p-8">
        <DataTable data={data} columns={columns} />
      </div>
    </div>
  );
}
