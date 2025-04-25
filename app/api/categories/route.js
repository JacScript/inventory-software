// import db from "@/lib/db";
// import { NextResponse } from "next/server";

// // Handle POST request
// export async function POST(request) {
//   try {
//     const { title, description } = await request.json();
//     const category = await db.category.create({
//       data:{
//         title,
//         description
//       }
//     })
//     console.log(category);

//     return NextResponse.json(category, {
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
//         message: "Failed to create a category",
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


import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
   try {
    

    const {title, description } = await request.json();
    // const category = {title, description}
    const category = await db.category.create({
            data:{
              title,
              description
            }
          })
   //  console.log(category);
    return NextResponse.json(category);


   } catch (error) {
   //  console.log(error )
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
       const categories = await db.category.findMany({
          orderBy:{
           createdAt: "desc" //Latest Warehouse 
          }
       });
       return NextResponse.json(categories);
   } catch (error) {
       return NextResponse.json({
           error,
           message: "Failed to fetch categories"
       },{
           status: 500
       })
   }
}