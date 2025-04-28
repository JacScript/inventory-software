import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
   try {
    

    const itemData = await request.json();
    console.log(itemData);
    const item = await db.item.create({
      data:{
        title: itemData.title,
        categoryId: itemData.categoryId,
        sku: itemData.sku,
        barcode: itemData.barcode,
        quantity: parseInt(itemData.qty),
        unitId: itemData.unitId,
        brandId: itemData.brandId,
        supplierId: itemData.supplierId,
        buyingPrice: parseFloat(itemData.buyingPrice),
        sellingPrice: parseFloat(itemData.sellingPrice),
        reOrderPoint: parseInt(itemData.reOrderPoint),
        warehouseId: itemData.warehouseId,
        imageUrl: itemData.imageUrl,
        weight: parseFloat(itemData.weight),
        dimensions: itemData.dimensions,
        taxRate: parseFloat(itemData.taxRate),
         description: itemData.description,
          notes: itemData.notes,
      }
    });
    return NextResponse.json(item);


   } catch (error) {
    console.log(error )
     return NextResponse.json({
        error,
        message: "Failed to create a category"
     },{
        status: 500
     })
   }
}

export async function GET(request){
   try {
       const items = await db.item.findMany({
          orderBy:{
           createdAt: "desc" //Latest Warehouse 
          }
       });
       return NextResponse.json(items);
   } catch (error) {
       return NextResponse.json({
           error,
           message: "Failed to fetch items"
       },{
           status: 500
       })
   }
}




// import { NextResponse } from "next/server";

// // Handle POST request
// export async function POST(request) {
//   try {
//     const { title,categoryId,sku,barcode,qty,unitId,brandId,supplierId,buyingPrice,sellingPrice,reOrderPoint,warehouseId,imageUrl,weight,dimension,taxRate , description, notes } = await request.json();
//     const item = {  title,categoryId,sku,barcode,qty,unitId,brandId,supplierId,buyingPrice,sellingPrice,reOrderPoint,warehouseId,imageUrl,weight,dimension,taxRate , description, notes };
//     console.log(item);

//     return NextResponse.json(item, {
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
//         message: "Failed to create a item",
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
