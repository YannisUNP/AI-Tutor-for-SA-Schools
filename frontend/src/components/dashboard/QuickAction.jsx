function QuickAction({ icon, title, subtitle, variant = 'secondary' }){
    return(
        <button className={`p-6 rounded-xl border border-outline-variant/30 flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:shadow-lg active:scale-95 group ${variant === 'primary'
                ? 'bg-primary text-on-primary'
                : 'bg-surface-container-high'
            }`}>
            <span className={`material-symbols-outlined text-4xl mb-3 group-hover:scale-110 transition-transform ${variant === 'primary' ? 'text-on-primary' : 'text-primary'}`}>
                {icon}
            </span>
            <span className={`font-label-md text-label-md font-bold ${variant === 'primary' ? '' : 'text-primary'}`}>{title}</span>
            <p className={`text-caption mt-1 ${variant === 'primary' ? 'opacity-80' : 'text-on-surface-variant'}`}>{subtitle}</p>
        </button>
    );
}
export default QuickAction;