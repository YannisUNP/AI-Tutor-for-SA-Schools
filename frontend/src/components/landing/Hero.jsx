import { useState, useEffect } from 'react';

function Hero() {
    return(<section className="hero-gradient pt-20 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
            <div className="flex flex-col space-y-stack-md">
                <div className="inline-flex items-center bg-surface-container px-4 py-1.5 rounded-full w-fit">
                    <span className="text-primary font-label-md text-label-md">New: IEB Past Papers 2025</span>
                </div>
                <h2 className="font-display-lg text-display-lg text-primary leading-tight">
                    Learn Smarter.<br />Grow Faster.
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                    The ultimate AI study companion tailored for South African students. Master CAPS and IEB curriculums with personalized tutoring that adapts to your pace.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-lg shadow-lg hover:shadow-xl transition-all active:scale-95">
                        Start Learning for Free
                    </button>
                    {/* <button className="flex items-center justify-center gap-2 border-2 border-outline-variant text-primary px-8 py-4 rounded-xl font-label-md text-lg hover:bg-surface-container transition-all">
                        <span className="material-symbols-outlined">play_circle</span>
                        See how it works
                    </button> */}
                </div>
            </div>
            <div className="relative">
                <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="relative floating">
                    <img
                        className="w-full h-auto rounded-3xl object-contain"
                        alt="A premium 3D illustration of a high school student sitting at a modern desk, interacting with a friendly holographic AI assistant robot."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm4p7_eblfEXhE5lKTHVPnY8hEFep26Gb4oEf-_-ZGYPSxAtKTSEatoz0mZU6wZafNQpxVJGTal3UeU68CRfqYqmdMStFeLaME0Quh-02FLUkseDOXMybnisqtGOEz-i0H3buY0lKDWjEIQqjNeJwZiiuv3wD1b45fVVFhI_SOSpCTq1tiasGLosQByr6DU0NnPILaArG8z3zenu3hdYVmPpPIGgUH7ttikDovc0G59zVgZycAWCBoGI4BIfoLvK4mTGYIaq2T8xY"
                    />
                </div>
                <div className="absolute bottom-10 -left-4 bg-white p-4 rounded-2xl soft-card-shadow flex items-center gap-4 animate-bounce-slow">
                    <div className="bg-secondary-container p-3 rounded-xl">
                        <span className="material-symbols-outlined text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                    </div>
                    <div>
                        <p className="text-label-md font-label-md text-on-surface">Avg. Grade Boost</p>
                        <p className="text-headline-lg font-bold text-secondary">+18% Success Rate</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
    
};
export default Hero;