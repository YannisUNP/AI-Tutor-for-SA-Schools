function Footer(){
    return (
        <footer className="bg-surface-container-low dark:bg-surface-container-highest w-full py-12 px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg max-w-container-max mx-auto">
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_stories</span>
                        <h2 className="font-title-md text-title-md font-bold text-primary">StudyMate AI</h2>
                    </div>
                    <p className="font-caption text-caption text-on-surface-variant max-w-xs">
                        Empowering South African students to reach their full potential through innovative AI technology and localized educational content.
                    </p>
                    <div className="flex gap-4">
                        {['face_nod', 'brand_family', 'alternate_email'].map((icon, idx) => (
                            <a key={idx} className="text-primary hover:opacity-70 transition-opacity" href="#">
                                <span className="material-symbols-outlined">{icon}</span>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                    {[
                        { title: 'Product', links: ['AI Tutor', 'Study Planner', 'Progress'] },
                        { title: 'Company', links: ['About', 'Terms', 'Privacy'] },
                        { title: 'Support', links: ['Help Center', 'Contact Us'] }
                    ].map((group, idx) => (
                        <div key={idx} className="space-y-4">
                            <h3 className="font-label-md text-label-md text-on-surface">{group.title}</h3>
                            <ul className="space-y-2 font-caption text-caption">
                                {group.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <a className="text-on-surface-variant hover:text-primary underline transition-all" href="#">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="max-w-container-max mx-auto border-t border-outline-variant/30 mt-12 pt-8 text-center md:text-left">
                <p className="font-caption text-caption text-on-surface-variant">
                    © 2026 StudyMate AI. Supporting South African Excellence. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
export default Footer;