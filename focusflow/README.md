# FocusFlow - Pomodoro & Task Tracker

FocusFlow is a productivity application that combines the Pomodoro Technique with task tracking, helping users stay focused and organized.

## Tech Stack

- **Frontend**: React + Vite
- **Backend**: Firebase (Authentication & Firestore)
- **Routing**: React Router DOM
- **Styling**: CSS Modules

## Features

- 🍅 Pomodoro Timer
- ✅ Task Management
- 📊 Productivity Statistics
- 🔐 Google Authentication
- 🌙 Light/Dark Theme

## Authentication

Firebase Authentication with Google Sign-In is included and configured from day one. Users can securely sign in with their Google accounts.

## Branching Strategy

We follow a Git branching strategy to maintain code quality and organization:

- `main` - Production-ready code
- `dev` - Development branch for integrating features
- `feature/*` - Feature branches for individual features

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file based on `.env.example`
4. Run the development server: `npm run dev`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build