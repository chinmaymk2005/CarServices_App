'use client';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API_URL from '../config';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [user, setUser] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAndFetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res = await fetch(`${API_URL}/api/auth/check-auth`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
          if (res.ok) {
            const userData = await res.json();
            setUser({ ...userData, token });
          } else {
            setUser(null);
            localStorage.removeItem('token');
          }
        } catch (err) {
          console.error("Error verifying user:", err);
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    verifyAndFetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center relative z-50">
      {/* Brand */}
      <div className="flex items-center">
        <img src="/Images/logo.jpg" alt="YourCarStylist Logo" className="h-10 w-auto mr-4 border rounded-md" />
        <Link to="/" className="text-2xl font-bold text-blue-700">
          YourCarStylist
        </Link>
      </div>


      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-6 items-center">
        <Link to="/" className="text-blue-700 hover:text-orange-500 transition hover:border-b-2">
          Home
        </Link>
        <Link to="/services" className="text-blue-700 hover:text-orange-500 transition hover:border-b-2">
          Services
        </Link>
        <Link to="/about" className="text-blue-700 hover:text-orange-500 transition hover:border-b-2">
          About
        </Link>
        <Link to="/ContactUs" className="text-blue-700 hover:text-orange-500 transition hover:border-b-2">
          Contact
        </Link>
        <button
          className="bg-red-600 text-white cursor-pointer px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition"
          onClick={() => {
            user ? handleLogout() : navigate('/auth');
            }}
            style={{
            backgroundColor: user ? '#dc2626' : '#22c55e', // Tailwind red-600 or green-500
            color: 'white'
            }}
          >
            {user ? 'Logout' : 'Login'}
          </button>
          </div>

          {/* Mobile Toggle */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t shadow-md flex flex-col items-center space-y-4 py-6 md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-blue-700">
            Home
          </Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="text-blue-700">
            Services
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="text-blue-700">
            About
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-blue-700">
            Contact
          </Link>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition"
            onClick={() => {
              setMenuOpen(false);
              user ? handleLogout() : navigate('/auth');
            }}
          >
            {user ? 'Logout' : 'Login'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
