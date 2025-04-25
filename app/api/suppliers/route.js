import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
   try {
    

    const {name,phone,email,address,contactPerson,supplierCode,paymentTerms,taxID,notes } = await request.json();
    // const supplier = {name,phone,email,address,contactPerson,supplierCode,paymentTerms,taxID,notes };
    const supplier = await db.supplier.create({
      data: {
        name,
        phone,
        email,
        address,
        contactPerson,
        supplierCode,
        paymentTerms,
        taxID,
        notes 
      }
    })
    // console.log(supplier);
    return NextResponse.json(supplier);


   } catch (error) {
   //  cons ole.log(error )
     return NextResponse.json({
        error,
        message: "Failed to create a supplier"
     },{
        status: 500
     })
   }
}

export async function GET(request){
  try {
      const suppliers = await db.supplier.findMany({
         orderBy:{
          createdAt: "desc" //Latest Warehouse 
         }
      });
      return NextResponse.json(suppliers);
  } catch (error) {
      return NextResponse.json({
          error,
          message: "Failed to fetch suppliers"
      },{
          status: 500
      })
  }
}




// import { NextResponse } from "next/server";

// // Handle POST request
// export async function POST(request) {
//   try {
//     const { title, abbreviation } = await request.json();
//     const unit = { title, abbreviation };
//     console.log(unit);

//     return NextResponse.json(unit, {
//       status: 200,
//       headers: {
//         "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
//         "Access-Control-Allow-Methods": "POST, OPTIONS",
//         "Access-Control-Allow-Headers": "Content-Type",
//       },
//     });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       {
//         error,
//         message: "Failed to create a unit",
//       },
//       {
//         status: 500,
//         headers: {
//           "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
//         },
//       }
//     );
//   }
// }

// // Handle OPTIONS request (CORS preflight)
// export async function OPTIONS() {
//   return new Response(null, {
//     status: 204,
//     headers: {
//       "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
//       "Access-Control-Allow-Methods": "POST, OPTIONS",
//       "Access-Control-Allow-Headers": "Content-Type",
//     },
//   });
// }
