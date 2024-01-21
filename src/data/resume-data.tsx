import GitHubIcon from '../components/SimpleIconLogos/GitHub';
import XIcon from '../components/SimpleIconLogos/X';
import type * as React from 'react';
import pfp from '../assets/pfp.png';
import stemistLogo from '../assets/stemist.png';

interface ResumeData {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    tel: string;
    social: {
      name: string;
      url: string;
      icon: React.FC<{ className: string }>;
    }[];
  };
  education: {
    school: string;
    degree: string;
    start: string;
    end: string;
  }[];
  work: {
    company: string;
    link: string;
    badges: string[];
    title: string;
    logo?: React.FC;
    start: string;
    end: string;
    description: string;
  }[];
  skills: string[];
  projects: {
    title: string;
    techStack: string[];
    description: string;
    logo?: React.FC;
    link?: {
      label: string;
      href: string;
    };
  }[];
}

export const RESUME_DATA: ResumeData = {
  name: 'Yash Singh',
  initials: 'YS',
  location: 'SF Bay Area',
  locationLink: 'https://www.google.com/maps/place/Bay%20Area',
  about: 'Fullstack programmer who is also a competitive programmer and high schooler',
  summary:
    'As a fullstack programmer, I have 5 years of experience building various applications and developer tooling with a focus on building websites and mobile applications.',
  avatarUrl: pfp.src,
  personalWebsiteUrl: 'https://yashsingh.us/',
  contact: {
    email: 'me@yashsingh.us',
    tel: '+17866181083',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/Yash-Singh1',
        icon: GitHubIcon,
      },
      {
        name: 'X',
        url: 'https://x.com/ysinghdotus',
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: 'Monta Vista High School',
      degree: '',
      start: '2022',
      end: '2026',
    },
  ],
  work: [
    {
      title: 'Open Source Developer and Maintainer',
      description:
        'As an open-source developer, I work on various projects that are relied on by others, i.e. Mermaid.js, schema-inspector, eslint-plugin-userscripts.',
      company: 'Open Source',
      link: 'https://github.com/Yash-Singh1',
      badges: [],
      start: 'June 2020',
      end: 'Present',
    },
    {
      title: 'Website Developer and Tech Specialist',
      description:
        'At Stemist Education, I worked on both the frontend and the backend of our website and also helped with other technical tasks.',
      company: 'Stemist Education',
      link: 'https://joinstemist.org/',
      badges: ['Nonprofit'],
      start: 'April 2022',
      end: 'July 2022',
      logo: () => <img alt='Stemist Logo' src={stemistLogo.src} />,
    },
  ],
  skills: [
    'JavaScript',
    'TypeScript',
    'React/Next.js',
    'Node.js',
    'C++',
    'tRPC',
    'Vite',
    'StyleX',
    'Vue.js',
    'Tailwind/CSS',
  ],
  projects: [
    {
      title: 'StyleX VSCode Extension',
      techStack: ['TypeScript', 'VSCode'],
      description: 'An LSP and VSCode Extension for the StyleX CSS-in-JS library',
      link: {
        label: 'VSCode Marketplace',
        href: 'https://marketplace.visualstudio.com/items?itemName=yash-singh.stylex',
      },
      logo: () => (
        <img
          alt='StyleX Logo'
          src='https://raw.githubusercontent.com/Yash-Singh1/stylex-vscode/main/assets/stylexlogo.png'
        />
      ),
    },
    {
      title: 'eslint-plugin-userscripts',
      techStack: ['TypeScript', 'ESLint'],
      description:
        'ESLint plugin Tampermonkey relies on to validate and autofix userscript metadata',
      link: {
        label: 'GitHub',
        href: 'https://github.com/Yash-Singh1/eslint-plugin-userscripts',
      },
    },
    {
      title: 'SchoolConnect',
      techStack: ['TypeScript', 'React Native', 'Next.js + tRPC', 'Tailwind'],
      description:
        'A real-time mobile app for students and staff to connect and manage their school life',
      link: {
        label: 'GitHub',
        href: 'https://github.com/Yash-Singh1/schoolconnect',
      },
    },
    {
      title: 'competitive-programming',
      techStack: ['C++', 'DSA', 'Bun.js'],
      description: 'My notes and solutions to 600+ problems',
      link: {
        label: 'GitHub',
        href: 'https://github.com/Yash-Singh1/competitive-programming',
      },
    },
    {
      title: 'yashsingh.us',
      techStack: ['TypeScript', 'React', 'Next.js', 'Tailwind', 'SCSS', 'MDX'],
      description: 'My personal website',
      link: {
        label: 'Website',
        href: 'https://www.yashsingh.us/',
      },
    },
    // {
    //   title: 'epack',
    //   techStack: ['JavaScript', 'Web Extension', 'Express.js', 'Node.js'],
    //   description: 'Web tool for easy Developer Tool Extensions. No Chrome Extension scaffolding',
    //   link: {
    //     label: 'GitHub',
    //     href: 'https://github.com/Yash-Singh1/epack',
    //   },
    // },
  ],
} satisfies ResumeData;
