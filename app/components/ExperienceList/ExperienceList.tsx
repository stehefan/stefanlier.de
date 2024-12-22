'use client';

import ExperienceCard from '@/app/components/ExperienceCard/ExperienceCard';
import { useState } from 'react';
import { usePostHog } from 'posthog-js/react';

interface ExperienceListProperties {
    data: Experience[];
}

function ExperienceList(props: ExperienceListProperties) {
    const [numberOfExperiences, setNumberOfExperiences] = useState(3);
    const posthog = usePostHog();

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
