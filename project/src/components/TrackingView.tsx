import React, { useState, useEffect } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Car, Star, ArrowLeft } from 'lucide-react';

interface TrackingViewProps {
  booking: any;
  onBackToDashboard: () => void;
}

export function TrackingView({ booking, onBackToDashboard }: TrackingViewProps) {
  const [currentStatus, setCurrentStatus] = useState('confirmed');
  const [estimatedTime, setEstimatedTime] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setEstimatedTime(prev => Math.max(0, prev - 1));
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  if (!booking) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <Car className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No Active Booking</h2>
          <p className="text-gray-600 mb-6">You don't have any active rides to track.</p>
          <button
            onClick={onBackToDashboard}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const statusSteps = [
    { id: 'confirmed', label: 'Booking Confirmed', completed: true },
    { id: 'driverAssigned', label: 'Driver Assigned', completed: true },
    { id: 'onWay', label: 'Driver On The Way', completed: currentStatus !== 'confirmed' },
    { id: 'arrived', label: 'Driver Arrived', completed: false },
    { id: 'inProgress', label: 'Trip In Progress', completed: false },
    { id: 'completed', label: 'Trip Completed', completed: false }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <button
            onClick={onBackToDashboard}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Track Your Ride</h1>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium text-blue-900">Booking ID: {booking.bookingId}</span>
          </div>
          <p className="text-blue-800">Your driver is on the way! Estimated arrival: {estimatedTime} minutes</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Tracking Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Map Placeholder */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4">
              <h2 className="text-lg font-semibold">Live Location</h2>
            </div>
            <div className="h-80 bg-gray-100 relative flex items-center justify-center">
              {/* Mock Map Interface */}
              <div className="absolute inset-4 bg-green-50 rounded-lg border-2 border-dashed border-green-300 flex flex-col items-center justify-center">
                <MapPin className="h-12 w-12 text-green-600 mb-2" />
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Live Map View</div>
                  <div className="text-sm text-gray-600 mt-1">Real-time tracking integration</div>
                  <div className="text-xs text-gray-500 mt-2">
                    Driver location updates every 10 seconds
                  </div>
                </div>
              </div>
              
              {/* Driver Position Indicator */}
              <div className="absolute top-20 left-20 bg-blue-600 text-white p-2 rounded-full shadow-lg animate-bounce">
                <Car className="h-4 w-4" />
              </div>
              
              {/* Student Position Indicator */}
              <div className="absolute bottom-20 right-20 bg-green-600 text-white p-2 rounded-full shadow-lg">
                <MapPin className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Trip Progress */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Trip Progress</h3>
            <div className="space-y-4">
              {statusSteps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    step.completed 
                      ? 'bg-green-500 text-white' 
                      : index === 2 
                      ? 'bg-blue-500 text-white animate-pulse' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step.completed ? '✓' : index + 1}
                  </div>
                  <div className="ml-4">
                    <div className={`font-medium ${
                      step.completed 
                        ? 'text-green-700' 
                        : index === 2 
                        ? 'text-blue-700' 
                        : 'text-gray-500'
                    }`}>
                      {step.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Driver Info */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Driver</h3>
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-4xl">{booking.driver.avatar}</div>
              <div>
                <div className="font-semibold text-gray-900">{booking.driver.name}</div>
                <div className="text-sm text-gray-500">{booking.driver.vehicle}</div>
                <div className="flex items-center space-x-1 mt-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{booking.driver.rating}</span>
                  <span className="text-sm text-gray-500">(127 rides)</span>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-md text-sm font-medium transition-colors flex items-center justify-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>Call</span>
              </button>
              <button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 px-3 rounded-md text-sm font-medium transition-colors flex items-center justify-center space-x-1">
                <MessageCircle className="h-4 w-4" />
                <span>Message</span>
              </button>
            </div>
          </div>

          {/* Trip Details */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Trip Details</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <div className="font-medium">{booking.pickup}</div>
                  <div className="text-sm text-gray-500">Pickup</div>
                </div>
              </div>
              
              <div className="border-l-2 border-gray-300 ml-1.5 h-6"></div>
              
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div>
                  <div className="font-medium">{booking.destination}</div>
                  <div className="text-sm text-gray-500">Destination</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Ride Type</span>
                <span className="font-medium capitalize">{booking.rideType} Ride</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Estimated Fare</span>
                <span className="font-bold text-lg">₹{booking.driver.fare}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Distance</span>
                <span className="font-medium">8.2 km</span>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-red-900 mb-2">Emergency</h3>
            <p className="text-red-700 text-sm mb-4">
              For any emergency during your ride, contact campus security immediately.
            </p>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
              Emergency Contact: 100
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}