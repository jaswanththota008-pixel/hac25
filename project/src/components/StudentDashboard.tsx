import React from 'react';
import { MapPin, Clock, Users, Star, Car, Bell, History } from 'lucide-react';

interface StudentDashboardProps {
  onStartBooking: () => void;
  activeBooking: any;
}

export function StudentDashboard({ onStartBooking, activeBooking }: StudentDashboardProps) {
  const recentDestinations = [
    { name: 'Tirupati Railway Station', distance: '8 km', fare: '₹45' },
    { name: 'City Center Mall', distance: '5 km', fare: '₹30' },
    { name: 'Bus Stand', distance: '3 km', fare: '₹20' }
  ];

  const rideHistory = [
    { date: '2025-01-08', destination: 'Tirupati Station', fare: '₹45', rating: 5 },
    { date: '2025-01-07', destination: 'City Mall', fare: '₹30', rating: 4 },
    { date: '2025-01-06', destination: 'Bus Stand', fare: '₹20', rating: 5 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Rajesh!</h1>
        <p className="text-gray-600 mt-2">Ready for your next campus journey?</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Booking Section */}
        <div className="lg:col-span-2">
          {/* Active Booking Alert */}
          {activeBooking && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2">
                <Car className="h-5 w-5 text-green-600" />
                <span className="font-medium text-green-800">Active Booking</span>
              </div>
              <p className="text-green-700 mt-1">
                Your auto to {activeBooking.destination} is on the way! Expected arrival: {activeBooking.eta}
              </p>
            </div>
          )}

          {/* Quick Booking Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Book Your Ride</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="MBU Main Gate"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="MBU Main Gate"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Destination
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-red-400" />
                    <input
                      type="text"
                      placeholder="Where do you want to go?"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ride Type
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Solo Ride</option>
                    <option>Shared Ride</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    When?
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Now</option>
                    <option>Schedule Later</option>
                  </select>
                </div>
              </div>

              <button
                onClick={onStartBooking}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-semibold transition-colors duration-200"
              >
                Find Auto
              </button>
            </div>
          </div>

          {/* Quick Destinations */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Destinations</h3>
            <div className="space-y-3">
              {recentDestinations.map((dest, index) => (
                <button
                  key={index}
                  className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={onStartBooking}
                >
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <div className="text-left">
                      <div className="font-medium text-gray-900">{dest.name}</div>
                      <div className="text-sm text-gray-500">{dest.distance}</div>
                    </div>
                  </div>
                  <div className="text-blue-600 font-medium">{dest.fare}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Live Updates */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Bell className="h-5 w-5 text-orange-500" />
              <h3 className="text-lg font-semibold text-gray-900">Live Updates</h3>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-orange-50 rounded-lg">
                <div className="text-sm font-medium text-orange-800">High Demand Alert</div>
                <div className="text-sm text-orange-700">Peak hours: 8-10 AM. Book early!</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="text-sm font-medium text-green-800">15 Autos Available</div>
                <div className="text-sm text-green-700">Near MBU campus area</div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Rides</span>
                <span className="font-semibold">27</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Money Saved (Shared)</span>
                <span className="font-semibold text-green-600">₹340</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Average Rating</span>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.9</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Rides */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <History className="h-5 w-5 text-gray-500" />
              <h3 className="text-lg font-semibold text-gray-900">Recent Rides</h3>
            </div>
            <div className="space-y-3">
              {rideHistory.map((ride, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <div>
                    <div className="font-medium text-sm">{ride.destination}</div>
                    <div className="text-xs text-gray-500">{ride.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{ride.fare}</div>
                    <div className="flex items-center space-x-1">
                      {[...Array(ride.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}