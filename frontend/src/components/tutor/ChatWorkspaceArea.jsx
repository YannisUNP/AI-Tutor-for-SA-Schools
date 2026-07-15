import Header from "./Header";
import { useState, useEffect, useRef } from 'react';
import { getMessages } from "../../services/tutor";

function ChatWorkspaceArea({sessionId}) {
    const textareaRef = useRef(null);
    const chatContainerRef = useRef(null);
    const [sessionMessages, setSessionMessages] = useState(null);

    
    //Display session messages
    useEffect(() => {
        if(sessionId){
            getMessages(sessionId).then(res => {
                console.log("Session Messages: ", res);
                const messages = res.data;
                setSessionMessages(messages);
            });
        }
    }, [sessionId])

    //Animations
    useEffect(() => {
        const textarea = textareaRef.current;
        const chatContainer = chatContainerRef.current;

        const handleTextareaInput = () => {
            if (!textarea) return;

            textarea.style.height = 'auto';
            const nextHeight = Math.min(textarea.scrollHeight, 160);
            textarea.style.height = `${nextHeight}px`;
            textarea.style.overflowY = textarea.scrollHeight > 160 ? 'scroll' : 'hidden';
        };

        const animatedElements = document.querySelectorAll('.animate-fade-in');
        const timers = Array.from(animatedElements).map((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(10px)';
            return window.setTimeout(() => {
                el.style.transition = 'all 0.5s ease-out';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });

        if (textarea) {
            textarea.addEventListener('input', handleTextareaInput);
            handleTextareaInput();
        }

        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }

        return () => {
            if (textarea) {
                textarea.removeEventListener('input', handleTextareaInput);
            }
            timers.forEach((timer) => window.clearTimeout(timer));
        };
    }, []);
    return (
        <div className="flex-1 flex flex-col h-full bg-surface">
            <Header session={sessionId}/>
            {/* Messages Area */}
            <div ref={chatContainerRef} className="flex-1 overflow-y-auto px-4 py-8 space-y-stack-md max-w-4xl mx-auto w-full">
                {/* User Question */}
                <div className="flex justify-end animate-fade-in">
                    <div className="max-w-[85%] bg-white border border-outline-variant shadow-sm rounded-2xl rounded-tr-none px-6 py-4">
                    </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start items-start gap-4 animate-fade-in">
                    <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary shadow-sm flex-shrink-0 ai-sparkle">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: 'FILL 1' }}>auto_awesome</span>
                    </div>
                    <div className="max-w-[85%] bg-surface-container-low rounded-2xl rounded-tl-none px-6 py-5 border border-primary/5">
                    </div>
                </div>
            </div>

            {/* Bottom Input Section */}
            <div className="p-6 bg-surface max-w-4xl mx-auto w-full">

                {/* Input Box */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[20px] blur opacity-10 group-focus-within:opacity-30 transition-all"></div>
                    <div className="relative bg-white border border-outline-variant rounded-[18px] p-2 flex items-end gap-2 shadow-sm focus-within:ring-2 focus-within:ring-primary/20">
                        <div className="flex-1 px-4 py-3 min-h-[56px] max-h-40 overflow-y-auto">
                            <textarea
                                ref={textareaRef}
                                className="w-full bg-transparent border-none focus:ring-0 resize-none font-body-md text-body-md placeholder:text-outline p-0"
                                id="ai-input"
                                placeholder="Ask StudyMate"
                                rows={1}
                            />
                        </div>
                        <div className="flex items-center gap-1 p-1">
                            <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all rounded-lg" title="Upload Image" type="button">
                                <span className="material-symbols-outlined">image</span>
                            </button>
                            <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all rounded-lg" title="Voice Input" type="button">
                                <span className="material-symbols-outlined">mic</span>
                            </button>
                            <button className="ml-2 w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all" type="button">
                                <span className="material-symbols-outlined">send</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ChatWorkspaceArea;