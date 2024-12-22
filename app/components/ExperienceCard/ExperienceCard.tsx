'use client';

import Markdown from 'react-markdown';
import { format } from 'date-fns';
import { useState } from 'react';
import { IconChevronsDown, IconCircleChevronDown, IconCircleChevronDownFilled } from '@tabler/icons-react';

interface ExperienceProperties {
    data: Experience;
}

function ExperienceCard(props: ExperienceProperties) {
    const [isExpanded, setIsExpanded] = useState(false);
    const descriptionClassNames = isExpanded ? 'max-h-[1000px]' : 'max-h-0';
    const buttonClassNames = isExpanded ? 'rotate-180' : 'rotate-0';
    const buttonLabel = isExpanded ? 'Collapse the experience card' : 'Expand the experience card';
    return (
        <div className="flex flex-col space-y-2 justify-center items-center w-full">
            <div className="max-w-xl space-y-1 rounded-xl border-black bg-offwhite border p-2 drop-shadow-md">
                <header className="flex flex-col mb-2">
                    <h3 className="font-bold text-accent">{props.data.title}</h3>
                    <div className="text-md font-extralight">
                        {format(props.data.startTime, 'MMM yyyy')} - {format(props.data.endTime, 'MMM yyyy')}
                    </div>
                </header>
                <section>
                    {props.data.summary}
                </section>
                <div className="flex justify-center items-center">
                    <button onClick={() => setIsExpanded(!isExpanded)} title={buttonLabel} aria-label={buttonLabel} className={`transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-50 ${buttonClassNames}`.trim()}>
                        <IconCircleChevronDown size={30} stroke={1} />
                    </button>
                </div>
            </div>
            <div className={`flex flex-col items-center w-full overflow-hidden shadow-card bg-offwhite transition-[max-height] duration-700 delay-150 linear ${descriptionClassNames}`.trim()}>
                <div className='max-w-4xl p-5'>
                    <Markdown>{props.data.description}</Markdown>
                </div>
            </div>
        </div >
    );
}

export default ExperienceCard;
