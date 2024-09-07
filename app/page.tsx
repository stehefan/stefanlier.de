import Image from 'next/image';
import headshot from './images/headshot.png'
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';

export default function Home() {
    return (
        <div>
            <header>
                <h1 className={'name'}>Stefan Lier</h1>
                <Image
                    className={'headshot'}
                    src={headshot}
                    alt="Image of Stefan Lier"
                    width={256}
                    height={256}
                />
            </header>
            <main>
                <section className={'description'}>
                    Passionate technologist that is more interested in people than a certain tech stack. Driving
                    culture, growth and personal development is my goal and technology the vehicle to help others
                    grow and create a culture of knowledge sharing in my projects.
                </section>
                <section className={'contact'}>
                    <IconBrandGithub className={'contact-icon'} strokeWidth={1} color={'#fff'}/>
                    <IconBrandLinkedin className={'contact-icon'} strokeWidth={1} color={'#fff'}/>
                    <IconMail className={'contact-icon'} strokeWidth={1} color={'#fff'}/>
                </section>
                <section className={'experience'}>
                    <div className={'experience-card'}>
                        <h3 className={'experience-title'}>Architect</h3>
                        <span className={'experience-timeframe'}>Feb 2024 - Aug 2024</span>
                        <div className={'experience-description'}>
                            Being embedded in a team of three architects, I was responsible for aligning the
                            Macro-Architecture with the teams and collect both business and technical needs for it. This
                            helped to define guidelines for the teams to follow and implement their services against,
                            creating a unified vision for all products. To effectively steer those efforts, we were
                            creating formats to share, discuss and align team-needs and help them to take ownership of
                            their own implementation-details.
                        </div>
                    </div>
                    <div className={'experience-card'}>
                        <h3 className={'experience-title'}>Product Architect</h3>
                        <span className={'experience-timeframe'}>Jan 2023 - Jan 2024</span>
                        <div className={'experience-description'}>
                            As a Product Architect, Stefan provided guidance for five application teams, aligning
                            product architectures with the macro-architecture. He facilitated product-related and
                            technical formats to understand needs and coordinate implementation efforts. Being part of
                            the teams allowed him to maintain proximity and ensure alignment between micro and macro
                            architectures. Stefans approach facilitated swift decision-making and effective development
                            coordination, fostering a culture of knowledge sharing across teams.
                        </div>
                    </div>
                    <div className={'experience-card'}>
                        <h3 className={'experience-title'}>Team and Tech Lead</h3>
                        <span className={'experience-timeframe'}>Jul 2022 - Dec 2022</span>
                        <div className={'experience-description'}>
                            Leading a cloud migration project, Stefan orchestrated the technical roadmap and
                            communication with stakeholders. He crafted a modern, event-driven architecture leveraging
                            both on-premise and Google Cloud capabilities. Through Infrastructure-as-Code, he ensured
                            repeatability and accountability in infrastructure changes. Stefans leadership fostered a
                            culture of knowledge sharing, driving community practices and supporting team onboarding in
                            new technologies.
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
