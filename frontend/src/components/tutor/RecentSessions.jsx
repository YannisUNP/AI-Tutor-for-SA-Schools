import { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { getSessions, deleteSession } from '../../services/tutor';

function RecentSessions({ refreshTrigger, onRefresh, onSelectSession }) {
    //Get list of sessions belonging to student and create a button for each
    const { user } = useAuth();
    const [sessions, setSessions] = useState([]);
    const [selectedSession, setSelectedSession] = useState(null);

    useEffect(() => {
        if (user?.id) {
            getSessions(user.id).then(res => {
                console.log("Sessions data: ", res)
                return res.data;
            }).then(res => {
                const sessionsArray = res.data;
                setSessions(sessionsArray)
            });
        }
    }, [user?.id, refreshTrigger])

    const handleDelete = (id) => {
        if (user?.id) {
            try{
                deleteSession(user.id, id);

                onRefresh();
            }catch(error){
                console.error("Failed to delete session:", error);
            }
        }
    }

    //On the click of the button, trigger a return of session messages (will be used by the chat workspace area)
    const handleClick = (id) => {
        setSelectedSession(id);
        onSelectSession(id);
    }


    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
            <span>Recents</span>

            {sessions.length > 0 ? (
                sessions.map((t) => (
                    <button
                        key={t.id}
                        onClick={() => handleClick(t.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl border text-left group transition-all duration-200 ${selectedSession === t.id
                            ? "bg-white shadow-sm border-outline-variant" // "Selected" look
                            : "bg-transparent border-transparent hover:bg-surface-container-low" // "Default" look
                            }`}
                    >
                        <div className="flex items-center gap-3 overflow-hidden">
                            <span className="material-symbols-outlined text-primary text-[18px]">chat_bubble</span>
                            <span className="truncate font-label-md text-label-md text-on-surface">{t.title}</span>
                        </div>
                        <span className={`material-symbols-outlined text-[18px] transition-opacity ${selectedSession === t.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                            } text-on-surface-variant hover:text-error`} onClick={() => handleDelete(t.id)}>
                            delete
                        </span>
                    </button>
                ))
            ) : (
                <span>*</span>
            )
            }
        </div>
    );
}
export default RecentSessions;