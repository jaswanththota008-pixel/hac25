import React, { useState } from 'react';
import { X, User, Car, Shield } from 'lucide-react';
import { UserRole } from '../App';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (role: UserRole) => void;
}

export function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole>('student');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(selectedRole);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Login to AutoConnect</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Role Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Select Your Role
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setSelectedRole('student')}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedRole === 'student'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <User className="h-6 w-6 mx-auto mb-2" />
                <div className="text-sm font-medium">Student</div>
              </button>
              
              <button
                type="button"
                onClick={() => setSelectedRole('driver')}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedRole === 'driver'
                    ? 'border-orange-500 bg-orange-50 text-orange-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Car className="h-6 w-6 mx-auto mb-2" />
                <div className="text-sm font-medium">Driver</div>
              </button>
              
              <button
                type="button"
                onClick={() => setSelectedRole('admin')}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedRole === 'admin'
                    ? 'border-purple-500 bg-purple-50 text-purple-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Shield className="h-6 w-6 mx-auto mb-2" />
                <div className="text-sm font-medium">Admin</div>
              </button>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {selectedRole === 'student' ? 'College Email' : 'Email Address'}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={selectedRole === 'student' ? 'your.rollno@mbu.edu' : 'your.email@example.com'}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3 px-4 rounded-md text-white font-semibold transition-colors duration-200 ${
                selectedRole === 'student'
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : selectedRole === 'driver'
                  ? 'bg-orange-600 hover:bg-orange-700'
                  : 'bg-purple-600 hover:bg-purple-700'
              }`}
            >
              Login as {selectedRole?.charAt(0).toUpperCase() + selectedRole?.slice(1)}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Sign up here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}