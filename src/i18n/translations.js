// ============================================================
//  LAVERT — Bilingual copy (English / Arabic)
//  Text only. Icons, images, hrefs and video sources stay in
//  data/content.jsx; components zip them with the strings below.
//  Arabic is Modern Standard Arabic, written for correct
//  right-to-left shaping (letters connect automatically).
// ============================================================

const T = {
  en: {
    dir: "ltr",
    langName: "English",
    // label shown on the toggle (the language you switch TO)
    switchTo: "العربية",
    switchAria: "التبديل إلى العربية",

    nav: {
      links: [
        { label: "Services", href: "#services" },
        { label: "Work", href: "#work" },
        { label: "Showreel", href: "#showreel" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
      ],
      cta: "Start a Project",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },

    hero: {
      badge: "Creative Marketing Agency · Jeddah",
      h1a: "We turn imagination into ",
      h1em: "reality",
      sub: "Lavert is a creative marketing agency that builds brands through strategy, design, photography, videography, and digital content.",
      desc: "We help brands look professional, communicate clearly, and grow with confidence through creative visuals, strong identity, and consistent marketing content.",
      ctaPrimary: "Start a Project",
      ctaSecondary: "View Our Work",
      stats: [
        { num: "+50", lbl: "Creative Projects" },
        { num: "+20", lbl: "Brands Supported" },
        { num: "2024", lbl: "Established" },
      ],
    },

    services: {
      eyebrow: "What We Do",
      title: "Creative services that make brands look their best",
      lead: "From identity to content to print — everything your brand needs to communicate clearly and grow with confidence.",
      items: [
        {
          title: "Photography",
          text: "Professional photography for products, food, spaces, lifestyle, and brand campaigns. We create visuals that make your brand look premium, clear, and trustworthy.",
        },
        {
          title: "Videography",
          text: "Creative video production for reels, advertisements, campaigns, events, and brand storytelling. We turn ideas into engaging visual content.",
        },
        {
          title: "Marketing",
          text: "Strategic marketing support to help your brand communicate better, reach the right audience, and build a stronger presence.",
        },
        {
          title: "Posts Design",
          text: "Professional social media post designs that keep your brand page organized, attractive, and consistent.",
        },
        {
          title: "Social Media Management",
          text: "We manage your social media presence through content planning, posting schedules, captions, account organization, and creative direction.",
        },
        {
          title: "Printing",
          text: "Design and preparation of printed materials such as business cards, menus, brochures, packaging, posters, stickers, and outdoor advertising files.",
        },
      ],
    },

    work: {
      eyebrow: "Our Work",
      title: "Selected creative projects",
      lead: "A look at the brands we’ve helped shape — across identity, content, campaigns, and more.",
      cat: {
        All: "All",
        Branding: "Branding",
        "Social Media": "Social Media",
        Food: "Food",
        Campaigns: "Campaigns",
      },
      title_of: {
        "Visual Identity": "Visual Identity",
        "Circles — Social": "Circles — Social",
        "Food Campaign": "Food Campaign",
        "Sol Beach Resort": "Sol Beach Resort",
        "Brand Applications": "Brand Applications",
        "Content Design": "Content Design",
        "Menu Visuals": "Menu Visuals",
        "Sports Campaign": "Sports Campaign",
        "Mervat Identity": "Mervat Identity",
        "Post Series": "Post Series",
        "Product Shots": "Product Shots",
        "Match Day": "Match Day",
        "Brand Page": "Brand Page",
        "Gourmet Set": "Gourmet Set",
        "Feed Direction": "Feed Direction",
      },
      view: "View",
    },

    showreel: {
      eyebrow: "Work in Motion",
      title: "Our showreel",
      lead: "A glimpse of our videography — reels, campaigns, and brand storytelling that bring brands to life.",
      play: "Play",
      items: [
        { title: "Sol Beach Resort", tag: "Videography" },
        { title: "Sol — After Dark", tag: "Videography" },
        { title: "The Sun Sets", tag: "Reel" },
        { title: "Move Your Thumb", tag: "Reel" },
        { title: "Match Day", tag: "Campaign" },
      ],
    },

    about: {
      eyebrow: "Who We Are",
      title: "A creative agency where creativity feels natural",
      storyLead:
        "Lavert was created for brands that want more than simple design.",
      p1: "We believe every brand has a personality, a feeling, and a story that should be shown clearly. Some brands need a stronger identity. Some need better content. Others need a complete visual direction that makes them look more professional and memorable.",
      p2: {
        a: "Our name is inspired by ",
        strong: "lavender, nature, calmness, and elegance",
        b: ". This feeling shapes the way we create: balanced, refined, clean, and full of intention. We don’t design randomly — we understand the brand, study the audience, build the direction, and create visuals that support growth.",
      },
      p3: {
        a: "Based in ",
        strong: "Jeddah, Saudi Arabia",
        b: ", we work with businesses that want to improve their image, organize their visual presence, and communicate with their audience in a more professional way.",
      },
      est: "2024",
      estLabel: "Established",
    },

    stats: {
      labels: [
        "Creative Projects",
        "Brands Supported",
        "Core Services",
        "Custom Creative Direction",
      ],
    },

    why: {
      eyebrow: "Why Choose Lavert",
      title: "Creativity with intention",
      lead: "We don’t just make things look good — we help your brand appear stronger, clearer, and more trusted.",
      items: [
        {
          title: "Clear Creative Direction",
          text: "We do not start with random designs. We first understand the brand, audience, goals, and market position.",
        },
        {
          title: "Premium Visual Style",
          text: "Our work is designed to feel modern, elegant, and professional while staying true to the brand identity.",
        },
        {
          title: "Complete Creative Support",
          text: "We support brands through design, photography, video, marketing, social media, and printing.",
        },
        {
          title: "Consistent Brand Presence",
          text: "We help brands look organized across Instagram, websites, packaging, printed materials, and campaigns.",
        },
        {
          title: "Business-Focused Creativity",
          text: "Our goal is not only to make visuals look good, but to help the brand appear stronger, clearer, and more trusted.",
        },
      ],
    },

    process: {
      eyebrow: "Our Process",
      title: "How we bring brands to life",
      lead: "A clear, five-step path from understanding your brand to launching polished, professional work.",
      items: [
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
      ],
    },

    clients: {
      eyebrow: "Trusted By Brands",
      title: "Brands we’ve worked with",
    },

    contact: {
      eyebrow: "Let’s Talk",
      title: "Start a project with Lavert",
      lead: "Tell us about your brand and what you need. Send the form straight to our WhatsApp and we’ll get back to you.",
      channels: {
        whatsapp: "WhatsApp",
        email: "Email",
        instagram: "Instagram",
        location: "Location",
      },
      locationValue: "Jeddah, Saudi Arabia",
      form: {
        name: "Your Name",
        namePh: "e.g. Sara",
        brand: "Brand / Business",
        brandPh: "e.g. Sol Beach",
        service: "Service Needed",
        servicePh: "Photography, branding, social media…",
        message: "Project Details",
        messagePh: "Tell us a little about your project…",
        submit: "Send via WhatsApp",
        note: "Opens WhatsApp with your message ready to send.",
      },
      wa: {
        greeting: "Hello Lavert! I'd like to start a project.",
        name: "Name",
        brand: "Brand / Business",
        service: "Service needed",
        details: "Details",
        empty: "-",
      },
    },

    footer: {
      about:
        "Lavert is a creative marketing agency based in Jeddah, Saudi Arabia, specializing in branding, design, photography, videography, marketing, social media, and printing.",
      exploreHeading: "Explore",
      exploreLinks: [
        { label: "Services", href: "#services" },
        { label: "Our Work", href: "#work" },
        { label: "About", href: "#about" },
        { label: "Process", href: "#process" },
        { label: "Contact", href: "#contact" },
      ],
      touchHeading: "Get in Touch",
      rights: "Lavert. We turn imagination into reality.",
    },

    aria: {
      whatsappFloat: "Chat on WhatsApp",
    },
  },

  // ==========================================================
  //  ARABIC
  // ==========================================================
  ar: {
    dir: "rtl",
    langName: "العربية",
    switchTo: "English",
    switchAria: "Switch to English",

    nav: {
      links: [
        { label: "الخدمات", href: "#services" },
        { label: "أعمالنا", href: "#work" },
        { label: "عرض الأعمال", href: "#showreel" },
        { label: "من نحن", href: "#about" },
        { label: "تواصل معنا", href: "#contact" },
      ],
      cta: "ابدأ مشروعك",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
    },

    hero: {
      badge: "وكالة تسويق إبداعية · جدة",
      h1a: "من خيالك نصنع ",
      h1em: "واقع",
      sub: "لافيرت وكالة تسويق إبداعية تبني العلامات التجارية من خلال الاستراتيجية والتصميم والتصوير الفوتوغرافي وإنتاج الفيديو والمحتوى الرقمي.",
      desc: "نساعد العلامات التجارية على الظهور باحترافية، والتواصل بوضوح، والنمو بثقة من خلال محتوى بصري إبداعي، وهوية قوية، ومحتوى تسويقي متسق.",
      ctaPrimary: "ابدأ مشروعك",
      ctaSecondary: "شاهد أعمالنا",
      stats: [
        { num: "+50", lbl: "مشروع إبداعي" },
        { num: "+20", lbl: "علامة تجارية" },
        { num: "2024", lbl: "سنة التأسيس" },
      ],
    },

    services: {
      eyebrow: "ماذا نقدّم",
      title: "خدمات إبداعية تُظهر علامتك التجارية في أبهى صورة",
      lead: "من الهوية إلى المحتوى إلى الطباعة — كل ما تحتاجه علامتك التجارية للتواصل بوضوح والنمو بثقة.",
      items: [
        {
          title: "التصوير الفوتوغرافي",
          text: "تصوير فوتوغرافي احترافي للمنتجات والأطعمة والأماكن ونمط الحياة والحملات التجارية. نصنع صورًا تجعل علامتك تبدو راقية وواضحة وجديرة بالثقة.",
        },
        {
          title: "إنتاج الفيديو",
          text: "إنتاج فيديو إبداعي للريلز والإعلانات والحملات والفعاليات ورواية قصة العلامة التجارية. نحوّل الأفكار إلى محتوى بصري جذاب.",
        },
        {
          title: "التسويق",
          text: "دعم تسويقي استراتيجي يساعد علامتك على التواصل بشكل أفضل، والوصول إلى الجمهور المناسب، وبناء حضور أقوى.",
        },
        {
          title: "تصميم المنشورات",
          text: "تصاميم منشورات احترافية لوسائل التواصل الاجتماعي تحافظ على صفحة علامتك منظمة وجذابة ومتناسقة.",
        },
        {
          title: "إدارة وسائل التواصل",
          text: "ندير حضورك على وسائل التواصل الاجتماعي من خلال تخطيط المحتوى وجداول النشر وكتابة التعليقات وتنظيم الحسابات والتوجيه الإبداعي.",
        },
        {
          title: "الطباعة",
          text: "تصميم وتجهيز المواد المطبوعة مثل بطاقات العمل والقوائم والكتيّبات والتغليف والملصقات والمطبوعات الدعائية الخارجية.",
        },
      ],
    },

    work: {
      eyebrow: "أعمالنا",
      title: "مشاريع إبداعية مختارة",
      lead: "نظرة على العلامات التجارية التي ساهمنا في تشكيلها — عبر الهوية والمحتوى والحملات والمزيد.",
      cat: {
        All: "الكل",
        Branding: "الهوية التجارية",
        "Social Media": "وسائل التواصل",
        Food: "الطعام",
        Campaigns: "الحملات",
      },
      title_of: {
        "Visual Identity": "الهوية البصرية",
        "Circles — Social": "سيركلز — سوشيال",
        "Food Campaign": "حملة طعام",
        "Sol Beach Resort": "منتجع سول بيتش",
        "Brand Applications": "تطبيقات الهوية",
        "Content Design": "تصميم المحتوى",
        "Menu Visuals": "تصاميم القوائم",
        "Sports Campaign": "حملة رياضية",
        "Mervat Identity": "هوية ميرفت",
        "Post Series": "سلسلة منشورات",
        "Product Shots": "تصوير المنتجات",
        "Match Day": "يوم المباراة",
        "Brand Page": "صفحة العلامة",
        "Gourmet Set": "تشكيلة جورميه",
        "Feed Direction": "توجيه الحساب",
      },
      view: "عرض",
    },

    showreel: {
      eyebrow: "أعمال متحركة",
      title: "عرض أعمالنا",
      lead: "لمحة من إنتاجنا المرئي — ريلز وحملات ورواية قصص تُضفي الحياة على العلامات التجارية.",
      play: "تشغيل",
      items: [
        { title: "منتجع سول بيتش", tag: "إنتاج فيديو" },
        { title: "سول — بعد الغروب", tag: "إنتاج فيديو" },
        { title: "غروب الشمس", tag: "ريل" },
        { title: "حرّك إبهامك", tag: "ريل" },
        { title: "يوم المباراة", tag: "حملة" },
      ],
    },

    about: {
      eyebrow: "من نحن",
      title: "وكالة إبداعية حيث يصبح الإبداع أمرًا طبيعيًا",
      storyLead:
        "أُنشئت لافيرت للعلامات التجارية التي تطمح إلى ما هو أبعد من مجرد التصميم.",
      p1: "نؤمن بأن لكل علامة تجارية شخصيةً وإحساسًا وقصةً تستحق أن تُروى بوضوح. بعض العلامات تحتاج إلى هوية أقوى، وبعضها يحتاج إلى محتوى أفضل، وأخرى تحتاج إلى توجيه بصري متكامل يجعلها تبدو أكثر احترافية ورسوخًا في الذاكرة.",
      p2: {
        a: "اسمنا مستوحى من ",
        strong: "اللافندر والطبيعة والهدوء والأناقة",
        b: ". هذا الإحساس يشكّل طريقتنا في الإبداع: متوازنة، ومصقولة، ونقية، ومدروسة بعناية. نحن لا نصمم عشوائيًا — بل نفهم العلامة، وندرس الجمهور، ونبني التوجيه، ونصنع محتوى بصريًا يدعم النمو.",
      },
      p3: {
        a: "من مقرنا في ",
        strong: "جدة، المملكة العربية السعودية",
        b: "، نعمل مع الأنشطة التجارية الراغبة في تحسين صورتها، وتنظيم حضورها البصري، والتواصل مع جمهورها بأسلوب أكثر احترافية.",
      },
      est: "2024",
      estLabel: "سنة التأسيس",
    },

    stats: {
      labels: [
        "مشروع إبداعي",
        "علامة تجارية",
        "خدمات أساسية",
        "توجيه إبداعي مخصص",
      ],
    },

    why: {
      eyebrow: "لماذا لافيرت",
      title: "إبداع بقصدٍ ورؤية",
      lead: "نحن لا نكتفي بجعل الأمور تبدو جميلة — بل نساعد علامتك على الظهور أقوى وأوضح وأكثر مصداقية.",
      items: [
        {
          title: "توجيه إبداعي واضح",
          text: "لا نبدأ بتصاميم عشوائية، بل نفهم أولًا العلامة والجمهور والأهداف والموقع في السوق.",
        },
        {
          title: "أسلوب بصري راقٍ",
          text: "أعمالنا مصممة لتبدو عصرية وأنيقة واحترافية مع الحفاظ على هوية العلامة التجارية.",
        },
        {
          title: "دعم إبداعي متكامل",
          text: "ندعم العلامات التجارية عبر التصميم والتصوير والفيديو والتسويق ووسائل التواصل والطباعة.",
        },
        {
          title: "حضور متناسق للعلامة",
          text: "نساعد العلامات على الظهور بشكل منظم عبر إنستغرام والمواقع والتغليف والمطبوعات والحملات.",
        },
        {
          title: "إبداع يخدم أهداف العمل",
          text: "هدفنا ليس فقط أن تبدو التصاميم جميلة، بل أن تجعل العلامة تبدو أقوى وأوضح وأكثر ثقة.",
        },
      ],
    },

    process: {
      eyebrow: "منهجية عملنا",
      title: "كيف نُضفي الحياة على العلامات التجارية",
      lead: "مسار واضح من خمس خطوات، من فهم علامتك حتى إطلاق أعمال احترافية متقنة.",
      items: [
        {
          title: "الاكتشاف",
          text: "نفهم علامتك وأهدافك وجمهورك ومنافسيك والاتجاه الذي تطمح إليه.",
        },
        {
          title: "التخطيط",
          text: "نضع توجيهًا إبداعيًا واضحًا يشمل الأسلوب البصري والألوان والأجواء ونوع المحتوى ومقاربة الحملة.",
        },
        {
          title: "الإبداع",
          text: "نصمم ونصوّر ونحرّر ونكتب وننتج المواد الإبداعية التي تحتاجها علامتك.",
        },
        {
          title: "التحسين",
          text: "نراجع التفاصيل ونحسّنها حتى تصبح النتيجة النهائية مصقولة واحترافية.",
        },
        {
          title: "الإطلاق",
          text: "نجهّز المحتوى أو الملفات أو الحملات النهائية للنشر أو الطباعة أو الاستخدام الرقمي.",
        },
      ],
    },

    clients: {
      eyebrow: "علامات تثق بنا",
      title: "علامات تجارية عملنا معها",
    },

    contact: {
      eyebrow: "لنتحدث",
      title: "ابدأ مشروعك مع لافيرت",
      lead: "أخبرنا عن علامتك التجارية وما تحتاجه. أرسل النموذج مباشرة إلى واتساب وسنعاود التواصل معك.",
      channels: {
        whatsapp: "واتساب",
        email: "البريد الإلكتروني",
        instagram: "إنستغرام",
        location: "الموقع",
      },
      locationValue: "جدة، المملكة العربية السعودية",
      form: {
        name: "اسمك",
        namePh: "مثال: سارة",
        brand: "العلامة / النشاط التجاري",
        brandPh: "مثال: سول بيتش",
        service: "الخدمة المطلوبة",
        servicePh: "تصوير، هوية تجارية، وسائل تواصل…",
        message: "تفاصيل المشروع",
        messagePh: "أخبرنا قليلًا عن مشروعك…",
        submit: "أرسل عبر واتساب",
        note: "يفتح واتساب مع رسالتك جاهزة للإرسال.",
      },
      wa: {
        greeting: "مرحبًا لافيرت! أرغب في بدء مشروع.",
        name: "الاسم",
        brand: "العلامة / النشاط",
        service: "الخدمة المطلوبة",
        details: "التفاصيل",
        empty: "-",
      },
    },

    footer: {
      about:
        "لافيرت وكالة تسويق إبداعية مقرها جدة، المملكة العربية السعودية، متخصصة في العلامات التجارية والتصميم والتصوير الفوتوغرافي وإنتاج الفيديو والتسويق ووسائل التواصل الاجتماعي والطباعة.",
      exploreHeading: "استكشف",
      exploreLinks: [
        { label: "الخدمات", href: "#services" },
        { label: "أعمالنا", href: "#work" },
        { label: "من نحن", href: "#about" },
        { label: "منهجية العمل", href: "#process" },
        { label: "تواصل معنا", href: "#contact" },
      ],
      touchHeading: "تواصل معنا",
      rights: "لافيرت. من خيالك نصنع واقع.",
    },

    aria: {
      whatsappFloat: "تواصل عبر واتساب",
    },
  },
};

export default T;
