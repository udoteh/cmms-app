import { Link, NavLink } from 'react-router-dom';
import { Wrench, ClipboardList, CalendarCheck } from 'lucide-react';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <h1 className="text-lg font-bold">CMMS</h1>
          <div className="flex space-x-6">
            <NavLink
              to="/assets"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center text-yellow-400'
                  : 'flex items-center hover:text-yellow-300'
              }
            >
              <Wrench className="w-5 h-5 mr-1" />
              Assets
            </NavLink>
            <NavLink
              to="/work-orders"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center text-yellow-400'
                  : 'flex items-center hover:text-yellow-300'
              }
            >
              <ClipboardList className="w-5 h-5 mr-1" />
              Work Orders
            </NavLink>
            <NavLink
              to="/maintenance"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center text-yellow-400'
                  : 'flex items-center hover:text-yellow-300'
              }
            >
              <CalendarCheck className="w-5 h-5 mr-1" />
              Maintenance
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

