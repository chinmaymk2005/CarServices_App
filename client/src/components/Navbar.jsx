'use client';
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API_URL from '../config';

// Navbar.jsx
const Navbar = () => {
    const [user, setUser] = useState();
    const navigate = useNavigate();    

    useEffect(() => {
        const verifyAndFetchUser = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const res = await fetch(`${API_URL}/api/auth/check-auth`, {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    if (res.ok) {
                        const userData = await res.json();
                        console.log("User data fetched:", userData);
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



    return (
        <>
            <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-blue-700">CarCare</Link>
                <div className="space-x-6">
                    <Link to="/" className="text-blue-700 hover:text-orange-500">Home</Link>
                    <Link to="/service" className="text-blue-700 hover:text-orange-500">Services</Link>
                    <Link to="/about" className="text-blue-700 hover:text-orange-500">About</Link>
                    <Link to="/contact" className="text-blue-700 hover:text-orange-500">Contact</Link>
                    <button className="bg-orange-600 text-white border rounded-md p-1
                    hover:bg-blue-500 cursor-pointer transition duration-300 text-sm font-semibold px-4 py-2" 
                    onClick={() => {
                        if (user) {
                            localStorage.removeItem('token');
                            setUser(null);
                        }else{
                            navigate('/auth');
                        }
                    }}
                    >
                        {user ? 'Logout' : 'Login'}
                    </button>
                </div>
            </nav>

        </>
    )
}

export default Navbar