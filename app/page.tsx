import Image from 'next/image';
import headshot from './images/headshot.png'
import {IconBrandGithub, IconBrandLinkedin, IconMail} from '@tabler/icons-react';
import Link from "next/link";
import experienceData from "./data/experience.json";
import ExperienceList from "@/app/components/ExperienceList/ExperienceList";

export default function Home() {

    return (
        <div className={'max-w-xl p-2 space-y-2 m-10'}>
            <header className={'flex flex-col items-center space-y-2 mb-5'}>
                <h1>Stefan Lier</h1>
                <Image
                    className={'rounded-full border-offwhite border'}
                    src={headshot}
                    alt="Image of Stefan Lier"
                />
            </header>
            <main className={'flex flex-col items-center space-y-5'}>
                <section className={'description rounded-2xl border-black bg-offwhite border p-2 drop-shadow-md'}>
                    Passionate technologist that is more interested in people than a certain tech stack. Driving
                    culture, growth and personal development is my goal and technology the vehicle to help others
                    grow and create a culture of knowledge sharing in my projects.
                </section>
                <section className={'flex flex-row justify-center gap-4 mt-2'}>
                    <Link target={'_blank'} href={'https://www.github.com/stehefan'} aria-label={'Github-Link'}>
                        <IconBrandGithub className={'contact-icon size-10'} strokeWidth={1} color={'#fff'}/>
                    </Link>
                    <Link target={'_blank'} href={'https://www.linkedin.com/in/stefan-lier/'}
                          aria-label={'LinkedIn-Link'}>
                        <IconBrandLinkedin className={'contact-icon size-10'} strokeWidth={1} color={'#fff'}/>
                    </Link>
                    <Link target={'_blank'} href={'mailto:info@stefanlier.de'} aria-label={'Email'}>
                        <IconMail className={'contact-icon size-10'} strokeWidth={1} color={'#fff'}/>
                    </Link>
                </section>
                <section className={'space-y-5 '}>
                    <header>
                        <h2 className={'mt-5'}>What I&apos;ve been up to lately</h2>
                    </header>
                    <main className={'flex flex-col gap-2 items-center'}>
                        <ExperienceList data={experienceData}/>
                    </main>
                </section>
            </main>
        </div>
    );
}