import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://authentication-pf3yfmx32q-uc.a.run.app/user/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem("token", token);

        // Call testToken after successful login
        await testToken();

        navigate("/dashboard");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const testToken = async () => {
    try {
      const response = await axios.post(
        "https://luoi-lot-ca-pf3yfmx32q-de.a.run.app/api/huh",
        {
          email,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Test token response:", response.data);
    } catch (error) {
      console.error("Error testing token:", error);
    }
  };

  return (
    <div className="flex bg-gray-200 h-screen">
      <div className="text-blue font-bold text-5xl w-1/2 justify-center items-center flex flex-col gap-1">
        <p>INVENTORY</p>
        <p>MANAGEMENT</p>
        <p>SYSTEM</p>
      </div>
      <div className="flex flex-col w-1/2 items-center justify-center font-bold">
        <form className="w-1/2" onSubmit={handleLogin}>
          <p className="text-3xl mb-5">Log in</p>
          <label className="font-medium">Email</label>
          <input
            type="text"
            className="block w-full p-2 border border-gray-300 rounded font-thin"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="font-medium">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="block w-full p-2 border font-thin border-gray-300 rounded"
              placeholder="Input password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
              {showPassword ? (
                <FiEyeOff onClick={() => setShowPassword(false)} />
              ) : (
                <FiEye onClick={() => setShowPassword(true)} />
              )}
            </div>
          </div>
          <div className="text-sky-600 text-right p-2">
            <label>Forgot password</label>
          </div>
          <button
            type="submit"
            className="bg-blue p-4 rounded-lg text-white font-semibold w-full"
          >
            Log in
          </button>
        </form>
        <div>
          <label className="text-center p-2">Or login with</label>
        </div>
        <div className="w-1/2">
          <button className="p-3 rounded-lg bg-white font-semibold w-full">
            Log in with Google
          </button>
        </div>
        <div className="text-center flex p-2">
          Don't have an account?
          <p className="text-blue px-1">
            <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
