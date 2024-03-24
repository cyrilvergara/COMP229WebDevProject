import React from 'react';

const Card = () => {
  return (
    <div className="flex flex-row justify-center items-center h-full">
      <div className="bg-white rounded-lg shadow-md p-10 basis-2/3">
        <div className="mb-6">
          <span className="text-2xl font-semibold text-gray-800">Welcome back!</span>
        </div>
        <form className="space-y-4">
          <div className="flex items-center">
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" className="form-input ml-4 w-full" placeholder="Enter your username" />
          </div>
          <div className="flex items-center">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" className="form-input ml-4 w-full" placeholder="Enter your password" />
          </div>
          <div className="flex justify-between">
            <div className="text-left">
              <a className="text-sm font-medium text-blue-600 hover:text-blue-800" href="#">Forgot your password?</a>
            </div>
            <div className="text-right">
              <button type="submit" className="btn-primary">LOG IN</button>
            </div>
          </div>
          <div className="text-right">
            <a className="text-sm font-medium text-gray-600 hover:text-gray-900" href="#">DON'T HAVE AN ACCOUNT? SIGN UP NOW</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Card;
