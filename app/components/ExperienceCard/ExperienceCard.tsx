'use client';

import { format } from 'date-fns';
import Markdown from 'react-markdown';

interface ExperienceProperties {
    data: Experience;
    featured?: boolean;
}

const getFeaturedDescription = (description: string) => {
    const firstParagraph = description.split('\n\n')[0].trim();

    if (firstParagraph.length <= 340) {
        return firstParagraph;
    }

    const sentenceExcerpt = firstParagraph
        .split('. ')
        .slice(0, 2)
        .join('. ');

    return `${sentenceExcerpt.replace(/\.$/, '')}.`;
};

function ExperienceCard(props: ExperienceProperties) {
    const dateRange = `${format(props.data.startTime, 'MMM yyyy')} - ${props.data.endTime ? format(props.data.endTime, 'MMM yyyy') : 'Present'}`;
    const description = props.featured ? getFeaturedDescription(props.data.description) : props.data.description;

    return (
        <article className={props.featured ? 'experience-card experience-card-featured' : 'experience-card'}>
            <header>
                <p>{dateRange}</p>
                <h3>{props.data.title}</h3>
            </header>
            <div className="experience-body">
                <Markdown>{description}</Markdown>
            </div>
        </article>
    );
}

export default ExperienceCard;
