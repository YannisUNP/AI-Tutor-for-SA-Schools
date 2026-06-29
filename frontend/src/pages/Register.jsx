import { useState, useEffect } from 'react';
import Header from "../components/landing/Header";
import Footer from "../components/landing/Footer";

function Register() {
    const [status, setStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    }

    const inputWrapperClass = "transition-all duration-200";
    const inputBaseClass = "w-full p-4 rounded-lg bg-white border border-outline-variant font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary transition-all";

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow flex pt-16">
                {/* Left Side: Visual & Brand */}
                <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-primary items-center justify-center p-8 md:p-12">
                    <div className="absolute inset-0 opacity-10"></div>
                    <div className="relative z-10 max-w-lg text-white">
                        <h1 className="font-display-lg text-display-lg mb-3">Unlock Your Potential</h1>
                        <p className="font-body-lg text-body-lg text-primary-fixed opacity-90">
                            Join thousands of South African students mastering their curriculum with personalized AI guidance. Your journey to academic excellence starts here.
                        </p>
                        <div className="mt-10 flex gap-5">
                            <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg flex items-center gap-3">
                                <span className="material-symbols-outlined text-secondary-fixed">verified</span>
                                <span className="font-label-md text-label-md">CAPS & IEB Aligned</span>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg flex items-center gap-3">
                                <span className="material-symbols-outlined text-secondary-fixed">bolt</span>
                                <span className="font-label-md text-label-md">Instant Feedback</span>
                            </div>
                        </div>
                        {/* <div className="mb-6">
                            <img
                                className="w-full h-auto rounded-xl shadow-2xl"
                                alt="A premium 3D illustration of a floating open book with digital holographic nodes emerging from the pages, representing AI-assisted learning. The style is clean, modern, and academic, featuring deep blues and glowing cyan accents against a dark navy background. Professional lighting and soft shadows create a sense of depth and intelligence."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGRGlWZSKRZtN_tL9mga2XvKBKPjB0joC1ObexZPtrfZnbuKcBTTFetywEjyh9LeADub6W0JG6jXEMyBpGSS0YPq3cwdifDKxlG5ZF6MayoclSGhqXXrugmx0feBJqjKSAPAhtNRTLgwrr8LRBWIFDCZDFROKFJ0TzLm3eF7PE6-CYBR7EIwRcigNMkYll0StjlvPg_ty5WqMG8IQLBf87x9u3RGq-6GPY2BnLPWhboHty6k6ya-8b5s0meaGRe9reqRX-CFSTuXo"
                            />
                        </div> */}

                    </div>
                </section>

                {/* Right Side: Registration Form */}
                <section className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-8 bg-surface-bright">
                    <div className="w-full max-w-md space-y-3">
                        <div className="text-center lg:text-left">
                            <h2 className="font-headline-lg text-headline-lg text-on-background mb-1">Create Account</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">Enter your details to start your learning adventure.</p>
                        </div>

                        <button className="w-full py-4 bg-surface-container-low border border-outline-variant/30 text-on-surface font-label-md text-body-md rounded-2xl hover:bg-surface-container transition-colors flex justify-center items-center gap-3 active:scale-[0.98]">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                            </svg>
                            Sign up  with Google
                        </button>

                        <div className="flex items-center gap-4">
                            <div className="h-px bg-outline-variant flex-grow"></div>
                            <span className="font-caption text-caption text-outline">OR</span>
                            <div className="h-px bg-outline-variant flex-grow"></div>
                        </div>

                        <form className="space-y-3" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2 group">
                                    <label className="font-label-md text-label-md text-on-surface" htmlFor="first-name">First Name</label>
                                    <div className="group-focus-within:scale-[1.01] transition-transform duration-200">
                                        <input className={inputBaseClass} id="first-name" placeholder="Bandile" type="text" />
                                    </div>
                                </div>
                                <div className="space-y-2 group">
                                    <label className="font-label-md text-label-md text-on-surface" htmlFor="last-name">Last Name</label>
                                    <div className="group-focus-within:scale-[1.01] transition-transform duration-200">
                                        <input className={inputBaseClass} id="last-name" placeholder="Dlamini" type="text" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <label className="font-label-md text-label-md text-on-surface" htmlFor="email">Email Address</label>
                                <div className="relative group-focus-within:scale-[1.01] transition-transform duration-200">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">mail</span>
                                    <input className={`${inputBaseClass} pl-12`} id="email" placeholder="bandile@example.com" type="email" />
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <label className="font-label-md text-label-md text-on-surface" htmlFor="password">Password</label>
                                <div className="relative group-focus-within:scale-[1.01] transition-transform duration-200">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">lock</span>
                                    <input className={`${inputBaseClass} pl-12`} id="password" placeholder="••••••••" type="password" />
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <label className="font-label-md text-label-md text-on-surface" htmlFor="confirm-password">Confirm Password</label>
                                <div className="relative group-focus-within:scale-[1.01] transition-transform duration-200">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">verified_user</span>
                                    <input className={`${inputBaseClass} pl-12`} id="confirm-password" placeholder="••••••••" type="password" />
                                </div>
                            </div>

                            <div className="flex items-start gap-3 py-1">
                                <input className="mt-1 rounded border-outline-variant text-primary focus:ring-primary h-4 w-4" id="terms" type="checkbox" />
                                <label className="font-caption text-caption text-on-surface-variant leading-relaxed" htmlFor="terms">
                                    I agree to the <a className="text-primary font-semibold hover:underline" href="#">Terms of Service</a> and <a className="text-primary font-semibold hover:underline" href="#">Privacy Policy</a>.
                                </label>
                            </div>

                            <button
                                className={`w-full py-3 rounded-lg font-label-md text-label-md shadow-lg transition-all duration-300 flex items-center justify-center gap-2
                                            ${status === 'success'
                                        ? 'bg-secondary text-white'
                                        : 'bg-primary-container text-on-primary-container hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]'
                                    }
                                            ${status === 'submitting' ? 'opacity-80' : ''}`}
                                type="submit"
                                disabled={status === 'submitting'}
                            >
                                {status === 'idle' && 'Create Account'}
                                {status === 'submitting' && (
                                    <>
                                        <span className="material-symbols-outlined animate-spin">progress_activity</span>
                                        Creating...
                                    </>
                                )}
                                {status === 'success' && 'Success! Redirecting...'}
                            </button>
                        </form>

                        <div className="text-center pt-2">
                            <p className="font-body-md text-body-md text-on-surface-variant">
                                Already have an account?
                                <a className="text-primary font-bold hover:underline ml-1" href="#">Login</a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};
export default Register;