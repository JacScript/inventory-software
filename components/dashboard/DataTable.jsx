import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

export default function DataTable({ data = [], columns = []}) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map((columnName, idx) => (
              <th key={idx} scope="col" className="px-6 py-3">
                {columnName}
              </th>
            ))}
            <th scope="col" className="px-6 py-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length + 1} className="text-center py-6 text-gray-500">
                No data available
              </td>
            </tr>
          ) : (
            data.map((item, idx) => (
              <tr
                key={item.id || idx}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                {columns.map((columnName, colIdx) => (
                  <td key={colIdx} className="px-6 py-4">{item[columnName]}</td>
                ))}
                <td className="px-6 py-4 flex justify-end items-center space-x-4">
                  <Link
                    href={`/dashboard/inventory/brands/update/${item.id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 flex items-center space-x-1"
                  >
                    <Pencil size={18} />
                    <span>Edit</span>
                  </Link>
                  <button className="font-medium text-red-600 dark:text-red-500 flex items-center space-x-1">
                    <Trash2 size={18} />
                    <span>Delete</span>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
