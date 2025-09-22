import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-center p-6">
      
      {/* Floating 404 */}
      <h1 className="text-[7rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 animate-bounce drop-shadow-lg">
        404
      </h1>

      {/* Illustration style text */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Oops! Page Not Found 🚧
      </h2>
      <p className="text-gray-600 max-w-lg mb-8">
        The page you’re looking for might have been moved, deleted, or never existed.
        But don’t worry—we’ll guide you back home.
      </p>

      {/* Action buttons */}
      <div className="flex gap-4">
        <Link
          to="/"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow-lg hover:scale-105 transition-transform"
        >
          ⬅ Back Home
        </Link>
        <Link
          to="/dashboard"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-lg hover:scale-105 transition-transform"
        >
          🏠 Dashboard
        </Link>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-pink-300 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-300 rounded-full opacity-30 animate-pulse"></div>
    </div>
  );
};

export default NotFound;
