import {
    SiAmazonwebservices,
    SiAnsible,
    SiApachekafka,
    SiCss3,
    SiDocker,
    SiGit,
    SiGnubash,
    SiGooglecloud,
    SiHtml5,
    SiJavascript,
    SiKotlin,
    SiKubernetes,
    SiNodedotjs,
    SiNuxtdotjs,
    SiPostgresql,
    SiPython,
    SiRabbitmq,
    SiReact,
    SiScala,
    SiSpringboot,
    SiTerraform,
    SiTypescript,
    SiVuedotjs
} from '@icons-pack/react-simple-icons';

interface TechnologyIconProps {
    technology: string;
    size?: number;
    className?: string;
}

export default function TechnologyIcon({ technology, size = 24, className = '' }: TechnologyIconProps) {
    const iconProps = {
        size,
        className
    };

    switch (technology.toLowerCase()) {
        case 'aws':
            return <SiAmazonwebservices {...iconProps} />;
        case 'gcp':
            return <SiGooglecloud {...iconProps} />;
        case 'azure':
            return <svg
                role="img"
                viewBox="0 0 24 24"
                width={size}
                height={size}
                xmlns="http://www.w3.org/2000/svg"
                className={className}
            >
                <title>Microsoft Azure</title>
                <path d="M22.379 23.343a1.62 1.62 0 0 0 1.536-2.14v.002L17.35 1.76A1.62 1.62 0 0 0 15.816.657H8.184A1.62 1.62 0 0 0 6.65 1.76L.086 21.204a1.62 1.62 0 0 0 1.536 2.139h4.741a1.62 1.62 0 0 0 1.535-1.103l.977-2.892 4.947 3.675c.28.208.618.32.966.32m-3.084-12.531 3.624 10.739a.54.54 0 0 1-.51.713v-.001h-.03a.54.54 0 0 1-.322-.106l-9.287-6.9h4.853m6.313 7.006c.116-.326.13-.694.007-1.058L9.79 1.76a1.722 1.722 0 0 0-.007-.02h6.034a.54.54 0 0 1 .512.366l6.562 19.445a.54.54 0 0 1-.338.684" />
            </svg>;
        case 'javascript':
            return <SiJavascript {...iconProps} />;
        case 'java':
            return <svg
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 384 512"
                className={className}
            >
                <title>Java</title>
                <path fill="currentColor" d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296.5 53.3 242.3 0 242.3 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.7 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7c-18.3-7.9 16-19 26.8-21.3c11.2-2.4 17.7-2 17.7-2c-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5c-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6c0-.1 11.8 9.7 72.4 13.6c92.2 5.9 233.8-3.3 237.1-46.9c0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6c-33.5-3.5-11.6-19.7-11.6-19.7c-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z" />
            </svg>;
        case 'kafka':
            return <SiApachekafka {...iconProps} />;
        case 'kotlin':
            return <SiKotlin {...iconProps} />;
        case 'kubernetes':
            return <SiKubernetes {...iconProps} />;
        case 'nodejs':
            return <SiNodedotjs {...iconProps} />;
        case 'nuxt':
            return <SiNuxtdotjs {...iconProps} />;
        case 'postgresql':
            return <SiPostgresql {...iconProps} />;
        case 'rabbitmq':
            return <SiRabbitmq {...iconProps} />;
        case 'react':
            return <SiReact {...iconProps} />;
        case 'scala':
            return <SiScala {...iconProps} />;
        case 'springboot':
            return <SiSpringboot {...iconProps} />;
        case 'terraform':
            return <SiTerraform {...iconProps} />;
        case 'typescript':
            return <SiTypescript {...iconProps} />;
        case 'vue-js':
            return <SiVuedotjs {...iconProps} />;
        case 'docker':
            return <SiDocker {...iconProps} />;
        case 'git':
            return <SiGit {...iconProps} />;
        case 'spring-boot':
            return <SiSpringboot {...iconProps} />;
        case 'rabbitmq':
            return <SiRabbitmq {...iconProps} />;
        case 'ansible':
            return <SiAnsible {...iconProps} />;
        case 'bash':
            return <SiGnubash {...iconProps} />;
        case 'python':
            return <SiPython {...iconProps} />;
        case 'css':
            return <SiCss3 {...iconProps} />;
        case 'html':
            return <SiHtml5 {...iconProps} />;
        default:
            return <span className={className}>{technology}</span>;
    }
} 