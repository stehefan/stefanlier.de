interface ExperienceProperties {
    title: string;
    timeframe: string;
    description: string;
}

function ExperienceCard(props: ExperienceProperties) {
    return (
        <div className={'space-y-1 rounded-xl border-black bg-offwhite border p-2  drop-shadow-md'}>
            <header className={'flex flex-row gap-2'}>
                <h3>{props.title}</h3>
                <span>{props.timeframe}</span>
            </header>
            <main>
                {props.description}
            </main>
        </div>
    );
}

export default ExperienceCard;