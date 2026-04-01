import React from "react";
import { Link } from "react-router-dom";

export default function ProfileCard({ user }) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900 lg:col-span-1">
      {/* HEADER */}
      <Link to="/profile" className="block p-4 border-b border-neutral-800 hover:bg-neutral-800/50 transition-colors">
        <div className="flex items-center gap-3">
          <img
            src={user?.image || "https://avatars.githubusercontent.com/u/226024353?s=400&u=bfbea7413ba384bd76f8f8b144ddbdb864a9867c&v=4"}
            alt={user.name}
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>
            <div className="flex items-center flex-wrap gap-2">
              <div className="text-white font-semibold">{user.name}</div>
            </div>

            <div className="text-neutral-400 text-xs">{user.email}</div>
          </div>
        </div>
      </Link>

      {/* BODY */}
      <div className="p-4">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-neutral-400">Mobile</span>

            <span className="text-neutral-200">{user.mobile}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-neutral-400">DOB</span>

            <span className="text-neutral-200">{user.dob || "N/A"}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-neutral-400">University</span>

            <span className="text-neutral-200">{user.university}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
