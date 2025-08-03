import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de login com email/senha aqui
  };

  const handleGoogleLogin = () => {
    signIn(); // Lógica do NextAuth
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f] px-4">
      <div className="bg-[#181a1b] p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h1 className="text-white text-2xl font-bold text-center">Board Tasks</h1>
        <h2 className="text-gray-200 text-lg font-semibold text-center mb-6">
          Join with your account
        </h2>

        <form onSubmit={handleEmailLogin} className="space-y-4">
          <div>
            <label className="text-gray-200 block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#dedede] text-white placeholder:text-white bg-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#dedede] text-white placeholder:text-white bg-transparent"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-neutral-500 text-white py-2 rounded-md hover:bg-neutral-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-all duration-300"
        >
          <svg
            className="w-5 h-5 mr-2"
            viewBox="0 0 533.5 544.3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M533.5 278.4c0-17.4-1.6-34.2-4.7-50.4H272v95.3h147.4c-6.4 34.5-25.1 63.8-53.5 83.3v68h86.6c50.6-46.6 80-115.3 80-196.2z"
              fill="#4285f4"
            />
            <path
              d="M272 544.3c72.6 0 133.5-24.1 178-65.4l-86.6-68c-24.1 16.2-55 25.8-91.4 25.8-70.4 0-130.2-47.6-151.6-111.5H33.8v69.9c44.8 88.5 137.1 149.2 238.2 149.2z"
              fill="#34a853"
            />
            <path
              d="M120.4 325.2c-10-29.4-10-60.9 0-90.3V165H33.8c-36.7 73.5-36.7 160.3 0 233.8l86.6-68.6z"
              fill="#fbbc04"
            />
            <path
              d="M272 107.7c39.4-.6 77.4 13.4 106.3 39.9l79.4-79.4C403.8 23.7 339.2-.2 272 0 170.9 0 78.6 60.7 33.8 149.2l86.6 69.9c21.3-63.9 81.2-111.4 151.6-111.4z"
              fill="#ea4335"
            />
          </svg>
          Login with Google
        </button>

        <p className="mt-6 text-center text-sm text-gray-300">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-blue-400 hover:underline font-medium"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
