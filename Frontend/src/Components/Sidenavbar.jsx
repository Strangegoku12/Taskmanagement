import React from 'react'
import { MdOutlineDashboardCustomize } from "react-icons/md";


function Sidenavbar() {
  return (
    <>
        <div className='w-[250px] h-screen bg-white text-black p-4'>

      <div className='flex justify-center mb-6 mt-4'>
  <img
    className='w-40 h-40 object-cover rounded-full border'
    src="your-image-url-here"
    alt="profile"
  />
</div>
<div className='text-center mb-6'>
  <h1>Anany</h1>
  <p>ananytiwari415@gmail.com</p>
  </div>

<div className='text-center mb-6'>
<ul className='space-y-8'>
  <li className="mb-2"><a href="/dashboard" className="text-gray-800 hover:text-blue-500"><MdOutlineDashboardCustomize />Dashboard</a></li>
  <li className="mb-2"><a href="/task" className="text-gray-800 hover:text-blue-500">Tasks</a></li>
  <li className="mb-2"><a href="/report" className="text-gray-800 hover:text-blue-500">Report</a></li>
  <li className="mb-2"><a href="/about" className="text-gray-800 hover:text-blue-500">About</a></li>
  <li className="mb-2"><a href="/logout" className="text-gray-800 hover:text-blue-500">Logout</a></li>
</ul>
        </div>
        </div>
</>
  )
}

export default Sidenavbar