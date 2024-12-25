'use client';

import ExperienceCard from '@/app/components/ExperienceCard/ExperienceCard';

interface ExperienceListProperties {
    data: Experience[];
}

function ExperienceList(props: ExperienceListProperties) {
    return (
        <div className="flex flex-col w-full space-y-3">
            {props.data.map((experience, index) => (
                <ExperienceCard
                    key={index}
                    data={experience}
                />
            ))}
        </div>
    );
}

export default ExperienceList;
