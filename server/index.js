import 'dotenv/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

app.use(express.json({ limit: '2mb' }));
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
}, { timestamps: true });

const contentSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  value: { type: mongoose.Schema.Types.Mixed, default: {} },
}, { timestamps: true });

const enquirySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 100 },
  email: { type: String, required: true, trim: true, lowercase: true, maxlength: 160 },
  projectType: { type: String, required: true, trim: true, maxlength: 160 },
  message: { type: String, required: true, trim: true, maxlength: 3000 },
  status: { type: String, enum: ['new', 'read', 'closed'], default: 'new' },
}, { timestamps: true });

const Admin = mongoose.model('Admin', adminSchema);
const Content = mongoose.model('Content', contentSchema);
const Enquiry = mongoose.model('Enquiry', enquirySchema);

const profile = {
  name: 'Shivam Shishodia',
  brandWordmark: 'Shivam.',
  role: 'Full-Stack Developer & UI/UX Designer',
  email: 'shivamshishodia5541@gmail.com',
  address: 'Dadri, Greater Noida, Uttar Pradesh',
  shortLocation: 'Dadri, Greater Noida (UP)',
  availability: 'Available for Freelance & Contract Projects',
  headlineLead: 'FULL-STACK',
  headlineMiddle: '& UI/UX',
  headlineItalic: 'Developer',
  bio: 'I design and engineer production web and app platforms, logistics CRMs, HRMS solutions, e-commerce storefronts, and custom desktop utilities. Focused on clean architecture, fast interfaces, and dependable deployment.',
  avatar: '/assets/profile-image-portfolio.png',
};

