import React from "react";
import Navbar from "../components/Navbar";

export default function Profile() {
    const data = localStorage.getItem("user");
    const user = data ? JSON.parse(data) : null;

    if (!user) return <div className="text-white min-h-screen pt-20 flex justify-center">No user</div>;

    return (
        <div className="min-h-screen pt-20 bg-neutral-950 text-white font-sans">
            <Navbar />

            <div className="mx-auto pb-10 max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">Profile</h1>
                        <p className="text-sm text-neutral-400 mt-1">View and update your personal information</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-sm font-medium rounded-md transition-colors text-white">
                            Reset Password
                        </button>
                        <button className="px-5 py-2 bg-neutral-800 hover:bg-neutral-700 text-sm font-medium rounded-md transition-colors text-neutral-300 border border-neutral-700">
                            Edit
                        </button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-4">
                    {/* Left Panel - Profile Summary */}
                    <div className="w-full lg:w-[360px] shrink-0">
                        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 flex flex-col items-center text-center h-full">
                            <div className="w-[120px] h-[120px] rounded-full overflow-hidden mb-6 bg-neutral-800 border-2 border-neutral-800">
                                {user.image ? (
                                    <img src={user.image} alt="Profile" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="text-3xl font-bold text-white w-full h-full flex items-center justify-center">
                                        {user.name.charAt(0)}
                                    </div>
                                )}
                            </div>

                            <h2 className="text-base font-semibold uppercase tracking-wide">{user.name}</h2>
                            <p className="text-[13px] text-neutral-400 mt-1.5">Student</p>
                            <p className="text-[13px] text-neutral-500 mt-0.5">{user.university} • {user.uid}</p>

                            <div className="flex items-center justify-center gap-3 mt-8 w-full">
                                <button className="flex-1 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-[13px] font-medium rounded transition-colors text-white border border-neutral-700">
                                    Edit Profile
                                </button>
                                <button className="flex-1 py-1.5 bg-blue-600 hover:bg-blue-700 text-[13px] font-medium rounded transition-colors text-white">
                                    Reset Password
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel - Details Grid */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <DetailCard label="ENROLLMENT NUMBER" value="SUK250054ce069" />
                        <DetailCard label="COURSE" value="BE" />

                        <DetailCard label="BRANCH" value="B.Tech CSE" />
                        <DetailCard label="SEMESTER" value="2nd" />

                        <DetailCard label="GENDER" value="Male" />
                        <DetailCard label="ALTERNATE EMAIL" value={user.email} isLink />

                        <DetailCard label="ALTERNATE PHONE" value="8849284972" />
                        <DetailCard label="GUARDIAN" value="KOI NATHI " />
                    </div>
                </div>

                {/* Contact & Links Section */}
                <div className="bg-transparent border border-neutral-800 rounded-xl p-6 mt-4">
                    <h3 className="text-[15px] font-semibold mb-6">Contact & Links</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <DetailCard label="MOBILE" value={user.mobile || "6382714951"} />
                        <DetailCard label="PARENT MOBILE" value="9825415574" />

                        <DetailCard label="UNIVERSITY EMAIL" value={user.email || "priyansh30407@gmail.com"} isLink />
                        <DetailCard label="CURRENT EMAIL" value={user.email || "priyansh30407@gmail.com"} isLink />

                        <DetailCard label="ADDRESS" value="C-201 Popular Paradise , Nr Vishwas City 5, Gota , Ahmedabad" />
                        <DetailCard label="PORTFOLIO" value="https://priyansh-new-portfolio.netlify.app/" isLink />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                        <DetailCard label="RESUME" value="—" />
                        <DetailCard label="GITHUB" value="https://github.com/PriyanshCG" isLink />
                    </div>
                </div>

            </div>
        </div>
    );
}

function DetailCard({ label, value, isLink }) {
    const isDash = value === "—" || !value;
    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex flex-col justify-center min-h-[85px]">
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-2">
                {label}
            </div>
            <div className={`text-[13px] font-normal tracking-wide ${isDash ? 'text-neutral-600' : isLink ? 'text-blue-500 hover:text-blue-400 cursor-pointer' : 'text-neutral-200'}`}>
                {isDash ? "—" : value}
            </div>
        </div>
    );
}