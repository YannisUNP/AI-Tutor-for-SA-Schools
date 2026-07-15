import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { dashboardSummary } from "../../services/dashboard";

function TopAppBar() {
    const { user } = useAuth();
    const [firstName, setFirstName] = useState("");

    const profileInfo = async () => {
        const { data, status } = await dashboardSummary(user.id);
        const name = data.user[0].first_name;
        setFirstName(name);
        // console.log(name);
        // console.log(data.user[0]);  // First user object
        // console.log(data.stats);  // Stats array
    }

    useEffect(() => {
        profileInfo();
    }, []);
    return (
        <header className="sticky top-0 z-40 glass-header border-b border-outline-variant/10 px-margin-mobile md:px-margin-desktop py-4 flex justify-between items-center">
            <div className="flex-1">
                <div className="flex items-center gap-4">
                    <button className="md:hidden p-2 text-on-surface">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary">Good morning, {firstName}!</h2>
                </div>
                <p className="hidden sm:block font-body-md text-body-md text-on-surface-variant italic mt-1">
                    "Education is the most powerful weapon which you can use to change the world."
                </p>
            </div>
            <div className="flex items-center gap-gutter">
                <div className="hidden lg:flex items-center bg-surface-container px-4 py-2 rounded-full border border-outline-variant/20">
                    <span className="material-symbols-outlined text-primary mr-2">search</span>
                    <input className="bg-transparent border-none focus:ring-0 text-label-md w-48" placeholder="Search topics..." type="text" />
                </div>
                <button className="relative p-2 text-on-surface-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
                </button>
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
                    <img
                        className="w-full h-full object-cover"
                        alt="Professional headshot of a teenage male student"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxH9_W8yZjKXZmFnQdDzpQ7pKjKkFAJRPRulC23YDKm8SWFQGcB_H7GraB5qv_mvKwlJ752vEjdX-GSQ_STO_KuMdZ5G4SP-Y7f_VB2QANXY9GvHUYgyXly_WuZgXSH3wE-apsGEMKht8zlb8ImawSsRhorFtQ14uLLlqu-W0zpz23gPc5Ae-2n4HNowsddlWVMUZoRpvW85EOLazoT8zqt53tmriKslqN2mhMkMtOxTOtZgaAwbIXFdXxHzFTAZhNvqVcG3NaSO0"
                    />
                </div>
            </div>
        </header>
    );
}
export default TopAppBar;