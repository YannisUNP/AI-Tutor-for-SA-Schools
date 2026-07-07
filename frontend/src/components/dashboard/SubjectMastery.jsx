import ProgressCard from "./ProgressCard";

function SubjectMastery() {
    return (
        <section>
            <h3 className="font-title-md text-title-md text-primary mb-stack-sm flex items-center gap-2">
                <span className="material-symbols-outlined">library_books</span>
                Subject Mastery
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                <ProgressCard percentage={82} subject="Mathematics" level="Grade 12 CAPS" />
                <ProgressCard percentage={68} subject="Physical Sciences" level="Grade 12 CAPS" />
                <ProgressCard percentage={91} subject="Accounting" level="Grade 12 CAPS" />
            </div>
        </section>
    );
}
export default SubjectMastery