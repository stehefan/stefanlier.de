'use client';

import { IconChevronUp } from '@/app/ui/Icon/Icon';
import { format } from 'date-fns';
import { useState } from 'react';
import Markdown from 'react-markdown';
import TechnologyIcon from '../TechnologyIcon/TechnologyIcon';

interface ExperienceProperties {
    data: Experience;
}

function ExperienceCard(props: ExperienceProperties) {
    const [isExpanded, setIsExpanded] = useState(false);
    const descriptionClassNames = isExpanded ? 'max-h-[1000px]' : 'max-h-[10rem]';
    const buttonClassNames = isExpanded ? 'rotate-0' : 'rotate-180';
    const buttonLabel = isExpanded ? 'Collapse the experience card' : 'Expand the experience card';

    return (
        <div className="flex flex-col justify-center max-w-xl rounded-xl border-black bg-offwhite border p-2 drop-shadow-md space-y-2">
            <header className="flex flex-col">
                <h3 className="font-bold text-accent">{props.data.title}</h3>
                <div className="text-md font-extralight">
                    {format(props.data.startTime, 'MMM yyyy')} - {format(props.data.endTime, 'MMM yyyy')}
                </div>
            </header>
            <div className={`flex flex-col items-center line-clamp-5 pb-14 overflow-hidden transition-[max-height] duration-700 delay-50 linear ${descriptionClassNames}`.trim()}>
                <Markdown>{props.data.description}</Markdown>
                {props.data.technologies && props.data.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-5">
                        {props.data.technologies.map((technology) => (
                            <TechnologyIcon key={technology} technology={technology} />
                        ))}
                    </div>
                )}
            </div>
            <div className="absolute bottom-0 left-0 h-16 pb-2 w-full rounded-b-xl flex flex-col justify-end items-center bg-gradient-to-t from-offwhite via-offwhite via-30% to-transparent ">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    title={buttonLabel}
                    aria-label={buttonLabel}
                    className={`transition-all duration-300 ease-in-out hover:scale-105 ${buttonClassNames}`.trim()}
                >
                    <IconChevronUp size={30} strokeWidth={1} className='bg-offwhite rounded-full' />
                </button>
            </div>
        </div>
    );
}

export default ExperienceCard;
