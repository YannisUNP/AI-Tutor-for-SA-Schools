import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import hook
import SidebarItem from "./SidebarItem";

function SidebarNavigation() {
    const [isHovered, setIsHovered] = useState(false);
    const location = useLocation();

    // Check if we are on the dashboard
    const isDashboard = location.pathname === "/dashboard";

    useEffect(() => {
        // Only add the mouse listener if we are NOT on the dashboard
        if (isDashboard) return;

        const handleMouseMove = (e) => {
            if (e.clientX <= 20) {
                setIsHovered(true);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [isDashboard]);

    // Determine sidebar classes based on route
    const sidebarClasses = isDashboard
        ? "translate-x-0" // Always visible on dashboard
        : isHovered
            ? "translate-x-0 shadow-2xl" // Reveal on hover
            : "-translate-x-full";      // Hidden by default

    return (
        <>
            {/* Hover trigger zone (only active when NOT on dashboard) */}
            {!isDashboard && <div className="fixed inset-y-0 left-0 w-5 z-40" />}

            <aside
                onMouseLeave={() => !isDashboard && setIsHovered(false)}
                className={`h-screen bg-surface-container-lowest border-r border-outline-variant/30 p-4 space-y-stack-sm transition-all duration-300 ease-in-out flex-shrink-0 z-50 ${isDashboard || isHovered ? "w-64 opacity-100" : "w-0 opacity-0 overflow-hidden"
                    }`}
            >
                <div className="mb-8 px-2">
                    <h1 className="font-headline-lg text-headline-lg font-black text-primary">StudyMate</h1>
                    <p className="font-label-md text-label-md text-on-surface-variant opacity-70">CAPS/IEB Excellence</p>
                </div>
                <nav className="flex-1 space-y-1 overflow-y-auto custom-scrollbar">
                    <SidebarItem icon="dashboard" label="Dashboard" isActive={isDashboard} path="/dashboard" />
                    <SidebarItem icon="menu_book" label="Subjects" />
                    <SidebarItem icon="smart_toy" label="AI Tutor" path="/tutor" />
                    <SidebarItem icon="quiz" label="Quizzes" />
                    <SidebarItem icon="style" label="Flashcards" />
                    <SidebarItem icon="calendar_month" label="Planner" />
                    <SidebarItem icon="analytics" label="Progress" />
                    <SidebarItem icon="settings" label="Settings" />
                </nav>
            </aside>
        </>
    );
}

export default SidebarNavigation;