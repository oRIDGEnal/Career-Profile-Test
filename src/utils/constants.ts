

/**
 * @dev Interfaces for Career Profile and Education
 */

import { IconType } from "react-icons";
import { FaGithub, FaGlobe, FaLinkedin, FaTwitter } from "react-icons/fa";

// Icons
interface IIcon {
    id: string;
    icon: IconType;
    link: string;
}

interface ISkills {
    id: string;
    label: string;
}

/**
 * @dev Data structure for Career Profile
 */

// Socials
export const SocialsData: IIcon[] = [
    {
        id: "twitter",
        icon: FaTwitter,
        link: "#"
    },
    {
        id: "linkedin",
        icon: FaLinkedin,
        link: "#"
    },
    {
        id: "github",
        icon: FaGithub,
        link: "#"
    },
    {
        id: "website",
        icon: FaGlobe,
        link: "#"
    }
]

export const Skills: ISkills[] = [
    {
        id: "React",
        label: "React"
    },
    {
        id: "JavaScript",
        label: "JavaScript"
    },
    {
        id: "HTML5",
        label: "HTML5"
    },
    {
        id: "CSS3",
        label: "CSS3"
    },
    {
        id: "NodeJS",
        label: "NodeJS"
    },
    {
        id: "Express",
        label: "Express"
    },
    {
        id: "MongoDB",
        label: "MongoDB"
    },
    {
        id: "Git",
        label: "Git"
    },
    {
        id: "Responsive Design",
        label: "Responsive Design"
    }
]