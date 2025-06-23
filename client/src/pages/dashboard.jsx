import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const [user, setUser] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
  let isMounted = true;

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.log("No token found, redirecting to /auth");
        navigate("/auth");
        return;
      }

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/check-auth`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status !== 200) {
        console.log("Not authenticated, redirecting to /auth");
        navigate("/auth");
      } else {
        const data = await res.json();
        console.log("Authenticated user:", data);
        if (isMounted) setUser(data);
      }
    } catch (err) {
      console.error("Auth check error:", err);
      navigate("/auth");
    } finally {
      if (isMounted) setAuthChecked(true);
    }
  };

  const handleResize = () => {
    const isMobileScreen = window.innerWidth <= 768;
    setIsMobile(isMobileScreen);
  };

  fetchUserData();
  handleResize();
  window.addEventListener('resize', handleResize);

  return () => {
    isMounted = false;
    window.removeEventListener('resize', handleResize);
  };
}, [navigate]);

if (!authChecked) return <div className="text-center p-4">Checking auth...</div>;
if (!user) return <div className="text-center p-4">Loading user data...</div>;


  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Welcome to Dashboard
        </h1>

        {user && (
          <div className="text-center">
            <p className="text-lg">Hello, <span className="font-semibold">{user.name}</span>!</p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
        )}

        <div className="mt-6 text-center text-blue-600">
          {isMobile ? "You are on a mobile view 📱" : "You're viewing this on a larger screen 💻"}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
