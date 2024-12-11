import Image from 'next/image';
import headshot from './images/headshot.png';
import {IconBrandBluesky, IconBrandGithub, IconBrandLinkedin, IconMail} from '@tabler/icons-react';
import Link from 'next/link';
import ExperienceList from '@/app/components/ExperienceList/ExperienceList';
import { PrismaClient } from '@prisma/client';
import { Open_Sans } from 'next/font/google';

const prisma = new PrismaClient();

const openSans = Open_Sans({
    subsets: ['latin'],
    variable: '--font-open-sans',
});

export default async function Home() {
    const experienceData = await prisma.experience.findMany({
        orderBy: [{
            endTime: 'desc',
        },
        {
            startTime: 'asc',
        },
        ],
    });

    return (
        <div className={`max-w-xl p-2 space-y-2 m-10 ${openSans.variable} font-sans`}>
            <header className="flex flex-col items-center space-y-2 mb-5">
                <Image
                    className="rounded-full border-offwhite border"
                    src={headshot}
                    alt="Image of Stefan Lier"
                    height={256}
                    width={256}
                />
            </header>
            <main className="flex flex-col items-center space-y-5">
                <section className="description rounded-2xl border-black bg-offwhite border p-2 drop-shadow-md">
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
                <section className="flex flex-row justify-center gap-4 mt-2">
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
                <section className="space-y-5 ">
                    <header>
                        <h2 className="mt-5">What I&apos;ve been up to lately</h2>
                    </header>
                    <main className="flex flex-col gap-2 items-center">
                        <ExperienceList data={experienceData} />
                    </main>
                </section>
            </main>
        </div>
    );
}
