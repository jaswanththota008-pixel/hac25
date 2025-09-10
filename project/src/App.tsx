import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { LandingPage } from './components/LandingPage';
import { StudentDashboard } from './components/StudentDashboard';
import { DriverDashboard } from './components/DriverDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { LoginModal } from './components/LoginModal';
import { BookingModal } from './components/BookingModal';
import { TrackingView } from './components/TrackingView';

export type UserRole = 'student' | 'driver' | 'admin' | null;
export type View = 'landing' | 'student' | 'driver' | 'admin' | 'tracking';

function App() {
  const [currentView, setCurrentView] = useState<View>('landing');
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [activeBooking, setActiveBooking] = useState<any>(null);

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    setCurrentView(role || 'landing');
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    setUserRole(null);
    setCurrentView('landing');
    setActiveBooking(null);
  };

  const startBooking = () => {
    setShowBookingModal(true);
  };

  const confirmBooking = (bookingData: any) => {
    setActiveBooking(bookingData);
    setCurrentView('tracking');
    setShowBookingModal(false);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'student':
        return <StudentDashboard onStartBooking={startBooking} activeBooking={activeBooking} />;
      case 'driver':
        return <DriverDashboard />;
      case 'admin':
        return <AdminDashboard />;
      case 'tracking':
        return <TrackingView booking={activeBooking} onBackToDashboard={() => setCurrentView(userRole || 'landing')} />;
      default:
        return <LandingPage onGetStarted={() => setShowLoginModal(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        userRole={userRole} 
        onLogin={() => setShowLoginModal(true)} 
        onLogout={handleLogout}
        onNavigate={setCurrentView}
        currentView={currentView}
      />
      
      {renderCurrentView()}

      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
        onLogin={handleLogin} 
      />

      <BookingModal 
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        onConfirm={confirmBooking}
      />
    </div>
  );
}

export default App;