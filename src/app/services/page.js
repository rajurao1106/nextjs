"use client"
import React from 'react'
import Services from './Services'

export default function page() {
  return (
    <div>
      <div className="relative bg-gradient-to-r pt-[8rem] from-green-200 via-red-100 to-indigo-100 pb-[5rem] text-center">
      {/* Decorative Elements */}
      

      <h1 className="text-4xl font-bold text-gray-900 font-[Quicksand]">Services</h1>
      <nav className="mt-3 text-gray-600 font-[Quicksand]">
        <a href="/" className="hover:text-gray-900">
          Home
        </a>{" "}
        &gt; <span className="text-gray-900">Services</span>
      </nav>
    </div>
    <Services/>
    </div>
  )
}
