import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import { loginUser } from '../services/authService';
import { supabase } from '../lib/supabaseClient';

const loginSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Invalid email address format'),
    password: z.string().min(1, 'Password is required'),
});

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [focusedInput, setFocusedInput] = useState(null);
    const [status, setStatus] = useState('idle');
    const [authError, setAuthError] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(loginSchema),
        mode: 'onChange',
    });

    const handleFieldChange = (event) => {
        const { name, value, type, checked } = event.target;
        const nextValue = type === 'checkbox' ? checked : value;

        setFormData((prev) => ({ ...prev, [name]: nextValue }));
        setValue(name, nextValue, { shouldValidate: true, shouldDirty: true });
    };

    const inputWrapperClass = (id) => `relative transition-transform duration-200 ${focusedInput === id ? 'scale-[1.01]' : ''}`;

    const onSubmit = async (data) => {
        setStatus('submitting');
        setAuthError('');

        try {
            setFormData((prev) => ({ ...prev, ...data }));
            const authResult = await loginUser({
                email: data.email,
                password: data.password,
            });

            const { data: sessionData } = await supabase.auth.getSession();
            const userId = sessionData?.session?.user?.id || authResult?.user?.id;
            const onboardingCompleted = userId ? localStorage.getItem(`study_mate_onboarding_${userId}`) === 'true' : false;

            setStatus('success');
            setTimeout(() => navigate(onboardingCompleted ? '/dashboard' : '/onboarding'), 1000);
        } catch (err) {
            const message = err?.message || 'Login failed. Please try again.';
            setAuthError(message);
            console.error('Login failed:', message);
            setStatus('idle');
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow flex items-center justify-center pt-2 pb-2 px-margin-mobile">
                <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-surface-container-lowest rounded-3xl overflow-hidden form-shadow min-h-[500px]">
                    <div className="relative hidden lg:flex flex-col justify-center items-center p-stack-lg overflow-hidden">
                        <div className="absolute inset-0 bg-primary opacity-5"></div>
                        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10 w-full max-w-md space-y-8 text-center">
                            <div className="rounded-3xl overflow-hidden aspect-square shadow-2xl transform transition-transform hover:scale-[1.02] duration-500 bg-surface-variant">
                                <img
                                    className="w-full h-full object-cover"
                                    alt="High school student studying with AI interface"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvxKEAMkLMlkC8XTLK5nfttv3afsez5q12ta8uhEICgGLbJeIHORRnVal8I9kI5ZOeg1r3MUDFpNNv_P312yIyxnqXvMWc-JYYs4Wpq6jZXae1HRk-YjjpvvQCmb4yCPxmZgaz1fsmsw8xgzzVlSPRh6S54qxFstetFnNKh8v59mnuTKM1BaTr_QwB3mfGTrC3R-Nsdy11i9pKjXbpmLegfKZ9ivnY70hFTRkyOOqff_cT_cFT_OdUpQXYU_tMn7pVIoI-o1-Mb40"
                                />
                            </div>
                            <div className="space-y-stack-sm">
                                <h1 className="font-display-lg text-headline-lg text-primary">StudyMate</h1>
                                <p className="font-title-md text-title-md text-on-surface-variant italic">"Learn Smarter. Grow Faster."</p>
                            </div>
                            <div className="flex justify-center gap-4 text-primary opacity-60">
                                <span className="material-symbols-outlined text-4xl">auto_awesome</span>
                                <span className="material-symbols-outlined text-4xl">menu_book</span>
                                <span className="material-symbols-outlined text-4xl">insights</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Login Form */}
                    <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 bg-surface-container-lowest">
                        <div className="w-full max-w-sm mx-auto space-y-4">
                            <div className="space-y-2 text-center lg:text-left">
                                <h2 className="font-display-lg text-headline-lg text-on-background">Welcome Back</h2>
                                <p className="font-body-md text-on-surface-variant">Log in to your academic dashboard</p>
                            </div>

                            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                                <div className="space-y-1">
                                    <label className="font-label-md text-label-md text-on-surface-variant px-1" htmlFor="email">Email Address</label>
                                    <div className={inputWrapperClass('email')}>
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">mail</span>
                                        <input
                                            {...register('email')}
                                            value={formData.email}
                                            onChange={handleFieldChange}
                                            className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none focus:ring-2 focus:ring-primary rounded-2xl font-body-md text-on-surface placeholder:text-outline/60 transition-all"
                                            id="email"
                                            placeholder="student@example.co.za"
                                            type="email"
                                            onFocus={() => setFocusedInput('email')}
                                            onBlur={() => setFocusedInput(null)}
                                        />
                                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <div className="flex justify-between items-center px-1">
                                        <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="password">Password</label>
                                        <a className="font-label-md text-label-md text-primary hover:underline transition-all" href="#">Forgot password?</a>
                                    </div>
                                    <div className={inputWrapperClass('password')}>
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">lock</span>
                                        <input
                                            className="w-full pl-12 pr-12 py-4 bg-surface-container-low border-none focus:ring-2 focus:ring-primary rounded-2xl font-body-md text-on-surface placeholder:text-outline/60 transition-all"
                                            id="password"
                                            placeholder="••••••••"
                                            type={showPassword ? 'text' : 'password'}
                                            onFocus={() => setFocusedInput('password')}
                                            onBlur={() => setFocusedInput(null)}
                                            {...register('password')}
                                            value={formData.password}
                                            onChange={handleFieldChange}
                                        />
                                        <button
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
                                        </button>
                                        {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 px-1">
                                    <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer" id="remember" type="checkbox" checked={formData.rememberMe} onChange={handleFieldChange} />
                                    <label className="font-body-md text-on-surface-variant cursor-pointer" htmlFor="remember">Remember me</label>
                                </div>

                                {authError && <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">{authError}</p>}

                                <button
                                    className={`w-full py-4 bg-primary text-on-primary font-label-md text-body-lg rounded-2xl shadow-lg hover:shadow-primary/20 active:scale-[0.98] transition-all flex justify-center items-center gap-2 group ${status === 'success' ? 'bg-secondary text-white' : 'bg-primary-container text-on-primary-container hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]'} ${status === 'submitting' || isSubmitting ? 'opacity-80' : ''}`}
                                    type="submit"
                                    disabled={status === 'submitting' || isSubmitting}
                                >
                                    {status === 'idle' && 'Login'}
                                    {(status === 'submitting' || isSubmitting) && (
                                        <>
                                            <span className="material-symbols-outlined animate-spin">progress_activity</span>
                                            Logging in...
                                        </>
                                    )}
                                    {status === 'success' && 'Success! Redirecting...'}
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                            </form>

                            <div className="relative flex items-center py-2">
                                <div className="flex-grow border-t border-outline-variant"></div>
                                <span className="flex-shrink mx-4 text-caption font-caption text-outline">OR</span>
                                <div className="flex-grow border-t border-outline-variant"></div>
                            </div>

                            <button className="w-full py-4 bg-surface-container-low border border-outline-variant/30 text-on-surface font-label-md text-body-md rounded-2xl hover:bg-surface-container transition-colors flex justify-center items-center gap-3 active:scale-[0.98]">
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                                </svg>
                                Sign in with Google
                            </button>

                            <div onClick={() => navigate('/register')} className="text-center">
                                <p className="font-body-md text-on-surface-variant">
                                    Don't have an account?
                                    <a onClick={() => navigate('/register')} className="text-primary font-bold hover:underline ml-1 transition-all" href="#">Sign Up</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Login;