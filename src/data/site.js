// ============================================================
//  LAVERT — site content, AR/EN
//  Copy taken verbatim from Portfolio 2026 + Brand Guideline v1.0.
//  Arabic leads; English sits beneath at about half the size.
// ============================================================

export const CONTACT = {
  email: "info@lavert-sa.com",
  site: "lavert-sa.com",
  instagram: "@lavertoffical",
  instagramUrl: "https://instagram.com/lavertoffical",
  tiktokUrl: "https://tiktok.com/@lavertoffical",
  xUrl: "https://x.com/Lavert_saa",
  x: "@Lavert_saa",
  wa1: { display: "+966 53 217 4142", number: "966532174142" },
  wa2: { display: "+966 50 918 4704", number: "966509184704" },
};

// Scene renders from the brand system, one role each
export const SCENES = {
  moon: "/assets/scenes/moon.webp",
  moonDesert: "/assets/scenes/moon-desert.webp",
  lavender: "/assets/scenes/lavender.webp",
  objects: "/assets/scenes/objects.webp",
  ring: "/assets/scenes/ring.webp",
  portal: "/assets/scenes/portal.webp",
  play: "/assets/scenes/play.webp",
  ribbon: "/assets/scenes/ribbon.webp",
  star: "/assets/scenes/star.webp",
  spherePebble: "/assets/scenes/sphere-pebble.webp",
};

// Showreel — the five compressed clips already in the repo
export const REELS = [
  { src: "/assets/videos/sol.mp4", poster: "/assets/videos/posters/sol.jpg" },
  { src: "/assets/videos/night.mp4", poster: "/assets/videos/posters/night.jpg" },
  { src: "/assets/videos/sunset.mp4", poster: "/assets/videos/posters/sunset.jpg" },
  { src: "/assets/videos/kick.mp4", poster: "/assets/videos/posters/kick.jpg" },
  { src: "/assets/videos/thumb.mp4", poster: "/assets/videos/posters/thumb.jpg" },
  { src: "/assets/videos/tkft.mp4", poster: "/assets/videos/posters/tkft.jpg" },
];

export const CLIENT_LOGOS = [
  ["formula1", "Formula 1"],
  ["isdb", "Islamic Development Bank"],
  ["sol", "SOL Beach Resort"],
  ["bna", "BNA"],
  ["shades", "Shades Beach"],
  ["adahi", "Adahi"],
  ["nightshift", "Night Shift"],
  ["circles", "Circles Gourmet Donuts"],
  ["padel", "Padel Court"],
  ["velvet", "Velvet Care Clinics"],
  ["nova", "Nova"],
  ["shawarma", "Shawarma Al Taam"],
  ["mervat", "Mervat"],
  ["almawj", "Almawj Clinic Group"],
  ["sky", "Sky Clinic"],
  ["hosn", "Hosn Al Raeda"],
  ["abc", "ABC Gourmet Donuts"],
  ["leos", "Leos"],
];

