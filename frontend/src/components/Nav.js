import React from 'react'
import { Link } from 'react-router-dom';
export default function Nav() {
  return (
    <div>
        <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <ul className="flex justify-center">
          <li className="mr-6">
            <Link to="/" className="text-white hover:text-gray-300">All Contacts</Link>
          </li>
          <li>
            <Link to="/add-contact" className="text-white hover:text-gray-300">Add Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  )
}
