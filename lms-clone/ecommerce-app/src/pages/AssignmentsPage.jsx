import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AssignmentsPage() {
    return (
        <div className="min-h-screen pt-20 bg-neutral-950 text-white">
            <Navbar />

            <div className="mx-auto pb-10 max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
                {/* HEADER SECTION */}
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h1 className="text-2xl font-bold mb-1">Assignments</h1>
                        <p className="text-neutral-400 text-sm">
                            Search, filter and sort your assignments.
                        </p>
                    </div>
                    <Link
                        to="/student"
                        className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                        &larr; Back to Dashboard
                    </Link>
                </div>

                {/* FILTER BAR SECTION */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 flex flex-wrap gap-4 mb-6 items-center">
                    <input
                        type="text"
                        placeholder="Search by heading"
                        className="flex-1 min-w-[200px] bg-[#111111] border border-neutral-800 rounded-lg px-4 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
                    />
                    <div className="relative">
                        <select className="bg-[#111111] border border-neutral-800 rounded-lg pl-4 pr-8 py-2 text-sm text-white focus:outline-none focus:border-neutral-600 w-32 appearance-none">
                            <option>All</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-400">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                    <div className="relative">
                        <select className="bg-[#111111] border border-neutral-800 rounded-lg pl-4 pr-8 py-2 text-sm text-white focus:outline-none focus:border-neutral-600 w-44 appearance-none">
                            <option>Sort by deadline</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-400">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                    <div className="relative">
                        <select className="bg-[#111111] border border-neutral-800 rounded-lg pl-4 pr-8 py-2 text-sm text-white focus:outline-none focus:border-neutral-600 w-24 appearance-none">
                            <option>Asc</option>
                            <option>Desc</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-400">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>

                {/* RESULTS CARD SECTION */}
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
                    <div className="p-4 border-b border-neutral-800 font-semibold text-white">
                        All Assignments
                    </div>
                    <div className="p-6 text-sm text-neutral-400">
                        No assignments found.
                    </div>
                </div>
            </div>
        </div>
    );
}
