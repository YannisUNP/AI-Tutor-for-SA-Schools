import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import AITipsCard from '../components/dashboard/AITipsCard';
import Assessments from '../components/dashboard/Assessments';
import ChatButton from '../components/dashboard/ChatButton';
import MobileNavigationBar from '../components/dashboard/MobileNavigationBar';
import ProgressCard from '../components/dashboard/ProgressCard';
import QuickActions from '../components/dashboard/QuickActions';
import SidebarNavigation from '../components/dashboard/SidebarNavigation';
import Streak from '../components/dashboard/Streak';
import StudyPlan from '../components/dashboard/StudyPlan';
import SubjectMastery from '../components/dashboard/SubjectMastery';
import TopAppBar from '../components/dashboard/TopAppBar';
import WeeklyActivity from '../components/dashboard/WeeklyActivity';
import Footer from '../components/landing/Footer';
function Dashboard() {
    const { useState, useEffect } = React;
    return (
        <div className="flex w-full h-full overflow-hidden">
            <SidebarNavigation />

            {/* Main Content Canvas */}
            <main className="flex-1 h-screen overflow-y-auto custom-scrollbar bg-background">
                <TopAppBar />
                
                {/* Dashboard Layout Grid */}
                <div className="p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-stack-lg">
                    {/* Left & Middle: Main Learning Area */}
                    <div className="lg:col-span-8 space-y-stack-lg">
                        <StudyPlan />
                        <QuickActions />
                        <SubjectMastery />
                    </div>

                    {/* Right Sidebar: Stats & Activity */}
                    <div className="lg:col-span-4 space-y-stack-lg">
                        <Streak />
                        <Assessments />
                        <WeeklyActivity />
                        <AITipsCard />
                    </div>
                </div>

                <Footer />
            </main>

            <ChatButton />
            <MobileNavigationBar />
        </div>
    );
}
export default Dashboard;