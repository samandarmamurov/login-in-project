import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white border-b border-gray-100">
      <Link to="/" className="flex items-center gap-2 text-xl font-bold text-indigo-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        Blogify
      </Link>
      <div className="flex items-center gap-8 text-gray-700 font-medium">
        <Link to="/" className="hover:text-indigo-600 transition-colors duration-300">Home</Link>
        <Link to="/posts" className="hover:text-indigo-600 transition-colors duration-300">Posts</Link>
        <Link to="/login" className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">Login</Link>
      </div>
    </nav>
  )
}

export default Navbar