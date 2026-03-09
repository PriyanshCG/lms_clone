import React, { useState } from "react";

const Login = () => {
    const [role, setRole] = useState("Student");

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 font-sans">
            <div className="bg-[#0a0a0a] border border-zinc-800 p-8 sm:p-10 rounded-2xl w-full max-w-[440px]">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-semibold mb-2">Welcome Back</h2>
                    <p className="text-zinc-400 text-sm">Sign in to your account</p>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-3 text-zinc-200">Role</label>
                        <div className="flex gap-3">
                            {["Student", "Mentor", "Admin"].map((r) => (
                                <button
                                    key={r}
                                    type="button"
                                    onClick={() => setRole(r)}
                                    className={`px-4 py-2 rounded-lg text-sm transition-colors border ${role === r
                                            ? "bg-white text-black border-white font-medium"
                                            : "bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-zinc-200"
                                        }`}
                                >
                                    {r}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-zinc-200">University UID</label>
                        <input
                            type="text"
                            placeholder="Enter your University UID"
                            className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-zinc-500 transition-colors text-white placeholder:text-zinc-600"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-zinc-200">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-zinc-500 transition-colors text-white placeholder:text-zinc-600"
                        />
                    </div>

                    <button
                        type="button"
                        className="w-full bg-white text-black font-semibold rounded-xl px-4 py-3.5 mt-2 hover:bg-zinc-200 transition-colors"
                    >
                        Sign in
                    </button>
                </form>

                <p className="text-center text-zinc-500 text-xs mt-8">
                    Use your role-based credentials. Contact admin if you need help.
                </p>
            </div>
        </div>
    );
};

export default Login;
