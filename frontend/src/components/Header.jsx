import { useState, useEffect } from 'react';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 z-50 w-full transition-shadow duration-300 ${isScrolled ? 'bg-surface/90 shadow-md' : 'bg-surface/80'}`}>
            {<nav className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_stories</span>
                    <h1 className="font-headline-lg text-headline-lg font-bold text-primary">StudyMate AI</h1>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#features">Features</a>
                    <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#benefits">Why Us</a>
                    <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md hover:opacity-90 transition-all active:scale-95">
                        Start Learning
                    </button>
                </div>
                <button className="md:hidden text-primary">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </nav>}
        </header>
    );
}
export default Header;