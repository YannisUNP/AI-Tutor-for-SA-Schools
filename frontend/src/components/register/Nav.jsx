function Nav() {
    return (
        <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto bg-surface/80 dark:bg-surface-container-highest/80 backdrop-blur-md shadow-sm">
            <div className="flex items-center gap-2">
                <span className="text-title-md font-display-lg font-bold text-primary dark:text-primary-fixed">StudyMate AI</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
                <a className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Curriculum</a>
                <a className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Pricing</a>
                <a className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">About Us</a>
            </div>
            <div className="flex items-center gap-4">
                <a className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant hover:text-primary transition-colors active:scale-95 transition-transform duration-200" href="#">Login</a>
                <a className="bg-primary text-white px-6 py-2 rounded-lg font-label-md text-label-md hover:bg-primary-container hover:text-on-primary-container transition-all active:scale-95 duration-200" href="#">Sign Up</a>
            </div>
        </nav>
    );
};
export default Nav;