import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {


    const { referenceNumber, itemId, transferStockQty, givingWarehouseId, receivingWarehouseId, notes } = await request.json();
    const adjustments = await db.transferStockAdjustment.create({
      data: {
        referenceNumber,
        itemId,
        transferStockQty: parseInt(transferStockQty),
        givingWarehouseId,
        receivingWarehouseId,
        notes
      }
    })
    console.log(adjustments);
    return NextResponse.json(adjustments);


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




// import { NextResponse } from "next/server";

// // Handle POST request
// export async function POST(request) {
//   try {
//     const { transferStockQty,givingWarehouseId,receivingWarehouseId,notes} = await request.json();
//     const adjustment = { transferStockQty,givingWarehouseId,receivingWarehouseId,notes};
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
