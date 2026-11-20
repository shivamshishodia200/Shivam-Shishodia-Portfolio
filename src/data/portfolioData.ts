export type ProjectCategory =
  | 'All'
  | 'Featured'
  | 'Mobile & Apps'
  | 'Marketing & Lead Generation'
  | 'CRM & Operations'
  | 'Web & E-Commerce'
  | 'Desktop & AI';

export interface ProjectItem {
  id: string;
  title: string;
  featured: boolean;
  category: string;
  categories?: string[];
  shortSummary: string;
  fullDescription: string;
  highlights: string[];
  stack: string[];
  actionLabel: string;
  accessNote: string;
  status: 'live' | 'auth-required' | 'pending';
  externalUrl?: string;
  coverImage?: string;
  coverAlt?: string;
  gallery?: { src: string; alt: string; caption: string }[];
  projectGoal?: string;
  sourceUrl?: string;
  ownContribution?: string;
  confirmedFeatures?: string[];
  pendingFeatures?: string[];
  marketingFlow?: {
    brandVisuals: string;
    enquiryFlow: string;
  };
  visualType:
    | 'rp-storage'
    | 'delivery-plus'
    | 'attendlok'
    | 'bioglobal'
    | 'naflins'
    | '360crm-ai'
    | 'chatharbor'
    | 'dkb-ventures'
    | 'labelstudio';
}

export interface SkillItem {
  id: string;
  name: string;
  category: string;
  percentage: number;
  tools: string;
}

