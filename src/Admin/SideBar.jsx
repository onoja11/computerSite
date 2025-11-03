import React from 'react';
import { Menu, X, Home, Package, Mail, Settings, LogOut } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAPI } from '../context/AppContext';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userAPI } = useAPI();

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Home, path: '/admin' },
    { id: 'products', name: 'Products', icon: Package, path: '/admin/products' },
    { id: 'messages', name: 'Messages', icon: Mail, path: '/admin/messages' },
    { id: 'settings', name: 'Settings', icon: Settings, path: '/admin/settings' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    if (window.innerWidth < 1024) setIsOpen(false);
  };

  const handleLogout = async () => {
    try {
      await userAPI.logout(); 
      // navigate('/login'); 
    } catch (error) {
      console.error('Logout failed:', error);
      // navigate('/login'); 
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-blue-950 border-r border-blue-800 z-50 transition-all duration-300 ${
          isOpen ? 'w-64' : 'w-0 lg:w-20'
        } overflow-hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 flex items-center justify-between px-4 border-b border-blue-800">
            <div className={`flex items-center space-x-3 ${!isOpen && 'lg:justify-center lg:w-full'}`}>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">X</span>
              </div>
              {isOpen && (
                <span className="font-bold text-lg text-white">X-lock Admin</span>
              )}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-blue-200 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 py-6 px-3 space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-blue-700 text-white'
                      : 'text-blue-200 hover:bg-blue-900 hover:text-white'
                  } ${!isOpen && 'lg:justify-center'}`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {isOpen && <span className="font-medium">{item.name}</span>}
                </button>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="p-3 border-t border-blue-800">
            <button
              onClick={handleLogout}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-950 hover:text-red-300 transition-all ${
                !isOpen && 'lg:justify-center'
              }`}
            >
              <LogOut className="w-5 h-5 flex-shrink-0" />
              {isOpen && <span className="font-medium">Logout</span>}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
