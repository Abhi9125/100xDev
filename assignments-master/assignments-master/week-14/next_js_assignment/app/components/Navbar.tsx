"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between mx-20 mt-10">
      <Link href="/">
        <button className="border-2 px-2 py-2 rounded-3xl cursor-pointer">
          Home
        </button>
      </Link>
      <Link href="/static-page">
        <button className="border-2 px-2 py-2 rounded-3xl cursor-pointer">
          Static-Page
        </button>
      </Link>
      <Link href="/interactive-page">
        <button className="border-2 px-2 py-2 rounded-3xl cursor-pointer">
          Interactive-page
        </button>
      </Link>
    </div>
  );
}
