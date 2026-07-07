function Streak() {
    return (
        <section className="bg-primary-container p-6 rounded-2xl shadow-md text-on-primary-container relative overflow-hidden">
            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="font-title-md text-title-md font-bold">Study Streak</h4>
                    <span className="material-symbols-outlined text-tertiary-fixed-dim fill-1">local_fire_department</span>
                </div>
                <div className="flex justify-between items-end">
                    <div>
                        <p className="text-[48px] font-black leading-none">12</p>
                        <p className="font-label-md text-label-md opacity-80">Days in a row</p>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-2 h-8 bg-on-primary-container rounded-full"></div>
                        <div className="w-2 h-12 bg-on-primary-container rounded-full"></div>
                        <div className="w-2 h-6 bg-on-primary-container rounded-full"></div>
                        <div className="w-2 h-14 bg-on-primary-container rounded-full"></div>
                        <div className="w-2 h-10 bg-secondary-fixed rounded-full shadow-[0_0_10px_rgba(111,251,190,0.5)]"></div>
                    </div>
                </div>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        </section>
    );
}
export default Streak;