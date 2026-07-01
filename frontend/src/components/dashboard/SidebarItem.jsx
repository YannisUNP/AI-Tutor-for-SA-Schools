function SidebarItem({ icon, label, isActive = false }){
    return(
        <a
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group ${isActive
                    ? 'bg-primary-container text-on-primary-container font-bold'
                    : 'text-on-surface-variant hover:bg-surface-container-high'
                }`}
            href="#"
        >
            <span className="material-symbols-outlined">{icon}</span>
            <span className="font-label-md text-label-md">{label}</span>
        </a>
    );
}
export default SidebarItem;