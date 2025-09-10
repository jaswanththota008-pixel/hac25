import React from 'react';
import { Car, Menu, X, BarChart3, User, LogOut } from 'lucide-react';
import { UserRole, View } from '../App';
import { NotificationSystem } from './NotificationSystem';

interface NavigationProps {
  userRole: UserRole;
  onLogin: () => void;
  onLogout: () => void;
  onNavigate: (view: View) => void;
  currentView: View;
}

export function Navigation({ userRole, onLogin, onLogout, onNavigate, currentView }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const getNavItems = () => {
    switch (userRole) {
      case 'student':
        return [
          { label: 'Dashboard', view: 'student' as View },
          { label: 'Track Ride', view: 'tracking' as View }
        ];
      case 'driver':
        return [
          { label: 'Dashboard', view: 'driver' as View },
          { label: 'Analytics', view: 'admin' as View }
        ];
      case 'admin':
        return [
          { label: 'Analytics', view: 'admin' as View }
        ];
      default:
        return [];
    }
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => onNavigate('landing')}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Car className="h-8 w-8" />
              <span className="font-bold text-xl">Smart AutoConnect</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {userRole && (
              <>
                <NotificationSystem userRole={userRole} />
                
                {getNavItems().map((item) => (
                  <button
                    key={item.view}
                    onClick={() => onNavigate(item.view)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      currentView === item.view
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                <div className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-md">
                  <User className="h-4 w-4" />
                  <span className="text-sm font-medium capitalize">{userRole}</span>
                </div>
                
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-1 px-3 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="text-sm">Logout</span>
                </button>
              </>
            )}
            
            {!userRole && (
              <button
                onClick={onLogin}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {userRole && <NotificationSystem userRole={userRole} />}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {userRole && (
              <div className="space-y-2">
                {getNavItems().map((item) => (
                  <button
                    key={item.view}
                    onClick={() => {
                      onNavigate(item.view);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      currentView === item.view
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                <div className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-md">
                  <User className="h-4 w-4" />
                  <span className="text-sm font-medium capitalize">{userRole}</span>
                </div>
                
                <button
                  onClick={() => {
                    onLogout();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-1 w-full px-3 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="text-sm">Logout</span>
                </button>
              </div>
            )}
            
            {!userRole && (
              <button
                onClick={() => {
                  onLogin();
                  setIsMenuOpen(false);
                }}
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Login
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}