export interface ServiceItem {
  id: string;
  index: string;
  metric: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export interface CapabilityCard {
  index: string;
  metric: string;
  title: string;
  subtitle: string;
}

export interface TestimonialItem {
  id: string;
  company: string;
  clientName: string;
  role: string;
  projectRef: string;
  rating: number;
  quote: string;
  outcome: string;
}

export const PROFILE = {
  name: 'Shivam Shishodia',
  brandWordmark: 'Shivam.',
  role: 'Full-Stack Developer & Mobile Engineer',
  email: 'shivamshishodia5541@gmail.com',
  address: 'Dadri, Greater Noida, Uttar Pradesh',
  shortLocation: 'Dadri, Greater Noida (UP)',
  availability: 'Available for Freelance & Contract Projects',
  headlineLead: 'FULL-STACK',
  headlineMiddle: '& MOBILE',
  headlineItalic: 'Developer',
  bio: 'I design and engineer production mobile applications (React Native & Flutter), web platforms, logistics CRMs, and performance lead-generation engines. Focused on clean architecture, fluid performance, and dependable deployment.',
  avatar: '/assets/profile-image-portfolio.png',
};

export const HERO_METRICS = [
  { value: '11+', label: 'Delivered Projects' },
  { value: '5+', label: 'Live Systems & Apps' },
  { value: '4+', label: 'Industries Served' },
  { value: '24h', label: 'Response Turnaround' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'mobile-apps',
    index: '01',
    metric: 'iOS & Android',
    title: 'Mobile App Development (React Native & Flutter)',
    subtitle: 'Native cross-platform mobile apps with offline sync, GPS tracking, and fluid 60fps UI.',
    description:
      'End-to-end mobile app engineering for iOS and Android using React Native and Flutter. Features include offline-first architecture, push notifications, camera/location sensors, and high-performance native bridges.',
    features: [
      'React Native & Expo Cross-Platform Apps',
      'Flutter 3 & Dart Mobile Engineering',
      'Real-Time GPS Location & Route Navigation',
      'Offline Local Storage & Biometric Authentication',
    ],
  },
  {
    id: 'social-media-ads',
    index: '02',
    metric: 'Growth & Ads',
    title: 'Social Media Management & Paid Ads',
    subtitle: 'Paid Meta & Google campaigns, brand visual creative direction, and lead-gen funnels.',
    description:
      'Targeted paid advertising and strategic social media management focused on driving high-intent B2B and retail inquiries with clean creative assets and webhook lead sync.',
    features: [
      'Meta (Facebook & Instagram) Paid Ad Setup & Targeting',
      'High-Conversion Creative Direction & Visual Assets',
      'Instant Lead Form Routing to CRM Pipelines',
      'Audience Retargeting & Campaign Optimization',
    ],
  },
  {
    id: 'websites-storefronts',
    index: '03',
    metric: 'B2B & Retail',
    title: 'Websites & E-Commerce Storefronts',
    subtitle: 'Product catalogues, API-driven stores, and lead enquiry funnels.',
    description:
      'High-performance web applications and digital storefronts engineered for fast browsing, crisp product catalogues, and high enquiry conversion.',
    features: [
      'Responsive React 19 & Tailwind Design Systems',
      'Dynamic Product & Category API Integration',
      'B2B Quotation (RFQ) & Enquiry Capture Funnels',
      'Asset Optimization, Fast CDN & SEO Readiness',
    ],
  },
  {
    id: 'crm-workflows',
    index: '04',
    metric: 'Live Ops',
    title: 'CRM Systems & Operations Dashboards',
    subtitle: 'Dispatcher maps, attendance check-ins, and WhatsApp pipelines.',
    description:
      'Custom operational consoles and internal CRM tools that eliminate manual spreadsheets and give field, delivery, and office teams live operational visibility.',
    features: [
      'Interactive Dispatcher Maps & Route Tracking',
      'GPS Location & Camera Verification Workflows',
      'WhatsApp Chat Import & Unified Customer Directory',
      'Role-Gated Permissions & Secure Data Access',
    ],
  },
  {
    id: 'ai-agents',
    index: '05',
    metric: 'Automation',
    title: 'AI Assistants & Workflow Automations',
    subtitle: 'Embedded CRM assistants that accelerate support and routing.',
    description:
      'Context-aware AI integrations that help teams draft responses, summarize customer interactions, and automate repetitive operational data entry.',
    features: [
      'CRM-Embedded AI Chat & Workflow Assistants',
      'Automated Lead Context & Thread Summarization',
      'Intelligent Reply Drafting & Routing Triggers',
      'Autonomous Agent Integrations for Routine Tasks',
    ],
  },
  {
    id: 'desktop-ui',
    index: '06',
    metric: 'Cross-Platform',
    title: 'Desktop Apps & UI/UX Redesigns',
    subtitle: 'Windows desktop utilities and modern brand profile overhauls.',
    description:
      'Native Windows desktop software and focused visual redesigns that elevate brand trust, typography, and workplace packaging reliability.',
    features: [
      'Windows Desktop Label Design & Print Tooling',
      'Corporate Profile & Executive Team UI Redesigns',
      'High-Fidelity Prototyping & Design Systems',
      'Offline-First Packaging & Barcode Layout Reliability',
    ],
  },
];

export const CAPABILITIES: CapabilityCard[] = [
  {
    index: '01',
    metric: 'iOS & Android',
    title: 'Mobile App Development (React Native & Flutter)',
    subtitle: 'Native cross-platform mobile apps with offline sync, GPS tracking, and fluid 60fps UI.',
  },
  {
    index: '02',
    metric: 'Growth & Ads',
    title: 'Social Media Management & Paid Ads',
    subtitle: 'Paid Meta & Google campaigns, brand visual creative direction, and lead-gen funnels.',
  },
  {
    index: '03',
    metric: 'B2B & Retail',
    title: 'Websites & Storefronts',
    subtitle: 'Product catalogues, API-driven stores, and lead enquiry funnels.',
  },
  {
    index: '04',
    metric: 'Live Ops',
    title: 'CRM & Field Workflows',
    subtitle: 'Dispatcher maps, attendance check-ins, and WhatsApp pipelines.',
  },
  {
    index: '05',
    metric: 'Automation',
    title: 'AI & Agent Integrations',
    subtitle: 'Embedded CRM assistants that accelerate support and routing.',
  },
  {
    index: '06',
    metric: 'Cross-Platform',
    title: 'Desktop & UI Redesigns',
    subtitle: 'Windows desktop print utilities and modern brand profile overhauls.',
  },
];

export const ABOUT_HIGHLIGHTS = [
  'React Native & Flutter Mobile Apps',
  'Social Media Ads & Lead-Gen Funnels',
  'UI/UX Architecture & Prototyping',
  'Full-Stack React & API Engineering',
  'CRM & Operations Dashboards',
  'Production Deployment & Optimization',
];

export const SKILLS: SkillItem[] = [
  {
    id: 'react-native',
    name: 'React Native & Mobile',
    category: 'Mobile Engineering',
    percentage: 93,
    tools: 'React Native · Expo · iOS & Android · Redux Toolkit · Maps & Geolocation',
  },
  {
    id: 'flutter-dart',
    name: 'Flutter & Dart',
    category: 'Cross-Platform Mobile',
    percentage: 90,
    tools: 'Flutter 3 · Dart · BLoC / Riverpod · Material 3 · Custom Paint · Hive DB',
  },
  {
    id: 'react-ts',
    name: 'React & TypeScript',
    category: 'Frontend Engineering',
    percentage: 95,
    tools: 'React 19 · TypeScript · Next.js · Vite',
  },
  {
    id: 'tailwind-ui',
    name: 'Tailwind CSS & UI/UX',
    category: 'Design Systems',
    percentage: 96,
    tools: 'Tailwind CSS · Framer Motion · Responsive Layouts',
  },
  {
    id: 'backend-api',
    name: 'REST APIs & Integrations',
    category: 'Backend & Data',
    percentage: 90,
    tools: 'Node.js · Express · Product & Category APIs · Webhooks',
  },
  {
    id: 'crm-ops',
    name: 'CRM & Workflow Systems',
    category: 'Business Platforms',
    percentage: 92,
    tools: 'Dispatcher Maps · GPS Check-In · WhatsApp Sync',
  },
  {
    id: 'social-media-ads',
    name: 'Social Media & Ads',
    category: 'Marketing & Growth',
    percentage: 92,
    tools: 'Meta Ads Manager · Creative Strategy · Lead Generation · Funnels',
  },
  {
    id: 'ai-desktop',
    name: 'AI Agents & Desktop Apps',
    category: 'Specialized Builds',
    percentage: 86,
    tools: 'CRM AI Assistants · Windows Label Utilities',
  },
  {
    id: 'deploy',
    name: 'Deployment & Performance',
    category: 'Production Ops',
    percentage: 91,
    tools: 'Storefront Launches · App Store / Play Store · SEO · Asset Optimization',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'deliverease-react-native',
    title: 'DeliverEase Mobile',
    featured: true,
    category: 'Mobile & Apps',
    categories: ['Mobile & Apps', 'CRM & Operations'],
    shortSummary: 'On-demand delivery & live courier tracking mobile app built with React Native.',
    fullDescription:
      'Full-lifecycle cross-platform mobile application engineered in React Native for couriers and recipients. Unifies live Google Maps route tracking, interactive parcel progress timelines, push alerts, and offline caching.',
    highlights: [
      'Live courier location tracking with custom interactive map markers and route interpolation',
      'Real-time order progress timeline with instant push notifications for status updates',
      'Offline-first caching of active parcels and customer addresses for seamless field use',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Google Maps API', 'Push Notifications', 'Redux Toolkit'],
    accessNote: 'Mobile App Build',
    status: 'live',
    actionLabel: 'View Details',
    coverImage: '/assets/deliverease-rn-preview.jpg',
    coverAlt: 'DeliverEase React Native on-demand delivery mobile application interface',
    gallery: [
      {
        src: '/assets/deliverease-rn-preview.jpg',
        alt: 'DeliverEase mobile delivery tracking interface',
        caption: 'DeliverEase React Native live parcel tracking and courier order flow',
      },
    ],
    projectGoal: 'Give courier teams and customers a high-performance cross-platform mobile app for real-time order tracking and dispatch updates.',
    ownContribution: 'Engineered the React Native architecture, live map navigation layer, push notification service, and order state management.',
    marketingFlow: {
      brandVisuals: 'Dark-mode focused mobile UI with high-contrast amber/orange status badges, custom parcel transit cards, and clean typography designed for outdoor readability.',
      enquiryFlow: 'Frictionless customer booking flow from address auto-complete to instant courier matching and live status notification loop.',
    },
    visualType: 'delivery-plus',
  },
  {
    id: 'finflow-flutter',
    title: 'FinFlow Finance',
    featured: true,
    category: 'Mobile & Apps',
    categories: ['Mobile & Apps'],
    shortSummary: 'Personal finance & expense analytics mobile app built with Flutter and Dart.',
    fullDescription:
      'Sleek cross-platform personal finance mobile app engineered in Flutter 3 and Dart, delivering real-time spending analytics with smooth spline charts, multi-currency budgeting, and biometric lock security.',
    highlights: [
      'Reactive BLoC state architecture ensuring 60fps rendering across iOS and Android devices',
      'Interactive spline expense charts with breakdown by category and spending trends',
      'Biometric authentication (FaceID/Fingerprint) with local encrypted Hive database storage',
    ],
    stack: ['Flutter 3', 'Dart', 'BLoC State Management', 'Hive DB', 'Custom Paint Charts', 'Biometric Auth'],
    accessNote: 'Mobile App Build',
    status: 'live',
    actionLabel: 'View Details',
    coverImage: '/assets/finflow-flutter-preview.jpg',
    coverAlt: 'FinFlow Flutter finance and expense management mobile application interface',
    gallery: [
      {
        src: '/assets/finflow-flutter-preview.jpg',
        alt: 'FinFlow Flutter finance overview dashboard',
        caption: 'FinFlow Flutter personal finance dashboard with interactive balance and expense analytics',
      },
    ],
    projectGoal: 'Provide a secure, fluid, offline-first personal finance tracking experience with beautiful charts and category budgeting.',
    ownContribution: 'Architected the complete Flutter application, BLoC state layer, custom chart rendering, and encrypted local storage.',
    marketingFlow: {
      brandVisuals: 'Premium dark-charcoal UI with warm neon-orange gradient curves, crisp financial metrics, and modern Material 3 typography.',
      enquiryFlow: 'Streamlined quick-action shortcuts for instant expense logging in under 3 taps, paired with budget alert thresholds.',
    },
    visualType: 'rp-storage',
  },
  {
    id: 'attendlok',
    title: 'Attendlok',
    featured: true,
    category: 'Mobile & Apps',
    categories: ['Mobile & Apps', 'CRM & Operations'],
    shortSummary: 'Employee and manager attendance app with selfie and location check-in.',
    fullDescription:
      'Workforce attendance application built for field and office teams, pairing camera selfie capture with real-time GPS location verification and manager oversight.',
    highlights: [
      'Guided selfie capture and geolocation check-in flow for verified daily attendance',
      'Dedicated manager view for reviewing team punctuality, logs, and field check-ins',
      'Mobile-first responsive layout tuned for quick daily use on the go',
    ],
    stack: ['React', 'Geolocation', 'Camera Capture', 'Manager Portal'],
    accessNote: 'Sign-in required',
    status: 'auth-required',
    externalUrl: 'https://www.360crm.cloud/attendlok/',
    actionLabel: 'Open App',
    coverImage: '/assets/attendlok-preview.png',
    coverAlt: 'Attendlok mobile attendance check-in application preview',
    gallery: [
      {
        src: '/assets/attendlok-preview.png',
        alt: 'Attendlok mobile attendance interface',
        caption: 'Attendlok employee camera check-in and GPS verification interface',
      },
    ],
    projectGoal: 'Make employee and field attendance verification fast, accurate, and manager-friendly.',
    ownContribution: 'Designed and implemented the mobile check-in flow and manager-facing attendance interface.',
    visualType: 'attendlok',
  },
  {
    id: 'rp-storage-solution',
    title: 'RP Storage Solution',
    featured: true,
    category: 'Web & E-Commerce',
    categories: ['Web & E-Commerce', 'Marketing & Lead Generation'],
    shortSummary: 'Industrial storage products catalogue and B2B enquiry website.',
    fullDescription:
      'A conversion-focused industrial storage catalogue and enquiry platform engineered for commercial buyers to browse racking systems, compare specifications, and submit instant quotation requests.',
    highlights: [
      'Structured product catalogue with category navigation and specification breakdowns',
      'Streamlined B2B enquiry capture designed for fast mobile and desktop browsing',
      'Responsive industrial visual hierarchy built for clarity and high lead conversion',
    ],
    stack: ['React', 'Tailwind CSS', 'Product Catalogue', 'Lead Capture', 'B2B Funnels'],
    accessNote: 'Live Website',
    status: 'live',
    externalUrl: 'https://rpstoragesolution.com/',
    actionLabel: 'Live Project',
    coverImage: '/assets/rp-storage-preview.png',
    coverAlt: 'RP Storage Solution industrial racking and storage catalogue website preview',
    gallery: [
      {
        src: '/assets/rp-storage-preview.png',
        alt: 'RP Storage Solution industrial catalogue website preview',
        caption: 'RP Storage Solution B2B product catalogue and enquiry interface',
      },
    ],
    projectGoal: 'Give commercial buyers a clear way to browse industrial storage products and request quotations.',
    ownContribution: 'Designed and developed the responsive catalogue, category navigation, product presentation, and B2B enquiry experience.',
    marketingFlow: {
      brandVisuals: 'Engineered high-contrast, structured industrial product layouts with clear technical specification sheets and racking category breakdown to establish instant B2B credibility for warehouse procurement teams.',
      enquiryFlow: 'Streamlined multi-channel enquiry capture featuring frictionless instant RFQ quotation triggers, prominent phone/WhatsApp direct inquiry actions, and category-level quotation buttons without requiring account signup.',
    },
    visualType: 'rp-storage',
  },
  {
    id: 'thebioglobal',
    title: 'TheBioGlobal',
    featured: true,
    category: 'Web & E-Commerce',
    categories: ['Web & E-Commerce', 'Marketing & Lead Generation'],
    shortSummary: 'Beauty and personal care manufacturing website with brand showcase.',
    fullDescription:
      'Corporate web presence for a beauty and personal care manufacturer, presenting private-label formulation services, product capabilities, and quality standards.',
    highlights: [
      'Clean editorial layout tailored for cosmetic & personal care B2B buyers',
      'Organized manufacturing service sections and product category highlights',
      'Fast-loading responsive pages built for desktop and mobile discovery',
    ],
    stack: ['React', 'Tailwind CSS', 'Brand Web', 'Responsive UI', 'B2B Lead Gen'],
    accessNote: 'Live Website',
    status: 'live',
    externalUrl: 'https://thebioglobal.in/',
    actionLabel: 'Live Project',
    coverImage: '/assets/thebioglobal-preview.png',
    coverAlt: 'TheBioGlobal beauty and cosmetic manufacturing showcase website preview',
    gallery: [
      {
        src: '/assets/thebioglobal-preview.png',
        alt: 'TheBioGlobal cosmetic manufacturing homepage',
        caption: 'TheBioGlobal cosmetic manufacturing and private-label formulation showcase',
      },
    ],
    projectGoal: 'Present the manufacturer, private-label services, products, and quality standards clearly to B2B buyers.',
    ownContribution: 'Delivered the corporate UI, responsive page structure, and manufacturing service presentation.',
    marketingFlow: {
      brandVisuals: 'Created a sophisticated editorial aesthetic tailored for cosmetic brand founders, emphasizing formulation purity, high-end packaging aesthetics, and international regulatory compliance cues.',
      enquiryFlow: 'Integrated a structured contract manufacturing inquiry funnel with category-specific formulation requests, private-label capacity inquiries, and direct partnership contact routing.',
    },
    visualType: 'bioglobal',
  },
  {
    id: 'deliveryplus',
    title: 'DeliveryPlus',
    featured: true,
    category: 'CRM & Operations',
    categories: ['CRM & Operations'],
    shortSummary: 'Delivery operations CRM with live dispatcher map and merchant workflows.',
    fullDescription:
      'End-to-end delivery operations CRM unifying live dispatcher map monitoring, rider task assignment, and structured merchant order workflows inside one operational console.',
    highlights: [
      'Interactive dispatcher map for tracking active delivery zones and route assignments',
      'Role-gated merchant and operations workflows with clear order status transitions',
      'Built to handle high-frequency operational updates without UI clutter',
    ],
    stack: ['React', 'Maps & Routing', 'Operations CRM', 'Role Auth'],
    accessNote: 'Sign-in may be required',
    status: 'auth-required',
    externalUrl: 'https://www.deliveryplus.tech/merchant/dispatcher/map',
    actionLabel: 'Open Dispatcher',
    coverImage: '/assets/deliveryplus-preview.png',
    coverAlt: 'DeliveryPlus live dispatcher map with task tracking and delivery console preview',
    gallery: [
      {
        src: '/assets/deliveryplus-preview.png',
        alt: 'DeliveryPlus live dispatcher console',
        caption: 'DeliveryPlus operations CRM dispatcher interface with live route assignments',
      },
    ],
    projectGoal: 'Give delivery teams a unified view of routes, assignments, merchants, and live operational status.',
    ownContribution: 'Built the dispatcher interface and connected the delivery workflow screens and operational dashboard.',
    visualType: 'delivery-plus',
  },
  {
    id: 'naflins',
    title: 'Naflins',
    featured: false,
    category: 'Web & E-Commerce',
    categories: ['Web & E-Commerce'],
    shortSummary: 'E-commerce storefront built with product/category APIs and full deployment.',
    fullDescription:
      'Modern online retail storefront featuring dynamic product and category API integration, smooth collection browsing, and end-to-end production deployment.',
    highlights: [
      'Integrated dynamic product and category API endpoints for real-time catalogue rendering',
      'Configured production build pipeline and live storefront deployment',
      'Responsive shopping layout optimized for clean product discovery',
    ],
    stack: ['React', 'Product & Category API', 'E-Commerce', 'Deployment'],
    accessNote: 'Live Storefront',
    status: 'live',
    externalUrl: 'https://naflins.com/',
    actionLabel: 'Live Project',
    coverImage: '/assets/naflins-preview.png',
    coverAlt: 'Naflins festive retail storefront showcase preview',
    gallery: [
      {
        src: '/assets/naflins-preview.png',
        alt: 'Naflins festive retail storefront',
        caption: 'Naflins online storefront and dynamic product collection browsing',
      },
    ],
    projectGoal: 'Deliver a responsive API-driven retail storefront for efficient product and category discovery.',
    visualType: 'naflins',
  },
  {
    id: '360crm-ai-assistant',
    title: '360CRM AI Assistant',
    featured: false,
    category: 'Desktop & AI',
    categories: ['Desktop & AI'],
    shortSummary: 'AI assistant and autonomous agent integration inside a 360° CRM.',
    fullDescription:
      'Intelligent assistant embedded directly into a CRM workspace, enabling automated context lookup, agent-assisted workflows, and faster team responses.',
    highlights: [
      'Embedded AI assistant interface connected to CRM records and customer threads',
      'Agent workflow triggers for drafting replies and summarizing lead context',
      'Designed to stay unobtrusive alongside core CRM pipeline views',
    ],
    stack: ['AI Agents', 'CRM Integration', 'TypeScript', 'Workflow Automation'],
    actionLabel: 'Demo Pending',
    accessNote: 'Demo URL pending',
    status: 'pending',
    coverImage: '/assets/360crm-ai-preview.png',
    coverAlt: '360CRM AI Assistant embedded intelligence dashboard preview',
    gallery: [
      {
        src: '/assets/360crm-ai-preview.png',
        alt: '360CRM AI assistant dashboard',
        caption: '360CRM embedded AI assistant console with lead contextual suggestions',
      },
    ],
    projectGoal: 'Make CRM context, lead summaries, and routine assistant actions available inside the existing CRM workflow.',
    ownContribution: 'Designed the assistant experience and integrated the workflow interface with CRM screen patterns.',
    visualType: '360crm-ai',
  },
  {
    id: 'chatharbor',
    title: 'ChatHarbor',
    featured: false,
    category: 'CRM & Operations',
    categories: ['CRM & Operations'],
    shortSummary: 'WhatsApp chat import and contact management CRM workspace.',
    fullDescription:
      'Customer communication CRM designed to import WhatsApp chat histories, organize contact profiles, and keep team follow-ups structured in one searchable hub.',
    highlights: [
      'Structured WhatsApp conversation import parser and threaded message timeline',
      'Unified contact directory with notes, tags, and follow-up tracking',
      'Built for fast search and effortless switching across active customer chats',
    ],
    stack: ['React', 'Chat Import', 'Contact CRM', 'Searchable Inbox'],
    actionLabel: 'Demo Pending',
    accessNote: 'Demo URL pending',
    status: 'pending',
    coverImage: '/assets/chatharbor-preview.png',
    coverAlt: 'ChatHarbor WhatsApp contact directory and chat import preview',
    gallery: [
      {
        src: '/assets/chatharbor-preview.png',
        alt: 'ChatHarbor contact management console',
        caption: 'ChatHarbor WhatsApp chat timeline and customer contact directory',
      },
    ],
    projectGoal: 'Organize imported WhatsApp conversations and make customer follow-up work searchable and consistent.',
    ownContribution: 'Built the CRM interface, chat timeline presentation, contact search, and follow-up structure.',
    visualType: 'chatharbor',
  },
  {
    id: 'dkb-ventures',
    title: 'DKB Ventures',
    featured: false,
    category: 'Web & E-Commerce',
    categories: ['Web & E-Commerce'],
    shortSummary: 'Profile section redesign for a beauty and wellness company.',
    fullDescription:
      'Focused UI/UX redesign of the company profile section for a beauty and wellness brand, improving typographic hierarchy, visual balance, and brand trust.',
    highlights: [
      'Restructured executive profile and company story blocks for cleaner scannability',
      'Refined spacing, typography, and mobile responsiveness across breakpoints',
      'Delivered cohesive visual polish aligned with modern wellness aesthetics',
    ],
    stack: ['UI/UX Redesign', 'Tailwind CSS', 'Typography', 'Responsive Web'],
    actionLabel: 'Demo Pending',
    accessNote: 'Demo URL pending',
    status: 'pending',
    coverImage: '/assets/dkb-ventures-preview.png',
    coverAlt: 'DKB Ventures editorial brand and company profile preview',
    gallery: [
      {
        src: '/assets/dkb-ventures-preview.png',
        alt: 'DKB Ventures editorial company profile',
        caption: 'DKB Ventures company profile and executive brand layout',
      },
    ],
    projectGoal: 'Improve the visual hierarchy, trust, and mobile readability of the beauty and wellness company profile.',
    ownContribution: 'Led the profile redesign, visual hierarchy, responsive layout, and implementation.',
    visualType: 'dkb-ventures',
  },
  {
    id: 'labelstudio',
    title: 'LabelStudio',
    featured: false,
    category: 'Desktop & AI',
    categories: ['Desktop & AI'],
    shortSummary: 'Windows desktop application for custom label design and print setup.',
    fullDescription:
      'Dedicated Windows desktop software engineered for designing custom product and shipping labels, configuring dimensions, and managing print setup templates.',
    highlights: [
      'Interactive label canvas supporting barcode, text, and dimension presets',
      'Streamlined Windows setup and printer calibration workflow',
      'Built for fast offline reliability in warehouse and retail packaging environments',
    ],
    stack: ['Windows Desktop', 'Label Canvas', 'Print Setup', 'Packaging Ops'],
    actionLabel: 'Demo Pending',
    accessNote: 'Demo URL pending',
    status: 'pending',
    coverImage: '/assets/labelstudio-preview.png',
    coverAlt: 'LabelStudio desktop label design workspace and print setup preview',
    gallery: [
      {
        src: '/assets/labelstudio-preview.png',
        alt: 'LabelStudio desktop workspace',
        caption: 'LabelStudio Windows label design canvas and thermal print configuration',
      },
    ],
    projectGoal: 'Give warehouse and retail teams a focused desktop workflow for designing and preparing product labels.',
    ownContribution: 'Completed the label-canvas and Windows desktop interface. Barcode rendering and print behavior remain awaiting confirmation.',
    visualType: 'labelstudio',
  },
  {
    id: 'meta-lead-ads-crm',
    title: 'Meta Lead Ads → CRM',
    featured: false,
    category: 'Marketing & Lead Generation',
    categories: ['Marketing & Lead Generation', 'CRM & Operations'],
    shortSummary: 'Automated webhook pipeline syncing Meta lead ad form submissions directly into CRM.',
    fullDescription:
      'Production-ready webhook integration connecting Meta Lead Ads (Facebook & Instagram) directly into internal CRM workspaces for instant lead distribution, field mapping, and real-time alerts.',
    highlights: [
      'Real-time Meta Webhooks subscription with cryptographic signature verification',
      'Automated field normalization from custom Lead Gen forms directly to CRM lead schemas',
      'Instant lead routing and notification pipeline ensuring zero lead response lag',
    ],
    stack: ['Meta Webhooks', 'Graph API', 'Node.js', 'CRM Integration', 'Automated Lead Routing'],
    accessNote: 'Integration Demo',
    status: 'live',
    actionLabel: 'Integration Demo',
    coverAlt: 'Meta Lead Ads to CRM automated webhook integration architecture',
    projectGoal: 'Automate the capture and transfer of incoming Meta Lead Ad submissions directly into the CRM database with zero manual data entry.',
    ownContribution: 'Architected the webhook listener, payload parser, CRM field mapping, and lead routing automation.',
    marketingFlow: {
      brandVisuals: 'Synchronized ad creative campaign tags and form source parameters with CRM lead records for clear campaign attribution.',
      enquiryFlow: 'Zero-latency lead handoff: from the moment a user submits an on-platform Meta Instant Form, the webhook triggers immediate CRM lead creation and automated team notification.',
    },
    visualType: '360crm-ai',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-rp',
    company: 'RP Storage Solution',
    clientName: 'Rajesh Pratap',
    role: 'Managing Director',
    projectRef: 'Industrial Catalogue & Enquiry Website',
    rating: 5,
    quote:
      'Before working with Shivam, buyers had to request PDFs over WhatsApp just to see our racking specifications. He organized our entire industrial storage catalogue into a crisp, fast enquiry site that brought qualified B2B leads within the first month.',
    outcome: 'Streamlined B2B product discovery and faster quotation requests',
  },
  {
    id: 't-delivery',
    company: 'DeliveryPlus',
    clientName: 'Ankit Verma',
    role: 'Head of Operations',
    projectRef: 'Delivery Operations CRM & Dispatcher Map',
    rating: 5,
    quote:
      'Our dispatch team struggled across spreadsheets and disconnected chat groups. Shivam built a unified dispatcher map and merchant workflow CRM that cut manual coordination delays and gave every operator clear live visibility.',
    outcome: 'Unified live dispatch tracking with structured merchant workflows',
  },
  {
    id: 't-naflins',
    company: 'Naflins',
    clientName: 'Farhan Siddiqui',
    role: 'E-Commerce Lead',
    projectRef: 'Storefront & Product/Category API Integration',
    rating: 5,
    quote:
      'Shivam took ownership from frontend storefront UI right through product/category API wiring and live deployment. Every collection page loads cleanly on mobile, and updating catalogue categories now happens seamlessly.',
    outcome: 'Production-ready API storefront deployed smoothly on schedule',
  },
  {
    id: 't-bioglobal',
    company: 'TheBioGlobal',
    clientName: 'Neha Kapoor',
    role: 'Brand & Partnerships Manager',
    projectRef: 'Manufacturing Corporate Website',
    rating: 5,
    quote:
      'We needed a manufacturing website that reflected international cosmetic quality without feeling cluttered. Shivam delivered an editorial, trustworthy layout that makes our formulation capabilities immediately clear to new partners.',
    outcome: 'Elevated B2B brand presentation for beauty & personal care manufacturing',
  },
];
