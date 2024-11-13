import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Eclipse, Home, Calendar, BarChart2, TrendingUp, Settings, Bell, User } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Eclipse className="h-10 w-10 text-green-400" />
          <span className="ml-2 text-2xl font-bold tracking-wider">AI.bility</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <NavItem icon={<Home className="h-5 w-5" />} label="Dashboard" to="/" active={location.pathname === '/'} />
          <NavItem icon={<Calendar className="h-5 w-5" />} label="Sessions" to="/sessions" active={location.pathname === '/sessions'} />
          <NavItem icon={<BarChart2 className="h-5 w-5" />} label="Insights" to="/insights" active={location.pathname === '/insights'} />
          <NavItem icon={<TrendingUp className="h-5 w-5" />} label="Progress" to="/progress" active={location.pathname === '/progress'} />
          <NavItem icon={<Settings className="h-5 w-5" />} label="Settings" to="/settings" active={location.pathname === '/settings'} />
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-green-400 transition-colors duration-200">
            <Bell className="h-6 w-6" />
          </button>
          <button className="flex items-center text-white hover:text-green-400 transition-colors duration-200">
            <User className="h-6 w-6" />
            <span className="ml-1 hidden md:inline">Profile</span>
          </button>
        </div>
      </div>
    </header>
  );
};

const NavItem: React.FC<{ icon: React.ReactNode; label: string; to: string; active: boolean }> = ({ icon, label, to, active }) => (
  <Link
    to={to}
    className={`flex items-center ${
      active ? 'text-green-400' : 'text-white'
    } hover:text-green-400 transition-colors duration-200`}
  >
    {icon}
    <span className="ml-1">{label}</span>
  </Link>
);

export default Header;