import TaskItem from "./TaskItem";
function StudyPlan() {
    return (
        <section>
            <div className="flex items-center justify-between mb-stack-sm">
                <h3 className="font-title-md text-title-md text-primary flex items-center gap-2">
                    <span className="material-symbols-outlined">task_alt</span>
                    Today's Study Plan
                </h3>
                <span className="text-caption font-caption text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">3 of 5 Complete</span>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/30 space-y-4">
                <TaskItem label="Review Newton's Second Law of Motion" subject="Physics" isCompleted={true} />
                <TaskItem label="Complete Calculus Exercise 4.2" subject="Maths" isCompleted={true} />
                <TaskItem label="Watch AI Summary: Accounting Ledger Entry" subject="Accounting" isCompleted={true} />
                <TaskItem label="Practice Past Paper: Trigonometry (Section A)" subject="Maths" isCompleted={false} />
                <TaskItem label="Generate Flashcards for History Chapter 8" subject="History" isCompleted={false} />
            </div>
        </section>
    );
}
export default StudyPlan;
