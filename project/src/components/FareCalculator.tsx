import React, { useState, useEffect } from 'react';
import { Calculator, MapPin, Clock, Users, DollarSign } from 'lucide-react';

interface FareCalculatorProps {
  pickup: string;
  destination: string;
  rideType: 'solo' | 'shared';
  passengers?: number;
  onFareCalculated: (fare: number) => void;
}

export function FareCalculator({ 
  pickup, 
  destination, 
  rideType, 
  passengers = 1,
  onFareCalculated 
}: FareCalculatorProps) {
  const [fareBreakdown, setFareBreakdown] = useState({
    baseFare: 0,
    distanceFare: 0,
    timeFare: 0,
    totalFare: 0,
    perPersonFare: 0,
    distance: 0,
    estimatedTime: 0
  });

  // Mock fare calculation based on destination
  useEffect(() => {
    if (!pickup || !destination) return;

    // Mock distance and time calculation
    const destinations: Record<string, { distance: number; time: number }> = {
      'Tirupati Railway Station': { distance: 8.2, time: 25 },
      'City Center Mall': { distance: 5.1, time: 18 },
      'Bus Stand': { distance: 3.2, time: 12 },
      'Chandragiri Fort': { distance: 12.5, time: 35 },
      'SVU Campus': { distance: 6.8, time: 22 },
      'Airport': { distance: 15.3, time: 45 }
    };

    const destInfo = destinations[destination] || { distance: 5, time: 15 };
    
    // Fare calculation logic
    const baseFare = 20; // Base fare in rupees
    const perKmRate = 8; // Rate per kilometer
    const perMinRate = 0.5; // Rate per minute
    
    const distanceFare = destInfo.distance * perKmRate;
    const timeFare = destInfo.time * perMinRate;
    const totalFare = baseFare + distanceFare + timeFare;
    
    // Shared ride discount
    const finalFare = rideType === 'shared' ? totalFare * 0.7 : totalFare;
    const perPersonFare = rideType === 'shared' ? finalFare / Math.max(passengers, 2) : finalFare;

    const breakdown = {
      baseFare,
      distanceFare,
      timeFare,
      totalFare: Math.round(finalFare),
      perPersonFare: Math.round(perPersonFare),
      distance: destInfo.distance,
      estimatedTime: destInfo.time
    };

    setFareBreakdown(breakdown);
    onFareCalculated(breakdown.totalFare);
  }, [pickup, destination, rideType, passengers, onFareCalculated]);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-center space-x-2 mb-4">
        <Calculator className="h-5 w-5 text-blue-600" />
        <h3 className="font-semibold text-gray-900">Fare Breakdown</h3>
      </div>

      <div className="space-y-3">
        {/* Trip Details */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-gray-500" />
            <span className="text-gray-600">Distance:</span>
            <span className="font-medium">{fareBreakdown.distance} km</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span className="text-gray-600">Time:</span>
            <span className="font-medium">{fareBreakdown.estimatedTime} min</span>
          </div>
        </div>

        {/* Fare Components */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Base fare</span>
            <span>₹{fareBreakdown.baseFare}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Distance charge ({fareBreakdown.distance} km × ₹8)</span>
            <span>₹{Math.round(fareBreakdown.distanceFare)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Time charge ({fareBreakdown.estimatedTime} min × ₹0.5)</span>
            <span>₹{Math.round(fareBreakdown.timeFare)}</span>
          </div>
          
          {rideType === 'shared' && (
            <div className="flex justify-between text-green-600">
              <span>Shared ride discount (30%)</span>
              <span>-₹{Math.round((fareBreakdown.baseFare + fareBreakdown.distanceFare + fareBreakdown.timeFare) * 0.3)}</span>
            </div>
          )}
        </div>

        <div className="border-t pt-3">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-900">Total Fare</span>
            <span className="text-xl font-bold text-green-600">₹{fareBreakdown.totalFare}</span>
          </div>
          
          {rideType === 'shared' && (
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">Per person</span>
              </div>
              <span className="font-semibold text-blue-600">₹{fareBreakdown.perPersonFare}</span>
            </div>
          )}
        </div>

        {/* Payment Methods */}
        <div className="bg-gray-50 rounded-lg p-3 mt-4">
          <div className="flex items-center space-x-2 mb-2">
            <DollarSign className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Payment Options</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Cash</span>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">UPI</span>
            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Digital Wallet</span>
          </div>
        </div>
      </div>
    </div>
  );
}