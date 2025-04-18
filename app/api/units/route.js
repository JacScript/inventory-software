import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
   try {
    

    const {title, description } = await request.json();
    const unit = await db.unit.create({
      data: {
        title,
        description 
      }
    })
    console.log(unit);
    return NextResponse.json(unit);


   } catch (error) {
    console.log(error )
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
