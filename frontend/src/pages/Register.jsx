import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { registerUser } from '../services/authService';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';

const registerSchema = z
    .object({
        firstName: z.string().min(1, 'First name is required'),
        surname: z.string().min(1, 'Last name is required'),
        email: z.string().min(1, 'Email is required').email('Invalid email address format'),
        password: z
            .string()
            .min(8, 'Password must be at least 8 characters')
            .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
            .regex(/[0-9]/, 'Password must contain at least one number'),
        confirmPassword: z.string().min(1, 'Please confirm your password'),
        acceptTerms: z.literal(true, {
            errorMap: () => ({ message: 'You must accept the terms and conditions' }),
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword'],
    });

function Register() {
    const [status, setStatus] = useState('idle');
    const [formData, setFormData] = useState({
        firstName: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
    });
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(registerSchema),
        mode: 'onChange',
    });


    const handleFieldChange = (event) => {
        const { name, value, type, checked } = event.target;
        const nextValue = type === 'checkbox' ? checked : value;

        setFormData((prev) => ({ ...prev, [name]: nextValue }));
        setValue(name, nextValue, { shouldValidate: true, shouldDirty: true });
    };

    const onSubmit = async (data) => {
        setStatus('submitting');
        try {
            setFormData((prev) => ({ ...prev, ...data }));
            await registerUser({
                firstName: data.firstName,
                surname: data.surname,
                email: data.email,
                password: data.password,
            });
            setStatus('success');
            setTimeout(() => navigate('/login'), 1000);
        } catch (err) {
            console.error('Registration failed:', err.message || err);
            setStatus('idle');
        }
    };

    const inputBaseClass = 'w-full p-4 rounded-lg bg-white border border-outline-variant font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary transition-all';

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow flex pt-16">
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
                    </div>
                </section>

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
                            Sign up with Google
                        </button>

                        <div className="flex items-center gap-4">
                            <div className="h-px bg-outline-variant flex-grow"></div>
                            <span className="font-caption text-caption text-outline">OR</span>
                            <div className="h-px bg-outline-variant flex-grow"></div>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2 group">
                                    <label className="font-label-md text-label-md text-on-surface" htmlFor="first-name">First Name</label>
                                    <div className="group-focus-within:scale-[1.01] transition-transform duration-200">
                                        <input
                                            {...register('firstName')}
                                            className={inputBaseClass}
                                            id="first-name"
                                            name="firstName"
                                            placeholder="Bandile"
                                            type="text"
                                            value={formData.firstName}
                                            onChange={handleFieldChange}
                                        />
                                        {errors.firstName && <p style={{ color: 'red', margin: '5px 0 0' }}>{errors.firstName.message}</p>}
                                    </div>
                                </div>
                                <div className="space-y-2 group">
                                    <label className="font-label-md text-label-md text-on-surface" htmlFor="last-name">Last Name</label>
                                    <div className="group-focus-within:scale-[1.01] transition-transform duration-200">
                                        <input
                                            {...register('surname')}
                                            className={inputBaseClass}
                                            id="last-name"
                                            name="surname"
                                            placeholder="Dlamini"
                                            type="text"
                                            value={formData.surname}
                                            onChange={handleFieldChange}
                                        />
                                        {errors.surname && <p style={{ color: 'red', margin: '5px 0 0' }}>{errors.surname.message}</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <label className="font-label-md text-label-md text-on-surface" htmlFor="email">Email Address</label>
                                <div className="relative group-focus-within:scale-[1.01] transition-transform duration-200">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">mail</span>
                                    <input
                                        {...register('email')}
                                        className={`${inputBaseClass} pl-12`}
                                        id="email"
                                        name="email"
                                        placeholder="bandile@example.com"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleFieldChange}
                                    />
                                    {errors.email && <p style={{ color: 'red', margin: '5px 0 0' }}>{errors.email.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <label className="font-label-md text-label-md text-on-surface" htmlFor="password">Password</label>
                                <div className="relative group-focus-within:scale-[1.01] transition-transform duration-200">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">lock</span>
                                    <input
                                        {...register('password')}
                                        className={`${inputBaseClass} pl-12`}
                                        id="password"
                                        name="password"
                                        placeholder="••••••••"
                                        type="password"
                                        value={formData.password}
                                        onChange={handleFieldChange}
                                    />
                                    {errors.password && <p style={{ color: 'red', margin: '5px 0 0' }}>{errors.password.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <label className="font-label-md text-label-md text-on-surface" htmlFor="confirm-password">Confirm Password</label>
                                <div className="relative group-focus-within:scale-[1.01] transition-transform duration-200">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">verified_user</span>
                                    <input
                                        {...register('confirmPassword')}
                                        className={`${inputBaseClass} pl-12`}
                                        id="confirm-password"
                                        name="confirmPassword"
                                        placeholder="••••••••"
                                        type="password"
                                        value={formData.confirmPassword}
                                        onChange={handleFieldChange}
                                    />
                                    {errors.confirmPassword && <p style={{ color: 'red', margin: '5px 0 0' }}>{errors.confirmPassword.message}</p>}
                                </div>
                            </div>

                            <div className="flex items-start gap-3 py-1">
                                <input
                                    className="mt-1 rounded border-outline-variant text-primary focus:ring-primary h-4 w-4 cursor-pointer"
                                    id="terms"
                                    name="acceptTerms"
                                    type="checkbox"
                                    checked={formData.acceptTerms}
                                    onChange={handleFieldChange}
                                />
                                <label className="font-caption text-caption text-on-surface-variant leading-relaxed" htmlFor="terms">
                                    I agree to the <a className="text-primary font-semibold hover:underline" href="#">Terms of Service</a> and <a className="text-primary font-semibold hover:underline" href="#">Privacy Policy</a>.
                                </label>
                                {errors.acceptTerms && <p style={{ color: 'red', margin: '4px 0 0' }}>{errors.acceptTerms.message}</p>}
                            </div>

                            <button
                                className={`w-full py-3 rounded-lg font-label-md text-label-md shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${status === 'success' ? 'bg-secondary text-white' : 'bg-primary-container text-on-primary-container hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]'} ${status === 'submitting' || isSubmitting ? 'opacity-80' : ''}`}
                                type="submit"
                                disabled={status === 'submitting' || isSubmitting}
                            >
                                {status === 'idle' && 'Create Account'}
                                {(status === 'submitting' || isSubmitting) && (
                                    <>
                                        <span className="material-symbols-outlined animate-spin">progress_activity</span>
                                        Creating...
                                    </>
                                )}
                                {status === 'success' && 'Success! Redirecting...'}
                            </button>
                        </form>

                        <div onClick={() => navigate('/login')} className="text-center pt-2">
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
}

export default Register;