import React from "react";
import FeatureCard from "../components/FeatureCard";

const Landing = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 font-sans">

      {/* Hero Section */}
      <div className="text-center mb-16 max-w-2xl">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-7xl md:text-8xl font-black tracking-tight leading-none">
            Coding
          </h1>
          <h1 className="text-7xl md:text-8xl font-black tracking-tight leading-none text-zinc-400">
            Gita
          </h1>
        </div>

        <p className="text-zinc-400 mt-8 text-lg max-w-md mx-auto">
          Smart, simple, and reliable attendance for modern classrooms.
        </p>

        <button
          onClick={onLogin}
          className="mt-10 bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-zinc-200 transition duration-300"
        >
          Login
        </button>
      </div>

      {/* Feature Section */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
        <FeatureCard
          title="Role-based dashboards"
          description="Admin, Mentor, and Student experiences tailored to their needs."
        />

        <FeatureCard
          title="Fast and secure access"
          description="Encrypted sessions and streamlined navigation."
        />
      </div>

    </div>
  );
};

export default Landing;
