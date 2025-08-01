import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import NotificationBar from './modules/notifications/NotificationBar';
import ErrorBoundary from './components/ErrorBoundary';

const Home = React.lazy(() => import('./pages/Home'));
const Recipes = React.lazy(() => import('./pages/Recipes'));
const RecipeDetails = React.lazy(() => import('./pages/RecipeDetails'));
const RecipeEdit = React.lazy(() => import('./pages/RecipeEdit'));
const Pantry = React.lazy(() => import('./pages/Pantry'));
const Collections = React.lazy(() => import('./pages/Collections'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Settings = React.lazy(() => import('./pages/Settings'));

function App() {
  return (
    <div className="App" role="main">
      <ErrorBoundary>
        <Navbar />
        <NotificationBar />
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
            <Route path="/recipes/:id/edit" element={<RecipeEdit />} />
            <Route path="/pantry" element={<Pantry />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
export default App;
