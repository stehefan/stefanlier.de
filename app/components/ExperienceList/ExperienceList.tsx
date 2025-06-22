'use client';

import ExperienceCard from '@/components/ExperienceCard/ExperienceCard';

interface ExperienceListProperties {
    data: Experience[];
}

function ExperienceList(props: ExperienceListProperties) {
    return (
        <div className="flex flex-col space-y-5">
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
