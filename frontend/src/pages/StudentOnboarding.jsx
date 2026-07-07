import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/landing/Footer';
import { completeUser, getCurrentUserId } from '../services/authService';

const subjectOptions = ['Mathematics', 'Physical Sciences', 'Life Science', 'English', 'History'];
const iconMap = {
    Mathematics: 'calculate',
    'Physical Sciences': 'science',
    'Life Science': 'biotech',
    'English': 'menu_book',
    'History': 'history_edu',
};

function StudentOnboarding({ onComplete }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        grade: '',
        curriculum: '',
        province: '',
        school: '',
        subjects: [],
    });
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const toggleSubject = (subject) => {
        setFormData((prev) => ({
            ...prev,
            subjects: prev.subjects.includes(subject)
                ? prev.subjects.filter((item) => item !== subject)
                : [...prev.subjects, subject],
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        if (formData.subjects.length === 0) {
            setError('Please select at least one core subject.');
            return;
        }

        if (!formData.curriculum) {
            setError('Please choose a curriculum.');
            return;
        }

        setSubmitting(true);

        try {
            const userId = await getCurrentUserId();

            if (!userId) {
                throw new Error('No authenticated user was found.');
            }

            await completeUser({
                id: userId,
                grade: formData.grade,
                curriculum: formData.curriculum,
                province: formData.province,
                school: formData.school,
                subjects: formData.subjects,
            });

            onComplete?.();
            navigate('/dashboard');
        } catch (err) {
            console.error('Onboarding failed:', err);
            setError(err?.message || 'We could not save your profile. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow flex items-center justify-center py-stack-lg px-margin-mobile">
                <div className="max-w-container-max w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center min-h-[80vh]">
                    <section className="hidden lg:flex lg:col-span-5 flex-col justify-center space-y-stack-md pr-margin-desktop">
                        <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
                            <img alt="South African students collaborating" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLvXowD5kCHBna1hso3-hIQx6T5C5zf_qycVUWjcbvMwtYsUmy9eyUtnJc7RgiTtdAJ-9m6g1N-e0PVpQhvqkJ8IHPDvdFpDrv07AE9XygxWXBqSdnbgHAEV3B0RkAqPv7PUzGTUcudBrab5_9b3pVpQ_XSd99dxX0ODeXqKsA8X29sTDfLHvYlr45t6ntWGC-b-fOGVx5GbL7ixivJofyM7MYoDIFgnmCXuil5nS8Zob6aqC_IZIWpf-B8" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
                        </div>
                        <div>
                            <h2 className="font-headline-lg text-headline-lg text-[#1e3a8a] mb-2">Grow Through Clarity</h2>
                            <p className="font-body-lg text-body-lg text-on-surface-variant">Your personalized academic roadmap starts here. By understanding your curriculum and subjects, our AI creates a focus-driven experience tailored to your success.</p>
                        </div>
                        <div className="bg-surface-container-low p-stack-sm rounded-lg flex items-center gap-3 border border-outline-variant/30">
                            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>verified</span>
                            <span className="font-label-md text-label-md text-on-surface-variant italic">"Join over 50,000 South African students excelling with AI-driven insights."</span>
                        </div>
                    </section>

                    <section className="lg:col-span-7 w-full flex flex-col justify-center">
                        <div className="bg-surface-container-lowest p-stack-md md:p-stack-lg rounded-xl shadow-sm border border-outline-variant/20 w-full max-w-2xl mx-auto lg:ml-0">
                            <div className="mb-stack-md">
                                <h1 className="font-headline-lg text-headline-lg text-on-surface">Complete Your Profile</h1>
                                <p className="font-body-md text-body-md text-on-surface-variant">Let's personalize your learning journey in one quick step.</p>
                            </div>
                            <form className="space-y-stack-md" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-sm">
                                    <div className="flex flex-col gap-2">
                                        <label className="font-label-md text-label-md text-on-surface" htmlFor="grade">Grade</label>
                                        <select className="h-12 px-4 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary bg-surface transition-all" id="grade" name="grade" value={formData.grade} onChange={handleChange} required>
                                            <option value="">Select Grade</option>
                                            <option value="8">Grade 8</option>
                                            <option value="9">Grade 9</option>
                                            <option value="10">Grade 10</option>
                                            <option value="11">Grade 11</option>
                                            <option value="12">Grade 12</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="font-label-md text-label-md text-on-surface">Curriculum</label>
                                        <div className="flex gap-2 h-12">
                                            <button
                                                className={`flex-1 rounded-lg border font-label-md transition-all flex items-center justify-center ${formData.curriculum === 'CAPS' ? 'bg-[#1e3a8a] text-white border-[#1e3a8a]' : 'border-outline-variant hover:bg-surface-container-high bg-white text-on-surface'}`}
                                                type="button"
                                                onClick={() => setFormData((prev) => ({ ...prev, curriculum: 'CAPS' }))}
                                            >
                                                CAPS
                                            </button>
                                            <button
                                                className={`flex-1 rounded-lg border font-label-md transition-all flex items-center justify-center ${formData.curriculum === 'IEB' ? 'bg-[#1e3a8a] text-white border-[#1e3a8a]' : 'border-outline-variant hover:bg-surface-container-high bg-white text-on-surface'}`}
                                                type="button"
                                                onClick={() => setFormData((prev) => ({ ...prev, curriculum: 'IEB' }))}
                                            >
                                                IEB
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="font-label-md text-label-md text-on-surface" htmlFor="province">Province</label>
                                        <select className="h-12 px-4 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary bg-surface transition-all" id="province" name="province" value={formData.province} onChange={handleChange} required>
                                            <option value="">Select Province</option>
                                            <option value="EC">Eastern Cape</option>
                                            <option value="FS">Free State</option>
                                            <option value="GT">Gauteng</option>
                                            <option value="KZN">KwaZulu-Natal</option>
                                            <option value="LP">Limpopo</option>
                                            <option value="MP">Mpumalanga</option>
                                            <option value="NC">Northern Cape</option>
                                            <option value="NW">North West</option>
                                            <option value="WC">Western Cape</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="font-label-md text-label-md text-on-surface" htmlFor="school">School (Optional)</label>
                                        <input className="h-12 px-4 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary bg-surface transition-all" id="school" name="school" placeholder="Enter school name" type="text" value={formData.school} onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="space-y-stack-sm pt-2">
                                    <label className="font-label-md text-label-md text-on-surface block">Select Your Core Subjects</label>
                                    <div className="flex flex-wrap gap-3 p-1">
                                        {subjectOptions.map((subject) => {
                                            const isSelected = formData.subjects.includes(subject);
                                            return (
                                                <button
                                                    key={subject}
                                                    className={`px-4 py-2.5 rounded-full border text-body-md transition-all flex items-center gap-2 group ${isSelected ? 'border-primary bg-primary text-white' : 'border-outline-variant hover:border-primary hover:text-primary bg-white text-on-surface'}`}
                                                    type="button"
                                                    onClick={() => toggleSubject(subject)}
                                                >
                                                    <span className="material-symbols-outlined text-[20px]">{iconMap[subject]}</span>
                                                    {subject}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {error && <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>}

                                <div className="pt-stack-md">
                                    <button className="h-12 w-full px-6 rounded-lg bg-[#1e3a8a] text-on-primary font-label-md hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="submit" disabled={submitting}>
                                        {submitting ? 'Setting up...' : 'Get Started'}
                                        <span className="material-symbols-outlined">rocket_launch</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default StudentOnboarding;