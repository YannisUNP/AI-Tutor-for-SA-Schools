function Assessments() {
    return (
        <section>
            <h3 className="font-label-md text-label-md text-on-surface-variant mb-stack-sm flex items-center gap-2">
                <span className="material-symbols-outlined">event</span>
                UPCOMING ASSESSMENTS
            </h3>
            <div className="space-y-3">
                <div className="p-4 bg-surface-container-lowest rounded-xl border-l-4 border-error shadow-sm">
                    <div className="flex justify-between items-start">
                        <div>
                            <h5 className="font-label-md text-label-md font-bold text-on-surface">Maths Preliminary Exam</h5>
                            <p className="text-caption text-on-surface-variant">Paper 1: Algebra & Calculus</p>
                        </div>
                        <div className="text-right">
                            <p className="text-label-md font-black text-error">4 Days</p>
                            <p className="text-[10px] uppercase font-bold text-on-surface-variant">Until</p>
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-surface-container-lowest rounded-xl border-l-4 border-primary shadow-sm">
                    <div className="flex justify-between items-start">
                        <div>
                            <h5 className="font-label-md text-label-md font-bold text-on-surface">Accounting Test</h5>
                            <p className="text-caption text-on-surface-variant">Companies & Cost Accounting</p>
                        </div>
                        <div className="text-right">
                            <p className="text-label-md font-black text-primary">9 Days</p>
                            <p className="text-[10px] uppercase font-bold text-on-surface-variant">Until</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Assessments;