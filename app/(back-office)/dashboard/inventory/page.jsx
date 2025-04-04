import FixedHeader from "@/components/dashboard/FixedHeader";
import { Shirt } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Inventory() {
  return (
    <div>
      <FixedHeader />
      <div className="grid grid-col-1 lg:grid-cols-2 py-8 px-16 gap-6">

        <div className="shadow-xl bg-white flex flex-col items-center space-y-4 justify-center p-6 rounded">
          <h2>Item Groups</h2>
          <div className="">
            <Shirt className="w-36 h-36" strokeWidth={0.6} />
          </div>
          <p className="line-clamp-1">
            Create multiple variants of the same item using Item Groups
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 py-1.5 px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition "
          >
            New Item Group
          </Link>
          {/* <button className="inline-flex items-center gap-2 py-1.5 px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition ">
            Enable
          </button> */}
        </div>

        <div className="shadow-xl bg-white flex flex-col items-center space-y-4 justify-center p-6 rounded">
          <h2>Item Groups</h2>
          <div className="">
            <Shirt className="w-36 h-36" strokeWidth={0.6} />
          </div>
          <p className="line-clamp-1">
            Create multiple variants of the same item using Item Groups
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 py-1.5 px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition "
          >
            New Item Group
          </Link>
          {/* <button className="inline-flex items-center gap-2 py-1.5 px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition ">
            Enable
          </button> */}
        </div>
      </div>
    </div>
  );
}

// https://www.youtube.com/watch?v=xpTRmfL3YRI
