import { getSubjects, getTopics, getSubtopics, createSession } from "../../services/tutor";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";

function CreateSession({ onSessionCreated }) {
    const { user } = useAuth();
    const [subjects, setSubjects] = useState([]);
    const [topics, setTopics] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState("");
    const [selectedTopic, setSelectedTopic] = useState("");
    const [formData, setFormData] = useState({
        studentId: user?.id || "",
        subjectId: "",
        topicId: "",
        title: ''
    });

    //Load subjects on mount
    useEffect(() => {
        if (user?.id) {
            getSubjects(user.id).then(res => {
                const subjectsArray = res.data.data.map(item => item.subjects);
                setSubjects(subjectsArray);
            });
        }
    }, [user]);

    //Fetch topics when subject changes
    const handleSubjectChange = async (e) => {
        const subjectId = e.target.value;

        if (!subjectId) {
            setSelectedSubject("");
            setFormData((prev) => ({ ...prev, subjectId: "", topicId: "", title: "" }));
            setTopics([]);
            setSelectedTopic("");
            return;
        }

        setSelectedSubject(subjectId);
        setSelectedTopic("");
        setFormData((prev) => ({ ...prev, subjectId, topicId: "", title: "" }));
        setTopics([]);

        if (subjectId && subjectId !== "---") {
            const { data } = await getTopics(user.id, subjectId);
            setTopics(data || []);
        }
    };

    const handleTopicChange = (e) => {
        const topicId = e.target.value;
        setSelectedTopic(topicId);
        setFormData((prev) => ({ ...prev, topicId }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedSubject) {
            return;
        }

        const subject = subjects.find((sub) => String(sub.id) === String(selectedSubject));
        const topic = topics.find((top) => String(top.id) === String(selectedTopic));
        const title = `${subject?.name ?? "Unknown Subject"}${topic?.name ? ` -> ${topic.name}` : ""}`;
        const payload = {
            studentId: user.id,
            subjectId: selectedSubject,
            topicId: selectedTopic || null,
            title,
        };

        try {
            const session = await createSession(
                payload.studentId,
                payload.subjectId,
                payload.title,
                payload.topicId
            );
            console.log("Session created:", session);
            setFormData((prev) => ({ ...prev, title }));
        } catch (error) {
            console.error("Failed to start a new session:", error);
        }
        onSessionCreated();
    }
    return (
        <form className="mb-6 space-y-4 p-2 bg-white/40 rounded-2xl border border-outline-variant/50" onSubmit={handleSubmit}>
            <div className="space-y-2">
                <label className="font-label-md text-caption text-outline uppercase tracking-wider px-1">Select Subject</label>
                <select onChange={handleSubjectChange} className="w-full bg-white border border-outline-variant rounded-xl px-3 py-2 font-label-md text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer" value={selectedSubject}
                >
                    <option value=""> </option>
                    {subjects.length > 0 ? (
                        subjects.map((sub) => (
                            <option key={sub.id} value={sub.id}>{sub.name}</option>
                        ))

                    ) : (
                        <option value="">---</option>
                    )}

                </select>
            </div>
            <div className="space-y-2">
                <label className="font-label-md text-caption text-outline uppercase tracking-wider px-1">Select Topic (Optional)</label>
                <select
                    value={selectedTopic}
                    onChange={handleTopicChange}
                    disabled={!selectedSubject || selectedSubject === "---"}
                    className="w-full bg-white border border-outline-variant rounded-xl px-3 py-2 font-label-md text-on-surface focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer"
                >
                    <option value=""> </option>
                    {topics.length > 0 ? (
                        topics.map((topic) => (
                            <option key={`${topic.id}-${topic.name}`} value={topic.id}>
                                {topic.name}
                            </option>
                        ))
                    ) : (
                        <option value="">Select a subject first</option>
                    )}
                </select>
            </div>
            <button
                disabled={!selectedSubject || selectedSubject === "---"}
                className="w-full py-2.5 bg-primary text-on-primary rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-sm
                        
                        disabled:bg-gray-300
                        disabled:text-gray-500
                        disabled:cursor-not-allowed 
                        disabled:shadow-none 
                        disabled:active:scale-100" type="submit">
                <span className="material-symbols-outlined text-[18px]">add_circle</span>
                Start New Session
            </button>
            <div className="h-px bg-outline-variant/30 mx-2"></div>
        </form>
    );
}
export default CreateSession;