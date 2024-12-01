import Markdown from 'react-markdown';
import { Experience } from '@prisma/client';
import { format } from 'date-fns';

interface ExperienceProperties {
    data: Experience;
}

function ExperienceCard(props: ExperienceProperties) {
    return (
        <div className="space-y-1 rounded-xl border-black bg-offwhite border p-2  drop-shadow-md">
            <header className="flex flex-col mb-2">
                <h3 className="font-bold text-accent">{props.data.title}</h3>
                <div className="text-md font-extralight">
                    {format(props.data.startTime, 'MMM yyyy')}
                    {' '}
                    -
                    {format(props.data.endTime, 'MMM yyyy')}
                </div>
            </header>
            <main>
                <Markdown>
                    {props.data.description}
                </Markdown>
            </main>
        </div>
    );
}

export default ExperienceCard;
