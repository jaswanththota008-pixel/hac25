import React, { useState, useEffect } from 'react';
import { Bell, X, CheckCircle, AlertCircle, Info, Clock } from 'lucide-react';

interface Notification {
  id: string;
  type: 'success' | 'warning' | 'info' | 'error';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

interface NotificationSystemProps {
  userRole: 'student' | 'driver' | 'admin' | null;
}

export function NotificationSystem({ userRole }: NotificationSystemProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showPanel, setShowPanel] = useState(false);

  // Mock notifications based on user role
  useEffect(() => {
    if (!userRole) return;

    const mockNotifications: Record<string, Notification[]> = {
      student: [
        {
          id: '1',
          type: 'success',
          title: 'Booking Confirmed',
          message: 'Your ride to Tirupati Station has been confirmed. Driver will arrive in 5 minutes.',
          timestamp: new Date(Date.now() - 5 * 60 * 1000),
          read: false
        },
        {
          id: '2',
          type: 'info',
          title: 'Ride Sharing Available',
          message: 'Join a shared ride to City Mall and save ₹15 on your fare.',
          timestamp: new Date(Date.now() - 15 * 60 * 1000),
          read: false
        },
        {
          id: '3',
          type: 'warning',
          title: 'Peak Hour Alert',
          message: 'High demand expected between 5-7 PM. Book your ride early!',
          timestamp: new Date(Date.now() - 30 * 60 * 1000),
          read: true
        }
      ],
      driver: [
        {
          id: '1',
          type: 'info',
          title: 'New Ride Request',
          message: 'Student needs ride from MBU Main Gate to Railway Station. Fare: ₹45',
          timestamp: new Date(Date.now() - 2 * 60 * 1000),
          read: false
        },
        {
          id: '2',
          type: 'success',
          title: 'High Demand Area',
          message: 'Surge pricing active near Railway Station. +30% fare bonus!',
          timestamp: new Date(Date.now() - 10 * 60 * 1000),
          read: false
        },
        {
          id: '3',
          type: 'warning',
          title: 'Scheduled Ride Reminder',
          message: 'Pickup scheduled for 4:00 PM at Girls Hostel in 30 minutes.',
          timestamp: new Date(Date.now() - 20 * 60 * 1000),
          read: true
        }
      ],
      admin: [
        {
          id: '1',
          type: 'error',
          title: 'System Alert',
          message: 'Driver shortage detected in Railway Station area. 15 pending requests.',
          timestamp: new Date(Date.now() - 5 * 60 * 1000),
          read: false
        },
        {
          id: '2',
          type: 'success',
          title: 'Performance Update',
          message: 'Average response time improved by 12% this week.',
          timestamp: new Date(Date.now() - 60 * 60 * 1000),
          read: false
        },
        {
          id: '3',
          type: 'info',
          title: 'Weekly Report',
          message: 'Weekly analytics report is ready for download.',
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
          read: true
        }
      ]
    };

    setNotifications(mockNotifications[userRole] || []);
  }, [userRole]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'warning': return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'error': return <AlertCircle className="h-5 w-5 text-red-500" />;
      default: return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  const formatTime = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return timestamp.toLocaleDateString();
  };

  if (!userRole) return null;

  return (
    <div className="relative">
      {/* Notification Bell */}
      <button
        onClick={() => setShowPanel(!showPanel)}
        className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
      >
        <Bell className="h-6 w-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {/* Notification Panel */}
      {showPanel && (
        <div className="absolute right-0 top-12 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-96 overflow-hidden">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">Notifications</h3>
            <div className="flex items-center space-x-2">
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Mark all read
                </button>
              )}
              <button
                onClick={() => setShowPanel(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="max-h-80 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                <Bell className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                <p>No notifications yet</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                      !notification.read ? 'bg-blue-50' : ''
                    }`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex items-start space-x-3">
                      {getIcon(notification.type)}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className={`text-sm font-medium ${
                            !notification.read ? 'text-gray-900' : 'text-gray-700'
                          }`}>
                            {notification.title}
                          </p>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {notification.message}
                        </p>
                        <div className="flex items-center space-x-1 mt-2 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          <span>{formatTime(notification.timestamp)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}