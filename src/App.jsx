import { useState, useEffect, useRef } from "react";


const WHITE_LOGO = "/images/white-logo.svg";
const BLACK_LOGO = "/images/black-logo.svg";
const FONT_FACE_CSS = `@font-face { font-family: "HighCruiser"; src: url("/fonts/HighCruiser.ttf") format("truetype"); font-weight: normal; font-style: normal; }`;

const STEP1_IMG = "/images/step1.jpg";
const STEP2_IMG = "/images/step2.jpg";
const STEP3_IMG = "/Section2_3.PNG";

const translations = {
  fr: {
    tagline: "Ton dressing. Ton avatar. Ton style.",
    subtitle: "L'app qui te montre dans tes vêtements avant de t'habiller.",
    download: "Télécharger",
    howItWorks: "Comment ça marche",
    step1Title: "Photographie",
    step1Desc: "Prends en photo tes vêtements. L'IA les transforme en images professionnelles.",
    step2Title: "Organise",
    step2Desc: "Ton dressing virtuel, organisé par catégorie. 39 sous-catégories intelligentes.",
    step3Title: "Visualise",
    step3Desc: "Vois-toi dans tes looks. Ton avatar IA porte tes vêtements.",
    avatarSection: "Ton Avatar IA",
    avatarTagline: "Pas de mannequin. Pas de template. C'est toi.",
    avatarDesc: "Crée ton avatar à partir d'une selfie. L'IA génère un rendu ultra-réaliste de toi portant tes vêtements. Chaque look, chaque combinaison — avant même de t'habiller.",
    before: "Ton vêtement",
    after: "Toi, habillé(e)",
    featuresTitle: "Tout ce dont tu as besoin",
    feat1Title: "Dressing IA",
    feat1Desc: "7 catégories, 39 sous-catégories. L'IA classe et régénère chaque pièce automatiquement.",
    feat2Title: "Planning 7 jours",
    feat2Desc: "Planifie tes tenues pour la semaine. Notification chaque soir avec ton look de demain.",
    feat3Title: "Mode Couple",
    feat3Desc: "Propose des tenues à ton/ta partenaire. Une notification, un choix, un style partagé.",
    feat4Title: "Mode Famille",
    feat4Desc: "Gère le dressing de tes enfants. Prépare leurs tenues le soir, habille-les le matin.",
    feat5Title: "Voyage",
    feat5Desc: "Valise virtuelle intelligente. Météo intégrée, planning par jour, suggestions IA.",
    feat6Title: "Rotation",
    feat6Desc: "Détecte les vêtements oubliés. Archive, revends ou donne — zéro gaspillage.",
    pricingTitle: "Choisis ton style",
    free: "Gratuit",
    solo: "Solo",
    couple: "Couple",
    famille: "Famille",
    month: "/mois",
    year: "/an",
    monthly: "Mensuel",
    annual: "Annuel",
    popular: "Populaire",
    freePerk1: "2 pièces par catégorie",
    freePerk2: "Avatar IA réaliste",
    freePerk3: "Planning basique",
    soloPerk1: "Vêtements illimités",
    soloPerk2: "Looks IA réalistes",
    soloPerk3: "Statistiques avancées",
    couplePerk1: "Tout Solo × 2",
    couplePerk2: "Propositions de tenues",
    couplePerk3: "Dressing partagé",
    famillePerk1: "Tout Couple inclus",
    famillePerk2: "Enfants illimités",
    famillePerk3: "Planning famille",
    ctaTitle: "Prêt à révolutionner ton style ?",
    ctaSubtitle: "Rejoins les premiers à découvrir BISK8.",
    footerTerms: "CGU",
    footerPrivacy: "Politique de confidentialité",
    footerContact: "Contact",
    footerRights: "© 2026 BISK8 — Barcelos, Portugal. Tous droits réservés.",
    langLabel: "FR",
  },
  en: {
    tagline: "Your wardrobe. Your avatar. Your style.",
    subtitle: "The app that shows you in your clothes before getting dressed.",
    download: "Download",
    howItWorks: "How it works",
    step1Title: "Photograph",
    step1Desc: "Take a photo of your clothes. AI transforms them into professional images.",
    step2Title: "Organize",
    step2Desc: "Your virtual wardrobe, organized by category. 39 smart subcategories.",
    step3Title: "Visualize",
    step3Desc: "See yourself in your looks. Your AI avatar wears your clothes.",
    avatarSection: "Your AI Avatar",
    avatarTagline: "No mannequin. No template. It's you.",
    avatarDesc: "Create your avatar from a selfie. AI generates an ultra-realistic rendering of you wearing your clothes. Every look, every combination — before even getting dressed.",
    before: "Your garment",
    after: "You, dressed",
    featuresTitle: "Everything you need",
    feat1Title: "AI Wardrobe",
    feat1Desc: "7 categories, 39 subcategories. AI classifies and regenerates each piece automatically.",
    feat2Title: "7-Day Planning",
    feat2Desc: "Plan your outfits for the week. Get a notification every evening with tomorrow's look.",
    feat3Title: "Couple Mode",
    feat3Desc: "Propose outfits to your partner. One notification, one choice, one shared style.",
    feat4Title: "Family Mode",
    feat4Desc: "Manage your kids' wardrobe. Prepare their outfits at night, dress them in the morning.",
    feat5Title: "Travel",
    feat5Desc: "Smart virtual suitcase. Built-in weather, daily planning, AI suggestions.",
    feat6Title: "Rotation",
    feat6Desc: "Detects forgotten clothes. Archive, resell or donate — zero waste.",
    pricingTitle: "Choose your style",
    free: "Free",
    solo: "Solo",
    couple: "Couple",
    famille: "Family",
    month: "/mo",
    year: "/yr",
    monthly: "Monthly",
    annual: "Annual",
    popular: "Popular",
    freePerk1: "2 items per category",
    freePerk2: "Realistic AI avatar",
    freePerk3: "Basic planning",
    soloPerk1: "Unlimited clothes",
    soloPerk2: "Realistic AI looks",
    soloPerk3: "Advanced statistics",
    couplePerk1: "Everything Solo × 2",
    couplePerk2: "Outfit proposals",
    couplePerk3: "Shared wardrobe",
    famillePerk1: "Everything Couple included",
    famillePerk2: "Unlimited kids",
    famillePerk3: "Family planning",
    ctaTitle: "Ready to revolutionize your style?",
    ctaSubtitle: "Be among the first to discover BISK8.",
    footerTerms: "Terms",
    footerPrivacy: "Privacy Policy",
    footerContact: "Contact",
    footerRights: "© 2026 BISK8 — Barcelos, Portugal. All rights reserved.",
    langLabel: "EN",
  },
  de: {
    tagline: "Dein Kleiderschrank. Dein Avatar. Dein Stil.",
    subtitle: "Die App, die dir zeigt, wie du in deinen Kleidern aussiehst — bevor du dich anziehst.",
    download: "Herunterladen",
    howItWorks: "So funktioniert's",
    step1Title: "Fotografieren",
    step1Desc: "Fotografiere deine Kleidung. Die KI verwandelt sie in professionelle Bilder.",
    step2Title: "Organisieren",
    step2Desc: "Dein virtueller Kleiderschrank, nach Kategorie sortiert. 39 smarte Unterkategorien.",
    step3Title: "Visualisieren",
    step3Desc: "Sieh dich in deinen Looks. Dein KI-Avatar trägt deine Kleidung.",
    avatarSection: "Dein KI-Avatar",
    avatarTagline: "Kein Mannequin. Kein Template. Du bist es.",
    avatarDesc: "Erstelle deinen Avatar aus einem Selfie. Die KI generiert ein ultra-realistisches Bild von dir in deiner Kleidung. Jeder Look, jede Kombination — bevor du dich anziehst.",
    before: "Dein Kleidungsstück",
    after: "Du, angezogen",
    featuresTitle: "Alles was du brauchst",
    feat1Title: "KI-Kleiderschrank",
    feat1Desc: "7 Kategorien, 39 Unterkategorien. Die KI klassifiziert und regeneriert jedes Stück automatisch.",
    feat2Title: "7-Tage-Planung",
    feat2Desc: "Plane deine Outfits für die Woche. Jeden Abend eine Benachrichtigung mit dem Look von morgen.",
    feat3Title: "Paar-Modus",
    feat3Desc: "Schlage deinem Partner Outfits vor. Eine Benachrichtigung, eine Wahl, ein gemeinsamer Stil.",
    feat4Title: "Familien-Modus",
    feat4Desc: "Verwalte den Kleiderschrank deiner Kinder. Bereite abends ihre Outfits vor, zieh sie morgens an.",
    feat5Title: "Reise",
    feat5Desc: "Intelligenter virtueller Koffer. Integriertes Wetter, Tagesplanung, KI-Vorschläge.",
    feat6Title: "Rotation",
    feat6Desc: "Erkennt vergessene Kleidung. Archivieren, weiterverkaufen oder spenden — null Verschwendung.",
    pricingTitle: "Wähle deinen Stil",
    free: "Kostenlos",
    solo: "Solo",
    couple: "Paar",
    famille: "Familie",
    month: "/Monat",
    year: "/Jahr",
    monthly: "Monatlich",
    annual: "Jährlich",
    popular: "Beliebt",
    freePerk1: "2 Stücke pro Kategorie",
    freePerk2: "Realistischer KI-Avatar",
    freePerk3: "Basisplanung",
    soloPerk1: "Unbegrenzte Kleidung",
    soloPerk2: "Realistische KI-Looks",
    soloPerk3: "Erweiterte Statistiken",
    couplePerk1: "Alles von Solo × 2",
    couplePerk2: "Outfit-Vorschläge",
    couplePerk3: "Geteilter Kleiderschrank",
    famillePerk1: "Alles von Paar inklusive",
    famillePerk2: "Unbegrenzte Kinder",
    famillePerk3: "Familienplanung",
    ctaTitle: "Bereit, deinen Stil zu revolutionieren?",
    ctaSubtitle: "Sei unter den Ersten, die BISK8 entdecken.",
    footerTerms: "AGB",
    footerPrivacy: "Datenschutz",
    footerContact: "Kontakt",
    footerRights: "© 2026 BISK8 — Barcelos, Portugal. Alle Rechte vorbehalten.",
    langLabel: "DE",
  },
  es: {
    tagline: "Tu armario. Tu avatar. Tu estilo.",
    subtitle: "La app que te muestra con tu ropa antes de vestirte.",
    download: "Descargar",
    howItWorks: "Cómo funciona",
    step1Title: "Fotografía",
    step1Desc: "Toma fotos de tu ropa. La IA las transforma en imágenes profesionales.",
    step2Title: "Organiza",
    step2Desc: "Tu armario virtual, organizado por categoría. 39 subcategorías inteligentes.",
    step3Title: "Visualiza",
    step3Desc: "Mírate con tus looks. Tu avatar IA lleva tu ropa.",
    avatarSection: "Tu Avatar IA",
    avatarTagline: "Sin maniquí. Sin plantilla. Eres tú.",
    avatarDesc: "Crea tu avatar a partir de un selfie. La IA genera un renderizado ultra-realista de ti con tu ropa. Cada look, cada combinación — antes de vestirte.",
    before: "Tu prenda",
    after: "Tú, vestido/a",
    featuresTitle: "Todo lo que necesitas",
    feat1Title: "Armario IA",
    feat1Desc: "7 categorías, 39 subcategorías. La IA clasifica y regenera cada prenda automáticamente.",
    feat2Title: "Planificación 7 días",
    feat2Desc: "Planifica tus outfits para la semana. Notificación cada noche con el look de mañana.",
    feat3Title: "Modo Pareja",
    feat3Desc: "Propón outfits a tu pareja. Una notificación, una elección, un estilo compartido.",
    feat4Title: "Modo Familia",
    feat4Desc: "Gestiona el armario de tus hijos. Prepara sus outfits por la noche, vístelos por la mañana.",
    feat5Title: "Viaje",
    feat5Desc: "Maleta virtual inteligente. Clima integrado, planificación diaria, sugerencias IA.",
    feat6Title: "Rotación",
    feat6Desc: "Detecta ropa olvidada. Archiva, revende o dona — cero desperdicio.",
    pricingTitle: "Elige tu estilo",
    free: "Gratis",
    solo: "Solo",
    couple: "Pareja",
    famille: "Familia",
    month: "/mes",
    year: "/año",
    monthly: "Mensual",
    annual: "Anual",
    popular: "Popular",
    freePerk1: "2 prendas por categoría",
    freePerk2: "Avatar IA realista",
    freePerk3: "Planificación básica",
    soloPerk1: "Ropa ilimitada",
    soloPerk2: "Looks IA realistas",
    soloPerk3: "Estadísticas avanzadas",
    couplePerk1: "Todo Solo × 2",
    couplePerk2: "Propuestas de outfits",
    couplePerk3: "Armario compartido",
    famillePerk1: "Todo Pareja incluido",
    famillePerk2: "Hijos ilimitados",
    famillePerk3: "Planificación familiar",
    ctaTitle: "¿Listo para revolucionar tu estilo?",
    ctaSubtitle: "Sé de los primeros en descubrir BISK8.",
    footerTerms: "Términos",
    footerPrivacy: "Política de privacidad",
    footerContact: "Contacto",
    footerRights: "© 2026 BISK8 — Barcelos, Portugal. Todos los derechos reservados.",
    langLabel: "ES",
  },
  it: {
    tagline: "Il tuo guardaroba. Il tuo avatar. Il tuo stile.",
    subtitle: "L'app che ti mostra nei tuoi vestiti prima di vestirti.",
    download: "Scarica",
    howItWorks: "Come funziona",
    step1Title: "Fotografa",
    step1Desc: "Scatta foto dei tuoi vestiti. L'IA li trasforma in immagini professionali.",
    step2Title: "Organizza",
    step2Desc: "Il tuo guardaroba virtuale, organizzato per categoria. 39 sottocategorie intelligenti.",
    step3Title: "Visualizza",
    step3Desc: "Guardati nei tuoi look. Il tuo avatar IA indossa i tuoi vestiti.",
    avatarSection: "Il tuo Avatar IA",
    avatarTagline: "Nessun manichino. Nessun template. Sei tu.",
    avatarDesc: "Crea il tuo avatar da un selfie. L'IA genera un rendering ultra-realistico di te che indossa i tuoi vestiti. Ogni look, ogni combinazione — prima ancora di vestirti.",
    before: "Il tuo capo",
    after: "Tu, vestito/a",
    featuresTitle: "Tutto ciò di cui hai bisogno",
    feat1Title: "Guardaroba IA",
    feat1Desc: "7 categorie, 39 sottocategorie. L'IA classifica e rigenera ogni capo automaticamente.",
    feat2Title: "Pianificazione 7 giorni",
    feat2Desc: "Pianifica i tuoi outfit per la settimana. Notifica ogni sera con il look di domani.",
    feat3Title: "Modalità Coppia",
    feat3Desc: "Proponi outfit al tuo partner. Una notifica, una scelta, uno stile condiviso.",
    feat4Title: "Modalità Famiglia",
    feat4Desc: "Gestisci il guardaroba dei tuoi figli. Prepara i loro outfit la sera, vestili la mattina.",
    feat5Title: "Viaggio",
    feat5Desc: "Valigia virtuale intelligente. Meteo integrato, pianificazione giornaliera, suggerimenti IA.",
    feat6Title: "Rotazione",
    feat6Desc: "Rileva i vestiti dimenticati. Archivia, rivendi o dona — zero spreco.",
    pricingTitle: "Scegli il tuo stile",
    free: "Gratuito",
    solo: "Solo",
    couple: "Coppia",
    famille: "Famiglia",
    month: "/mese",
    year: "/anno",
    monthly: "Mensile",
    annual: "Annuale",
    popular: "Popolare",
    freePerk1: "2 capi per categoria",
    freePerk2: "Avatar IA realistico",
    freePerk3: "Pianificazione base",
    soloPerk1: "Vestiti illimitati",
    soloPerk2: "Look IA realistici",
    soloPerk3: "Statistiche avanzate",
    couplePerk1: "Tutto Solo × 2",
    couplePerk2: "Proposte di outfit",
    couplePerk3: "Guardaroba condiviso",
    famillePerk1: "Tutto Coppia incluso",
    famillePerk2: "Figli illimitati",
    famillePerk3: "Pianificazione famiglia",
    ctaTitle: "Pronto a rivoluzionare il tuo stile?",
    ctaSubtitle: "Sii tra i primi a scoprire BISK8.",
    footerTerms: "Termini",
    footerPrivacy: "Privacy",
    footerContact: "Contatto",
    footerRights: "© 2026 BISK8 — Barcelos, Portogallo. Tutti i diritti riservati.",
    langLabel: "IT",
  },
  pt: {
    tagline: "O teu guarda-roupa. O teu avatar. O teu estilo.",
    subtitle: "A app que te mostra nas tuas roupas antes de te vestires.",
    download: "Descarregar",
    howItWorks: "Como funciona",
    step1Title: "Fotografa",
    step1Desc: "Tira fotos das tuas roupas. A IA transforma-as em imagens profissionais.",
    step2Title: "Organiza",
    step2Desc: "O teu guarda-roupa virtual, organizado por categoria. 39 subcategorias inteligentes.",
    step3Title: "Visualiza",
    step3Desc: "Vê-te nos teus looks. O teu avatar IA veste as tuas roupas.",
    avatarSection: "O teu Avatar IA",
    avatarTagline: "Sem manequim. Sem template. És tu.",
    avatarDesc: "Cria o teu avatar a partir de uma selfie. A IA gera uma renderização ultra-realista de ti a vestir as tuas roupas. Cada look, cada combinação — antes de te vestires.",
    before: "A tua peça",
    after: "Tu, vestido/a",
    featuresTitle: "Tudo o que precisas",
    feat1Title: "Guarda-roupa IA",
    feat1Desc: "7 categorias, 39 subcategorias. A IA classifica e regenera cada peça automaticamente.",
    feat2Title: "Planeamento 7 dias",
    feat2Desc: "Planeia os teus outfits para a semana. Notificação todas as noites com o look de amanhã.",
    feat3Title: "Modo Casal",
    feat3Desc: "Propõe outfits ao teu parceiro. Uma notificação, uma escolha, um estilo partilhado.",
    feat4Title: "Modo Família",
    feat4Desc: "Gere o guarda-roupa dos teus filhos. Prepara os outfits à noite, veste-os de manhã.",
    feat5Title: "Viagem",
    feat5Desc: "Mala virtual inteligente. Meteorologia integrada, planeamento diário, sugestões IA.",
    feat6Title: "Rotação",
    feat6Desc: "Deteta roupas esquecidas. Arquiva, revende ou doa — zero desperdício.",
    pricingTitle: "Escolhe o teu estilo",
    free: "Grátis",
    solo: "Solo",
    couple: "Casal",
    famille: "Família",
    month: "/mês",
    year: "/ano",
    monthly: "Mensal",
    annual: "Anual",
    popular: "Popular",
    freePerk1: "2 peças por categoria",
    freePerk2: "Avatar IA realista",
    freePerk3: "Planeamento básico",
    soloPerk1: "Roupas ilimitadas",
    soloPerk2: "Looks IA realistas",
    soloPerk3: "Estatísticas avançadas",
    couplePerk1: "Tudo Solo × 2",
    couplePerk2: "Propostas de outfits",
    couplePerk3: "Guarda-roupa partilhado",
    famillePerk1: "Tudo Casal incluído",
    famillePerk2: "Filhos ilimitados",
    famillePerk3: "Planeamento familiar",
    ctaTitle: "Pronto para revolucionar o teu estilo?",
    ctaSubtitle: "Sê dos primeiros a descobrir o BISK8.",
    footerTerms: "Termos",
    footerPrivacy: "Política de privacidade",
    footerContact: "Contacto",
    footerRights: "© 2026 BISK8 — Barcelos, Portugal. Todos os direitos reservados.",
    langLabel: "PT",
  },
  ar: {
    tagline: "خزانتك. أفاتارك. أسلوبك.",
    subtitle: "التطبيق الذي يُريك بملابسك قبل أن ترتديها.",
    download: "تحميل",
    howItWorks: "كيف يعمل",
    step1Title: "صوّر",
    step1Desc: "التقط صوراً لملابسك. الذكاء الاصطناعي يحوّلها إلى صور احترافية.",
    step2Title: "نظّم",
    step2Desc: "خزانتك الافتراضية، مرتبة حسب الفئة. 39 فئة فرعية ذكية.",
    step3Title: "تصوّر",
    step3Desc: "شاهد نفسك بإطلالاتك. أفاتارك بالذكاء الاصطناعي يرتدي ملابسك.",
    avatarSection: "أفاتارك بالذكاء الاصطناعي",
    avatarTagline: "لا عارض أزياء. لا قالب. إنه أنت.",
    avatarDesc: "أنشئ أفاتارك من سيلفي. الذكاء الاصطناعي يولّد صورة فائقة الواقعية لك بملابسك. كل إطلالة، كل تركيبة — قبل أن ترتدي.",
    before: "قطعة ملابسك",
    after: "أنت، مرتدياً",
    featuresTitle: "كل ما تحتاجه",
    feat1Title: "خزانة ذكية",
    feat1Desc: "7 فئات، 39 فئة فرعية. الذكاء الاصطناعي يصنّف ويجدّد كل قطعة تلقائياً.",
    feat2Title: "تخطيط 7 أيام",
    feat2Desc: "خطط إطلالاتك للأسبوع. إشعار كل مساء بإطلالة الغد.",
    feat3Title: "وضع الثنائي",
    feat3Desc: "اقترح إطلالات لشريكك. إشعار واحد، اختيار واحد، أسلوب مشترك.",
    feat4Title: "وضع العائلة",
    feat4Desc: "أدِر خزانة أطفالك. حضّر إطلالاتهم مساءً، ألبسهم صباحاً.",
    feat5Title: "سفر",
    feat5Desc: "حقيبة سفر افتراضية ذكية. طقس مدمج، تخطيط يومي، اقتراحات ذكية.",
    feat6Title: "تدوير",
    feat6Desc: "يكتشف الملابس المنسية. أرشف أو أعد بيعها أو تبرع — صفر هدر.",
    pricingTitle: "اختر أسلوبك",
    free: "مجاني",
    solo: "فردي",
    couple: "ثنائي",
    famille: "عائلة",
    month: "/شهر",
    year: "/سنة",
    monthly: "شهري",
    annual: "سنوي",
    popular: "الأكثر شعبية",
    freePerk1: "قطعتان لكل فئة",
    freePerk2: "أفاتار ذكاء اصطناعي واقعي",
    freePerk3: "تخطيط أساسي",
    soloPerk1: "ملابس غير محدودة",
    soloPerk2: "إطلالات ذكية واقعية",
    soloPerk3: "إحصائيات متقدمة",
    couplePerk1: "كل مزايا الفردي × 2",
    couplePerk2: "اقتراحات إطلالات",
    couplePerk3: "خزانة مشتركة",
    famillePerk1: "كل مزايا الثنائي",
    famillePerk2: "أطفال غير محدودين",
    famillePerk3: "تخطيط عائلي",
    ctaTitle: "مستعد لثورة في أسلوبك؟",
    ctaSubtitle: "كن من أوائل من يكتشف BISK8.",
    footerTerms: "الشروط",
    footerPrivacy: "سياسة الخصوصية",
    footerContact: "اتصل بنا",
    footerRights: "© 2026 BISK8 — بارسيلوس، البرتغال. جميع الحقوق محفوظة.",
    langLabel: "AR",
  },
  zh: {
    tagline: "你的衣橱。你的分身。你的风格。",
    subtitle: "在穿上衣服之前，先看看自己穿上的样子。",
    download: "下载",
    howItWorks: "如何使用",
    step1Title: "拍照",
    step1Desc: "拍下你的衣服。AI将它们转化为专业图片。",
    step2Title: "整理",
    step2Desc: "你的虚拟衣橱，按类别整理。39个智能子类别。",
    step3Title: "预览",
    step3Desc: "看看你穿上的样子。你的AI分身穿着你的衣服。",
    avatarSection: "你的AI分身",
    avatarTagline: "不是模特。不是模板。是你自己。",
    avatarDesc: "用一张自拍创建你的分身。AI生成超逼真的你穿着衣服的效果图。每个造型，每种搭配——在你穿上之前。",
    before: "你的衣物",
    after: "穿上后的你",
    featuresTitle: "你需要的一切",
    feat1Title: "AI衣橱",
    feat1Desc: "7大类别，39个子类别。AI自动分类并重新生成每件衣物。",
    feat2Title: "7天计划",
    feat2Desc: "为一周规划你的穿搭。每晚收到明天造型的通知。",
    feat3Title: "情侣模式",
    feat3Desc: "为伴侣推荐穿搭。一条通知，一个选择，共享风格。",
    feat4Title: "家庭模式",
    feat4Desc: "管理孩子的衣橱。晚上准备好穿搭，早上轻松穿衣。",
    feat5Title: "旅行",
    feat5Desc: "智能虚拟行李箱。内置天气、每日规划、AI建议。",
    feat6Title: "轮换",
    feat6Desc: "发现被遗忘的衣物。归档、转卖或捐赠——零浪费。",
    pricingTitle: "选择你的风格",
    free: "免费",
    solo: "个人",
    couple: "情侣",
    famille: "家庭",
    month: "/月",
    year: "/年",
    monthly: "月付",
    annual: "年付",
    popular: "热门",
    freePerk1: "每类别2件",
    freePerk2: "逼真AI分身",
    freePerk3: "基础规划",
    soloPerk1: "无限衣物",
    soloPerk2: "逼真AI造型",
    soloPerk3: "高级统计",
    couplePerk1: "个人版全部 × 2",
    couplePerk2: "穿搭推荐",
    couplePerk3: "共享衣橱",
    famillePerk1: "情侣版全部包含",
    famillePerk2: "无限孩子",
    famillePerk3: "家庭规划",
    ctaTitle: "准备好革新你的风格了吗？",
    ctaSubtitle: "成为第一批发现BISK8的人。",
    footerTerms: "条款",
    footerPrivacy: "隐私政策",
    footerContact: "联系我们",
    footerRights: "© 2026 BISK8 — 巴塞洛斯，葡萄牙。保留所有权利。",
    langLabel: "ZH",
  },
  ru: {
    tagline: "Твой гардероб. Твой аватар. Твой стиль.",
    subtitle: "Приложение, которое показывает тебя в твоей одежде до того, как ты оденешься.",
    download: "Скачать",
    howItWorks: "Как это работает",
    step1Title: "Сфотографируй",
    step1Desc: "Сфотографируй свою одежду. ИИ превращает её в профессиональные изображения.",
    step2Title: "Организуй",
    step2Desc: "Твой виртуальный гардероб, организованный по категориям. 39 умных подкатегорий.",
    step3Title: "Визуализируй",
    step3Desc: "Посмотри на себя в своих образах. Твой ИИ-аватар носит твою одежду.",
    avatarSection: "Твой ИИ-аватар",
    avatarTagline: "Без манекена. Без шаблона. Это ты.",
    avatarDesc: "Создай аватар из селфи. ИИ генерирует ультра-реалистичное изображение тебя в твоей одежде. Каждый образ, каждая комбинация — до того, как оденешься.",
    before: "Твоя одежда",
    after: "Ты, одетый(ая)",
    featuresTitle: "Всё, что тебе нужно",
    feat1Title: "ИИ-гардероб",
    feat1Desc: "7 категорий, 39 подкатегорий. ИИ классифицирует и обновляет каждую вещь автоматически.",
    feat2Title: "Планирование на 7 дней",
    feat2Desc: "Планируй свои образы на неделю. Уведомление каждый вечер с образом на завтра.",
    feat3Title: "Режим пары",
    feat3Desc: "Предлагай образы партнёру. Одно уведомление, один выбор, общий стиль.",
    feat4Title: "Семейный режим",
    feat4Desc: "Управляй гардеробом детей. Готовь образы вечером, одевай утром.",
    feat5Title: "Путешествие",
    feat5Desc: "Умный виртуальный чемодан. Встроенная погода, ежедневное планирование, предложения ИИ.",
    feat6Title: "Ротация",
    feat6Desc: "Обнаруживает забытую одежду. Архивируй, перепродай или подари — ноль отходов.",
    pricingTitle: "Выбери свой стиль",
    free: "Бесплатно",
    solo: "Соло",
    couple: "Пара",
    famille: "Семья",
    month: "/мес",
    year: "/год",
    monthly: "Ежемесячно",
    annual: "Ежегодно",
    popular: "Популярный",
    freePerk1: "2 вещи на категорию",
    freePerk2: "Реалистичный ИИ-аватар",
    freePerk3: "Базовое планирование",
    soloPerk1: "Безлимитная одежда",
    soloPerk2: "Реалистичные ИИ-образы",
    soloPerk3: "Продвинутая статистика",
    couplePerk1: "Всё из Соло × 2",
    couplePerk2: "Предложения образов",
    couplePerk3: "Общий гардероб",
    famillePerk1: "Всё из Пары включено",
    famillePerk2: "Безлимитные дети",
    famillePerk3: "Семейное планирование",
    ctaTitle: "Готов совершить революцию в стиле?",
    ctaSubtitle: "Будь среди первых, кто откроет BISK8.",
    footerTerms: "Условия",
    footerPrivacy: "Конфиденциальность",
    footerContact: "Контакт",
    footerRights: "© 2026 BISK8 — Барселуш, Португалия. Все права защищены.",
    langLabel: "RU",
  },
};

