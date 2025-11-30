import '../App.css'
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ProtectedRoute from "../Components/Protectedroute";

function Sidenavbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="w-[250px] h-screen bg-[#f2f2f2] text-black p-4">

        <div className='flex justify-center mb-6 mt-2'>
          <img
            className='w-40 h-40 object-cover rounded-full border'
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile"
          />
        </div>

        <div className='text-center mb-6'>
          <h1>Anany</h1>
          <p>ananytiwari415@gmail.com</p>
        </div>

        <div className='flex  justify-center mb-6'>
          <ul className='space-y-8 bg-[#f2f2f2]'>
            <li className="mb-2 bg-[#f2f2f2] hovereringnavbar">
              <a href="/dashboard" className="flex items-center gap-2 bg-[#f2f2f2] text-gray-800">
                <MdOutlineDashboardCustomize className="text-xl" />
                <span>Dashboard</span>
              </a>
            </li>

              <ProtectedRoute allowedRoles={["admin"]}>
            <li className="mb-2 hovereringnavbar">
              <a href="/employees" className="flex items-center gap-2 text-gray-800">
                <MdOutlineDashboardCustomize className="text-xl" />
                <span>Employee</span>
              </a>
            </li>
            </ProtectedRoute>

            <li className="mb-2 hovereringnavbar">
              <a href="/task" className="flex items-center gap-2 text-gray-800">
                <MdOutlineDashboardCustomize className="text-xl" />
                <span>Tasks</span>
              </a>
            </li>

            <li className="mb-2 hovereringnavbar">
              <a href="/about" className="flex items-center gap-2 text-gray-800">
                <MdOutlineDashboardCustomize className="text-xl" />
                <span>About</span>
              </a>
            </li>
          </ul>
        </div>

        {/*  LOGOUT BUTTON */}
        <div className='flex justify-center mt-10'>
          <button
            onClick={handleLogout}
            className='bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg shadow-md w-full'
          >
            Logout
          </button>
        </div>

      </div>
    </>
  )
}

export default Sidenavbar;
