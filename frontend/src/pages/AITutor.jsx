
import { useState, useEffect } from 'react';
import SidebarNavigation from '../components/dashboard/SidebarNavigation';
import HistorySidebar from '../components/tutor/HistorySidebar';
import ChatWorkspaceArea from '../components/tutor/ChatWorkspaceArea';
function AITutor() {
    const [selectedSessionId, setSelectedSessionId] = useState(null);
    return (
        <div className="bg-surface text-on-surface overflow-hidden h-screen flex">

            {/* Main Content Canvas */}
            <main className="flex-1 flex flex-row ml-0 h-full relative">
                <HistorySidebar onSelectSession={setSelectedSessionId}/>
                {/*When a session is clicked, the id of that session is passed to the chat workspace area so that 
                it may run the getMessages function and display the messages. AI is about to START! */}
                <ChatWorkspaceArea sessionId={selectedSessionId}/>

                {/* Floating Action for Mobile (Hidden on Desktop) */}
                <button className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-xl z-50" type="button">
                    <span className="material-symbols-outlined">chat</span>
                </button>
            </main>
        </div>
    );
}

export default AITutor;