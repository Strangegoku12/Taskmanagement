import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const navigate = useNavigate();
    const [loginform, setLoginform] = useState({
        email: '',
        password: ''
    })
    function handleloginform(e) {
        const { name, value } = e.target
        setLoginform((prev) => ({ ...prev, [name]: value }));
    }

    async function logindashboard(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:4000/login", loginform);

            console.log("Login Response:", response);

            if (response.status === 200) {
                navigate("/dashboard");
            } else {
                alert(response.message || "Login failed");
            }
        } catch (err) {
            console.error(err);
            alert("Server error");
        }
    }


    return (
        <div className="flex h-screen bg-white overflow-hidden">
            {/* Left Curved Image Section */}
            <div className="hidden md:flex w-1/2 h-full relative">
                <div className="absolute inset-0  rounded-r-[120px]"></div>
                <img
                    src="\assets\3331057.jpg"
                    alt="Login visual"
                    className="w-full h-full object-cover  rounded-r-[120px]"
                />
            </div>

            {/* Right Side Login Card */}
            <div className="flex items-center justify-center w-full md:w-1/2 p-6">
                <div className="w-full h-[600px] max-w-[500px] bg-white shadow-lg rounded-3xl p-12 space-y-8 border ">

                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
                        Welcome Back
                    </h2>

                    {/* Google Sign-in */}
                    <button className="w-full border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-3 rounded-xl flex items-center justify-center gap-3 transition">
                        <img
                            src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
                            alt="Google"
                            className="w-6 h-6"
                        />
                        Sign in with Google
                    </button>

                    <div className="flex items-center gap-3">
                        <div className="h-px bg-gray-300 w-full"></div>
                        <span className="text-gray-500 text-sm">OR</span>
                        <div className="h-px bg-gray-300 w-full"></div>
                    </div>


                    <form onSubmit={logindashboard}>
                        <div className="space-y-5">
                            <div>
                                <label className="block mb-1 font-semibold text-gray-700">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={loginform.email}
                                    onChange={handleloginform}
                                    className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 font-semibold text-gray-700">Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    name="password"
                                    value={loginform.password}
                                    onChange={handleloginform}
                                    className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-2xl shadow-md transition" onClick={logindashboard}>
                            Login
                        </button>
                    </form>

                    <p className="text-center text-gray-600 text-sm">
                        Don’t have an account?{" "}
                        <span className="text-blue-600 cursor-pointer font-semibold">Sign Up</span>
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Login;
