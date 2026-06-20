'use client';

import ExperienceCard from '@/components/ExperienceCard/ExperienceCard';

interface ExperienceListProperties {
    data: Experience[];
    variant?: 'timeline' | 'featured';
}

function ExperienceList(props: ExperienceListProperties) {
    const isFeatured = props.variant === 'featured';

    return (
        <div className={isFeatured ? 'featured-grid' : 'timeline-list'}>
            {props.data.map((experience, index) => (
                <ExperienceCard
                    key={index}
                    data={experience}
                    featured={isFeatured}
                />
            ))}
        </div>
    );
}

export default ExperienceList;
