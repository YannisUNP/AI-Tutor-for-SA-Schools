import { getSubjects, getTopics, getSubtopics, createSession } from "../../services/tutor";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import CreateSession from "./CreateSession";
import RecentSessions from "./RecentSessions";
function HistorySidebar({ onSelectSession }) {
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    const triggerRefresh = () => {
        setRefreshTrigger(prev => prev + 1);
    }

    return (
        <div className="w-80 h-full bg-surface-container-low border-r border-outline-variant hidden lg:flex flex-col">
            <div className="p-3 border-b border-outline-variant flex justify-between items-center bg-white/50 backdrop-blur-sm sticky top-0 z-10">
                <h2 className="font-title-md text-title-md font-bold text-primary">Chat History</h2>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                <CreateSession onSessionCreated={triggerRefresh}/>
                
                <RecentSessions refreshTrigger={refreshTrigger} onRefresh={triggerRefresh} onSelectSession={onSelectSession}/>
            </div>
        </div>
    );
}
export default HistorySidebar;