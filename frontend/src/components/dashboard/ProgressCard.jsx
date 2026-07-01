function ProgressCard({ percentage, subject, level }){
    return(
        <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/20 shadow-sm flex flex-col items-center transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="relative w-24 h-24 flex items-center justify-center mb-4">
                <div
                    className="w-full h-full rounded-full absolute"
                    style={{
                        background: `conic-gradient(#006c49 ${percentage}%, #e5eeff 0)`
                    }}
                ></div>
                <div className="w-20 h-20 bg-surface-container-lowest rounded-full absolute flex items-center justify-center">
                    <span className="font-headline-lg text-headline-lg font-black text-secondary">{percentage}%</span>
                </div>
            </div>
            <span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">{subject}</span>
            <p className="text-caption text-on-surface-variant mt-1">{level}</p>
            <button className="mt-4 text-primary font-bold text-caption flex items-center gap-1 hover:underline">
                View Details <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            </button>
        </div>
    );  
}
export default ProgressCard;