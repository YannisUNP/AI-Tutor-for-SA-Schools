import QuickAction from "./QuickAction";
function QuickActions() {
    //Need to add logic to the subtitle where it is written "Trigonometric Functions"
    return (
        <section>
            <h3 className="font-title-md text-title-md text-primary mb-stack-sm flex items-center gap-2">
                <span className="material-symbols-outlined">bolt</span>
                Quick Actions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter">
                <QuickAction icon="play_circle" title="Continue Learning" subtitle="Trigonometric Functions" variant="primary" />
                <QuickAction icon="psychology" title="Ask AI Tutor" subtitle="Instant homework help" />
                <QuickAction icon="auto_awesome" title="Generate Quiz" subtitle="Based on your weaknesses" />
            </div>
        </section>
    );
}
export default QuickActions;