const languages = ["fr", "en", "de", "es", "it", "pt", "ar", "zh", "ru"];

const HERO_IMG = "/images/hero.jpg";

function useScrollAnimation() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, isVisible];
}

function useParallax() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return offset;
}

const PhoneMockup = ({ screen, style, className }) => (
  <div className={className} style={{
    width: 280, height: 560, borderRadius: 40, border: "4px solid #333",
    background: "#000", overflow: "hidden", boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)",
    position: "relative", ...style,
  }}>
    <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 120, height: 28, background: "#000", borderRadius: "0 0 16px 16px", zIndex: 2 }} />
    <div style={{ width: "100%", height: "100%", background: `linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20 }}>
      {screen}
    </div>
  </div>
);

const ScreenHome = () => (
  <div style={{ textAlign: "center", width: "100%" }}>
    <div style={{ fontFamily: "'HighCruiser', sans-serif", fontSize: 16, fontWeight: 800, letterSpacing: 4, color: "#fff", marginBottom: 20 }}>BISK8</div>
    <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 16 }}>
      {["LUN", "MAR", "MER", "JEU", "VEN"].map((d, i) => (
        <div key={d} style={{ width: 40, textAlign: "center" }}>
          <div style={{ fontSize: 8, color: "#888", marginBottom: 4 }}>{d}</div>
          <div style={{ width: 36, height: 48, borderRadius: 8, background: i === 2 ? "linear-gradient(135deg, #C4956A, #8B6544)" : "#1a1a1a", border: i === 2 ? "none" : "1px solid #333" }} />
        </div>
      ))}
    </div>
    <div style={{ fontSize: 11, color: "#fff", fontWeight: 600, textAlign: "left", marginBottom: 4, fontFamily: "'HighCruiser', sans-serif" }}>Bonsoir, Alex</div>
    <div style={{ fontSize: 8, color: "#888", textAlign: "left", marginBottom: 12 }}>Montre au monde qui tu es</div>
    <div style={{ width: "100%", height: 180, borderRadius: 16, background: "linear-gradient(135deg, #8B6544 0%, #C4956A 50%, #8B6544 100%)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: 10, left: 10, background: "rgba(0,0,0,0.5)", borderRadius: 8, padding: "4px 8px", fontSize: 8, color: "#fff" }}>Look du jour</div>
    </div>
  </div>
);

const ScreenWardrobe = () => (
  <div style={{ width: "100%", textAlign: "center" }}>
    <div style={{ fontFamily: "'HighCruiser', sans-serif", fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 16 }}>Mon Dressing</div>
    <div style={{ display: "flex", gap: 6, justifyContent: "center", marginBottom: 16, flexWrap: "wrap" }}>
      {["Hauts", "Bas", "Shoes"].map(c => (
        <div key={c} style={{ fontSize: 9, padding: "4px 10px", borderRadius: 20, background: c === "Hauts" ? "#fff" : "#222", color: c === "Hauts" ? "#000" : "#888" }}>{c}</div>
      ))}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
      {[0,1,2,3].map(i => (
        <div key={i} style={{ aspectRatio: "3/4", borderRadius: 12, background: `linear-gradient(${135 + i * 30}deg, #2a2a2a, #1a1a1a)`, border: "1px solid #333" }} />
      ))}
    </div>
  </div>
);

