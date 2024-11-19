'use client';

import ExperienceCard from "@/app/components/ExperienceCard/ExperienceCard";
import {useState} from "react";
import {usePostHog} from "posthog-js/react";

interface ExperienceListProperties {
    data: Experience[];
}


function ExperienceList(props: ExperienceListProperties) {

    const [numberOfExperiences, setNumberOfExperiences] = useState(3)
    const posthog = usePostHog();

    const loadMore = () => {
        posthog?.capture('load_more', {
            currently_loaded: numberOfExperiences
        });
        setNumberOfExperiences(numberOfExperiences + 3);
    }

    return (
        <>
            {props.data.slice(0, numberOfExperiences).map((experience, index) => (
                <ExperienceCard
                    key={index}
                    data={experience}
                />
            ))}
            <button
                className={'p-1 pl-6 pr-6 bg-accent text-offwhite text-lg font-bold mt-3 disabled:opacity-25 disabled:cursor-not-allowed text-center'}
                onClick={loadMore}
                disabled={numberOfExperiences >= props.data.length}
                title={'Load more ...'}>
                Load more ...<br />
                <small className={'text-xs font-thin'}>({numberOfExperiences} of {props.data.length})</small>
            </button>
        </>)
}

export default ExperienceList;