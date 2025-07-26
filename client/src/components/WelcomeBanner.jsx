import React from "react";

const WelcomeBanner = ({ firstName }) => {
  return (
    <div className="mx-w-md mx-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-4 my-4 shadow-lg">
      <h2 className="text-white text-lg md:text-xl font-semibold">
        👋 Hello, <span className="font-bold">{firstName}</span>! Welcome back.
      </h2>
      <p className="text-white/90 text-sm mt-1">
        We’re happy to see you again. Let’s make your car shine! ✨
      </p>
    </div>
  );
};

export default WelcomeBanner;
