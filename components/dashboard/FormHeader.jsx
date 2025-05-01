"use client";

import { X } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

export default function FormHeader({ title }) {
  const router = useRouter();

  const handleBackAndRefresh = () => {
    router.back();
    // Slight delay to allow back navigation to complete, then reload
    setTimeout(() => {
      window.location.reload();
    }, 100); // 100ms delay usually works fine
  };

  return (
    <div className="flex items-center justify-between bg-white py-4 px-16">
      <h2 className="font-semibold text-xl">{title}</h2>
      <button onClick={handleBackAndRefresh}>
        <X />
      </button>
    </div>
  );
}










































// "use client";

// import { X } from "lucide-react";
// import React from "react";
// import { useRouter } from "next/navigation";

// export default function FormHeader({title}) {
//   const router = useRouter();

//   return (
//     <div className="flex items-center justify-between bg-white py-4 px-16">
//       <h2 className="font-semibold text-xl">{title}</h2>
//       <button onClick={() => router.back()}>
//         <X />
//       </button>
//     </div>
//   );
// }


// import { X } from "lucide-react"
// import Link from "next/link"
// import React from "react"

// export default function FormHeader({title, href}){
//     return (
//       <div className="flex items-center justify-between bg-white py-4 px-16">
//         <h2 className="font-semibold text-xl">{title}</h2>
//         <Link href={href}>
//         <X/>
//         </Link>
//       </div>
//     )
// }