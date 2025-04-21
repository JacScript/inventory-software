import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
   try {
    

    const {title,location,type, description } = await request.json();
    const warehouse = await db.warehouse.create({
      data:{
        title,
        location,
        warehouseType: type,
         description 
      }
    });
    // console.log(warehouse);
    return NextResponse.json(warehouse);


   } catch (error) {
    // console.log(error )
     return NextResponse.json({
        error,
        message: "Failed to create a unit"
     },{
        status: 500
     })
   }
}




// import { NextResponse } from "next/server";

// // Handle POST request
// export async function POST(request) {
//   try {
//     const { title,location, description , type} = await request.json();
//     const warehouse = { title, location, description , type};
//     console.log(warehouse);

//     return NextResponse.json(warehouse, {
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
//         message: "Failed to create a warehouse",
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
