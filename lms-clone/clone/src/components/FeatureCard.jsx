import React from "react";

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:bg-zinc-800/50 transition duration-300">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-zinc-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
