import '../App.css'
import { MdOutlineDashboardCustomize } from "react-icons/md";

function Sidenavbar() {
  return (
    <>
      <div className='w-[250px] h-screen bg-white text-black p-4'>

        <div className='flex justify-center mb-6 mt-2'>
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

        <div className='flex justify-center mb-6'>
          <ul className='space-y-8'>
            <li className="mb-2 hovereringnavbar"><a href="/dashboard" className="flex items-center gap-2 text-gray-800"> <MdOutlineDashboardCustomize className="text-xl" /> <span>Dashboard</span> </a> </li>
            <li className="mb-2 hovereringnavbar"><a href="/employees" className="flex items-center gap-2 text-gray-800">    <MdOutlineDashboardCustomize className="text-xl" /><span>Employee</span></a></li>
            <li className="mb-2 hovereringnavbar"><a href="/task" className="flex items-center gap-2 text-gray-800">    <MdOutlineDashboardCustomize className="text-xl" /><span>Tasks</span></a></li>
            <li className="mb-2 hovereringnavbar"><a href="/about" className="flex items-center gap-2 text-gray-800"><MdOutlineDashboardCustomize className="text-xl" /> <span>About</span></a></li>
            <li className="mb-2 hovereringnavbar"><a href="/logout" className="flex items-center gap-2 text-gray-800"><MdOutlineDashboardCustomize className="text-xl" /> <span>Logout</span></a></li>
          </ul>
        </div>
      </div> 
    </>
  )
}

export default Sidenavbar