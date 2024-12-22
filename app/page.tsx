import Image from 'next/image';
import headshot from './images/headshot.png';
import { IconBrandBluesky, IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import Link from 'next/link';
import ExperienceList from '@/app/components/ExperienceList/ExperienceList';
import { Open_Sans } from 'next/font/google';

import data from '@/data/experiences.json';

const openSans = Open_Sans({
    subsets: ['latin'],
    variable: '--font-open-sans',
});

export default async function Home() {
    const experienceData: Experience[] = data
        .sort((a, b) => {
            const endDiff = new Date(b.endTime).getTime() - new Date(a.endTime).getTime();
            if (endDiff === 0) {
                return new Date(a.startTime).getTime() - new Date(b.startTime).getTime();
            }
            return endDiff;
        })
        .map((experience) => ({
            ...experience,
            startTime: new Date(experience.startTime),
            endTime: new Date(experience.endTime),
        }));

    return (
        <div className={`w-full space-y-2 ${openSans.variable} font-sans flex flex-col items-center mt-5 mb-5`}>
            <header className="max-w-xl flex flex-col items-center">
                <Image
                    className="rounded-full border-offwhite border"
                    src={headshot}
                    alt="Image of Stefan Lier"
                    height={256}
                    width={256}
                />
            </header>
            <main className="flex flex-col items-center w-full space-y-5">
                <section className="max-w-xl rounded-2xl border-black bg-offwhite border p-2 drop-shadow-md">
                    My name is
                    {' '}
                    <b>Stefan Lier</b>
                    {' '}
                    and I am a passionate technologist that is more interested in people
                    than a certain tech stack. Driving culture, growth and personal development is my goal and
                    technology the vehicle to help others grow and create a culture of knowledge sharing.
                    <br />
                    <br />
                    I have been a consultant for a while (see some steps along the way below) and am looking for
                    something new from January 2025 onwards.
                </section>
                <section className="max-w-xl flex flex-row justify-center gap-4">
                    <Link target="_blank" href="https://www.github.com/stehefan" aria-label="Github-Link">
                        <IconBrandGithub className="contact-icon size-10" strokeWidth={1} color="#fff" />
                    </Link>
                    <Link
                        target="_blank"
                        href="https://www.linkedin.com/in/stefan-lier/"
                        aria-label="LinkedIn-Link"
                    >
                        <IconBrandLinkedin className="contact-icon size-10" strokeWidth={1} color="#fff" />
                    </Link>
                    <Link target="_blank" href="https://bsky.app/profile/stehefan.de" aria-label="Bluesky">
                        <IconBrandBluesky className="contact-icon size-10" strokeWidth={1} color="#fff" />
                    </Link>
                    <Link target="_blank" href="mailto:stefan@stefanlier.de" aria-label="Email">
                        <IconMail className="contact-icon size-10" strokeWidth={1} color="#fff" />
                    </Link>
                </section>
                <section className="space-y-5 w-full">
                    <header>
                        <h2 className="mt-5">What I&apos;ve been up to lately</h2>
                    </header>
                    <main className="flex flex-col gap-2 items-center w-full">
                        <ExperienceList data={experienceData} />
                    </main>
                </section>
            </main>
        </div>
    );
}
