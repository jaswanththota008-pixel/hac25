import React, { useState } from 'react';
import { Car, MapPin, Clock, DollarSign, Users, Bell, TrendingUp, Calendar } from 'lucide-react';

export function DriverDashboard() {
  const [isOnline, setIsOnline] = useState(true);
  const [activeRides, setActiveRides] = useState(2);

  const rideRequests = [
    {
      id: 1,
      student: 'Priya Sharma',
      pickup: 'MBU Main Gate',
      destination: 'Tirupati Station',
      distance: '8.2 km',
      fare: 45,
      type: 'solo',
      time: '2 min ago'
    },
    {
      id: 2,
      student: 'Rahul Kumar',
      pickup: 'Girls Hostel',
      destination: 'City Mall',
      distance: '5.1 km',
      fare: 30,
      type: 'shared',
      time: '5 min ago'
    }
  ];

  const todayStats = {
    earnings: 850,
    rides: 12,
    hours: 8.5,
    rating: 4.9
  };

  const upcomingScheduled = [
    {
      time: '2:30 PM',
      student: 'Anjali R',
      destination: 'Bus Stand',
      fare: 25
    },
    {
      time: '4:00 PM',
      student: 'Vikram S',
      destination: 'Railway Station',
      fare: 45
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Driver Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, Ramesh Kumar!</p>
        </div>
        
        {/* Online Status Toggle */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <div className="flex items-center space-x-2">
            <span className="text-gray-700 font-medium">Status:</span>
            <button
              onClick={() => setIsOnline(!isOnline)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isOnline ? 'bg-green-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isOnline ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-medium ${isOnline ? 'text-green-600' : 'text-gray-500'}`}>
              {isOnline ? 'Online' : 'Offline'}
            </span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Today's Earnings</p>
              <p className="text-2xl font-bold text-green-600">₹{todayStats.earnings}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-2 text-sm text-green-600">
            +15% from yesterday
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Completed Rides</p>
              <p className="text-2xl font-bold text-blue-600">{todayStats.rides}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Car className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-2 text-sm text-blue-600">
            2 rides in progress
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Online Hours</p>
              <p className="text-2xl font-bold text-orange-600">{todayStats.hours}h</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-2 text-sm text-orange-600">
            Since 8:00 AM
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Rating</p>
              <p className="text-2xl font-bold text-purple-600">{todayStats.rating}★</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-2 text-sm text-purple-600">
            From 127 rides
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Ride Requests */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">New Ride Requests</h2>
              <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                {rideRequests.length} pending
              </div>
            </div>

            <div className="space-y-4">
              {rideRequests.map((request) => (
                <div key={request.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 text-blue-800 w-10 h-10 rounded-full flex items-center justify-center font-semibold">
                        {request.student.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{request.student}</div>
                        <div className="text-sm text-gray-500 flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{request.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-green-600">₹{request.fare}</div>
                      <div className="text-sm text-gray-500">{request.distance}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600">Pickup:</span>
                        <span className="font-medium">{request.pickup}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm mt-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-600">Drop:</span>
                        <span className="font-medium">{request.destination}</span>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      request.type === 'solo' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {request.type}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                      Decline
                    </button>
                    <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                      Accept Ride
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Demand Alerts */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Bell className="h-5 w-5 text-orange-500" />
              <h3 className="text-lg font-semibold text-gray-900">Demand Alerts</h3>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-orange-50 rounded-lg">
                <div className="text-sm font-medium text-orange-800">High Demand</div>
                <div className="text-sm text-orange-700">Railway Station area - 4:00 PM</div>
                <div className="text-xs text-orange-600 mt-1">Expected surge: +30% fare</div>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="text-sm font-medium text-blue-800">Upcoming Event</div>
                <div className="text-sm text-blue-700">College fest today - Extra rides expected</div>
              </div>
            </div>
          </div>

          {/* Scheduled Rides */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="h-5 w-5 text-blue-500" />
              <h3 className="text-lg font-semibold text-gray-900">Scheduled Rides</h3>
            </div>
            <div className="space-y-3">
              {upcomingScheduled.map((ride, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">{ride.time}</div>
                    <div className="text-sm text-gray-500">{ride.student}</div>
                    <div className="text-xs text-gray-500">{ride.destination}</div>
                  </div>
                  <div className="text-green-600 font-semibold">₹{ride.fare}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
                View Earnings Report
              </button>
              <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
                Update Availability
              </button>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
                Emergency Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}