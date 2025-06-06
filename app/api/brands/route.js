import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
   try {
    

    const {title} = await request.json();
    const brand = await db.brand.create({
            data:{
              title
            }
    })
   //  console.log(brand);
    return NextResponse.json(brand);


   } catch (error) {
   //  console.log(error )
     return NextResponse.json({
        error,
        message: "Failed to create a brand"
     },{
        status: 500
     })
   }
}

export async function GET(request){
   try {
       const brands = await db.brand.findMany({
          orderBy:{
           createdAt: "desc" //Latest Warehouse 
          }
       });
       return NextResponse.json(brands);
   } catch (error) {
       return NextResponse.json({
           error,
           message: "Failed to fetch brands"
       },{
           status: 500
       })
   }
}




// import { NextResponse } from "next/server";

// // Handle POST request
// export async function POST(request) {
//   try {
//     const { title} = await request.json();
//     const brand = { title };
//     console.log(brand);

//     return NextResponse.json(brand, {
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
