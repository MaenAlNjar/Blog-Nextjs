"use client";

import React, { useState } from "react";
import Link from "next/link";
import { login } from "@/lib/action";
const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
    } catch (err) {
      console.error(err);
      setError("Invalid username or password");
    }
  };

  return (
    <form className="flex flex-col items-center gap-8" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        className="p-5 bg-slate-400 text-slate-300 rounded-md"
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        className="p-5 bg-slate-400 text-slate-300 rounded-md"
      />
      <button
        type="submit"
        className="p-5 bg-slate-400 cursor-pointer text-black rounded-r-md"
      >
        Login
      </button>
      {error && <div>{error}</div>}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};
export default LoginForm;
