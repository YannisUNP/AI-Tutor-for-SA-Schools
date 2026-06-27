import { useEffect, useState } from 'react';
function Benefits () {
    return (
        <section className="py-stack-lg bg-surface-container-low/50" id="benefits">
            <div className="max-w-container-max mx-auto px-margin-desktop">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
                    <div className="order-2 md:order-1">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-3xl soft-card-shadow border border-outline-variant/20">
                                <span className="material-symbols-outlined text-primary mb-3">verified</span>
                                <h4 className="font-label-md text-label-md text-on-surface mb-2">Verified Content</h4>
                                <p className="text-caption font-caption text-on-surface-variant">Aligned with current DBE guidelines.</p>
                            </div>
                            <div className="bg-white p-6 rounded-3xl soft-card-shadow border border-outline-variant/20 translate-y-8">
                                <span className="material-symbols-outlined text-secondary mb-3">bolt</span>
                                <h4 className="font-label-md text-label-md text-on-surface mb-2">Instant Help</h4>
                                <p className="text-caption font-caption text-on-surface-variant">No more waiting for a tutor's availability.</p>
                            </div>
                            <div className="bg-white p-6 rounded-3xl soft-card-shadow border border-outline-variant/20">
                                <span className="material-symbols-outlined text-primary mb-3">cloud_sync</span>
                                <h4 className="font-label-md text-label-md text-on-surface mb-2">Multi-Device</h4>
                                <p className="text-caption font-caption text-on-surface-variant">Sync between your phone and laptop.</p>
                            </div>
                            <div className="bg-white p-6 rounded-3xl soft-card-shadow border border-outline-variant/20 translate-y-8">
                                <span className="material-symbols-outlined text-on-tertiary-container mb-3">star</span>
                                <h4 className="font-label-md text-label-md text-on-surface mb-2">Premium Support</h4>
                                <p className="text-caption font-caption text-on-surface-variant">Dedicated help for technical queries.</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 space-y-stack-md">
                        <h2 className="font-headline-lg text-headline-lg text-primary">Why South African students choose StudyMate</h2>
                        <p className="font-body-lg text-body-lg text-on-surface-variant">
                            We bridge the gap between classroom learning and academic excellence. By combining advanced AI with the local curriculum, we provide a tutor that's in your pocket 24/7.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Zero-rated potential for selected networks",
                                "Native support for all major ZA subjects",
                                "Affordable monthly plans for premium features"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                    <span className="font-body-md text-on-surface font-semibold">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Benefits;