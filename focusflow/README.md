# FocusFlow - Pomodoro & Task Tracker

FocusFlow is a productivity application that combines the Pomodoro Technique with task tracking, helping users stay focused and organized.

## Tech Stack

- **Frontend**: React + Vite
- **Backend**: Firebase (Authentication & Firestore)
- **Routing**: React Router DOM
- **Styling**: Vanilla CSS

## Features

- 🍅 Pomodoro Timer
- ✅ Task Management
- 📊 Productivity Statistics
- 🔐 Google Authentication
- 🌙 Light/Dark Theme

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar with app title and auth controls
│   ├── Timer.jsx           # Pomodoro timer component
│   ├── TaskList.jsx        # Task management component
│   ├── Stats.jsx           # Productivity statistics component
│   └── ThemeToggle.jsx     # Theme switching component
├── context/
│   ├── AuthContext.jsx     # Firebase authentication context
│   └── ThemeContext.jsx    # Theme management context
├── firebase/
│   └── firebaseConfig.js   # Firebase configuration and initialization
├── styles/
│   └── global.css          # Global styles and theme definitions
├── App.jsx                 # Main application component
└── main.jsx                # Application entry point
```

## Authentication

Firebase Authentication with Google Sign-In is included and configured from day one. Users can securely sign in with their Google accounts.

To set up authentication:
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Google Authentication in the Firebase Authentication section
3. Copy your Firebase configuration details
4. Create a `.env` file in the root directory with your Firebase credentials

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## Branching Strategy

We follow a Git branching strategy to maintain code quality and organization:

- `main` - Production-ready code
- `dev` - Development branch for integrating features
- `feature/*` - Feature branches for individual features

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd focusflow
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
   Then update the values with your Firebase configuration.

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Components Overview

### Timer Component
The Timer component implements the Pomodoro technique with a 25-minute countdown timer. It includes Start, Pause, and Reset functionality.

### TaskList Component
The TaskList component displays tasks for authenticated users. Unauthenticated users are prompted to sign in to manage tasks.

### Stats Component
The Stats component will display productivity statistics and analytics for users.

### ThemeToggle Component
The ThemeToggle component allows users to switch between light and dark themes. The selected theme is saved in localStorage.

### Navbar Component
The Navbar component displays the app title, theme toggle, and authentication controls. It shows either a "Sign in with Google" button or user information with a logout button based on authentication status.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.