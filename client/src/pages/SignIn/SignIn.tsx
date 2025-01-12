import React, { useState } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [signUpData, setSignUpData] = useState({});
  const [signInData, setSignInData] = useState({});
  const [signUpError, setSignUpError] = useState("");
  const [signInError, setSignInError] = useState("");
  const [seccessMessage, setSuccessMessage] = useState("");
 
  const toggleForm = () => {
    setIsSignIn(!isSignIn);
    setSignUpError("");
    setSignInError("");
    setSuccessMessage("");
  };

  const createUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
        try {
      const response = await axios.post(
        `https://local-sustainability-recycling-exchange-pif6.onrender.com/api/users/register`,
        signUpData
      );
      if (response.status === 201) {
        sessionStorage.setItem("token", response.data.token);
        setSignUpError("");
        setSuccessMessage("Registration successful");
        setTimeout(() => {
          // navigate to the home page with refresh("/");
          window.location.href = "/";
        }, 2000);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorResponse = error.response;
        if (errorResponse && errorResponse.status === 400) {
          setSignUpError("User already exists");
        }
      } else {
        console.error(error);
      }
    }
  };

  const loginUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    try {
      const response = await axios.post(
        `https://local-sustainability-recycling-exchange-pif6.onrender.com/api/users/login`,
        signInData
      );
      if (response.status === 200) {
        sessionStorage.setItem("token", response.data.token);
        setSignInError("");
        setSuccessMessage("Login successful");
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
      }

    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorResponse = error.response;
        if (errorResponse && errorResponse.status === 401) {
          setSignInError("Invalid email or password");
        }
      } else {
        console.error(error);
      }
    }
  };
  return (
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-6 max-w-6xl w-full">
          <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            {isSignIn ? (
              <form onSubmit={loginUser} className="space-y-4">
                <div className="mb-8">
                  <h3 className="text-gray-800 text-3xl font-bold">Sign in</h3>
                  <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                    Sign in to your account and explore a world of
                    possibilities. Your journey begins here.
                  </p>
                </div>

                <div>
                  {seccessMessage && <p className="text-green-500 mb-1">{seccessMessage}</p>}
                  {signInError && <p className="text-red-500 mb-1">{signInError}</p>}
                  <label className="text-gray-800 text-sm mb-2 block">
                    Email
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="email"
                      type="email"
                      onChange={(e) =>
                        setSignInData({ ...signInData, email: e.target.value })
                      }
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
                      onChange={(e) =>
                        setSignInData({
                          ...signInData,
                          password: e.target.value,
                        })
                      }
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
                    type="submit"
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
                  {seccessMessage && <p className="text-green-500 mb-1">{seccessMessage}</p>}
                  {signUpError && <p className="text-red-500 mb-1">{signUpError}</p>}
                  <label className="text-gray-800 text-sm mb-2 block">
                    User name
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name="name"
                      type="text"
                      onChange={(e) =>
                        setSignUpData({ ...signUpData, name: e.target.value })
                      }
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
                      onChange={(e) =>
                        setSignUpData({ ...signUpData, email: e.target.value })
                      }
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
                      onChange={(e) =>
                        setSignUpData({
                          ...signUpData,
                          password: e.target.value,
                        })
                      }
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
