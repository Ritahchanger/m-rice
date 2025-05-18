"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation"; // ✅ Correct import for Next.js 13+ (app directory)

const LoginPage = () => {
  const router = useRouter();

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

      // ✅ Use router.push correctly in app directory
      router.push("/user/task");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300 dark:from-gray-900 dark:to-gray-800 p-4 login">
      <div className="w-full max-w-[600px] bg-white dark:bg-gray-900 rounded-sm shadow-lg p-8 border border-green-300 dark:border-green-800">
        <h2 className="text-3xl font-bold text-green-700 dark:text-green-300 mb-6 text-center">
          WELCOME BACK
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 text-green-800 dark:text-green-300 font-medium">
              Email
            </label>
            <div
              className={`relative w-full pl-12 pr-4 h-[40px] border rounded-sm focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-400 ring-red-300 dark:border-red-500"
                  : "border-green-400 ring-green-200 dark:border-green-800"
              }`}
            >
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600 dark:text-green-400"
                size={20}
              />
              <input
                type="email"
                className="email-input bg-transparent text-black dark:text-white w-full h-full focus:outline-none"
                value={email}
                style={{ border: "none" }}
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
            <label className="block mb-1 text-green-800 dark:text-green-300 font-medium">
              Password
            </label>
            <div
              className={`w-full pl-12 pr-12 relative h-[40px] border rounded-sm focus:outline-none focus:ring-2 ${
                errors.password
                  ? "border-red-400 ring-red-300 dark:border-red-500"
                  : "border-green-400 ring-green-200 dark:border-green-800"
              }`}
            >
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600 dark:text-green-400"
                size={20}
              />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                className="password-input bg-transparent text-black dark:text-white w-full h-full focus:outline-none"
                style={{ border: "none" }}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 text-green-700 dark:text-green-300">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="form-checkbox text-green-600"
              />
              <span>Remember Me</span>
            </label>
            <a
              href="#"
              className="text-sm text-green-700 dark:text-green-300 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
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
