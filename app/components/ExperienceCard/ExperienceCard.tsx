'use client';

import { format } from 'date-fns';
import Markdown from 'react-markdown';

interface ExperienceProperties {
    data: Experience;
}

function ExperienceCard(props: ExperienceProperties) {
    return (
        <div className="flex flex-col justify-center max-w-xl rounded-xl border-black bg-offwhite border p-4 drop-shadow-md space-y-2">
            <header className="flex flex-col">
                <h3 className="font-bold text-accent">{props.data.title}</h3>
                <div className="text-md font-normal">
                    {format(props.data.startTime, 'MMM yyyy')}
                    {' '}
                    -
                    {props.data.endTime ? format(props.data.endTime, 'MMM yyyy') : 'Present'}
                </div>
            </header>
            <main>
                <Markdown>{props.data.description}</Markdown>
            </main>
        </div>
    );
}

export default ExperienceCard;