const ScreenLook = () => (
  <div style={{ width: "100%", textAlign: "center" }}>
    <div style={{ fontFamily: "'HighCruiser', sans-serif", fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 12 }}>Créer un Look</div>
    <div style={{ width: "100%", height: 280, borderRadius: 16, background: "linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #333", position: "relative" }}>
      <div style={{ fontSize: 40, opacity: 0.3 }}>👤</div>
      <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", background: "#fff", color: "#000", fontSize: 10, fontWeight: 700, padding: "6px 20px", borderRadius: 20, fontFamily: "'HighCruiser', sans-serif" }}>Générer le look ✨</div>
    </div>
    <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 12 }}>
      {["🧢", "👕", "👖", "👟"].map(e => (
        <div key={e} style={{ width: 36, height: 36, borderRadius: 10, background: "#222", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>{e}</div>
      ))}
    </div>
  </div>
);

export default function BISK8Landing() {
  const [lang, setLang] = useState("fr");
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);
  const t = translations[lang] || translations.fr;
  const scrollY = useParallax();

  const [heroRef, heroVisible] = useScrollAnimation();
  const [stepsRef, stepsVisible] = useScrollAnimation();
  const [avatarRef, avatarVisible] = useScrollAnimation();
  const [featRef, featVisible] = useScrollAnimation();
  const [priceRef, priceVisible] = useScrollAnimation();
  const [ctaRef, ctaVisible] = useScrollAnimation();

  const prices = {
    solo: isAnnual ? "99.90 CHF" : "9.90 CHF",
    couple: isAnnual ? "149.90 CHF" : "14.90 CHF",
    famille: isAnnual ? "179.90 CHF" : "17.90 CHF",
    period: isAnnual ? t.year : t.month,
  };

  return (
    <div style={{ fontFamily: "'HighCruiser', sans-serif", background: "#000", color: "#fff", overflowX: "hidden" }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ${FONT_FACE_CSS}
        @keyframes float { 0%, 100% { transform: translateY(0px) rotateY(-8deg) rotateX(4deg); } 50% { transform: translateY(-20px) rotateY(-8deg) rotateX(4deg); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(60px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInLeft { from { opacity: 0; transform: translateX(-60px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeInRight { from { opacity: 0; transform: translateX(60px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes pulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.15); } 50% { box-shadow: 0 0 0 20px rgba(255,255,255,0); } }
        @keyframes gradientShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .reveal { opacity: 0; transform: translateY(60px); transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1); }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-left { opacity: 0; transform: translateX(-80px); transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1); }
        .reveal-left.visible { opacity: 1; transform: translateX(0); }
        .reveal-right { opacity: 0; transform: translateX(80px); transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1); }
        .reveal-right.visible { opacity: 1; transform: translateX(0); }
        .badge-btn { display: inline-block; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .badge-btn:hover { transform: scale(1.05); box-shadow: 0 10px 30px rgba(255,255,255,0.1); }
        .feature-card { transition: transform 0.4s ease, box-shadow 0.4s ease; }
        .feature-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .price-card { transition: transform 0.4s ease, box-shadow 0.4s ease; }
        .price-card:hover { transform: translateY(-12px); box-shadow: 0 30px 60px rgba(0,0,0,0.4); }
        .nav-glass { backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
        @media (max-width: 768px) {
          .hero-grid { flex-direction: column !important; text-align: center !important; }
          .hero-phone { margin-top: 40px !important; }
          .avatar-grid { flex-direction: column !important; }
          .features-grid { grid-template-columns: 1fr !important; }
          .pricing-grid { grid-template-columns: 1fr !important; }
          .steps-grid { flex-direction: column !important; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav-glass" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: "rgba(0,0,0,0.7)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <img src={WHITE_LOGO} alt="BISK8" style={{ height: 28 }} />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ position: "relative" }}>
            <button onClick={() => setShowLangMenu(!showLangMenu)} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "6px 14px", color: "#fff", fontSize: 13, cursor: "pointer", fontFamily: "'HighCruiser', sans-serif", fontWeight: 500 }}>
              {lang.toUpperCase()} ▾
            </button>
            {showLangMenu && (
              <div style={{ position: "absolute", top: 40, right: 0, background: "#111", border: "1px solid #333", borderRadius: 12, overflow: "hidden", minWidth: 80 }}>
                {languages.map(l => (
                  <div key={l} onClick={() => { setLang(l); setShowLangMenu(false); }} style={{ padding: "8px 16px", cursor: "pointer", fontSize: 13, color: l === lang ? "#fff" : "#888", background: l === lang ? "#222" : "transparent", fontWeight: l === lang ? 600 : 400 }}>
                    {l.toUpperCase()}
                  </div>
                ))}
              </div>
            )}
          </div>
          <a href="#download" style={{ background: "#fff", color: "#000", textDecoration: "none", padding: "8px 20px", borderRadius: 8, fontSize: 13, fontWeight: 700, letterSpacing: 0.5 }}>{t.download}</a>
        </div>
      </nav>

      {/* HERO — BLACK */}
      <section ref={heroRef} style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 32px 80px", background: "radial-gradient(ellipse at 50% 0%, rgba(40,40,40,0.5) 0%, #000 70%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 800\"><circle cx=\"400\" cy=\"400\" r=\"300\" fill=\"none\" stroke=\"rgba(255,255,255,0.02)\" stroke-width=\"1\"/><circle cx=\"400\" cy=\"400\" r=\"200\" fill=\"none\" stroke=\"rgba(255,255,255,0.015)\" stroke-width=\"1\"/><circle cx=\"400\" cy=\"400\" r=\"100\" fill=\"none\" stroke=\"rgba(255,255,255,0.01)\" stroke-width=\"1\"/></svg>')", backgroundSize: "800px", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
        <div className="hero-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 80, position: "relative" }}>
          <div style={{ flex: 1 }}>
            <div className={`reveal ${heroVisible ? "visible" : ""}`} style={{ marginBottom: 32 }}>
              <img src={WHITE_LOGO} alt="BISK8" style={{ height: 32, marginBottom: 24, opacity: 0.6 }} />
              <h1 style={{ fontFamily: "'HighCruiser', sans-serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: 2, marginBottom: 24, background: "linear-gradient(135deg, #fff 0%, #ccc 50%, #fff 100%)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "gradientShift 6s ease infinite" }}>
                {t.tagline}
              </h1>
              <p style={{ fontSize: 18, color: "#999", lineHeight: 1.6, maxWidth: 440, fontWeight: 300 }}>{t.subtitle}</p>
            </div>
            <div className={`reveal ${heroVisible ? "visible" : ""}`} style={{ display: "flex", gap: 12, flexWrap: "wrap", transitionDelay: "0.3s" }} id="download">
              <a href="#" className="badge-btn" style={{ background: "#fff", color: "#000", padding: "14px 28px", borderRadius: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 10, animation: "pulse 3s ease infinite" }}>
                <svg width="20" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
                <div><div style={{ fontSize: 10, fontWeight: 400, opacity: 0.65 }}>Download on the</div><div style={{ fontSize: 15, fontWeight: 700 }}>App Store</div></div>
              </a>
              <a href="#" className="badge-btn" style={{ background: "transparent", color: "#fff", padding: "14px 28px", borderRadius: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 10, border: "1px solid rgba(255,255,255,0.2)" }}>
                <svg width="20" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"/></svg>
                <div><div style={{ fontSize: 10, fontWeight: 400, opacity: 0.65 }}>GET IT ON</div><div style={{ fontSize: 15, fontWeight: 700 }}>Google Play</div></div>
              </a>
            </div>
          </div>
          <div className="hero-phone" style={{ flex: "0 0 auto", perspective: 1200 }}>
            <div style={{ animation: "float 6s ease-in-out infinite", transform: `translateY(${-scrollY * 0.08}px)` }}>
              <div style={{
                width: 280, height: 500, borderRadius: 40, border: '4px solid #333',
                background: '#000', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)',
                position: 'relative',
              }}>
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 120, height: 28, background: '#000', borderRadius: '0 0 16px 16px', zIndex: 2 }} />
                <img src={HERO_IMG} alt='BISK8 App' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 36 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — WHITE */}
      <section ref={stepsRef} style={{ padding: "120px 32px", background: "#fff", color: "#000", position: "relative" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 className={`reveal ${stepsVisible ? "visible" : ""}`} style={{ fontFamily: "'HighCruiser', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, textAlign: "center", marginBottom: 80, letterSpacing: 2 }}>{t.howItWorks}</h2>
          <div className="steps-grid" style={{ display: "flex", gap: 48, justifyContent: "center" }}>
            {[
              { num: "01", title: t.step1Title, desc: t.step1Desc, img: STEP1_IMG },
              { num: "02", title: t.step2Title, desc: t.step2Desc, img: STEP2_IMG },
              { num: "03", title: t.step3Title, desc: t.step3Desc, img: STEP3_IMG },
            ].map((step, i) => (
              <div key={i} className={`reveal ${stepsVisible ? "visible" : ""}`} style={{ flex: 1, textAlign: "center", transitionDelay: `${i * 0.2}s`, maxWidth: 300 }}>
                <div style={{ fontFamily: "'HighCruiser', sans-serif", fontSize: 72, fontWeight: 900, color: "rgba(0,0,0,0.06)", marginBottom: -24, position: "relative", zIndex: 0, letterSpacing: 4 }}>{step.num}</div>
                <div style={{ width: 220, height: 440, margin: "0 auto", borderRadius: 28, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", border: "3px solid #e8e8e8" }}>
                  <img src={step.img} alt={step.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <h3 style={{ fontFamily: "'HighCruiser', sans-serif", fontSize: 24, fontWeight: 900, marginBottom: 10, marginTop: 24, letterSpacing: 1.5 }}>{step.title}</h3>
                <p style={{ fontFamily: "'HighCruiser', sans-serif", fontSize: 15, color: "#666", lineHeight: 1.7, maxWidth: 280, margin: "0 auto" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVATAR IA — BLACK */}
      <section ref={avatarRef} style={{ padding: "120px 32px", background: "#000", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 50%, rgba(60,60,60,0.2) 0%, transparent 60%)" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div className="avatar-grid" style={{ display: "flex", alignItems: "center", gap: 80 }}>
            <div style={{ flex: 1 }}>
              <div className={`reveal-left ${avatarVisible ? "visible" : ""}`}>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 4, color: "#666", textTransform: "uppercase", marginBottom: 16 }}>AI AVATAR</div>
                <h2 style={{ fontFamily: "'HighCruiser', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, marginBottom: 16, lineHeight: 1.1, letterSpacing: 2 }}>{t.avatarTagline}</h2>
                <p style={{ fontSize: 16, color: "#999", lineHeight: 1.7, maxWidth: 480 }}>{t.avatarDesc}</p>
              </div>
            </div>
            <div className={`reveal-right ${avatarVisible ? "visible" : ""}`} style={{ flex: 1, display: "flex", gap: 20, justifyContent: "center" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ width: 180, height: 240, borderRadius: 20, overflow: "hidden", marginBottom: 12 }}>
                  <img src="/section3_1.png" alt="Before" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 95%" }} />
                </div>
                <div style={{ fontSize: 12, color: "#666", fontWeight: 500 }}>{t.before}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", fontSize: 24, color: "#444" }}>→</div>
              <div style={{ textAlign: "center" }}>
                <div style={{ width: 180, height: 240, borderRadius: 20, overflow: "hidden", marginBottom: 12 }}>
                  <img src="/section3_2.png" alt="After" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ fontSize: 12, color: "#999", fontWeight: 600 }}>{t.after}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES — WHITE */}
      <section ref={featRef} style={{ padding: "120px 32px", background: "#fff", color: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 className={`reveal ${featVisible ? "visible" : ""}`} style={{ fontFamily: "'HighCruiser', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, textAlign: "center", marginBottom: 64, letterSpacing: 2 }}>{t.featuresTitle}</h2>
          <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { icon: "👕", title: t.feat1Title, desc: t.feat1Desc },
              { icon: "📅", title: t.feat2Title, desc: t.feat2Desc },
              { icon: "💕", title: t.feat3Title, desc: t.feat3Desc },
              { icon: "👨‍👩‍👧", title: t.feat4Title, desc: t.feat4Desc },
              { icon: "✈️", title: t.feat5Title, desc: t.feat5Desc },
              { icon: "♻️", title: t.feat6Title, desc: t.feat6Desc },
            ].map((f, i) => (
              <div key={i} className={`feature-card reveal ${featVisible ? "visible" : ""}`} style={{ background: "#fafafa", borderRadius: 20, padding: 32, border: "1px solid #eee", cursor: "default", transitionDelay: `${i * 0.1}s` }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING — BLACK */}
      <section ref={priceRef} style={{ padding: "120px 32px", background: "#000", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 100%, rgba(40,40,40,0.3) 0%, transparent 60%)" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <h2 className={`reveal ${priceVisible ? "visible" : ""}`} style={{ fontFamily: "'HighCruiser', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, textAlign: "center", marginBottom: 24, letterSpacing: 2 }}>{t.pricingTitle}</h2>
          <div className={`reveal ${priceVisible ? "visible" : ""}`} style={{ display: "flex", justifyContent: "center", marginBottom: 48, transitionDelay: "0.2s" }}>
            <div style={{ background: "#111", borderRadius: 12, padding: 4, display: "flex", gap: 4 }}>
              <button onClick={() => setIsAnnual(false)} style={{ padding: "8px 20px", borderRadius: 8, border: "none", background: !isAnnual ? "#fff" : "transparent", color: !isAnnual ? "#000" : "#888", fontWeight: 600, fontSize: 13, cursor: "pointer", fontFamily: "'HighCruiser', sans-serif" }}>{t.monthly}</button>
              <button onClick={() => setIsAnnual(true)} style={{ padding: "8px 20px", borderRadius: 8, border: "none", background: isAnnual ? "#fff" : "transparent", color: isAnnual ? "#000" : "#888", fontWeight: 600, fontSize: 13, cursor: "pointer", fontFamily: "'HighCruiser', sans-serif", position: "relative" }}>{t.annual} <span style={{ background: "linear-gradient(135deg, #16a34a, #22c55e)", color: "#fff", fontSize: 9, fontWeight: 700, padding: "2px 8px", borderRadius: 20, marginLeft: 6, letterSpacing: 0.5 }}>-17%</span></button>
            </div>
          </div>
          <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[
              { name: t.free, price: "0 CHF", period: "", perks: [t.freePerk1, t.freePerk2, t.freePerk3], highlight: false },
              { name: t.solo, price: prices.solo, period: prices.period, perks: [t.soloPerk1, t.soloPerk2, t.soloPerk3], highlight: true, discount: isAnnual },
              { name: t.couple, price: prices.couple, period: prices.period, perks: [t.couplePerk1, t.couplePerk2, t.couplePerk3], highlight: false, discount: isAnnual },
              { name: t.famille, price: prices.famille, period: prices.period, perks: [t.famillePerk1, t.famillePerk2, t.famillePerk3], highlight: false, discount: isAnnual },
            ].map((plan, i) => (
              <div key={i} className={`price-card reveal ${priceVisible ? "visible" : ""}`} style={{ background: plan.highlight ? "#fff" : "#111", color: plan.highlight ? "#000" : "#fff", borderRadius: 24, padding: "36px 24px", border: plan.highlight ? "none" : "1px solid #222", position: "relative", transitionDelay: `${i * 0.15}s` }}>
                {plan.highlight && <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#000", color: "#fff", fontSize: 10, fontWeight: 700, padding: "4px 16px", borderRadius: 20, letterSpacing: 1 }}>{t.popular}</div>}
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, letterSpacing: 1 }}>{plan.name}</div>
                <div style={{ marginBottom: 24 }}>
                  <span style={{ fontSize: 36, fontWeight: 900 }}>{plan.price.split(" ")[0]}</span>
                  <span style={{ fontSize: 14, color: plan.highlight ? "#666" : "#888" }}> CHF{plan.period}</span>
                  {plan.discount && <span style={{ background: "linear-gradient(135deg, #16a34a, #22c55e)", color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20, letterSpacing: 1, marginLeft: 16 }}>-17%</span>}
                </div>
                {plan.perks.map((p, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, fontSize: 13, color: plan.highlight ? "#444" : "#aaa" }}>
                    <span style={{ color: plan.highlight ? "#000" : "#fff", fontWeight: 700 }}>✓</span> {p}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL — WHITE */}
      <section ref={ctaRef} id="download-bottom" style={{ padding: "120px 32px", background: "#fff", color: "#000", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 className={`reveal ${ctaVisible ? "visible" : ""}`} style={{ fontFamily: "'HighCruiser', sans-serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 900, marginBottom: 16, letterSpacing: 2 }}>{t.ctaTitle}</h2>
          <p className={`reveal ${ctaVisible ? "visible" : ""}`} style={{ fontSize: 18, color: "#666", marginBottom: 40, transitionDelay: "0.2s" }}>{t.ctaSubtitle.split("BISK8").map((part, i, arr) => <span key={i}>{part}{i < arr.length - 1 && <img src={BLACK_LOGO} alt="BISK8" style={{ height: 23, verticalAlign: "middle", display: "inline", margin: "0 4px", opacity: 0.65 }} />}</span>)}</p>
          <div className={`reveal ${ctaVisible ? "visible" : ""}`} style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", transitionDelay: "0.4s" }}>
            <a href="#" className="badge-btn" style={{ background: "#000", color: "#fff", padding: "14px 28px", borderRadius: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
              <svg width="20" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
              <div><div style={{ fontSize: 10, fontWeight: 400, opacity: 0.65 }}>Download on the</div><div style={{ fontSize: 15, fontWeight: 700 }}>App Store</div></div>
            </a>
            <a href="#" className="badge-btn" style={{ background: "#000", color: "#fff", padding: "14px 28px", borderRadius: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
              <svg width="20" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"/></svg>
              <div><div style={{ fontSize: 10, fontWeight: 400, opacity: 0.65 }}>GET IT ON</div><div style={{ fontSize: 15, fontWeight: 700 }}>Google Play</div></div>
            </a>
          </div>
          <div style={{ marginTop: 32, display: "flex", justifyContent: "center", gap: 20 }}>
            <a href="https://instagram.com/bisk8" target="_blank" rel="noopener" style={{ color: "#bbb", textDecoration: "none", fontSize: 13, fontWeight: 500 }}>Instagram</a>
            <a href="https://tiktok.com/@bisk8" target="_blank" rel="noopener" style={{ color: "#bbb", textDecoration: "none", fontSize: 13, fontWeight: 500 }}>TikTok</a>
          </div>
        </div>
      </section>

      {/* FOOTER — BLACK */}
      <footer style={{ padding: "48px 32px", background: "#000", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <img src={WHITE_LOGO} alt="BISK8" style={{ height: 22 }} />
          <div style={{ display: "flex", gap: 24 }}>
            <a href="/terms" style={{ color: "#666", textDecoration: "none", fontSize: 13 }}>{t.footerTerms}</a>
            <a href="/privacy" style={{ color: "#666", textDecoration: "none", fontSize: 13 }}>{t.footerPrivacy}</a>
            <a href="mailto:contact@bisk8.co" style={{ color: "#666", textDecoration: "none", fontSize: 13 }}>{t.footerContact}</a>
          </div>
          <div style={{ fontSize: 12, color: "#444" }}>{t.footerRights}</div>
        </div>
      </footer>
    </div>
  );
}