const services = [
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

const skills = [
  { id: 'react-native', name: 'React Native & Mobile', category: 'Mobile Engineering', percentage: 93, tools: 'React Native · Expo · iOS & Android · Redux Toolkit · Maps & Geolocation' },
  { id: 'flutter-dart', name: 'Flutter & Dart', category: 'Cross-Platform Mobile', percentage: 90, tools: 'Flutter 3 · Dart · BLoC / Riverpod · Material 3 · Custom Paint · Hive DB' },
  { id: 'social-media-ads', name: 'Social Media & Ads', category: 'Marketing & Growth', percentage: 92, tools: 'Meta Ads Manager · Creative Strategy · Lead Generation · Funnels' },
  { id: 'react-ts', name: 'React & TypeScript', category: 'Frontend Engineering', percentage: 95, tools: 'React 19 · TypeScript · Next.js · Vite' },
  { id: 'tailwind-ui', name: 'Tailwind CSS & UI/UX', category: 'Design Systems', percentage: 96, tools: 'Tailwind CSS · Framer Motion · Responsive Layouts' },
  { id: 'backend-api', name: 'REST APIs & Integrations', category: 'Backend & Data', percentage: 90, tools: 'Node.js · Express · Product & Category APIs · Webhooks' },
  { id: 'crm-ops', name: 'CRM & Workflow Systems', category: 'Business Platforms', percentage: 92, tools: 'Dispatcher Maps · GPS Check-In · WhatsApp Sync' },
  { id: 'ai-desktop', name: 'AI Agents & Desktop Apps', category: 'Specialized Builds', percentage: 86, tools: 'CRM AI Assistants · Windows Label Utilities' },
  { id: 'deploy', name: 'Deployment & Performance', category: 'Production Ops', percentage: 91, tools: 'Storefront Launches · App Store / Play Store · SEO · Asset Optimization' },
];

const metrics = [
  { id: 'projects', value: '9+', label: 'Delivered Projects', visible: true },
  { id: 'systems', value: '3', label: 'Flagship Live Systems', visible: true },
  { id: 'industries', value: '4+', label: 'Industries Served', visible: true },
  { id: 'reply', value: '24h', label: 'Response Turnaround', visible: true },
];

const projects = [
  {
    id: 'deliverease-react-native',
    title: 'DeliverEase Mobile',
    featured: true,
    category: 'Mobile & Apps',
    categories: ['Mobile & Apps', 'CRM & Operations'],
    shortSummary: 'On-demand delivery & live courier tracking mobile app built with React Native.',
    fullDescription: 'Production-ready React Native mobile application for couriers and recipients, integrating live Google Maps navigation, step-by-step parcel order timelines, driver push notifications, and offline delivery logs.',
    highlights: ['Live GPS courier tracking with route drawing and ETA calculation', 'Real-time order progress timeline with automated push alerts', 'Offline-first parcel caching for seamless delivery in low-network zones'],
    stack: ['React Native', 'Expo', 'TypeScript', 'Google Maps API', 'Push Notifications', 'Redux Toolkit'],
    accessNote: 'Mobile App Build',
    status: 'live',
    actionLabel: 'View Details',
    coverImage: '/assets/deliverease-rn-preview.jpg',
    coverAlt: 'DeliverEase React Native on-demand delivery mobile application interface',
    projectGoal: 'Give courier teams and customers a high-performance cross-platform mobile app for real-time order tracking and dispatch updates.',
    ownContribution: 'Engineered the React Native architecture, live map navigation layer, push notification service, and order state management.',
    published: true,
    order: 1,
  },
  {
    id: 'finflow-flutter',
    title: 'FinFlow Finance',
    featured: true,
    category: 'Mobile & Apps',
    categories: ['Mobile & Apps'],
    shortSummary: 'Personal finance & expense analytics mobile app built with Flutter and Dart.',
    fullDescription: 'Cross-platform mobile application built in Flutter 3 and Dart, delivering real-time spending analytics with smooth spline charts, multi-currency budgeting, biometric lock security, and offline Hive database caching.',
    highlights: ['Reactive BLoC state architecture ensuring 60fps rendering across iOS and Android', 'Interactive spline expense charts with breakdown by category and spending trends', 'Biometric authentication (FaceID/Fingerprint) with local encrypted Hive database storage'],
    stack: ['Flutter 3', 'Dart', 'BLoC State Management', 'Hive DB', 'Custom Paint Charts', 'Biometric Auth'],
    accessNote: 'Mobile App Build',
    status: 'live',
    actionLabel: 'View Details',
    coverImage: '/assets/finflow-flutter-preview.jpg',
    coverAlt: 'FinFlow Flutter finance and expense management mobile application interface',
    projectGoal: 'Provide a secure, fluid, offline-first personal finance tracking experience with beautiful charts and category budgeting.',
    ownContribution: 'Architected the complete Flutter application, BLoC state layer, custom chart rendering, and encrypted local storage.',
    published: true,
    order: 2,
  },
  {
    id: 'rp-storage-solution',
    title: 'RP Storage Solution',
    featured: true,
    category: 'Web & E-Commerce',
    categories: ['Web & E-Commerce', 'Marketing & Lead Generation'],
    shortSummary: 'Industrial storage products catalogue and B2B enquiry website.',
    fullDescription: 'A conversion-focused industrial storage catalogue and enquiry platform for commercial buyers.',
    highlights: ['Structured product catalogue', 'Category navigation and specifications', 'B2B enquiry capture'],
    stack: ['React', 'Tailwind CSS', 'Product Catalogue', 'Lead Capture'],
    actionLabel: 'Live Project',
    accessNote: 'Live Project',
    status: 'live',
    externalUrl: 'https://rpstoragesolution.com/',
    coverImage: '/assets/rp-storage-preview.png',
    visualType: 'rp-storage',
    published: true,
    order: 1,
    ownContribution: 'Designed and developed the catalogue experience, responsive UI, category navigation, and B2B enquiry flow.',
    coverAlt: 'RP Storage Solution industrial racking and storage catalogue website preview',
    projectGoal: 'Give commercial buyers a clear way to browse storage products and request quotations.',
    marketingFlow: {
      brandVisuals: 'Engineered high-contrast, structured industrial product layouts with clear technical specification sheets and racking category breakdown to establish instant B2B credibility for warehouse procurement teams.',
      enquiryFlow: 'Streamlined multi-channel enquiry capture featuring frictionless instant RFQ quotation triggers, prominent phone/WhatsApp direct inquiry actions, and category-level quotation buttons without requiring account signup.',
    },
  },
  {
    id: 'deliveryplus',
    title: 'DeliveryPlus',
    featured: true,
    category: 'CRM & Operations',
    categories: ['CRM & Operations'],
    shortSummary: 'Delivery operations CRM with live dispatcher map and merchant workflows.',
    fullDescription: 'End-to-end delivery operations CRM unifying live dispatcher map monitoring, rider assignment, and merchant workflows.',
    highlights: ['Interactive dispatcher map', 'Role-gated merchant workflows', 'Live order status transitions'],
    stack: ['React', 'Maps & Routing', 'Operations CRM', 'Role Auth'],
    actionLabel: 'Open Dispatcher',
    accessNote: 'Sign-in may be required',
    status: 'auth-required',
    externalUrl: 'https://www.deliveryplus.tech/merchant/dispatcher/map',
    coverImage: '/assets/deliveryplus-preview.png',
    visualType: 'delivery-plus',
    published: true,
    order: 2,
    ownContribution: 'Built the dispatcher interface and operational dashboard.',
    coverAlt: 'DeliveryPlus live dispatcher map with task tracking and delivery console preview',
    projectGoal: 'Give delivery teams a unified view of routes, assignments, merchants, and operational status.',
  },
  {
    id: 'attendlok',
    title: 'Attendlok',
    featured: true,
    category: 'CRM & Operations',
    categories: ['CRM & Operations'],
    shortSummary: 'Employee and manager attendance app with selfie and location check-in.',
    fullDescription: 'Workforce attendance application with selfie capture, GPS verification, and manager oversight.',
    highlights: ['Selfie and geolocation check-in', 'Manager attendance review', 'Mobile-first interface'],
    stack: ['React', 'Geolocation', 'Camera Capture', 'Manager Portal'],
    actionLabel: 'Open App',
    accessNote: 'Sign-in required',
    status: 'auth-required',
    externalUrl: 'https://www.360crm.cloud/attendlok/',
    coverImage: '/assets/attendlok-preview.png',
    visualType: 'attendlok',
    published: true,
    order: 3,
    ownContribution: 'Designed and implemented the mobile check-in flow and manager-facing attendance interface.',
    coverAlt: 'Attendlok mobile attendance check-in application preview',
    projectGoal: 'Make employee attendance verification fast, accurate, and manager-friendly.',
  },
  {
    id: 'thebioglobal',
    title: 'TheBioGlobal',
    featured: true,
    category: 'Web & E-Commerce',
    categories: ['Web & E-Commerce', 'Marketing & Lead Generation'],
    shortSummary: 'Beauty and personal care manufacturing website with brand showcase.',
    fullDescription: 'Corporate web presence for a beauty and personal care manufacturer.',
    highlights: ['Editorial layout', 'Manufacturing service sections', 'Responsive pages'],
    stack: ['React', 'Tailwind CSS', 'Brand Web', 'Responsive UI'],
    actionLabel: 'Live Project',
    accessNote: 'Live Project',
    status: 'live',
    externalUrl: 'https://thebioglobal.in/',
    coverImage: '/assets/thebioglobal-preview.png',
    visualType: 'bioglobal',
    published: true,
    order: 4,
    ownContribution: 'Delivered the corporate UI, responsive structure, and manufacturing presentation.',
    coverAlt: 'TheBioGlobal beauty and cosmetic manufacturing showcase website preview',
    gallery: [{ src: '/assets/thebioglobal-preview.png', alt: 'TheBioGlobal cosmetic manufacturing homepage', caption: 'TheBioGlobal manufacturing and formulation showcase' }],
    projectGoal: 'Present manufacturing services and products clearly to B2B buyers.',
    marketingFlow: {
      brandVisuals: 'Created a sophisticated editorial aesthetic tailored for cosmetic brand founders, emphasizing formulation purity, high-end packaging aesthetics, and international regulatory compliance cues.',
      enquiryFlow: 'Integrated a structured contract manufacturing inquiry funnel with category-specific formulation requests, private-label capacity inquiries, and direct partnership contact routing.',
    },
  },
  {
    id: 'naflins',
    title: 'Naflins',
    featured: false,
    category: 'Web & E-Commerce',
    categories: ['Web & E-Commerce'],
    shortSummary: 'E-commerce storefront with product/category APIs and deployment.',
    fullDescription: 'Modern API-driven retail storefront with collection browsing and live deployment.',
    highlights: ['Product and category API integration', 'Production deployment', 'Responsive shopping layout'],
    stack: ['React', 'Product & Category API', 'E-Commerce', 'Deployment'],
    actionLabel: 'Live Project',
    accessNote: 'Live Project',
    status: 'live',
    externalUrl: 'https://naflins.com/',
    coverImage: '/assets/naflins-preview.png',
    visualType: 'naflins',
    published: true,
    order: 5,
    ownContribution: 'Developed the storefront UI, API integration, and production deployment.',
    coverAlt: 'Naflins festive retail storefront showcase preview',
    projectGoal: 'Deliver a responsive API-driven retail storefront.',
  },
  {
    id: '360crm-ai-assistant',
    title: '360CRM AI Assistant',
    featured: false,
    category: 'Desktop & AI',
    categories: ['Desktop & AI'],
    shortSummary: 'AI assistant and agent integration inside a 360-degree CRM.',
    fullDescription: 'Intelligent CRM assistant for context lookup and faster team responses.',
    highlights: ['Embedded assistant', 'Agent workflow triggers', 'CRM context summaries'],
    stack: ['AI Agents', 'CRM Integration', 'TypeScript', 'Workflow Automation'],
    actionLabel: 'Demo Pending',
    accessNote: 'Demo URL pending',
    status: 'pending',
    externalUrl: '',
    coverImage: '/assets/360crm-ai-preview.png',
    visualType: '360crm-ai',
    published: true,
    order: 6,
    ownContribution: 'Designed the assistant experience and integrated CRM workflow screens.',
    coverAlt: '360CRM AI Assistant embedded intelligence dashboard preview',
    projectGoal: 'Make CRM context and routine assistant actions available inside the workflow.',
  },
  {
    id: 'chatharbor',
    title: 'ChatHarbor',
    featured: false,
    category: 'CRM & Operations',
    categories: ['CRM & Operations'],
    shortSummary: 'WhatsApp chat import and contact management CRM workspace.',
    fullDescription: 'CRM for imported WhatsApp chats, contact profiles, and structured follow-ups.',
    highlights: ['Chat timeline import', 'Unified contact directory', 'Search and follow-up tracking'],
    stack: ['React', 'Chat Import', 'Contact CRM', 'Searchable Inbox'],
    actionLabel: 'Demo Pending',
    accessNote: 'Demo URL pending',
    status: 'pending',
    externalUrl: '',
    coverImage: '/assets/chatharbor-preview.png',
    visualType: 'chatharbor',
    published: true,
    order: 7,
    ownContribution: 'Built the CRM interface, chat presentation, contact search, and follow-up structure.',
    coverAlt: 'ChatHarbor WhatsApp contact directory and chat import preview',
    projectGoal: 'Organize imported conversations and make customer follow-up work searchable.',
  },
  {
    id: 'dkb-ventures',
    title: 'DKB Ventures',
    featured: false,
    category: 'Web & E-Commerce',
    categories: ['Web & E-Commerce'],
    shortSummary: 'Profile section redesign for a beauty and wellness company.',
    fullDescription: 'UI/UX redesign with improved typography, visual balance, and brand trust.',
    highlights: ['Restructured profile', 'Refined typography and spacing', 'Responsive polish'],
    stack: ['UI/UX Redesign', 'Tailwind CSS', 'Typography', 'Responsive Web'],
    actionLabel: 'Demo Pending',
    accessNote: 'Demo URL pending',
    status: 'pending',
    externalUrl: '',
    coverImage: '/assets/dkb-ventures-preview.png',
    visualType: 'dkb-ventures',
    published: true,
    order: 8,
    ownContribution: 'Led the profile redesign, visual hierarchy, responsive layout, and implementation.',
    coverAlt: 'DKB Ventures editorial brand and company profile preview',
    projectGoal: 'Improve visual hierarchy and mobile readability.',
  },
  {
    id: 'labelstudio',
    title: 'LabelStudio',
    featured: false,
    category: 'Desktop & AI',
    categories: ['Desktop & AI'],
    shortSummary: 'Windows desktop app for custom label design and print setup.',
    fullDescription: 'Dedicated Windows desktop software for designing custom product and shipping labels, configuring dimensions, and preparing print setup templates.',
    highlights: ['Custom label canvas and dimension presets', 'Windows setup and printer configuration workflow', 'Offline reliability for packaging environments'],
    stack: ['Windows Desktop', 'Label Canvas', 'Print Setup', 'Packaging Ops'],
    actionLabel: 'Demo Pending',
    accessNote: 'Demo URL pending',
    status: 'pending',
    externalUrl: '',
    coverImage: '/assets/labelstudio-preview.png',
    visualType: 'labelstudio',
    published: true,
    order: 9,
    ownContribution: 'Completed label-canvas design and Windows desktop UI work. Barcode rendering and thermal print behavior remain awaiting confirmation.',
    confirmedFeatures: ['Label-canvas UI', 'Label dimensions and layout', 'Windows desktop interface'],
    pendingFeatures: ['Barcode rendering', 'Thermal printer compatibility', 'Printer calibration'],
    coverAlt: 'LabelStudio desktop label design workspace and print setup preview',
    projectGoal: 'Give teams a focused desktop workflow for designing and preparing product labels.',
  },
  {
    id: 'meta-lead-ads-crm',
    title: 'Meta Lead Ads → CRM',
    featured: false,
    category: 'Marketing & Lead Generation',
    categories: ['Marketing & Lead Generation', 'CRM & Operations'],
    shortSummary: 'Automated webhook pipeline syncing Meta lead ad form submissions directly into CRM.',
    fullDescription: 'Production-ready webhook integration connecting Meta Lead Ads directly into internal CRM workspaces for instant lead distribution and real-time alerts.',
    highlights: ['Real-time Meta Webhooks subscription with cryptographic signature verification', 'Automated field normalization to CRM lead schemas', 'Instant lead routing and notification pipeline'],
    stack: ['Meta Webhooks', 'Graph API', 'Node.js', 'CRM Integration', 'Automated Lead Routing'],
    actionLabel: 'Integration Demo',
    accessNote: 'Integration Demo',
    status: 'live',
    externalUrl: '',
    coverImage: '',
    coverAlt: 'Meta Lead Ads to CRM automated webhook integration architecture',
    projectGoal: 'Automate the capture and transfer of incoming Meta Lead Ad submissions directly into CRM.',
    ownContribution: 'Architected the webhook listener, payload parser, CRM field mapping, and lead routing automation.',
    marketingFlow: {
      brandVisuals: 'Synchronized ad creative campaign tags and form source parameters with CRM lead records for clear campaign attribution.',
      enquiryFlow: 'Zero-latency lead handoff: from the moment a user submits an on-platform Meta Instant Form, the webhook triggers immediate CRM lead creation and automated team notification.',
    },
    published: false, // only when demo or approved visuals are available
    order: 10,
  },
];

const testimonials = [
  { id: 't-rp', company: 'RP Storage Solution', clientName: 'Rajesh Pratap', role: 'Managing Director', projectRef: 'Industrial Catalogue & Enquiry Website', rating: 5, quote: 'Before working with Shivam, buyers had to request PDFs over WhatsApp just to see our racking specifications. He organized our entire industrial storage catalogue into a crisp, fast enquiry site that brought qualified B2B leads within the first month.', outcome: 'Streamlined B2B product discovery and faster quotation requests', approved: false, draft: true, status: 'draft' },
  { id: 't-delivery', company: 'DeliveryPlus', clientName: 'Ankit Verma', role: 'Head of Operations', projectRef: 'Delivery Operations CRM & Dispatcher Map', rating: 5, quote: 'Our dispatch team struggled across spreadsheets and disconnected chat groups. Shivam built a unified dispatcher map and merchant workflow CRM that cut manual coordination delays and gave every operator clear live visibility.', outcome: 'Unified live dispatch tracking with structured merchant workflows', approved: false, draft: true, status: 'draft' },
  { id: 't-naflins', company: 'Naflins', clientName: 'Farhan Siddiqui', role: 'E-Commerce Lead', projectRef: 'Storefront & Product/Category API Integration', rating: 5, quote: 'Shivam took ownership from frontend storefront UI right through product/category API wiring and live deployment. Every collection page loads cleanly on mobile, and updating catalogue categories now happens seamlessly.', outcome: 'Production-ready API storefront deployed smoothly on schedule', approved: false, draft: true, status: 'draft' },
  { id: 't-bioglobal', company: 'TheBioGlobal', clientName: 'Neha Kapoor', role: 'Brand & Partnerships Manager', projectRef: 'Manufacturing Corporate Website', rating: 5, quote: 'We needed a manufacturing website that reflected international cosmetic quality without feeling cluttered. Shivam delivered an editorial, trustworthy layout that makes our formulation capabilities immediately clear to new partners.', outcome: 'Elevated B2B brand presentation for beauty & personal care manufacturing', approved: false, draft: true, status: 'draft' },
];

async function seed() {
  const email = (process.env.ADMIN_EMAIL || 'admin@example.com').toLowerCase();
  const password = process.env.ADMIN_PASSWORD || 'change-this-local-password';
  const existingAdmin = await Admin.findOne({ email });
  if (!existingAdmin) {
    await Admin.create({ email, passwordHash: await bcrypt.hash(password, 12) });
  }
  const defaults = { profile, skills, services, metrics, projects, testimonials };
  for (const [key, value] of Object.entries(defaults)) {
    await Content.updateOne({ key }, { $setOnInsert: { value } }, { upsert: true });
  }
}

function auth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  if (!token) return res.status(401).json({ error: 'Authentication required.' });
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || 'local-development-secret');
    req.adminId = payload.sub;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid or expired session.' });
  }
}

