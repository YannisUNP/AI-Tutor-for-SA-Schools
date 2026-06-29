import { useNavigate } from 'react-router-dom';

function CTA(){
    const navigate = useNavigate();
    return (
        <section className="py-stack-lg">
            <div className="max-w-container-max mx-auto px-margin-desktop">
                <div className="bg-primary rounded-[40px] p-10 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-fixed rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
                    </div>
                    <div className="relative z-10 space-y-8">
                        <h2 className="font-headline-lg text-headline-lg text-on-primary">Ready to transform your grades?</h2>
                        <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto">
                            Join over 50,000 South African students achieving their academic goals with StudyMate AI.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button onClick={() => navigate('/register')} className="bg-on-primary text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary-fixed transition-all active:scale-95 shadow-2xl">
                                Create Free Account
                            </button>
                            <button className="bg-primary-container border border-on-primary-container/30 text-on-primary-container px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary-container/80 transition-all">
                                Explore Premium
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default CTA;