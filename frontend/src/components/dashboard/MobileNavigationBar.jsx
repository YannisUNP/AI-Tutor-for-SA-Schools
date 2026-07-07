function MobileNavigationBar() {
    return (
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-outline-variant/30 flex justify-around items-center py-3 z-50">
            <button className="flex flex-col items-center gap-1 text-primary">
                <span className="material-symbols-outlined">dashboard</span>
                <span className="text-[10px] font-bold">Home</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-on-surface-variant">
                <span className="material-symbols-outlined">menu_book</span>
                <span className="text-[10px] font-medium">Subjects</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-on-surface-variant">
                <span className="material-symbols-outlined">quiz</span>
                <span className="text-[10px] font-medium">Quizzes</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-on-surface-variant">
                <span className="material-symbols-outlined">person</span>
                <span className="text-[10px] font-medium">Profile</span>
            </button>
        </div>
    );
}
export default MobileNavigationBar;