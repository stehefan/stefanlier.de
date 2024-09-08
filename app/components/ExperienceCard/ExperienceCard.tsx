interface ExperienceProperties {
    title: string;
    timeframe: string;
    description: string;
}

function ExperienceCard(props: ExperienceProperties) {
    return (
        <div className={'space-y-1 rounded-xl border-black bg-offwhite border p-2  drop-shadow-md'}>
            <header className={'flex flex-col mb-2'}>
                <h3 className={'font-bold text-accent'}>{props.title}</h3>
                <div className={'text-md font-extralight'}>{props.timeframe}</div>
            </header>
            <main>
                {props.description}
            </main>
        </div>
    );
}

export default ExperienceCard;