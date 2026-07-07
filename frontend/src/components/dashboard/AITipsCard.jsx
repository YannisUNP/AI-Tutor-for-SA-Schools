function AITipsCard() {
    return (
        <div className="bg-surface-variant p-5 rounded-xl border border-primary/10">
            <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary fill-1">lightbulb</span>
                <h5 className="font-label-md text-label-md font-bold text-primary">Tutor Tip</h5>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Thabo, you perform 20% better in Maths when you study before 9:00 AM. Try to tackle your Trigonometry past paper first thing tomorrow!
            </p>
        </div>
    );
}
export default AITipsCard;