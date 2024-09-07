interface ExperienceProperties {
    title: string;
    timeframe: string;
    description: string;
}

function ExperienceCard(props: ExperienceProperties) {
    return (
        <div className={'card'}>
            <h3 className={'title'}>{props.title}</h3>
            <span className={'timeframe'}>{props.timeframe}</span>
            <div className={'description'}>{props.description}</div>
        </div>
    );
}

export default ExperienceCard;