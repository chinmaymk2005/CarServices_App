'use client';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // For signup
  const [location, setLocation] = useState(""); 
  const navigate = useNavigate();
const [checking, setChecking] = useState(true);

  // Check if user is already logged in
  useEffect(() => {
    

    const checkAuth = async () => {
      try {
        // console.log("URL:", `${import.meta.env.VITE_API_URL}/api/auth/check-auth`);
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/check-auth`, {
          method: "GET",
          credentials: "include", // Include cookies in the request
        });        
        
        if (res.status === 200) {
          const data = await res.json();
          console.log("User is authenticated:", data);
          navigate("/dashboard"); // Redirect to dashboard if authenticated          
        } else {
          console.log("User is not authenticated");
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      }finally{
        setChecking(false); // Set checking to false after the check is done
      }
    }

    if (checking) {
      checkAuth();
    }
  }, [checking]);


  const handleLogin = async (e) => {
    e.preventDefault();
    
    // console.log("Login Details:", { Email, Password });
    //API call to login
    try {
      console.log("URL:", `${import.meta.env.VITE_API_URL}/api/auth/login`);
      console.log("Login Details:", { email, password });
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include cookies in the request
        
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();            
      
      if(res.status === 200) {
        // Handle successful login
        console.log("Login successful:", data);
        alert("Login successful!");
        
        setTimeout(() => {
          navigate("/dashboard"); // Redirect to dashboard after login
        },2000); // Redirect after a delay
      }
      else {
        // Handle login failure
        console.log("Login failed:", data);
        alert(data.message || "Login failed. Please try again.");
      }

    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
      return;
    }

  };

  const handleSignup = async (e) => {
    e.preventDefault();
    
    // console.log("Login Details:", { Email, Password });
    //API call to signup
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include cookies in the request
        
        body: JSON.stringify({ email, password,name, location }),
      });

      const data = await res.json();      
      console.log("signup Response:", data);
      
      if(res.status === 201) {
        // Handle successful Signup
        console.log("Signup successful:", data);
        alert("Signup successful!");
        
        setTimeout(() => {
          navigate("/dashboard"); // Redirect to dashboard after signup
        },2000); // Redirect after a delay
      }
      else {
        // Handle signup failure
        console.error("signup failed:", data);
        alert(data.message || "Login failed. Please try again.");
      }

    } catch (error) {
      console.error("signup failed:", error);
      alert("signup failed. Please try again.");
      return;
    }
  };

  useEffect(() => {
    // You can add side effects here if needed
  }, []);


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 m-6 rounded-lg shadow-lg w-full max-w-md">

        {isLogin ? (
          <form onSubmit={handleLogin}>
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full hover:cursor-pointer bg-gradient-to-r from-blue-700 to-purple-700  text-white py-2 rounded hover:from-blue-700 hover:to-blue-800 transition mb-4"
            >
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignup}>
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={e => setLocation(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your location"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full hover:cursor-pointer bg-gradient-to-r from-blue-700 to-purple-700 hover:from-blue-700 hover:to-blue-800 text-white py-2 rounded transition mb-4"
            >
              Sign Up
            </button>
          </form>
        )}                


        {/* Modern Toggle Button */}
        <div className="relative">
          <div className="flex bg-gray-100 rounded-2xl p-1 relative overflow-hidden">            
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`relative z-10 hover:cursor-pointer flex-1 py-3 text-center font-semibold rounded-xl transition-all duration-300 ${isLogin
                ? 'text-white'
                : 'text-gray-600 hover:text-gray-800'
                }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`relative z-10 hover:cursor-pointer flex-1 py-3 text-center font-semibold rounded-xl transition-all duration-300 ${!isLogin
                ? 'text-white'
                : 'text-gray-600 hover:text-gray-800'
                }`}
            >
              Sign Up
            </button>
          </div>
        </div>


        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>


        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-indigo-600 hover:cursor-pointer hover:text-indigo-700 font-semibold transition-colors duration-200"
            >
              {isLogin ? 'Sign up here' : 'Login here'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Authentication;