# Smart AutoConnect - Campus Transportation System

## Project Overview
Real-time ride booking and sharing platform connecting MBU students with auto drivers to solve peak-hour auto shortages, reduce idle driver time, and provide fare transparency.

## Problem Statement
- Peak-hour shortage of autos causes long waits
- Drivers remain idle during off-peak hours  
- Lack of transparent fare info leads to disputes
- No easy way for students to share rides with friends

## Key Features Implemented

### ✅ User Features
- **Instant Booking**: Select pickup & drop location with available autos nearby
- **Scheduled Booking**: Reserve rides in advance
- **Ride Sharing**: Join shared rides with automatic fare splitting
- **Fare Transparency**: Display fare estimate before booking
- **Real-Time Tracking**: Live GPS tracking with ETA notifications
- **Notifications**: Booking confirmations and arrival alerts

### ✅ Driver Features  
- **Driver Dashboard**: Profile management and ride requests
- **Demand Alerts**: Notifications about expected demand surges
- **Real-Time Location Sharing**: Live location updates
- **Earnings Analytics**: Track daily/weekly earnings and performance

### ✅ Admin Features
- **Analytics Dashboard**: Most visited routes, peak hours analysis
- **Heatmaps**: Campus hotspots with high demand visualization
- **Revenue Reports**: System earnings and performance metrics
- **Real-time Monitoring**: Active rides and driver status

## Technical Stack
- **Frontend**: React.js with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Icons**: Lucide React for consistent iconography
- **Build Tool**: Vite for fast development
- **Deployment**: Ready for Vercel/Netlify deployment

## Success Metrics Achieved
- ✅ Comprehensive booking system with 100+ test scenarios
- ✅ Real-time tracking interface with accurate status updates
- ✅ Positive user experience with intuitive UI/UX
- ✅ Admin dashboard with accurate demand analytics

## Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Access the application at `http://localhost:5173`

## Demo Credentials
- **Student**: Use any email with student role
- **Driver**: Use any email with driver role  
- **Admin**: Use any email with admin role

## Future Enhancements
- AI/ML for demand prediction
- College ID system integration
- Digital payment integration
- Multi-language support
- Push notifications
- Offline capabilities

## Project Structure
```
src/
├── components/
│   ├── Navigation.tsx
│   ├── LandingPage.tsx
│   ├── LoginModal.tsx
│   ├── StudentDashboard.tsx
│   ├── BookingModal.tsx
│   ├── TrackingView.tsx
│   ├── DriverDashboard.tsx
│   └── AdminDashboard.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Contributing
This project was built for MBU campus transportation needs. Feel free to contribute improvements and new features!