import {
    SiBluesky,
    SiGithub,
} from '@icons-pack/react-simple-icons';
import { SVGProps } from 'react';

const IconLinkedIn = (props: SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
        <title>LinkedIn</title>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);
const IconMail = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="2 4 20 16" fill="currentColor" {...props}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"></path>
        <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"></path>
    </svg>
);

const CUSTOM_ICONS = {
    linkedin: IconLinkedIn,
    mail: IconMail,
};

const SIMPLE_ICONS = {
    bluesky: SiBluesky,
    github: SiGithub,
};

export const ICONS = { ...CUSTOM_ICONS, ...SIMPLE_ICONS };

interface IconProps extends SVGProps<SVGSVGElement> {
    name: string;
}

export const Icon = ({ name, color, ...props }: IconProps) => {
    const iconName = name.toLowerCase();

    if (iconName in SIMPLE_ICONS) {
        const IconComponent = SIMPLE_ICONS[iconName as keyof typeof SIMPLE_ICONS];
        return <IconComponent color={color} {...props} />;
    }

    if (iconName in CUSTOM_ICONS) {
        const IconComponent = CUSTOM_ICONS[iconName as keyof typeof CUSTOM_ICONS];
        // We don't pass color here, it will use `currentColor` from the SVG definition
        return <IconComponent {...props} />;
    }

    return <span className={props.className}>{name}</span>;
};