app.get('/api/health', (_req, res) => res.json({ ok: true, dbConnected: mongoose.connection.readyState === 1 }));

app.get('/api/content', async (_req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const rows = await Content.find({});
      const content = Object.fromEntries(rows.map((row) => [row.key, row.value]));
      return res.json({
        profile: content.profile || profile,
        skills: content.skills || skills,
        services: content.services || services,
        metrics: content.metrics || metrics,
        projects: (content.projects || projects).filter((project) => project.published !== false).sort((a, b) => (a.order || 0) - (b.order || 0)),
        testimonials: (content.testimonials || testimonials).filter((item) => item.approved),
      });
    }
  } catch (err) {
    console.error('Error reading dynamic content:', err.message);
  }
  res.json({
    profile,
    skills,
    services,
    metrics,
    projects: projects.filter((project) => project.published !== false).sort((a, b) => (a.order || 0) - (b.order || 0)),
    testimonials: testimonials.filter((item) => item.approved),
  });
});

app.post('/api/enquiries', async (req, res) => {
  const { name, email, projectType, message } = req.body || {};
  if (!name?.trim() || !email?.trim() || !projectType?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Please complete all required fields.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }
  try {
    if (mongoose.connection.readyState === 1) {
      const saved = await Enquiry.create({ name: name.trim(), email: email.trim(), projectType: projectType.trim(), message: message.trim() });
      return res.status(201).json({ id: saved.id });
    }
    console.log('Enquiry received (fallback mode):', { name, email, projectType });
    res.status(201).json({ id: 'local-' + Date.now(), note: 'Saved in local fallback mode' });
  } catch (error) {
    res.status(400).json({ error: 'The enquiry could not be saved.' });
  }
});

