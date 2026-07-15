import { useState, useEffect } from "react";
import { getSession } from "../../services/tutor";
function Header({session}) {
    const [sessionTitle, setSessionTitle] = useState(null)

    useEffect( () => {
        if(session){
            getSession(session).then(res => {
                console.log("Session title: ", res.data.data[0].title);
                setSessionTitle(res.data.data[0].title);
            });
        }
    }, [session])
    return (
        <header className="flex items-center justify-between px-6 py-4 glass bg-surface/80 sticky top-0 z-30">
            <div className="flex items-center gap-4">
                <button className="md:hidden p-2" type="button">
                    <span className="material-symbols-outlined">menu</span>
                </button>
                <div className="flex items-center gap-2">
                    <span className="font-title-md text-title-md font-bold text-primary">
                        {sessionTitle}
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <button className="flex items-center gap-1 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" type="button">
                    <span className="material-symbols-outlined text-[20px]">share</span>
                    <span className="hidden sm:inline">Share</span>
                </button>
            </div>
        </header>
    );
}
export default Header;