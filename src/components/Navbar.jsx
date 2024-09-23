import { FiSearch, FiBell } from 'react-icons/fi';
import { BiMessageDetail } from 'react-icons/bi';

const Navbar = () => {
    return (
      <div className="flex justify-between items-center bg-white p-4 shadow-md h-16">
        <div className="flex items-center space-x-4 mt-3">
    
          <ul className="flex space-x-4" style={{fontSize:"15px"}}>
            <li className="text-blue-600 border-b-2 border-blue-600">Dashboard</li>
            <li className="text-gray-600 border-blue-600 cursor-pointer">Attendance</li>
            <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Leave</li>
            <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Performance</li>
          </ul>
        </div>
  
        <div className="flex space-x-6 items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search anything..."
              className="border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <FiSearch className="absolute top-2.5 right-3 text-gray-500" />
          </div>
          <FiBell className="text-gray-500 cursor-pointer" size={24} />
          <BiMessageDetail className="text-gray-500 cursor-pointer" size={24} />
          {/* <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-cartoon-of-a-young-woman-smiling-on-a-black-background-image_2680954.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer object-cover"
          /> */}
        </div>
      </div>
    );
};

export default Navbar;