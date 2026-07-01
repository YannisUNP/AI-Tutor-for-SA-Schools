import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarItem from '../components/dashboard/SidebarItem';
import ProgressCard from '../components/dashboard/ProgressCard';
import QuickAction from '../components/dashboard/QuickAction';
import TaskItem from '../components/dashboard/TaskItem';
import Footer from '../components/landing/Footer';
import React from 'react'
function Dashboard() {
    const { useState, useEffect } = React;

    // const SidebarItem = ({ icon, label, isActive = false }) => (
    //     <a
    //         className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group ${isActive
    //                 ? 'bg-primary-container text-on-primary-container font-bold'
    //                 : 'text-on-surface-variant hover:bg-surface-container-high'
    //             }`}
    //         href="#"
    //     >
    //         <span className="material-symbols-outlined">{icon}</span>
    //         <span className="font-label-md text-label-md">{label}</span>
    //     </a>
    // );

    // const TaskItem = ({ label, subject, isCompleted }) => (
    //     <div className="flex items-center gap-4 group cursor-pointer">
    //         <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${isCompleted
    //                 ? 'border-secondary text-secondary'
    //                 : 'border-outline-variant text-transparent hover:border-primary'
    //             }`}>
    //             <span className="material-symbols-outlined text-[16px] font-bold">check</span>
    //         </div>
    //         <span className={`font-body-md text-body-md ${isCompleted ? 'text-on-surface-variant line-through opacity-60' : 'text-on-surface'}`}>
    //             {label}
    //         </span>
    //         <span className="ml-auto text-caption font-caption bg-surface-variant px-2 py-0.5 rounded">{subject}</span>
    //     </div>
    // );

    // const QuickAction = ({ icon, title, subtitle, variant = 'secondary' }) => (
    //     <button className={`p-6 rounded-xl border border-outline-variant/30 flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:shadow-lg active:scale-95 group ${variant === 'primary'
    //             ? 'bg-primary text-on-primary'
    //             : 'bg-surface-container-high'
    //         }`}>
    //         <span className={`material-symbols-outlined text-4xl mb-3 group-hover:scale-110 transition-transform ${variant === 'primary' ? 'text-on-primary' : 'text-primary'}`}>
    //             {icon}
    //         </span>
    //         <span className={`font-label-md text-label-md font-bold ${variant === 'primary' ? '' : 'text-primary'}`}>{title}</span>
    //         <p className={`text-caption mt-1 ${variant === 'primary' ? 'opacity-80' : 'text-on-surface-variant'}`}>{subtitle}</p>
    //     </button>
    // );

    // const ProgressCard = ({ percentage, subject, level }) => (
    //     <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/20 shadow-sm flex flex-col items-center transition-all hover:-translate-y-1 hover:shadow-lg">
    //         <div className="relative w-24 h-24 flex items-center justify-center mb-4">
    //             <div
    //                 className="w-full h-full rounded-full absolute"
    //                 style={{
    //                     background: `conic-gradient(#006c49 ${percentage}%, #e5eeff 0)`
    //                 }}
    //             ></div>
    //             <div className="w-20 h-20 bg-surface-container-lowest rounded-full absolute flex items-center justify-center">
    //                 <span className="font-headline-lg text-headline-lg font-black text-secondary">{percentage}%</span>
    //             </div>
    //         </div>
    //         <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">{subject}</span>
    //         <p className="text-caption text-on-surface-variant mt-1">{level}</p>
    //         <button className="mt-4 text-primary font-bold text-caption flex items-center gap-1 hover:underline">
    //             View Details <span className="material-symbols-outlined text-[14px]">chevron_right</span>
    //         </button>
    //     </div>
    // );

    return (
        <div className="flex w-full h-full overflow-hidden">
            {/* Sidebar Navigation */}
            <aside className="hidden md:flex flex-col h-screen w-64 flex-shrink-0 bg-surface-container-lowest border-r border-outline-variant/30 p-4 space-y-stack-sm z-50">
                <div className="mb-8 px-2">
                    <h1 className="font-headline-lg text-headline-lg font-black text-primary">StudyMate</h1>
                    <p className="font-label-md text-label-md text-on-surface-variant opacity-70">CAPS/IEB Excellence</p>
                </div>
                <nav className="flex-1 space-y-1 overflow-y-auto custom-scrollbar">
                    <SidebarItem icon="dashboard" label="Dashboard" isActive />
                    <SidebarItem icon="menu_book" label="Subjects" />
                    <SidebarItem icon="smart_toy" label="AI Tutor" />
                    <SidebarItem icon="quiz" label="Quizzes" />
                    <SidebarItem icon="style" label="Flashcards" />
                    <SidebarItem icon="calendar_month" label="Planner" />
                    <SidebarItem icon="analytics" label="Progress" />
                    <SidebarItem icon="settings" label="Settings" />
                </nav>
            </aside>

            {/* Main Content Canvas */}
            <main className="flex-1 h-screen overflow-y-auto custom-scrollbar bg-background">
                {/* Top App Bar */}
                <header className="sticky top-0 z-40 glass-header border-b border-outline-variant/10 px-margin-mobile md:px-margin-desktop py-4 flex justify-between items-center">
                    <div className="flex-1">
                        <div className="flex items-center gap-4">
                            <button className="md:hidden p-2 text-on-surface">
                                <span className="material-symbols-outlined">menu</span>
                            </button>
                            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary">Good morning, Thabo! 🇿🇦</h2>
                        </div>
                        <p className="hidden sm:block font-body-md text-body-md text-on-surface-variant italic mt-1">
                            "The beautiful thing about learning is that no one can take it away from you."
                        </p>
                    </div>
                    <div className="flex items-center gap-gutter">
                        <div className="hidden lg:flex items-center bg-surface-container px-4 py-2 rounded-full border border-outline-variant/20">
                            <span className="material-symbols-outlined text-primary mr-2">search</span>
                            <input className="bg-transparent border-none focus:ring-0 text-label-md w-48" placeholder="Search topics..." type="text" />
                        </div>
                        <button className="relative p-2 text-on-surface-variant hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
                        </button>
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
                            <img
                                className="w-full h-full object-cover"
                                alt="Professional headshot of a teenage male student"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxH9_W8yZjKXZmFnQdDzpQ7pKjKkFAJRPRulC23YDKm8SWFQGcB_H7GraB5qv_mvKwlJ752vEjdX-GSQ_STO_KuMdZ5G4SP-Y7f_VB2QANXY9GvHUYgyXly_WuZgXSH3wE-apsGEMKht8zlb8ImawSsRhorFtQ14uLLlqu-W0zpz23gPc5Ae-2n4HNowsddlWVMUZoRpvW85EOLazoT8zqt53tmriKslqN2mhMkMtOxTOtZgaAwbIXFdXxHzFTAZhNvqVcG3NaSO0"
                            />
                        </div>
                    </div>
                </header>

                {/* Dashboard Layout Grid */}
                <div className="p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-stack-lg">

                    {/* Left & Middle: Main Learning Area */}
                    <div className="lg:col-span-8 space-y-stack-lg">
                        {/* Today's Study Plan */}
                        <section>
                            <div className="flex items-center justify-between mb-stack-sm">
                                <h3 className="font-title-md text-title-md text-primary flex items-center gap-2">
                                    <span className="material-symbols-outlined">task_alt</span>
                                    Today's Study Plan
                                </h3>
                                <span className="text-caption font-caption text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">3 of 5 Complete</span>
                            </div>
                            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/30 space-y-4">
                                <TaskItem label="Review Newton's Second Law of Motion" subject="Physics" isCompleted={true} />
                                <TaskItem label="Complete Calculus Exercise 4.2" subject="Maths" isCompleted={true} />
                                <TaskItem label="Watch AI Summary: Accounting Ledger Entry" subject="Accounting" isCompleted={true} />
                                <TaskItem label="Practice Past Paper: Trigonometry (Section A)" subject="Maths" isCompleted={false} />
                                <TaskItem label="Generate Flashcards for History Chapter 8" subject="History" isCompleted={false} />
                            </div>
                        </section>

                        {/* Quick Actions */}
                        <section>
                            <h3 className="font-title-md text-title-md text-primary mb-stack-sm flex items-center gap-2">
                                <span className="material-symbols-outlined">bolt</span>
                                Quick Actions
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter">
                                <QuickAction icon="play_circle" title="Continue Learning" subtitle="Trigonometric Functions" variant="primary" />
                                <QuickAction icon="psychology" title="Ask AI Tutor" subtitle="Instant homework help" />
                                <QuickAction icon="auto_awesome" title="Generate Quiz" subtitle="Based on your weaknesses" />
                            </div>
                        </section>

                        {/* Subject Progress */}
                        <section>
                            <h3 className="font-title-md text-title-md text-primary mb-stack-sm flex items-center gap-2">
                                <span className="material-symbols-outlined">library_books</span>
                                Subject Mastery
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                                <ProgressCard percentage={82} subject="Mathematics" level="Grade 12 CAPS" />
                                <ProgressCard percentage={68} subject="Physical Sciences" level="Grade 12 CAPS" />
                                <ProgressCard percentage={91} subject="Accounting" level="Grade 12 CAPS" />
                            </div>
                        </section>
                    </div>

                    {/* Right Sidebar: Stats & Activity */}
                    <div className="lg:col-span-4 space-y-stack-lg">
                        {/* Weekly Streak */}
                        <section className="bg-primary-container p-6 rounded-2xl shadow-md text-on-primary-container relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="font-title-md text-title-md font-bold">Study Streak</h4>
                                    <span className="material-symbols-outlined text-tertiary-fixed-dim fill-1">local_fire_department</span>
                                </div>
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-[48px] font-black leading-none">12</p>
                                        <p className="font-label-md text-label-md opacity-80">Days in a row</p>
                                    </div>
                                    <div className="flex gap-1">
                                        <div className="w-2 h-8 bg-on-primary-container rounded-full"></div>
                                        <div className="w-2 h-12 bg-on-primary-container rounded-full"></div>
                                        <div className="w-2 h-6 bg-on-primary-container rounded-full"></div>
                                        <div className="w-2 h-14 bg-on-primary-container rounded-full"></div>
                                        <div className="w-2 h-10 bg-secondary-fixed rounded-full shadow-[0_0_10px_rgba(111,251,190,0.5)]"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                        </section>

                        {/* Upcoming Assessments */}
                        <section>
                            <h3 className="font-label-md text-label-md text-on-surface-variant mb-stack-sm flex items-center gap-2">
                                <span className="material-symbols-outlined">event</span>
                                UPCOMING ASSESSMENTS
                            </h3>
                            <div className="space-y-3">
                                <div className="p-4 bg-surface-container-lowest rounded-xl border-l-4 border-error shadow-sm">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h5 className="font-label-md text-label-md font-bold text-on-surface">Maths Preliminary Exam</h5>
                                            <p className="text-caption text-on-surface-variant">Paper 1: Algebra & Calculus</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-label-md font-black text-error">4 Days</p>
                                            <p className="text-[10px] uppercase font-bold text-on-surface-variant">Until</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bg-surface-container-lowest rounded-xl border-l-4 border-primary shadow-sm">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h5 className="font-label-md text-label-md font-bold text-on-surface">Accounting Test</h5>
                                            <p className="text-caption text-on-surface-variant">Companies & Cost Accounting</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-label-md font-black text-primary">9 Days</p>
                                            <p className="text-[10px] uppercase font-bold text-on-surface-variant">Until</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Weekly Activity */}
                        <section className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/30">
                            <h3 className="font-label-md text-label-md text-on-surface-variant mb-6 uppercase tracking-wider">Weekly Activity (Hours)</h3>
                            <div className="h-32 flex items-end justify-between px-2">
                                <div className="w-6 bg-surface-dim rounded-t-sm" style={{ height: '40%' }}></div>
                                <div className="w-6 bg-surface-dim rounded-t-sm" style={{ height: '60%' }}></div>
                                <div className="w-6 bg-surface-dim rounded-t-sm" style={{ height: '35%' }}></div>
                                <div className="w-6 bg-primary rounded-t-sm" style={{ height: '90%' }}></div>
                                <div className="w-6 bg-surface-dim rounded-t-sm" style={{ height: '55%' }}></div>
                                <div className="w-6 bg-surface-dim rounded-t-sm" style={{ height: '70%' }}></div>
                                <div className="w-6 bg-surface-dim rounded-t-sm" style={{ height: '20%' }}></div>
                            </div>
                            <div className="flex justify-between mt-2 text-[10px] font-bold text-on-surface-variant/50 uppercase px-1">
                                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                            </div>
                            <div className="mt-6 pt-6 border-t border-outline-variant/30 flex items-center justify-between">
                                <div>
                                    <p className="text-[20px] font-bold text-primary">18.5</p>
                                    <p className="text-caption text-on-surface-variant">Total Hours</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-caption font-bold text-secondary flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[16px]">trending_up</span> +12%
                                    </p>
                                    <p className="text-caption text-on-surface-variant">vs last week</p>
                                </div>
                            </div>
                        </section>

                        {/* AI Tips Card */}
                        <div className="bg-surface-variant p-5 rounded-xl border border-primary/10">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="material-symbols-outlined text-primary fill-1">lightbulb</span>
                                <h5 className="font-label-md text-label-md font-bold text-primary">Tutor Tip</h5>
                            </div>
                            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                Thabo, you perform 20% better in Maths when you study before 9:00 AM. Try to tackle your Trigonometry past paper first thing tomorrow!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </main>

            {/* Floating Action Button */}
            <button className="fixed bottom-20 md:bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
                <span className="material-symbols-outlined text-2xl">chat</span>
            </button>

            {/* Mobile Navigation Bar */}
            <div className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-outline-variant/30 flex justify-around items-center py-3 z-50">
                <button className="flex flex-col items-center gap-1 text-primary">
                    <span className="material-symbols-outlined">dashboard</span>
                    <span className="text-[10px] font-bold">Home</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-on-surface-variant">
                    <span className="material-symbols-outlined">menu_book</span>
                    <span className="text-[10px] font-medium">Subjects</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-on-surface-variant">
                    <span className="material-symbols-outlined">quiz</span>
                    <span className="text-[10px] font-medium">Quizzes</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-on-surface-variant">
                    <span className="material-symbols-outlined">person</span>
                    <span className="text-[10px] font-medium">Profile</span>
                </button>
            </div>
        </div>
    );
}
export default Dashboard;