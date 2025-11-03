import React from 'react';
import { Menu } from 'lucide-react';
import { useAPI } from '../context/AppContext';


const AdminNavbar = ({ isOpen, setIsOpen }) => {
  const {userAPI} = useAPI();
  const user = userAPI.getCurrentUser();
  return (
    <nav className="fixed top-0 right-0 left-0 lg:left-20 h-16 bg-blue-950 border-b border-blue-800 z-30 transition-all duration-300">
      <div className="h-full px-4 flex items-center justify-between">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-blue-200 hover:text-white lg:invisible transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-medium text-white">{user?.name}</p>
            <p className="text-xs text-blue-300">{user?.email}</p>
          </div>
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">{user?.name[0]}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;