import { useState, useEffect } from 'react'

const Features = () => {
    return (
        <section className="py-stack-lg bg-surface" id="features">
            <div className="max-w-container-max mx-auto px-margin-desktop">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-headline-lg text-headline-lg text-primary">Everything you need to excel</h2>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                        Powerful AI-driven tools designed specifically for the unique demands of the South African high school curriculum.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
                    <div className="md:col-span-8 bg-surface-container-low rounded-3xl p-10 flex flex-col justify-between overflow-hidden relative border border-outline-variant/30 group hover:border-primary/30 transition-all">
                        <div className="relative z-10 max-w-md">
                            <span className="material-symbols-outlined text-primary text-4xl mb-4">smart_toy</span>
                            <h3 className="font-headline-lg text-headline-lg text-primary mb-4">Personalized AI Tutoring</h3>
                            <p className="font-body-md text-body-md text-on-surface-variant">
                                Ask any question from Mathematics to Life Sciences. Our AI understands CAPS/IEB context and guides you through complex problems step-by-step, never just giving the answer.
                            </p>
                        </div>
                        <div className="mt-12 relative z-10">
                            <button className="text-primary font-bold inline-flex items-center gap-2 group">
                                Learn more <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                        <div className="absolute right-0 bottom-0 w-1/2 translate-y-8 translate-x-8 opacity-40 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500">
                            <img
                                className="w-full h-auto rounded-tl-2xl shadow-2xl"
                                alt="AI chat window interface"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD69JiYUl3ijJNlz5jbT1dMG8wjgZB1424NNEnVhzColdiXAKa6CWMPTf6rT5mICUGCD3mJjOEeW86kabbbZ7_47qEdChgXXGIHC4EEFT588KyiUoAPci8qBZPq_8JQPBuNerL1Q_ccFP79OvyhFyFbjtoKOgUeq3hBdwurLiYdn8PJOWy_sOw7TcbdIkAgiKMNcBKaiZ_UGHnCC45Ly8mKOf_rLsTifwPd0KaERwfStuXb0quMo5VkVhTXq6GLHrtg-okYqeDrGyE"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-4 bg-white rounded-3xl p-10 border border-outline-variant/30 soft-card-shadow flex flex-col group hover:bg-surface-container-low transition-all">
                        <span className="material-symbols-outlined text-primary text-4xl mb-4">quiz</span>
                        <h3 className="font-title-md text-title-md text-primary mb-4">Master Every Exam</h3>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                            Access a massive library of past IEB and CAPS papers with AI-generated marking guidelines.
                        </p>
                        <div className="mt-auto overflow-hidden rounded-xl bg-surface-variant h-48 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary text-6xl opacity-20 group-hover:scale-125 transition-transform">description</span>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-4 bg-white rounded-3xl p-10 border border-outline-variant/30 soft-card-shadow flex flex-col group">
                        <span className="material-symbols-outlined text-secondary text-4xl mb-4">analytics</span>
                        <h3 className="font-title-md text-title-md text-primary mb-4">Data-Driven Growth</h3>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                            See exactly where you stand. Our analytics pinpoint your knowledge gaps before the exams hit.
                        </p>
                        <div className="mt-auto space-y-4">
                            <div className="h-3 w-full bg-surface-container-high rounded-full overflow-hidden">
                                <div className="h-full bg-secondary-fixed-dim w-3/4 rounded-full relative">
                                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                </div>
                            </div>
                            <div className="flex justify-between text-caption font-caption text-on-surface-variant">
                                <span>Mathematics Grade 12</span>
                                <span>75% Complete</span>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-8 bg-surface-container-highest/30 rounded-3xl p-10 flex flex-col md:flex-row gap-stack-md items-center border border-outline-variant/30 group hover:shadow-lg transition-all">
                        <div className="flex-1 space-y-4">
                            <span className="material-symbols-outlined text-primary text-4xl">style</span>
                            <h3 className="font-headline-lg text-headline-lg text-primary">Smart Flashcards</h3>
                            <p className="font-body-md text-body-md text-on-surface-variant">
                                Upload your notes and our AI automatically generates spaced-repetition flashcards. Optimized for memorizing complex terminology in Biology and History.
                            </p>
                            <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md mt-4">Try Flashcards</button>
                        </div>
                        <div className="flex-1 w-full flex justify-center">
                            <div className="w-64 h-40 bg-white rounded-2xl soft-card-shadow border-2 border-primary/10 flex items-center justify-center p-6 text-center transform -rotate-3 group-hover:rotate-0 transition-transform">
                                <p className="font-title-md text-primary">What is Mitosis?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Features;