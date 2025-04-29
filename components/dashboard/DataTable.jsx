import { Delete, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

export default function DataTable({data,columns}) {
  
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
          <tr>
            {
              columns.map((columnName,idx)=>{
                return(
                  <th key={idx} scope="col" className="px-6 py-3">
              {columnName}
            </th>
                )
              })
            }

<th scope="col" className="px-6 py-3 text-right">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,idx) => {
              return (
                <tr key={item.id || idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">

                  {
                    columns.map((columnName,idx)=>{
                      return(
                        <td key={idx} className="px-6 py-4">{item[columnName]}</td>
                      )
                    })
                  }
                  {/* <td className="px-6 py-4">
                    {item.phone}
                  }
            {/* <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {item.title}
            </th>
            <td className="px-6 py-4">{item.description}</td> */}



            <td className="px-6 py-4  flex justify-end items-center space-x-4">
              <Link
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500  flex items-center space-x-1"
              >
                <Pencil size={18}/>
                <span>Edit</span>
              </Link>
              <button className="font-medium text-red-600 dark:text-red-500  flex items-center space-x-1">
                <Trash2 size={18}/>
                <span>Delete</span>
              </button>
            </td>
          </tr>
              )
            })
          }
         
        </tbody>
      </table>
    </div>
  );
}
