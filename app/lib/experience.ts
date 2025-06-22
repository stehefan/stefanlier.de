import data from '../../data/experiences.json';

type RawExperience = Omit<Experience, 'startTime' | 'endTime'> & {
    startTime: string;
    endTime?: string;
};

export const getProcessedExperiences = (): Experience[] => {
    return (data as RawExperience[])
        .sort((a: RawExperience, b: RawExperience) => {
            const endDiff = new Date(b.endTime ?? new Date()).getTime() - new Date(a.endTime ?? new Date()).getTime();
            if (endDiff === 0) {
                return new Date(a.startTime).getTime() - new Date(b.startTime).getTime();
            }
            return endDiff;
        })
        .map((experience: RawExperience) => ({
            ...experience,
            startTime: new Date(experience.startTime),
            endTime: new Date(experience.endTime ?? new Date()),
        }));
};
