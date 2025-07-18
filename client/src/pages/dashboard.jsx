import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API_URL from '../config';
import Navbar from '../components/Navbar';


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

      const res = await fetch(`${API_URL}/api/auth/check-auth`, {
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
    <div className={`min-h-screen ${isMobile ? 'bg-gray-200' : 'bg-white'}`}>
      <Navbar user={user} isMobile={isMobile} />
    </div>
  );
};

export default Dashboard;
