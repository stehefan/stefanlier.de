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
            <button
                className={'p-1 pl-6 pr-6 bg-accent text-offwhite text-lg font-bold mt-3 disabled:opacity-25 disabled:cursor-not-allowed text-center'}
                onClick={() => setNumberOfExperiences(numberOfExperiences + 3)}
                disabled={numberOfExperiences >= props.data.length}
                title={'Load more ...'}>
                Load more ...<br />
                <small className={'text-xs font-thin'}>({numberOfExperiences} of {props.data.length})</small>
            </button>
        </>)
}

export default ExperienceList;