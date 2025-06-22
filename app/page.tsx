import { Open_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import ExperienceList from '@/components/ExperienceList/ExperienceList';
import { Icon } from '@/components/Icon/Icon';
import { getProcessedExperiences } from '@/lib/experience';

import headshot from './images/headshot.png';

const openSans = Open_Sans({
    subsets: ['latin'],
    variable: '--font-open-sans',
});

export default async function Home() {
    const experienceData: Experience[] = getProcessedExperiences();

    return (
        <div className={`w-full space-y-2 ${openSans.variable} font-sans flex flex-col items-center`}>
            <header className="max-w-xl flex flex-col items-center">
                <Image
                    className="rounded-full border-accent border"
                    src={headshot}
                    alt="Image of Stefan Lier"
                    height={256}
                    width={256}
                />
            </header>
            <main className="flex flex-col items-center w-full space-y-5">
                <section className="max-w-xl rounded-2xl border-black bg-offwhite border p-2 drop-shadow-md text-lg">
                    I'm a passionate technologist focused on building solutions that empower people.
                    I believe in driving culture, growth, and personal development, and I use technology as a vehicle to help others grow and create a culture of knowledge sharing.
                </section>
                <section className="w-full">
                    <div className="max-w-xl mx-auto flex flex-row justify-center gap-4 pt-2">
                        <Link target="_blank" href="https://www.github.com/stehefan" aria-label="View my profile on GitHub">
                            <Icon name="github" className="contact-icon size-10 text-accent" />
                        </Link>
                        <Link
                            target="_blank"
                            href="https://www.linkedin.com/in/stefan-lier/"
                            aria-label="View my profile on LinkedIn"
                        >
                            <Icon name="linkedin" className="contact-icon size-10 text-accent" />
                        </Link>
                        <Link target="_blank" href="https://bsky.app/profile/stehefan.de" aria-label="View my profile on Bluesky">
                            <Icon name="bluesky" className="contact-icon size-10 text-accent" />
                        </Link>
                        <Link target="_blank" href="mailto:stefan@stefanlier.de" aria-label="Send me an email">
                            <Icon name="mail" className="contact-icon size-10 text-accent" />
                        </Link>
                    </div>
                </section>
                <section className="space-y-5 w-full">
                    <header>
                        <h2 className="mt-5 text-3xl font-bold">What I've been up to lately</h2>
                    </header>
                    <main className="flex flex-col gap-2 items-center w-full">
                        <ExperienceList data={experienceData} />
                    </main>
                </section>
            </main>
        </div>
    );
}
