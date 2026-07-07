import SidebarItem from "./SidebarItem";
function SidebarNavigation() {
    return (
        <aside className="hidden md:flex flex-col h-screen w-64 flex-shrink-0 bg-surface-container-lowest border-r border-outline-variant/30 p-4 space-y-stack-sm z-50">
            <div className="mb-8 px-2">
                <h1 className="font-headline-lg text-headline-lg font-black text-primary">StudyMate</h1>
                <p className="font-label-md text-label-md text-on-surface-variant opacity-70">CAPS/IEB Excellence</p>
            </div>
            <nav className="flex-1 space-y-1 overflow-y-auto custom-scrollbar">
                <SidebarItem icon="dashboard" label="Dashboard" isActive />
                <SidebarItem icon="menu_book" label="Subjects" />
                <SidebarItem icon="smart_toy" label="AI Tutor" />
                <SidebarItem icon="quiz" label="Quizzes" />
                <SidebarItem icon="style" label="Flashcards" />
                <SidebarItem icon="calendar_month" label="Planner" />
                <SidebarItem icon="analytics" label="Progress" />
                <SidebarItem icon="settings" label="Settings" />
            </nav>
        </aside>
    );
}
export default SidebarNavigation;