import React, { useState } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

console.log("API_URL", API_URL)
export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);
const [signUpData, setSignUpData] = useState({
})
console.log("signUpData", signUpData)
  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

const createUser = async () => {
  try {
    const response = await axios.post(
      `${API_URL}/api/users/register`,
      signUpData
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-6 max-w-6xl w-full">
          <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            {isSignIn ? (
              <form className="space-y-4">
                <div className="mb-8">
                  <h3 className="text-gray-800 text-3xl font-bold">Sign in</h3>
                  <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                    Sign in to your account and explore a world of
                    possibilities. Your journey begins here.
                  </p>
                </div>

                <div>
                  <label className="text-gray-800 text-sm mb-2 block">
                    User name
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="username"
                      type="text"
                      required
                      className="w-full text-sm text-gray-800 border border-gray-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600"
                      placeholder="Enter user name"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type="password"
                      required
                      className="w-full text-sm text-gray-800 border border-gray-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600"
                      placeholder="Enter password"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label className="ml-3 block text-sm text-gray-800">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="javascript:void(0);"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div className="!mt-8">
                  <button
                    type="button"
                    className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  >
                    Sign in
                  </button>
                </div>

                <p className="text-sm !mt-8 text-center text-gray-500">
                  Don't have an account{" "}
                  <button
                    type="button"
                    className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                    onClick={toggleForm}
                  >
                    Register here
                  </button>
                </p>
              </form>
            ) : (
              <form onSubmit={createUser} className="space-y-4">
                <div className="mb-8">
                  <h3 className="text-gray-800 text-3xl font-bold">Sign up</h3>
                  <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                    Create an account to join our community and start your
                    journey.
                  </p>
                </div>

                <div>
                  <label className="text-gray-800 text-sm mb-2 block">
                    User name
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="name"
                      type="text"
                      onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })}
                      required
                      className="w-full text-sm text-gray-800 border border-gray-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600"
                      placeholder="Enter user name"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">
                    Email
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="email"
                      type="email"
                      onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                      required
                      className="w-full text-sm text-gray-800 border border-gray-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type="password"
                      onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                      required
                      className="w-full text-sm text-gray-800 border border-gray-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600"
                      placeholder="Enter password"
                    />
                  </div>
                </div>

                <div className="!mt-8">
                  <button
                    type="submit"
                    className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  >
                    Sign up
                  </button>
                </div>

                <p className="text-sm !mt-8 text-center text-gray-500">
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                    onClick={toggleForm}
                  >
                    Sign in here
                  </button>
                </p>
              </form>
            )}
          </div>
          <div className="max-md:mt-8">
            <img
              src="https://readymadeui.com/login-image.webp"
              className="w-full aspect-[71/50] max-md:w-4/5 mx-auto block object-cover"
              alt="Dining Experience"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
