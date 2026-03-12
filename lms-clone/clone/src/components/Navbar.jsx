import React, { useState} from "react";
import {Menu,X,ChevronDown, Settings} from "lucide-react";
import { getInitials } from "../utils/getInitials";

export default function Navbar(){
     const [open, setOpen] = useState(false);

     const data = localStorage.getItem("user");
     const user = data ? JSON.parse(data) : null;

     const initials = getInitials(user?.name);

    return(
        <header className="fixed top-0 inset-x-0 z-50 border-b border-neutral-800 bg-neutral-900/80 backdrop-blur supports-backdrop-fillter:bg-neutral-900/60">
            {/*TOP BAR */}
            <div classname="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
                {/* LEFT */}
                <div className="flex items-center gap-3">
                    {/* LOGO */}
                    <div classname="w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                        {initials}
                    </div>

                    <span classname="text-white font-semibold">Students</span>

                    {/* DESKTOP MENU*/}
                    <nav classname="hidden md:flex items-center gap-1 ml-2">
                        <div classname="px-3 py-2 rounded-md text-sm font-medium bg-neutral-800 text-white">
                            Dashboard
                        </div>

                        <div classname="px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800 rounded">
                            Attendance
                        </div>

                        <div classname="px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800 rounded">
                            Calender
                        </div>


        </header>
    )









}