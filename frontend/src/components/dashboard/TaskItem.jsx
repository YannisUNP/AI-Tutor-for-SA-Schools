function TaskItem({ label, subject, isCompleted }){
    return(
        <div className="flex items-center gap-4 group cursor-pointer">
            <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${isCompleted
                    ? 'border-secondary text-secondary'
                    : 'border-outline-variant text-transparent hover:border-primary'
                }`}>
                <span className="material-symbols-outlined text-[16px] font-bold">check</span>
            </div>
            <span className={`font-body-md text-body-md ${isCompleted ? 'text-on-surface-variant line-through opacity-60' : 'text-on-surface'}`}>
                {label}
            </span>
            <span className="ml-auto text-caption font-caption bg-surface-variant px-2 py-0.5 rounded">{subject}</span>
        </div>
    );
}
export default TaskItem;
