import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 z-50 w-full transition-shadow duration-300 ${isScrolled ? 'bg-surface/90 shadow-md' : 'bg-surface/80'}`}>
            {<nav className="flex justify-between items-center w-full px-margin-desktop py-2 max-w-container-max mx-auto">
                <div onClick={() => navigate('/')} className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity">
                    <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_stories</span>
                    <h1 className="font-headline-md text-headline-md font-bold text-primary">StudyMate</h1>
                </div>
                <div className="hidden md:flex items-center space-x-6">
                    {/* <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#features">Features</a>
                    <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#benefits">Why Us</a> */}
                    <button onClick={() => navigate('/login')} className="bg-primary text-on-primary px-5 py-1.5 rounded-full font-label-md hover:opacity-90 transition-all active:scale-95">
                        Login
                    </button>
                    <button onClick={() => navigate('/register')} className="relative bg-white text-primary px-5 py-1.5 rounded-full font-bold border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 active:scale-95">
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