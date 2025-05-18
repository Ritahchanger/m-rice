"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors: typeof errors = {};

    if (!email) validationErrors.email = "Email is required";
    if (!password) validationErrors.password = "Password is required";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log({ email, password, rememberMe });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300 p-4 login">
      <div className="w-full max-w-[600px] bg-white rounded-sm shadow-lg p-8">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          WELCOME BACK
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 text-green-800 font-medium">
              Email
            </label>
            <div
              className={`relative w-full pl-12 pr-4 h-[40px] border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-400 ring-red-300"
                  : "border-green-400 ring-green-200"
              }`}
            >
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600"
                size={20}
              />
              <input
                type="email"
                className="email-input"
                value={email}
                style={{
                  border: "none",
                }}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-green-800 font-medium">
              Password
            </label>
            <div
              className={`w-full pl-12 pr-12 relative h-[40px] border rounded-lg focus:outline-none focus:ring-2 ${
                errors.password
                  ? "border-red-400 ring-red-300"
                  : "border-green-400 ring-green-200"
              }`}
            >
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600"
                size={20}
              />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                className="password-input"
                style={{
                  border: "none",
                }}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 hover:text-green-800"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Remember me and Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 text-green-700">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="form-checkbox text-green-600"
              />
              <span>Remember Me</span>
            </label>
            <a href="#" className="text-sm text-green-700 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-sm transition duration-200"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
