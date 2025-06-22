import {
    SiAmazonwebservices,
    SiAnsible,
    SiApachekafka,
    SiCss3,
    SiDocker,
    SiFirebase,
    SiGit,
    SiGnubash,
    SiGooglecloud,
    SiHtml5,
    SiJavascript,
    SiKotlin,
    SiKubernetes,
    SiNodedotjs,
    SiNuxt,
    SiPostgresql,
    SiPython,
    SiRabbitmq,
    SiReact,
    SiScala,
    SiSpringboot,
    SiTerraform,
    SiTypescript,
    SiVuedotjs,
} from '@icons-pack/react-simple-icons';

import { IconAzure, IconJava } from '@/ui/Icon/Icon';

interface TechnologyIconProps {
    technology: string;
    size?: number;
    className?: string;
    strokeWidth?: number;
}

export default function TechnologyIcon({ technology, size = 24, strokeWidth = 1, className = '' }: TechnologyIconProps) {
    const iconProps = {
        size,
        className,
        strokeWidth,
    };

    switch (technology.toLowerCase()) {
        case 'ansible':
            return <SiAnsible {...iconProps} />;
        case 'aws':
            return <SiAmazonwebservices {...iconProps} />;
        case 'azure':
            return <IconAzure {...iconProps} />;
        case 'bash':
            return <SiGnubash {...iconProps} />;
        case 'css':
            return <SiCss3 {...iconProps} />;
        case 'docker':
            return <SiDocker {...iconProps} />;
        case 'firebase':
            return <SiFirebase {...iconProps} />;
        case 'gcp':
            return <SiGooglecloud {...iconProps} />;
        case 'git':
            return <SiGit {...iconProps} />;
        case 'html':
            return <SiHtml5 {...iconProps} />;
        case 'java':
            return <IconJava {...iconProps} />;
        case 'javascript':
            return <SiJavascript {...iconProps} />;
        case 'kafka':
            return <SiApachekafka {...iconProps} />;
        case 'kotlin':
            return <SiKotlin {...iconProps} />;
        case 'kubernetes':
            return <SiKubernetes {...iconProps} />;
        case 'nodejs':
            return <SiNodedotjs {...iconProps} />;
        case 'nuxt':
            return <SiNuxt {...iconProps} />;
        case 'postgresql':
            return <SiPostgresql {...iconProps} />;
        case 'python':
            return <SiPython {...iconProps} />;
        case 'rabbitmq':
            return <SiRabbitmq {...iconProps} />;
        case 'react':
            return <SiReact {...iconProps} />;
        case 'scala':
            return <SiScala {...iconProps} />;
        case 'springboot':
        case 'spring-boot':
            return <SiSpringboot {...iconProps} />;
        case 'terraform':
            return <SiTerraform {...iconProps} />;
        case 'typescript':
            return <SiTypescript {...iconProps} />;
        case 'vue-js':
            return <SiVuedotjs {...iconProps} />;
        default:
            return <span className={className}>{technology}</span>;
    }
}
