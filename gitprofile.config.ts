const CONFIG = {
  github: {
    username: 'munaciella', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/munaciella/munaciella.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/munaciella/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [],
        },
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Clarity Notes Capturer',
          description:
            'A notes capturing and collaboration platform, enabling seamless note-taking, real-time collaboration, and powerful backend functionalities. Built with Next.js, JavaScript, and TailwindCSS, using Firebase, Cloudflare and Liveblocks for backend services.',
          imageUrl: './C.png',
          link: 'https://clarity-capture.com',
        },
        {
          title: 'Networking Platform Web App',
          description:
            'A full-stack networking platform built with Next.js, where users can connect, interact, and engage through posts and comments. It leverages Firebase and Cloudflare for data storage, featuring authentication, real-time updates, and a clean, responsive UI.',
          imageUrl: './linkedin.png',
          link: 'https://networked.vercel.app',
        },
        {
          title: 'Events Booking Platform',
          description:
            'A web application for managing events, including user registration, event creation and payment processing. Built with React, JS and TailwindCSS, using Supabase for backend services.',
          imageUrl: './Eventsphere.png',
          link: 'https://event-sphere-web.netlify.app/',
        },
        {
          title: 'Social Media Music App',
          description:
            'A social media platform for music enthusiasts to explore, rate, and review songs and albums from around the world. The app utilises Spotify-API to interact with the backend to fetch the music information.',
          imageUrl: './wax.png',
          link: 'https://github.com/munaciella/gatefold-frontend',
        },
        {
          title: 'News Web App',
          description:
            'A full-stack news web app for exploring, upvoting, downvoting, and managing articles and comments. Built with React, JS, and TailwindCSS on the frontend and integrated with a Node.js/Express backend.',
          imageUrl: './munaciella-news.jpg',
          link: 'https://munaciella.netlify.app/',
        },
        {
          title: 'Recipes Web App',
          description:
            'A web app for viewing, share, comment and vote recipes, including user registration, recipe suggestion and management. Built with Nextjs, TS and TailwindCSS, using Supabase for backend services.',
          imageUrl: './velovegans.jpg',
          link: 'https://velovegans.co.uk',
        },
        {
          title: 'Data Analytics API',
          description:
            'An API developed with TS, Nodejs and PSQL. The API includes database seeding, environment-specific configurations, and robust testing with Jest, demonstrating best practices in database management.',
          imageUrl: './pairsniper.png',
          link: 'https://github.com/munaciella/data-analytics-api',
        },
        {
          title: 'Documentation Web App',
          description:
            'A resourceful web app for a comprehensive collection of notes, guides, and tools aimed at helping developers at the beginning of their journey, those returning to tech, or anyone needing a refresher.',
          imageUrl: './devups.png',
          link: 'https://devups-notes.vercel.app/',
        },
      ],
    },
  },
  seo: {
    title: 'Francesco.dev',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'francesco-vurchio',
    website: 'https://francesco-dev.vercel.app/',
    website3D: 'https://francescovurchio-dev.netlify.app/',
    email: 'francesco.vurchio82@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'TailwindCSS',
    'React.js',
    'Next.js',
    'React Native',
    'Node.js',
    'Express.js',
    'Nest.js',
    'SQL',
    'PostgreSQL',
    'Git',
    'MongoDB',
    'AWS',
    'Cloudflare',
    'Vercel',
    'Supabase',
    'Firebase',
  ],
  experiences: [
    {
      company: 'Ultimate Hero',
      position: 'Data Analytics Consultant (Cryptocurrency)',
      from: 'September 2024',
      to: 'December 2024',
      jobDescription:
        'Designed a scalable database schema for a cryptocurrency data analysis app. Developed database tables, seed scripts, and data migration from JavaScript to TypeScript. Implemented robust error handling, backend management, and integrated Jest for thorough testing.',
    },
    {
      company: 'Tech Returners',
      position: 'Software Engineer Project Consultant',
      from: 'July 2024',
      to: 'August 2024',
      jobDescription:
        'Designed and built a custom web app for the Launchpad project. Integrated OAuth authentication (Google, Supabase) for enhanced security and user experience. Developed backend solutions with Supabase and improved frontend UI/UX with React.',
    },
    {
      company: 'Northcoders',
      position: 'Trainee Full Stack Developer',
      from: 'October 2023',
      to: 'January 2024',
      jobDescription:
        'Completed an intensive bootcamp on full-stack web development. Gained proficiency in test-driven development, Node.js, APIs, databases, and SQL. Built complex web applications using React and modern front-end technologies.',
    },
  ],
  certifications: [
    {
      name: 'Northcoders',
      body: 'Software Engineering Bootcamp',
      year: 'January 2024',
      link: '',
    },
    {
      name: 'Codecademy',
      body: 'Learn Advanced JavaScript',
      year: 'May 2024',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'The Open University',
      degree: 'BSc Hons in Sport Studies',
      from: '2015',
      to: '2021',
    },
  ],
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/munaciella"
      target="_blank"
      rel="noopener noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
