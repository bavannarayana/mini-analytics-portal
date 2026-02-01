import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

const Login = () => {
  const login = useAuthStore((store) => store.login);
  const user = useAuthStore((store) => store.user);

  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  if (user) navigate("/dashboard");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const success = login(email, password);
    if (success) {
      navigate("/dashboard");
    } else {
      setError("Invalid Credentials!");
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={(e) => handleSubmit(e)} className=" w-[350px]">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Analytics Portal Login
        </h2>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          placeholder="admin@gmail.com"
          className="border p-2 w-full mb-4 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password@123"
          className="border p-2 w-full mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
