import React, { useState } from 'react';
import { BarChart3, Users, Car, DollarSign, TrendingUp, MapPin, Clock, AlertTriangle } from 'lucide-react';

export function AdminDashboard() {
  const [timeRange, setTimeRange] = useState('today');

  const dashboardStats = {
    totalRides: 1247,
    activeDrivers: 42,
    totalStudents: 856,
    revenue: 45680,
    avgWaitTime: 3.2,
    satisfactionRate: 4.8
  };

  const popularDestinations = [
    { name: 'Tirupati Railway Station', rides: 324, percentage: 26 },
    { name: 'City Center Mall', rides: 198, percentage: 16 },
    { name: 'Bus Stand', rides: 156, percentage: 13 },
    { name: 'Chandragiri Fort', rides: 124, percentage: 10 },
    { name: 'SVU Campus', rides: 89, percentage: 7 }
  ];

  const peakHours = [
    { time: '8:00 AM', rides: 45, type: 'morning' },
    { time: '9:00 AM', rides: 67, type: 'morning' },
    { time: '12:00 PM', rides: 52, type: 'afternoon' },
    { time: '5:00 PM', rides: 78, type: 'evening' },
    { time: '6:00 PM', rides: 89, type: 'evening' },
    { time: '8:00 PM', rides: 43, type: 'night' }
  ];

  const alerts = [
    {
      type: 'warning',
      message: 'Driver shortage expected during evening peak (5-7 PM)',
      time: '10 min ago'
    },
    {
      type: 'info',
      message: 'High demand at Railway Station - 15 pending requests',
      time: '25 min ago'
    },
    {
      type: 'success',
      message: 'Average response time improved by 12% this week',
      time: '1 hour ago'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600 mt-2">Smart AutoConnect - Campus Transportation Insights</p>
        </div>
        
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <select 
            value={timeRange} 
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Rides</p>
              <p className="text-2xl font-bold text-blue-600">{dashboardStats.totalRides}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Car className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-2 text-sm text-green-600">
            +8% from last week
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Active Drivers</p>
              <p className="text-2xl font-bold text-orange-600">{dashboardStats.activeDrivers}</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <Users className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-2 text-sm text-green-600">
            85% online rate
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Students</p>
              <p className="text-2xl font-bold text-green-600">{dashboardStats.totalStudents}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <Users className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-2 text-sm text-green-600">
            +23 new this week
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Revenue</p>
              <p className="text-2xl font-bold text-purple-600">₹{dashboardStats.revenue}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-2 text-sm text-green-600">
            +15% growth
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Avg Wait Time</p>
              <p className="text-2xl font-bold text-indigo-600">{dashboardStats.avgWaitTime}m</p>
            </div>
            <div className="bg-indigo-100 p-3 rounded-full">
              <Clock className="h-6 w-6 text-indigo-600" />
            </div>
          </div>
          <div className="mt-2 text-sm text-red-600">
            +0.3m from target
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Satisfaction</p>
              <p className="text-2xl font-bold text-yellow-600">{dashboardStats.satisfactionRate}★</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <TrendingUp className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-2 text-sm text-green-600">
            Excellent rating
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Charts and Analytics */}
        <div className="lg:col-span-2 space-y-6">
          {/* Peak Hours Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Peak Hours Analysis</h3>
            <div className="space-y-4">
              {peakHours.map((hour, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="font-medium text-gray-900 w-16">{hour.time}</span>
                    <div className="flex-1">
                      <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-300 ${
                            hour.type === 'morning' ? 'bg-blue-500' :
                            hour.type === 'afternoon' ? 'bg-yellow-500' :
                            hour.type === 'evening' ? 'bg-orange-500' : 'bg-purple-500'
                          }`}
                          style={{ width: `${(hour.rides / 89) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <span className="font-semibold text-gray-900 w-12 text-right">{hour.rides}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Destinations */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Popular Destinations</h3>
            <div className="space-y-4">
              {popularDestinations.map((dest, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                      index === 0 ? 'bg-gold' : 
                      index === 1 ? 'bg-silver' :
                      index === 2 ? 'bg-bronze' : 'bg-gray-400'
                    } ${index < 3 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' : ''}`}>
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{dest.name}</div>
                      <div className="text-sm text-gray-500">{dest.rides} rides</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">{dest.percentage}%</div>
                    <div className="w-20 bg-gray-200 rounded-full h-2 mt-1">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${dest.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Demand Heatmap */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Campus Demand Heatmap</h3>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <div className="text-gray-900 font-semibold mb-2">Interactive Heatmap</div>
              <div className="text-gray-600 text-sm mb-4">
                Visual representation of pickup/drop hotspots across MBU campus
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-red-100 p-3 rounded-lg">
                  <div className="text-red-600 font-semibold">High Demand</div>
                  <div className="text-red-800 text-sm">Main Gate, Girls Hostel</div>
                </div>
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <div className="text-yellow-600 font-semibold">Medium Demand</div>
                  <div className="text-yellow-800 text-sm">Library, Canteen</div>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <div className="text-green-600 font-semibold">Low Demand</div>
                  <div className="text-green-800 text-sm">Sports Complex</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Real-time Alerts */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              <h3 className="text-lg font-semibold text-gray-900">System Alerts</h3>
            </div>
            <div className="space-y-3">
              {alerts.map((alert, index) => (
                <div key={index} className={`p-3 rounded-lg ${
                  alert.type === 'warning' ? 'bg-orange-50 border border-orange-200' :
                  alert.type === 'info' ? 'bg-blue-50 border border-blue-200' :
                  'bg-green-50 border border-green-200'
                }`}>
                  <div className={`text-sm font-medium ${
                    alert.type === 'warning' ? 'text-orange-800' :
                    alert.type === 'info' ? 'text-blue-800' :
                    'text-green-800'
                  }`}>
                    {alert.message}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{alert.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Summary */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Completion Rate</span>
                <span className="font-semibold text-green-600">98.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">On-time Arrivals</span>
                <span className="font-semibold text-blue-600">94.7%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Driver Utilization</span>
                <span className="font-semibold text-orange-600">76.3%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shared Rides</span>
                <span className="font-semibold text-purple-600">23.1%</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
                Export Analytics Report
              </button>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
                Send Driver Alerts
              </button>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
                Manage Peak Hours
              </button>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
                User Feedback Analysis
              </button>
            </div>
          </div>

          {/* Revenue Breakdown */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Breakdown</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Solo Rides</span>
                <span className="font-semibold">₹32,450 (71%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shared Rides</span>
                <span className="font-semibold">₹10,230 (22%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Scheduled Rides</span>
                <span className="font-semibold">₹3,000 (7%)</span>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <div className="flex justify-between font-bold">
                  <span>Total Revenue</span>
                  <span className="text-green-600">₹45,680</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}