import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
   try {


      const { referenceNumber, itemId,addStockQty, receivingWarehouseId, notes } = await request.json();
      const adjustment = await db.addStockAdjustment.create({
         data: {
            itemId,
            receivingWarehouseId,
            referenceNumber,
            addStockQty:parseInt(addStockQty),
            notes
         }
      })

      console.log(adjustment);
      return NextResponse.json(adjustment);


   } catch (error) {
      console.log(error)
      return NextResponse.json({
         error,
         message: "Failed to create a brand"
      }, {
         status: 500
      })
   }
}


export async function GET(request){
   try {
       const adjustments = await db.addStockAdjustment.findMany({
          orderBy:{
           createdAt: "desc" //Latest Warehouse 
          }
       });
       return NextResponse.json(adjustments);
   } catch (error) {
       return NextResponse.json({
           error,
           message: "Failed to fetch adjustments"
       },{
           status: 500
       })
   }
}




// import { NextResponse } from "next/server";

// // Handle POST request
// export async function POST(request) {
//   try {
//     const { addStockQty,receivingWarehouseId,notes} = await request.json();
//     const adjustment = { addStockQty,receivingWarehouseId,notes };
//     console.log(adjustment);

//     return NextResponse.json(adjustment, {
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
//         message: "Failed to create a brand",
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
