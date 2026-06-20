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
    const featuredExperiences = experienceData.slice(0, 3);

    return (
        <div className={`site-shell ${openSans.variable} font-sans`}>
            <main>
                <section className="hero-section">
                    <div className="hero-copy">
                        <p className="eyebrow">Hamburg based engineering leader</p>
                        <h1>Stefan Lier</h1>
                        <p className="hero-text">
                            I build the conditions for people and products to grow: clear technical direction,
                            useful systems, healthy teams, and the kind of knowledge sharing that keeps momentum
                            alive after the first big push.
                        </p>
                        <div className="hero-actions" aria-label="Contact and social links">
                            <Link target="_blank" href="mailto:stefan@stefanlier.de" aria-label="Send Stefan an email">
                                <Icon name="mail" className="size-6" />
                                <span>Mail</span>
                            </Link>
                            <Link target="_blank" href="https://www.linkedin.com/in/stefan-lier/" aria-label="View Stefan on LinkedIn">
                                <Icon name="linkedin" className="size-6" />
                                <span>LinkedIn</span>
                            </Link>
                            <Link target="_blank" href="https://www.github.com/stehefan" aria-label="View Stefan on GitHub">
                                <Icon name="github" className="size-6" />
                                <span>GitHub</span>
                            </Link>
                            <Link target="_blank" href="https://bsky.app/profile/stehefan.de" aria-label="View Stefan on Bluesky">
                                <Icon name="bluesky" className="size-6" />
                                <span>Bluesky</span>
                            </Link>
                        </div>
                    </div>
                    <div className="portrait-block" aria-label="Portrait of Stefan Lier">
                        <Image
                            priority
                            className="portrait-image"
                            src={headshot}
                            alt="Image of Stefan Lier"
                            height={384}
                            width={384}
                        />
                        <div className="portrait-note">
                            <span>Currently</span>
                            <strong>Engineering Manager at Plancraft</strong>
                        </div>
                    </div>
                </section>

                <section className="principles-section" aria-labelledby="principles-heading">
                    <div className="section-heading">
                        <p className="eyebrow">What I tend to bring</p>
                        <h2 id="principles-heading">Direction, care, and working software.</h2>
                    </div>
                    <div className="principle-grid">
                        <article>
                            <span>01</span>
                            <h3>Architecture that teams can use</h3>
                            <p>Guidelines, platforms, and systems that reduce ambiguity without becoming theater.</p>
                        </article>
                        <article>
                            <span>02</span>
                            <h3>Growth that stays human</h3>
                            <p>Leadership rhythms for hiring, feedback, mentoring, and sustainable team development.</p>
                        </article>
                        <article>
                            <span>03</span>
                            <h3>Pragmatic product delivery</h3>
                            <p>Fast loops from idea to production, with enough craft to keep the next move possible.</p>
                        </article>
                    </div>
                </section>

                <section className="featured-section" aria-labelledby="featured-heading">
                    <div className="section-heading">
                        <p className="eyebrow">Recent focus</p>
                        <h2 id="featured-heading">The latest chapters</h2>
                    </div>
                    <ExperienceList data={featuredExperiences} variant="featured" />
                </section>

                <section className="timeline-section" aria-labelledby="timeline-heading">
                    <div className="section-heading">
                        <p className="eyebrow">Experience</p>
                        <h2 id="timeline-heading">A decade of building, leading, and connecting teams</h2>
                    </div>
                    <ExperienceList data={experienceData} />
                </section>
            </main>
        </div>
    );
}