const T = {
  ar: {
    dir: "rtl",
    switchTo: "EN",
    switchAria: "Switch to English",

    nav: {
      links: [
        { label: "من نحن", href: "#about" },
        { label: "خدماتنا", href: "#services" },
        { label: "أعمالنا", href: "#work" },
        { label: "عرض الأعمال", href: "#showreel" },
        { label: "تواصل معنا", href: "#contact" },
      ],
      cta: "ابدأ مشروعك",
      open: "فتح القائمة",
      close: "إغلاق القائمة",
    },

    hero: {
      kicker: "وكالة إبداعية · جدة",
      kickerEn: "Creative Agency · Jeddah",
      h1a: "وكالة",
      h1b: "إبداعية.",
      slogan: "من خيالك نصنع واقع.",
      sloganEn: "We turn imagination into reality",
      cta1: "ابدأ مشروعك",
      cta2: "شوف أعمالنا",
      scroll: "Scroll",
    },

    about: {
      kicker: "من نحن",
      kickerEn: "Who we are",
      h1: "حنا",
      h2: "لافيرت.",
      en: "We are LAVERT",
      body: "وكالة إبداعية من جدة، نبني البراندات بالاستراتيجية والتصميم والتصوير والفيديو والمحتوى الرقمي. نشتغل مع اللي يبون براندهم يطلع بشكل احترافي، يوصل رسالته بوضوح، ويكبر بثقة.",
      stats: [
        { v: "+50", k: "مشروع إبداعي" },
        { v: "+20", k: "براند اشتغلنا معه" },
        { v: "2024", k: "سنة التأسيس" },
      ],
    },

    name: {
      kicker: "الاسم",
      kickerEn: "The name",
      h1: "من اللافندر",
      h2: "وليل الصحراء.",
      en: "Born from lavender and the desert night",
      body: "الإبداع عندنا لغة ما لها حدود. ولافيرت مو بس اسم: هي امتداد لهدوء الصحراء وسكون الليل تحت ضوء القمر، ومن هالليل جات ألواننا البنفسجية الهادية. نصمم تجارب بصرية شكلها بسيط، وأثرها عميق.",
      quote: "«الإبداع لغة ما لها حدود.»",
      quoteEn: "Creativity is a language that knows no borders.",
    },

    services: {
      kicker: "خدماتنا",
      kickerEn: "Services",
      h1: "كل اللي يحتاجه براندك،",
      h2: "تحت سقف واحد.",
      en: "Everything your brand needs, under one roof",
      items: [
        {
          t: "الهوية وإدارة العلامة",
          en: "Branding & brand management",
          d: "نبني هوية تعكس شخصية البراند وتقوّي مكانته في السوق.",
        },
        {
          t: "التصوير",
          en: "Photography",
          d: "منتجات وأكل وأماكن وحملات، بصورة تخلّي البراند يبان فخم وموثوق.",
        },
        {
          t: "الفيديو",
          en: "Videography",
          d: "ريلز وإعلانات وحملات وفعاليات، نحوّل الفكرة لمحتوى يشد.",
        },
        {
          t: "التسويق والحملات",
          en: "Marketing & campaigns",
          d: "حملات توصل رسالتك للجمهور الصح وبدقة.",
        },
        {
          t: "تصميم المنشورات",
          en: "Social posts design",
          d: "تصاميم سوشال مرتبة وجذابة ومتناسقة مع هويتك.",
        },
        {
          t: "إدارة السوشال ميديا",
          en: "Social media management",
          d: "خطة محتوى، جدولة، كابشنات، وتوجيه إبداعي كامل.",
        },
        {
          t: "الطباعة",
          en: "Printing",
          d: "كروت ومنيوهات وبروشورات وتغليف وبوسترات ولوحات.",
        },
        {
          t: "المواقع والأنظمة الرقمية",
          en: "UI/UX & web",
          d: "مواقع وأنظمة رقمية بتجربة استخدام سلسة وفعّالة.",
        },
      ],
    },

    work: {
      kicker: "أعمالنا",
      kickerEn: "Selected work",
      h1: "شغل",
      h2: "نفتخر فيه.",
      en: "Work we are proud of",
      ghost: "WORK",
      items: [
        { name: "FK Brothers", kind: "هوية بصرية" },
        { name: "Braq", kind: "هوية بودكاست" },
        { name: "Selection Café", kind: "هوية بصرية" },
        { name: "Mervat", kind: "هوية وتغليف وسوشال" },
        { name: "SOL Beach Resort", kind: "حملات سوشال ميديا" },
        { name: "SOL Food", kind: "تصوير أكل ومنتجات" },
        { name: "Circles Donuts", kind: "محتوى سوشال ميديا" },
        { name: "2Trendy", kind: "توجيه إبداعي" },
        { name: "SOL · Shades", kind: "أنظمة رقمية" },
        { name: "Formula 1", kind: "مواقع إلكترونية" },
        { name: "Showreel", kind: "فيديو" },
      ],
    },

    showreel: {
      kicker: "شغل متحرك",
      kickerEn: "Work in motion",
      h1: "اضغط",
      h2: "وشوف بنفسك.",
      en: "Tap to watch",
      lead: "ريلز وحملات وفعاليات. كل فيديو هنا شغل حقيقي سلّمناه لعميل.",
      play: "تشغيل",
      close: "إغلاق",
      items: [
        { name: "SOL Beach Resort", tag: "Videography" },
        { name: "سول بعد الغروب", tag: "Videography" },
        { name: "غروب الشمس", tag: "Reel" },
        { name: "كيك إف سي: تحدي الضربات", tag: "Event" },
        { name: "حرّك إبهامك", tag: "Reel" },
        { name: "Funk Time", tag: "Campaign" },
      ],
    },

    why: {
      kicker: "ليش لافيرت",
      kickerEn: "Why LAVERT",
      h1: "إبداع",
      h2: "له هدف.",
      en: "Creativity with intention",
      lead: "ما نسوي شغل حلو وبس، نخلّي براندك يبان أقوى وأوضح وأوثق.",
      ghost: "WHY",
      items: [
        {
          t: "اتجاه إبداعي واضح",
          en: "Clear creative direction",
          d: "ما نبدأ بتصاميم عشوائية. نفهم البراند والجمهور والأهداف ومكانك في السوق أول.",
        },
        {
          t: "ستايل بصري فاخر",
          en: "Premium visual style",
          d: "شغل عصري وأنيق واحترافي، ويبقى وفي لهوية البراند.",
        },
        {
          t: "دعم إبداعي متكامل",
          en: "Complete creative support",
          d: "تصميم وتصوير وفيديو وتسويق وسوشال وطباعة، كلها عندنا.",
        },
        {
          t: "حضور متناسق",
          en: "Consistent brand presence",
          d: "براندك مرتب في السوشال ميديا والموقع والتغليف والمطبوعات والحملات.",
        },
        {
          t: "إبداع يخدم البزنس",
          en: "Business-focused creativity",
          d: "هدفنا مو بس شكل حلو؛ نبي براندك يبان أقوى وأوضح وأوثق.",
        },
      ],
    },

    process: {
      kicker: "طريقتنا",
      kickerEn: "Our process",
      h1: "خمس خطوات،",
      h2: "من الفكرة للإطلاق.",
      en: "Five steps from idea to launch",
      items: [
        {
          t: "نكتشف",
          en: "Discover",
          d: "نفهم براندك وأهدافك وجمهورك ومنافسينك والاتجاه اللي تبيه.",
        },
        {
          t: "نخطط",
          en: "Plan",
          d: "نحط اتجاه إبداعي واضح: الستايل والألوان ونوع المحتوى والحملة.",
        },
        {
          t: "ننفّذ",
          en: "Create",
          d: "نصمم ونصوّر ونمنتج ونكتب كل المواد اللي يحتاجها براندك.",
        },
        {
          t: "نصقل",
          en: "Refine",
          d: "نراجع ونحسّن التفاصيل لين تطلع النتيجة مصقولة واحترافية.",
        },
        {
          t: "نطلق",
          en: "Launch",
          d: "نجهّز المحتوى والملفات والحملات للنشر أو الطباعة أو الاستخدام الرقمي.",
        },
      ],
    },

    clients: {
      kicker: "عملاؤنا",
      kickerEn: "Clients",
      h1: "عملاؤنا،",
      h2: "شركاء النجاح.",
      en: "Our clients, our partners in success",
    },

    contact: {
      kicker: "تواصل معنا",
      kickerEn: "Contact",
      h1: "نسوي شي",
      h2: "حلو مع بعض.",
      en: "Let us create something together",
      lead: "احكِ لنا عن براندك وش تحتاج. أرسل النموذج على الواتساب ونرد عليك.",
      ch: {
        wa: "واتساب",
        email: "البريد الإلكتروني",
        site: "الموقع",
        instagram: "إنستغرام",
        x: "منصة X",
      },
      form: {
        name: "اسمك",
        namePh: "مثال: سارة",
        brand: "البراند / النشاط",
        brandPh: "مثال: سول بيتش",
        service: "الخدمة المطلوبة",
        servicePh: "هوية، تصوير، سوشال ميديا…",
        msg: "تفاصيل المشروع",
        msgPh: "احكِ لنا شوي عن مشروعك…",
        submit: "أرسل على واتساب",
        note: "يفتح واتساب ورسالتك جاهزة.",
      },
      wa: {
        greeting: "مرحبًا لافيرت! أبي أبدأ مشروع.",
        name: "الاسم",
        brand: "البراند / النشاط",
        service: "الخدمة المطلوبة",
        details: "التفاصيل",
        empty: "-",
      },
    },

    footer: {
      about:
        "وكالة إبداعية من جدة، المملكة العربية السعودية. الهوية والتصميم والتصوير والفيديو والتسويق والسوشال والطباعة والمواقع، تحت سقف واحد.",
      explore: "تصفّح",
      reach: "تواصل",
      links: [
        { label: "من نحن", href: "#about" },
        { label: "خدماتنا", href: "#services" },
        { label: "أعمالنا", href: "#work" },
        { label: "طريقتنا", href: "#process" },
        { label: "تواصل معنا", href: "#contact" },
      ],
      closeA: "للهدوء",
      closeB: "لغة.",
      tagline: "Calm has a language",
      rights: "لافيرت. من خيالك نصنع واقع.",
    },

    aria: { wa: "تواصل عبر واتساب" },
  },

  // ==========================================================
  en: {
    dir: "ltr",
    switchTo: "ع",
    switchAria: "التبديل إلى العربية",

    nav: {
      links: [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Work", href: "#work" },
        { label: "Showreel", href: "#showreel" },
        { label: "Contact", href: "#contact" },
      ],
      cta: "Start a project",
      open: "Open menu",
      close: "Close menu",
    },

    hero: {
      kicker: "Creative Agency · Jeddah",
      kickerEn: "وكالة إبداعية · جدة",
      h1a: "A creative",
      h1b: "agency.",
      slogan: "We turn imagination into reality.",
      sloganEn: "من خيالك نصنع واقع",
      cta1: "Start a project",
      cta2: "See our work",
      scroll: "Scroll",
    },

    about: {
      kicker: "Who we are",
      kickerEn: "من نحن",
      h1: "We are",
      h2: "LAVERT.",
      en: "حنا لافيرت",
      body: "A creative agency from Jeddah. We build brands through strategy, design, photography, videography and digital content — helping them look professional, communicate clearly and grow with confidence.",
      stats: [
        { v: "+50", k: "Creative projects" },
        { v: "+20", k: "Brands supported" },
        { v: "2024", k: "Established" },
      ],
    },

    name: {
      kicker: "The name",
      kickerEn: "الاسم",
      h1: "Born from lavender",
      h2: "and the desert night.",
      en: "من اللافندر وليل الصحراء",
      body: "Our name comes from lavender — calm, natural, elegant — and from the stillness of a desert night under the moon. That feeling shapes our work: balanced, refined and intentional. We never design at random: we understand the brand, study its audience, set the direction, then create what helps it grow.",
      quote: "“Creativity is a language that knows no borders.”",
      quoteEn: "الإبداع لغة ما لها حدود",
    },

    services: {
      kicker: "Services",
      kickerEn: "خدماتنا",
      h1: "Everything your brand needs,",
      h2: "under one roof.",
      en: "كل اللي يحتاجه براندك، تحت سقف واحد",
      items: [
        {
          t: "Branding & brand management",
          en: "الهوية وإدارة العلامة",
          d: "We build an identity that reflects the brand and strengthens its place in the market.",
        },
        {
          t: "Photography",
          en: "التصوير",
          d: "Products, food, spaces and campaigns, shot so the brand looks premium and trusted.",
        },
        {
          t: "Videography",
          en: "الفيديو",
          d: "Reels, ads, campaigns and events. We turn the idea into content that holds attention.",
        },
        {
          t: "Marketing & campaigns",
          en: "التسويق والحملات",
          d: "Campaigns that carry your message to the right audience, precisely.",
        },
        {
          t: "Social posts design",
          en: "تصميم المنشورات",
          d: "Social designs that stay ordered, attractive and consistent with your identity.",
        },
        {
          t: "Social media management",
          en: "إدارة السوشال ميديا",
          d: "Content plan, scheduling, captions and full creative direction.",
        },
        {
          t: "Printing",
          en: "الطباعة",
          d: "Cards, menus, brochures, packaging, posters and signage.",
        },
        {
          t: "UI/UX & web",
          en: "المواقع والأنظمة الرقمية",
          d: "Websites and digital systems with a smooth, effective experience.",
        },
      ],
    },

    work: {
      kicker: "Selected work",
      kickerEn: "أعمالنا",
      h1: "Work we",
      h2: "are proud of.",
      en: "شغل نفتخر فيه",
      ghost: "WORK",
      items: [
        { name: "FK Brothers", kind: "Brand identity" },
        { name: "Braq", kind: "Podcast identity" },
        { name: "Selection Café", kind: "Brand identity" },
        { name: "Mervat", kind: "Identity, packaging & social" },
        { name: "SOL Beach Resort", kind: "Social campaigns" },
        { name: "SOL Food", kind: "Food & product visuals" },
        { name: "Circles Donuts", kind: "Social content" },
        { name: "2Trendy", kind: "Creative direction" },
        { name: "SOL · Shades", kind: "Digital systems" },
        { name: "Formula 1", kind: "Websites" },
        { name: "Showreel", kind: "Video" },
      ],
    },

    showreel: {
      kicker: "Work in motion",
      kickerEn: "شغل متحرك",
      h1: "Press and",
      h2: "see for yourself.",
      en: "اضغط وشوف بنفسك",
      lead: "Reels, campaigns and events. Every video here is real work we delivered.",
      play: "Play",
      close: "Close",
      items: [
        { name: "SOL Beach Resort", tag: "Videography" },
        { name: "SOL — After Dark", tag: "Videography" },
        { name: "The Sun Sets", tag: "Reel" },
        { name: "Kick FC — Penalty Challenge", tag: "Event" },
        { name: "Move Your Thumb", tag: "Reel" },
        { name: "Funk Time", tag: "Campaign" },
      ],
    },

    why: {
      kicker: "Why LAVERT",
      kickerEn: "ليش لافيرت",
      h1: "Creativity",
      h2: "with intention.",
      en: "إبداع له هدف",
      lead: "We don’t just make things look good — we help your brand appear stronger, clearer and more trusted.",
      ghost: "WHY",
      items: [
        {
          t: "Clear creative direction",
          en: "اتجاه إبداعي واضح",
          d: "We don’t start with random designs. First we understand the brand, the audience, the goals and your place in the market.",
        },
        {
          t: "Premium visual style",
          en: "ستايل بصري فاخر",
          d: "Modern, refined and professional work that stays true to the brand identity.",
        },
        {
          t: "Complete creative support",
          en: "دعم إبداعي متكامل",
          d: "Design, photography, video, marketing, social and printing, all in one place.",
        },
        {
          t: "Consistent brand presence",
          en: "حضور متناسق",
          d: "Your brand stays ordered across social, the website, packaging, print and campaigns.",
        },
        {
          t: "Business-focused creativity",
          en: "إبداع يخدم البزنس",
          d: "Our goal isn’t only a good look; we want the brand to appear stronger, clearer and more trusted.",
        },
      ],
    },

    process: {
      kicker: "Our process",
      kickerEn: "طريقتنا",
      h1: "Five steps,",
      h2: "from idea to launch.",
      en: "خمس خطوات من الفكرة للإطلاق",
      items: [
        {
          t: "Discover",
          en: "نكتشف",
          d: "We understand your brand, goals, audience, competitors and the direction you want.",
        },
        {
          t: "Plan",
          en: "نخطط",
          d: "We set a clear creative direction: style, colour, content type and campaign.",
        },
        {
          t: "Create",
          en: "ننفّذ",
          d: "We design, shoot, produce and write every piece your brand needs.",
        },
        {
          t: "Refine",
          en: "نصقل",
          d: "We review and improve the details until the result is polished and professional.",
        },
        {
          t: "Launch",
          en: "نطلق",
          d: "We prepare the content, files and campaigns for publishing, print or digital use.",
        },
      ],
    },

    clients: {
      kicker: "Clients",
      kickerEn: "عملاؤنا",
      h1: "Our clients,",
      h2: "our partners in success.",
      en: "عملاؤنا شركاء النجاح",
    },

    contact: {
      kicker: "Contact",
      kickerEn: "تواصل معنا",
      h1: "Let us create",
      h2: "something together.",
      en: "نسوي شي حلو مع بعض",
      lead: "Tell us about your brand and what you need. Send the form to WhatsApp and we’ll reply.",
      ch: {
        wa: "WhatsApp",
        email: "Email",
        site: "Website",
        instagram: "Instagram",
        x: "X",
      },
      form: {
        name: "Your name",
        namePh: "e.g. Sara",
        brand: "Brand / business",
        brandPh: "e.g. Sol Beach",
        service: "Service needed",
        servicePh: "Identity, photography, social…",
        msg: "Project details",
        msgPh: "Tell us a little about your project…",
        submit: "Send via WhatsApp",
        note: "Opens WhatsApp with your message ready.",
      },
      wa: {
        greeting: "Hello LAVERT! I'd like to start a project.",
        name: "Name",
        brand: "Brand / business",
        service: "Service needed",
        details: "Details",
        empty: "-",
      },
    },

    footer: {
      about:
        "A creative agency from Jeddah, Saudi Arabia. Identity, design, photography, video, marketing, social, print and web, under one roof.",
      explore: "Explore",
      reach: "Reach us",
      links: [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Work", href: "#work" },
        { label: "Process", href: "#process" },
        { label: "Contact", href: "#contact" },
      ],
      closeA: "Calm has",
      closeB: "a language.",
      tagline: "للهدوء لغة",
      rights: "LAVERT. We turn imagination into reality.",
    },

    aria: { wa: "Chat on WhatsApp" },
  },
};

export default T;
