function WeeklyActivity() {
    return (
        <section className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/30">
            <h3 className="font-label-md text-label-md text-on-surface-variant mb-6 uppercase tracking-wider">Weekly Activity (Hours)</h3>
            <div className="h-32 flex items-end justify-between px-2">
                <div className="w-6 bg-surface-dim rounded-t-sm" style={{ height: '40%' }}></div>
                <div className="w-6 bg-surface-dim rounded-t-sm" style={{ height: '60%' }}></div>
                <div className="w-6 bg-surface-dim rounded-t-sm" style={{ height: '35%' }}></div>
                <div className="w-6 bg-primary rounded-t-sm" style={{ height: '90%' }}></div>
                <div className="w-6 bg-surface-dim rounded-t-sm" style={{ height: '55%' }}></div>
                <div className="w-6 bg-surface-dim rounded-t-sm" style={{ height: '70%' }}></div>
                <div className="w-6 bg-surface-dim rounded-t-sm" style={{ height: '20%' }}></div>
            </div>
            <div className="flex justify-between mt-2 text-[10px] font-bold text-on-surface-variant/50 uppercase px-1">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
            <div className="mt-6 pt-6 border-t border-outline-variant/30 flex items-center justify-between">
                <div>
                    <p className="text-[20px] font-bold text-primary">18.5</p>
                    <p className="text-caption text-on-surface-variant">Total Hours</p>
                </div>
                <div className="text-right">
                    <p className="text-caption font-bold text-secondary flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">trending_up</span> +12%
                    </p>
                    <p className="text-caption text-on-surface-variant">vs last week</p>
                </div>
            </div>
        </section>
    );
}
export default WeeklyActivity;