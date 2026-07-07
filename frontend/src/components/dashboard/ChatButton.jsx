function ChatButton() {
    return (
        <button className="fixed bottom-20 md:bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
            <span className="material-symbols-outlined text-2xl">chat</span>
        </button>
    );
}
export default ChatButton;