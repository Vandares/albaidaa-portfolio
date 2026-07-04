import {
  Camera,
  Video,
  Megaphone,
  Layout,
  Share,
  Printer,
  Compass,
  Sparkle,
  Layers,
  Grid,
  Target,
} from "../lib/icons.jsx";

// ---- Contact ----
export const CONTACT = {
  email: "info@lavert-sa.com",
  location: "Jeddah, Saudi Arabia",
  instagram: "@lavert.sa",
  instagramUrl: "https://instagram.com/lavert.sa",
  whatsappDisplay: "+966 55 888 1332",
  whatsappNumber: "966558881332",
  phone: "+966 55 888 1332",
};

// ---- Services ----
export const SERVICES = [
  {
    icon: Camera,
    title: "Photography",
    text: "Professional photography for products, food, spaces, lifestyle, and brand campaigns. We create visuals that make your brand look premium, clear, and trustworthy.",
  },
  {
    icon: Video,
    title: "Videography",
    text: "Creative video production for reels, advertisements, campaigns, events, and brand storytelling. We turn ideas into engaging visual content.",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    text: "Strategic marketing support to help your brand communicate better, reach the right audience, and build a stronger presence.",
  },
  {
    icon: Layout,
    title: "Posts Design",
    text: "Professional social media post designs that keep your brand page organized, attractive, and consistent.",
  },
  {
    icon: Share,
    title: "Social Media Management",
    text: "We manage your social media presence through content planning, posting schedules, captions, account organization, and creative direction.",
  },
  {
    icon: Printer,
    title: "Printing",
    text: "Design and preparation of printed materials such as business cards, menus, brochures, packaging, posters, stickers, and outdoor advertising files.",
  },
];

// ---- Portfolio ----
export const CATEGORIES = ["All", "Branding", "Social Media", "Food", "Campaigns"];

export const WORK = [
  { img: "/assets/work/branding-1.png", title: "Visual Identity", cat: "Branding" },
  { img: "/assets/work/social-1.png", title: "Circles — Social", cat: "Social Media" },
  { img: "/assets/work/food-1.png", title: "Food Campaign", cat: "Food" },
  { img: "/assets/work/campaign-1.png", title: "Sol Beach Resort", cat: "Campaigns" },
  { img: "/assets/work/branding-2.png", title: "Brand Applications", cat: "Branding" },
  { img: "/assets/work/social-2.png", title: "Content Design", cat: "Social Media" },
  { img: "/assets/work/food-2.png", title: "Menu Visuals", cat: "Food" },
  { img: "/assets/work/campaign-2.png", title: "Sports Campaign", cat: "Campaigns" },
  { img: "/assets/work/branding-3.png", title: "Mervat Identity", cat: "Branding" },
  { img: "/assets/work/social-3.png", title: "Post Series", cat: "Social Media" },
  { img: "/assets/work/food-3.png", title: "Product Shots", cat: "Food" },
  { img: "/assets/work/campaign-3.png", title: "Match Day", cat: "Campaigns" },
  { img: "/assets/work/social-4.png", title: "Brand Page", cat: "Social Media" },
  { img: "/assets/work/food-4.png", title: "Gourmet Set", cat: "Food" },
  { img: "/assets/work/social-5.png", title: "Feed Direction", cat: "Social Media" },
];

// ---- Showreel videos ----
export const VIDEOS = [
  { src: "/assets/videos/sol.mp4", poster: "/assets/videos/posters/sol.jpg", title: "Sol Beach Resort", tag: "Videography" },
  { src: "/assets/videos/night.mp4", poster: "/assets/videos/posters/night.jpg", title: "Sol — After Dark", tag: "Videography" },
  { src: "/assets/videos/sunset.mp4", poster: "/assets/videos/posters/sunset.jpg", title: "The Sun Sets", tag: "Reel" },
  { src: "/assets/videos/thumb.mp4", poster: "/assets/videos/posters/thumb.jpg", title: "Move Your Thumb", tag: "Reel" },
  { src: "/assets/videos/tkft.mp4", poster: "/assets/videos/posters/tkft.jpg", title: "Match Day", tag: "Campaign" },
];

// ---- Why Us ----
export const WHY = [
  {
    icon: Compass,
    title: "Clear Creative Direction",
    text: "We do not start with random designs. We first understand the brand, audience, goals, and market position.",
  },
  {
    icon: Sparkle,
    title: "Premium Visual Style",
    text: "Our work is designed to feel modern, elegant, and professional while staying true to the brand identity.",
  },
  {
    icon: Layers,
    title: "Complete Creative Support",
    text: "We support brands through design, photography, video, marketing, social media, and printing.",
  },
  {
    icon: Grid,
    title: "Consistent Brand Presence",
    text: "We help brands look organized across Instagram, websites, packaging, printed materials, and campaigns.",
  },
  {
    icon: Target,
    title: "Business-Focused Creativity",
    text: "Our goal is not only to make visuals look good, but to help the brand appear stronger, clearer, and more trusted.",
  },
];

// ---- Process ----
export const PROCESS = [
  {
    title: "Discover",
    text: "We understand your brand, goals, audience, competitors, and the direction you want to achieve.",
  },
  {
    title: "Plan",
    text: "We create a clear creative direction, including visual style, colors, mood, content type, and campaign approach.",
  },
  {
    title: "Create",
    text: "We design, shoot, edit, write, and produce the creative materials your brand needs.",
  },
  {
    title: "Refine",
    text: "We review and improve the details until the final result feels polished and professional.",
  },
  {
    title: "Launch",
    text: "We prepare the final content, files, or campaigns for publishing, printing, or digital use.",
  },
];

// ---- Stats ----
export const STATS = [
  { value: 50, prefix: "+", label: "Creative Projects" },
  { value: 20, prefix: "+", label: "Brands Supported" },
  { value: 6, prefix: "", label: "Core Services" },
  { value: 100, prefix: "", suffix: "%", label: "Custom Creative Direction" },
];