app.post('/api/admin/login', async (req, res) => {
  const email = String(req.body?.email || '').toLowerCase().trim();
  const password = String(req.body?.password || '');
  const admin = await Admin.findOne({ email });
  if (!admin || !(await bcrypt.compare(password, admin.passwordHash))) {
    return res.status(401).json({ error: 'Incorrect email or password.' });
  }
  const token = jwt.sign({ sub: admin.id }, process.env.JWT_SECRET || 'local-development-secret', { expiresIn: '8h' });
  res.json({ token, email: admin.email });
});

app.get('/api/admin/content', auth, async (_req, res) => {
  const rows = await Content.find({});
  res.json(Object.fromEntries(rows.map((row) => [row.key, row.value])));
});

app.put('/api/admin/content/:key', auth, async (req, res) => {
  const key = ['profile', 'skills', 'services', 'metrics', 'projects', 'testimonials'].includes(req.params.key) ? req.params.key : null;
  if (!key) return res.status(400).json({ error: 'Unknown content section.' });
  const row = await Content.findOneAndUpdate({ key }, { key, value: req.body }, { upsert: true, new: true });
  res.json(row.value);
});

app.get('/api/admin/enquiries', auth, async (_req, res) => {
  res.json(await Enquiry.find({}).sort({ createdAt: -1 }));
});

app.patch('/api/admin/enquiries/:id', auth, async (req, res) => {
  const enquiry = await Enquiry.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
  if (!enquiry) return res.status(404).json({ error: 'Enquiry not found.' });
  res.json(enquiry);
});

app.delete('/api/admin/enquiries/:id', auth, async (req, res) => {
  await Enquiry.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

app.use(express.static(path.join(root, 'dist')));
app.get('*', (_req, res) => res.sendFile(path.join(root, 'dist', 'index.html')));

const port = Number(process.env.PORT || 3001);
const mongoUri = process.env.MONGODB_URI;

app.listen(port, '0.0.0.0', () => {
  console.log(`Portfolio server listening on http://0.0.0.0:${port}`);
});

if (mongoUri) {
  mongoose.connect(mongoUri).then(async () => {
    console.log('MongoDB connected successfully.');
    await seed();
  }).catch((error) => {
    console.warn('MongoDB connection failed. Continuing in standalone fallback mode:', error.message);
  });
} else {
  console.log('No MONGODB_URI provided. Running in standalone fallback mode.');
}
