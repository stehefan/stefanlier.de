'use client';

import ExperienceCard from "@/app/components/ExperienceCard/ExperienceCard";
import {useState} from "react";

interface ExperienceListProperties {
    data: Experience[];
}


function ExperienceList(props: ExperienceListProperties) {

    const [numberOfExperiences, setNumberOfExperiences] = useState(3)

    return (
        <>
            {props.data.slice(0, numberOfExperiences).map((experience, index) => (
                <ExperienceCard
                    key={index}
                    title={experience.title}
                    timeframe={experience.timeframe}
                    description={experience.description}
                />
            ))}
            <button className={'w-40 p-2 bg-accent text-offwhite mt-3 disabled:opacity-50 disabled:cursor-not-allowed'}
                    onClick={() => setNumberOfExperiences(numberOfExperiences + 3)}
                    disabled={numberOfExperiences >= props.data.length}>
                Load more ...
            </button>
        </>)
}

export default ExperienceList;