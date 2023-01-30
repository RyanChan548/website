import React, { useState } from "react";
import Link from "next/link";
const Signin1 = () => {
  const submitLoginData = () => {};
  return (
    <div className="items-center">
      <div className="bg-blue-400 rounded-t-lg py-3 justify-center items-center">
        <h1 className="justify-center text-center text-4xl">SignIn</h1>
      </div>
      <form className="shadow-md rounded-b-lg px-8 pt-8 pb-8 mb-4 items-center justify-center bg-blue-300">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />
          <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p>
        </div>

        <div className="flex items-center">
          <button
            className="bg-blue-500 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={submitLoginData}
          >
            Sign In
          </button>
          <br />

          <a
            className="inline-block align-baseline font-bold text-sm mx-3 text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
          <br></br>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="/signup"
          >
            Sign-up
          </a>
          <br />
        </div>
      </form>
    </div>
  );
};
export default Signin1;
