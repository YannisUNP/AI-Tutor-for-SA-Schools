import {useNavigate, useLocation} from 'react-router-dom';
import {useState} from 'react';

function SidebarItem({ icon, label, path }){
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = location.pathname === path;
    return(
        <a
            onClick={() => navigate(path)}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group ${isActive
                    ? 'bg-primary-container text-on-primary-container font-bold'
                    : 'text-on-surface-variant hover:bg-surface-container-high'
                }`}
            
        >
            <span className="material-symbols-outlined">{icon}</span>
            <span className="font-label-md text-label-md">{label}</span>
        </a>
    );
}
export default SidebarItem;