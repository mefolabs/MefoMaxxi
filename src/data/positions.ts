export interface Position {
  id: string;
  title: string;
  category: 'Community' | 'Ecosystem & Growth' | 'Creative & Content';
  icon: string;
  shortDescription: string;
  jobdesk: string[];
  lookingFor: string;
}

export const POSITIONS_DATA: Position[] = [
  {
    id: 'moderator',
    title: 'MODERATOR',
    category: 'Community',
    icon: '🛡️',
    shortDescription: 'Maintain a safe, welcoming, and organized Discord community for creators and builders.',
    jobdesk: [
      'Help moderate the MEFO Discord',
      'Keep conversations friendly and organized',
      'Welcome and help new members',
      'Answer basic questions',
      'Monitor channels and report issues',
      'Help enforce community rules',
      'Support community events when needed'
    ],
    lookingFor: 'Friendly, active, responsible people who enjoy helping others and being part of the community.'
  },
  {
    id: 'community-manager',
    title: 'COMMUNITY MANAGER',
    category: 'Community',
    icon: '🌐',
    shortDescription: 'Orchestrate community momentum, manage moderators, and cultivate the MEFO family vibe.',
    jobdesk: [
      'Help manage the overall MEFO community',
      'Plan community activities',
      'Coordinate moderators',
      'Collect community feedback',
      'Help keep the community active',
      'Support announcements and community campaigns'
    ],
    lookingFor: 'People who understand community building, communication, and Web3 culture.'
  },
  {
    id: 'game-event-moderator',
    title: 'GAME & EVENT MODERATOR',
    category: 'Community',
    icon: '🎮',
    shortDescription: 'Design fun community experiences, host interactive games, and lead competitive Discord events.',
    jobdesk: [
      'Host games',
      'Run competitions',
      'Organize events',
      'Host Discord activities',
      'Create fun community experiences'
    ],
    lookingFor: 'Energetic and creative people who enjoy bringing people together.'
  },
  {
    id: 'collabs-research-alpha',
    title: 'COLLABS / RESEARCH / ALPHA',
    category: 'Ecosystem & Growth',
    icon: '🔎',
    shortDescription: 'Scout emerging Web3 projects, analyze trends, uncover opportunities, and share team alpha.',
    jobdesk: [
      'Research Web3 projects',
      'Find potential collaborations',
      'Find interesting opportunities',
      'Research trends and new ideas',
      'Share useful information with the team'
    ],
    lookingFor: 'Curious people who enjoy researching and discovering opportunities.'
  },
  {
    id: 'partnerships-bd',
    title: 'PARTNERSHIPS / BUSINESS DEVELOPMENT',
    category: 'Ecosystem & Growth',
    icon: '🤝',
    shortDescription: 'Establish strategic alliances, introduce MEFO products, and build bridges across Web3.',
    jobdesk: [
      'Find potential partners',
      'Connect with Web3 projects',
      'Introduce MEFO products and services',
      'Develop collaborations',
      'Build relationships with other projects'
    ],
    lookingFor: 'Good communicators who enjoy networking.'
  },
  {
    id: 'sales',
    title: 'SALES',
    category: 'Ecosystem & Growth',
    icon: '📈',
    shortDescription: 'Connect prospective Web3 teams with MEFO tools, follow up leads, and expand revenue streams.',
    jobdesk: [
      'Find projects that need MEFO tools',
      'Introduce MEFO products',
      'Contact potential customers',
      'Follow up with leads',
      'Help bring new business to MEFOLABS'
    ],
    lookingFor: 'Confident people with good communication and sales skills.'
  },
  {
    id: 'design-creative',
    title: 'DESIGN / CREATIVE',
    category: 'Creative & Content',
    icon: '🎨',
    shortDescription: 'Craft MEFO visual assets, marketing graphics, product visuals, and safeguard brand aesthetics.',
    jobdesk: [
      'Create MEFO graphics',
      'Design banners and marketing materials',
      'Create social media visuals',
      'Help with product visuals',
      'Maintain MEFO\'s visual identity'
    ],
    lookingFor: 'Creative people with good visual skills.'
  },
  {
    id: 'content-social-media',
    title: 'CONTENT / SOCIAL MEDIA',
    category: 'Creative & Content',
    icon: '✍️',
    shortDescription: 'Write high-engagement posts on X, compose announcements, and boost MEFO\'s public presence.',
    jobdesk: [
      'Create X content',
      'Write announcements',
      'Create content ideas',
      'Promote MEFO products',
      'Help grow MEFO\'s online presence'
    ],
    lookingFor: 'Creative people who understand social media and Web3 culture.'
  }
];

export const GOOGLE_FORM_URL = 'https://forms.gle/KLPW2vZ8UpFm4Ens9';
export const DISCORD_URL = 'https://discord.gg/mefolabs';
export const TWITTER_URL = 'https://x.com/mefolabs';
export const WEBSITE_URL = 'https://mefolabs.xyz';
export const PORTAL_URL = 'https://portal.mefolabs.xyz';
