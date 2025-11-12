import React from 'react'


function Sidenavbar() {
  return (
    <>
        <div className='w-[250px] h-screen bg-blue-200 text-white p-4'>

      <h1 className="text-2xl font-semibold mb-4">Sidenavbar</h1>
<ul>
  <li className="mb-2"><a href="/dashboard" className="text-gray-800 hover:text-blue-500">Dashboard</a></li>
  <li className="mb-2"><a href="/task" className="text-gray-800 hover:text-blue-500">Tasks</a></li>
  <li className="mb-2"><a href="/report" className="text-gray-800 hover:text-blue-500">Report</a></li>
  <li className="mb-2"><a href="/about" className="text-gray-800 hover:text-blue-500">About</a></li>
  <li className="mb-2"><a href="/logout" className="text-gray-800 hover:text-blue-500">Logout</a></li>
</ul>
        </div>
</>
  )
}

export default Sidenavbar