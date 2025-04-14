"use client"
import Link from "next/link";
import React from "react";

export default function OptionCard({ optionData }) {
  const { title, desc, link, linkTitle, enabled, icon: Icon } = optionData;

  return (
    <div className="shadow-xl bg-white flex flex-col items-center space-y-4 justify-center p-6 rounded">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="">
        <Icon className="" size={150} strokeWidth={0.6} />
      </div>
      <p className="line-clamp-1">{desc}</p>
      {enabled ? (
        <Link
          href={link}
          className="inline-flex items-center gap-2 py-1.5 px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition "
        >
          {linkTitle}
        </Link>
      ) : (
        <button className="inline-flex items-center gap-2 py-1.5 px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition ">
          Enable
        </button>
      )}
    </div>
  );
}
