'use client';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Name, setName] = useState(""); // For signup
  const [loaction, setLocation] = useState(""); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // console.log("Login Details:", { Email, Password });
    //API call to login
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include cookies in the request
        
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();      
      console.log("Login Response:", data);
      
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
        console.error("Login failed:", data);
        alert(data.message || "Login failed. Please try again.");
      }

    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
      return;
    }

  };

  const handleSignup = (e) => {
    e.preventDefault();
    
    // console.log("Login Details:", { Email, Password });
    //API call to login
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include cookies in the request
        
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();      
      console.log("Login Response:", data);
      
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
        console.error("Login failed:", data);
        alert(data.message || "Login failed. Please try again.");
      }

    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
      return;
    }
  };


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
                value={Name}
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
                value={loaction}
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

        {/* <div className="flex mb-8">
          <button
            className={`flex-1 hover:cursor-pointer py-2 rounded-l-full font-semibold transition-all duration-300 ${isLogin
                ? "bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white"
                : "bg-white text-blue-900 border border-blue-900"
              }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`flex-1 hover:cursor-pointer py-2 rounded-r-full font-semibold transition-all duration-300 ${!isLogin
                ? "bg-gradient-to-r from-blue-900 via-blue-800  to-purple-900 text-white"
                : "bg-white text-blue-900 border border-blue-900"
              }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div> */}


        {/* Modern Toggle Button */}
        <div className="relative">
          <div className="flex bg-gray-100 rounded-2xl p-1 relative overflow-hidden">
            {/* Sliding Background */}
            {/* <div 
                className={`absolute top-1 w-1/2 h-[calc(100%-8px)] rounded-xl transition-all duration-500 ease-out transform ${
                  isLogin 
                    ? 'translate-x-0 bg-gradient-to-r from-rose-400 to-pink-500 shadow-lg shadow-rose-200' 
                    : 'translate-x-full bg-gradient-to-r from-emerald-400 to-cyan-500 shadow-lg shadow-emerald-200'
                }`}
              /> */}
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