import React, { useState } from 'react';
import { X, MapPin, Clock, Users, Car, Star, Phone } from 'lucide-react';
import { FareCalculator } from './FareCalculator';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (bookingData: any) => void;
}

export function BookingModal({ isOpen, onClose, onConfirm }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    pickup: 'MBU Main Gate',
    destination: 'Tirupati Railway Station',
    rideType: 'solo',
    scheduledTime: 'now'
  });
  const [calculatedFare, setCalculatedFare] = useState(45);

  const availableDrivers = [
    {
      id: 1,
      name: 'Ramesh Kumar',
      rating: 4.8,
      vehicle: 'TN 07 AB 1234',
      distance: '2 min away',
      phone: '+91 98765 43210',
      fare: 45,
      avatar: '👨'
    },
    {
      id: 2,
      name: 'Suresh Babu',
      rating: 4.9,
      vehicle: 'TN 07 CD 5678',
      distance: '3 min away',
      phone: '+91 98765 43211',
      fare: 40,
      avatar: '👨‍🦲'
    }
  ];

  if (!isOpen) return null;

  const handleConfirmBooking = (driver: any) => {
    const booking = {
      ...bookingData,
      driver,
      eta: driver.distance,
      bookingId: 'AB' + Date.now(),
      status: 'confirmed'
    };
    onConfirm(booking);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            {step === 1 ? 'Confirm Booking Details' : 'Choose Your Driver'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {step === 1 ? (
            <div className="space-y-6">
              {/* Trip Details */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Trip Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <div className="font-medium">{bookingData.pickup}</div>
                      <div className="text-sm text-gray-500">Pickup Location</div>
                    </div>
                  </div>
                  <div className="border-l-2 border-gray-300 ml-1.5 h-6"></div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div>
                      <div className="font-medium">{bookingData.destination}</div>
                      <div className="text-sm text-gray-500">Destination</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ride Options */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Ride Options</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setBookingData({ ...bookingData, rideType: 'solo' })}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      bookingData.rideType === 'solo'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Car className="h-6 w-6 mx-auto mb-2" />
                    <div className="font-medium">Solo Ride</div>
                    <div className="text-sm text-gray-500">₹45 - Private</div>
                  </button>
                  
                  <button
                    onClick={() => setBookingData({ ...bookingData, rideType: 'shared' })}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      bookingData.rideType === 'shared'
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Users className="h-6 w-6 mx-auto mb-2" />
                    <div className="font-medium">Shared Ride</div>
                    <div className="text-sm text-gray-500">₹25 - Split fare</div>
                  </button>
                </div>
              </div>

              {/* Timing */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">When do you need the ride?</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setBookingData({ ...bookingData, scheduledTime: 'now' })}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      bookingData.scheduledTime === 'now'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Clock className="h-6 w-6 mx-auto mb-2" />
                    <div className="font-medium">Now</div>
                    <div className="text-sm text-gray-500">Immediate pickup</div>
                  </button>
                  
                  <button
                    onClick={() => setBookingData({ ...bookingData, scheduledTime: 'later' })}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      bookingData.scheduledTime === 'later'
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Clock className="h-6 w-6 mx-auto mb-2" />
                    <div className="font-medium">Schedule</div>
                    <div className="text-sm text-gray-500">Pick a time</div>
                  </button>
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-semibold transition-colors"
              >
                Find Available Drivers
              </button>
              
              {/* Fare Calculator */}
              <div className="mt-6">
                <FareCalculator
                  pickup={bookingData.pickup}
                  destination={bookingData.destination}
                  rideType={bookingData.rideType as 'solo' | 'shared'}
                  onFareCalculated={setCalculatedFare}
                />
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>2 drivers available nearby</span>
                </div>
              </div>

              {availableDrivers.map((driver) => (
                <div key={driver.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{driver.avatar}</div>
                      <div>
                        <div className="font-semibold text-gray-900">{driver.name}</div>
                        <div className="text-sm text-gray-500">{driver.vehicle}</div>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{driver.rating}</span>
                          </div>
                          <span className="text-gray-300">•</span>
                          <span className="text-sm text-green-600 font-medium">{driver.distance}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-900">₹{driver.fare}</div>
                      <div className="flex space-x-2 mt-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                          <Phone className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleConfirmBooking(driver)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t">
                <button
                  onClick={() => setStep(1)}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  ← Back to booking details
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}