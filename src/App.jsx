import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useLanguage } from "./LanguageContext.jsx";


const WHITE_LOGO = "/images/white-logo.svg";
const BLACK_LOGO = "/images/black-logo.svg";
const FONT_FACE_CSS = `@font-face { font-family: "HighCruiser"; src: url("/fonts/HighCruiser.ttf") format("truetype"); font-weight: normal; font-style: normal; }`;

const STEP1_IMG = "/images/step1.jpg";
const STEP2_IMG = "/images/step2.jpg";
const STEP3_IMG = "/images/Section2_3.PNG";

const translations = {
  fr: {
    tagline: "Ton dressing. Ton avatar. Ton style.",
    subtitle: "L'app qui te montre dans tes vêtements avant de t'habiller.",
    download: "Télécharger",
    howItWorks: "Comment ça marche",
    step1Title: "Photographie",
    step1Desc: "Prends en photo tes vêtements. L'IA les transforme en images professionnelles.",
    step2Title: "Organise",
    step2Desc: "Ton dressing virtuel, organisé par catégorie. 40 sous-catégories intelligentes.",
    step3Title: "Visualise",
    step3Desc: "Vois-toi dans tes looks. Ton avatar IA porte tes vêtements.",
    avatarSection: "Ton Avatar IA",
    avatarTagline: "Pas de mannequin. Pas de template. C'est toi.",
    avatarDesc: "Crée ton avatar à partir d'une selfie. L'IA génère un rendu ultra-réaliste de toi portant tes vêtements. Chaque look, chaque combinaison — avant même de t'habiller.",
    before: "Ton vêtement",
    after: "Toi, habillé(e)",
    featuresTitle: "Tout ce dont tu as besoin",
    feat1Title: "Dressing IA",
    feat1Desc: "6 catégories, 40 sous-catégories. L'IA classe et régénère chaque pièce automatiquement.",
    feat2Title: "Planning Illimité",
    feat2Desc: "Planifie tes tenues sans limite. Notification chaque soir avec ton look de demain.",
    feat3Title: "Mode Couple",
    feat3Desc: "Accède aux tailles et au dressing de ton/ta partenaire. Propose des tenues. Une notification, un choix, un style partagé.",
    feat4Title: "Mode Famille",
    feat4Desc: "Gère le dressing de tes enfants. Prépare leurs tenues le soir, habille-les le matin.",
    feat5Title: "Voyage",
    feat5Desc: "Valise virtuelle intelligente pour toute la famille. Météo intégrée, planning par jour, suggestions IA.",
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
    freePerk1: "2 pièces par catégorie (14 au total)",
    freePerk2: "Avatar IA réaliste",
    freePerk3: "Planning basique",
    soloPerk1: "Vêtements illimités",
    soloPerk2: "Looks IA réalistes",
    soloPerk3: "Statistiques avancées", soloPerk4: "Valise virtuelle",
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
    step2Desc: "Your virtual wardrobe, organized by category. 40 smart subcategories.",
    step3Title: "Visualize",
    step3Desc: "See yourself in your looks. Your AI avatar wears your clothes.",
    avatarSection: "Your AI Avatar",
    avatarTagline: "No mannequin. No template. It's you.",
    avatarDesc: "Create your avatar from a selfie. AI generates an ultra-realistic rendering of you wearing your clothes. Every look, every combination — before even getting dressed.",
    before: "Your garment",
    after: "You, dressed",
    featuresTitle: "Everything you need",
    feat1Title: "AI Wardrobe",
    feat1Desc: "6 categories, 40 subcategories. AI classifies and regenerates each piece automatically.",
    feat2Title: "Unlimited Planning",
    feat2Desc: "Plan your outfits without limits. Get a notification every evening with tomorrow's look.",
    feat3Title: "Couple Mode",
    feat3Desc: "Access your partner's sizes and wardrobe. Propose outfits. One notification, one choice, one shared style.",
    feat4Title: "Family Mode",
    feat4Desc: "Manage your kids' wardrobe. Prepare their outfits at night, dress them in the morning.",
    feat5Title: "Travel",
    feat5Desc: "Smart virtual suitcase for the whole family. Built-in weather, daily planning, AI suggestions.",
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
    freePerk1: "2 items per category (14 total)",
    freePerk2: "Realistic AI avatar",
    freePerk3: "Basic planning",
    soloPerk1: "Unlimited clothes",
    soloPerk2: "Realistic AI looks",
    soloPerk3: "Advanced statistics", soloPerk4: "Virtual suitcase",
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
    step2Desc: "Dein virtueller Kleiderschrank, nach Kategorie sortiert. 40 smarte Unterkategorien.",
    step3Title: "Visualisieren",
    step3Desc: "Sieh dich in deinen Looks. Dein KI-Avatar trägt deine Kleidung.",
    avatarSection: "Dein KI-Avatar",
    avatarTagline: "Kein Mannequin. Kein Template. Du bist es.",
    avatarDesc: "Erstelle deinen Avatar aus einem Selfie. Die KI generiert ein ultra-realistisches Bild von dir in deiner Kleidung. Jeder Look, jede Kombination — bevor du dich anziehst.",
    before: "Dein Kleidungsstück",
    after: "Du, angezogen",
    featuresTitle: "Alles was du brauchst",
    feat1Title: "KI-Kleiderschrank",
    feat1Desc: "6 Kategorien, 40 Unterkategorien. Die KI klassifiziert und regeneriert jedes Stück automatisch.",
    feat2Title: "Unbegrenzte Planung",
    feat2Desc: "Plane deine Outfits ohne Grenzen. Jeden Abend eine Benachrichtigung mit dem Look von morgen.",
    feat3Title: "Paar-Modus",
    feat3Desc: "Zugang zu den Größen und dem Kleiderschrank deines Partners. Schlage Outfits vor. Eine Benachrichtigung, eine Wahl, ein gemeinsamer Stil.",
    feat4Title: "Familien-Modus",
    feat4Desc: "Verwalte den Kleiderschrank deiner Kinder. Bereite abends ihre Outfits vor, zieh sie morgens an.",
    feat5Title: "Reise",
    feat5Desc: "Intelligenter virtueller Koffer für die ganze Familie. Integriertes Wetter, Tagesplanung, KI-Vorschläge.",
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
    freePerk1: "2 Stücke pro Kategorie (14 insgesamt)",
    freePerk2: "Realistischer KI-Avatar",
    freePerk3: "Basisplanung",
    soloPerk1: "Unbegrenzte Kleidung",
    soloPerk2: "Realistische KI-Looks",
    soloPerk3: "Erweiterte Statistiken", soloPerk4: "Virtueller Koffer",
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
    step2Desc: "Tu armario virtual, organizado por categoría. 40 subcategorías inteligentes.",
    step3Title: "Visualiza",
    step3Desc: "Mírate con tus looks. Tu avatar IA lleva tu ropa.",
    avatarSection: "Tu Avatar IA",
    avatarTagline: "Sin maniquí. Sin plantilla. Eres tú.",
    avatarDesc: "Crea tu avatar a partir de un selfie. La IA genera un renderizado ultra-realista de ti con tu ropa. Cada look, cada combinación — antes de vestirte.",
    before: "Tu prenda",
    after: "Tú, vestido/a",
    featuresTitle: "Todo lo que necesitas",
    feat1Title: "Armario IA",
    feat1Desc: "6 categorías, 40 subcategorías. La IA clasifica y regenera cada prenda automáticamente.",
    feat2Title: "Planificación Ilimitada",
    feat2Desc: "Planifica tus outfits sin límites. Notificación cada noche con el look de mañana.",
    feat3Title: "Modo Pareja",
    feat3Desc: "Accede a las tallas y al armario de tu pareja. Propón outfits. Una notificación, una elección, un estilo compartido.",
    feat4Title: "Modo Familia",
    feat4Desc: "Gestiona el armario de tus hijos. Prepara sus outfits por la noche, vístelos por la mañana.",
    feat5Title: "Viaje",
    feat5Desc: "Maleta virtual inteligente para toda la familia. Clima integrado, planificación diaria, sugerencias IA.",
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
    freePerk1: "2 prendas por categoría (14 en total)",
    freePerk2: "Avatar IA realista",
    freePerk3: "Planificación básica",
    soloPerk1: "Ropa ilimitada",
    soloPerk2: "Looks IA realistas",
    soloPerk3: "Estadísticas avanzadas", soloPerk4: "Maleta virtual",
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
    step2Desc: "Il tuo guardaroba virtuale, organizzato per categoria. 40 sottocategorie intelligenti.",
    step3Title: "Visualizza",
    step3Desc: "Guardati nei tuoi look. Il tuo avatar IA indossa i tuoi vestiti.",
    avatarSection: "Il tuo Avatar IA",
    avatarTagline: "Nessun manichino. Nessun template. Sei tu.",
    avatarDesc: "Crea il tuo avatar da un selfie. L'IA genera un rendering ultra-realistico di te che indossa i tuoi vestiti. Ogni look, ogni combinazione — prima ancora di vestirti.",
    before: "Il tuo capo",
    after: "Tu, vestito/a",
    featuresTitle: "Tutto ciò di cui hai bisogno",
    feat1Title: "Guardaroba IA",
    feat1Desc: "6 categorie, 40 sottocategorie. L'IA classifica e rigenera ogni capo automaticamente.",
    feat2Title: "Pianificazione Illimitata",
    feat2Desc: "Pianifica i tuoi outfit senza limiti. Notifica ogni sera con il look di domani.",
    feat3Title: "Modalità Coppia",
    feat3Desc: "Accedi alle taglie e al guardaroba del tuo partner. Proponi outfit. Una notifica, una scelta, uno stile condiviso.",
    feat4Title: "Modalità Famiglia",
    feat4Desc: "Gestisci il guardaroba dei tuoi figli. Prepara i loro outfit la sera, vestili la mattina.",
    feat5Title: "Viaggio",
    feat5Desc: "Valigia virtuale intelligente per tutta la famiglia. Meteo integrato, pianificazione giornaliera, suggerimenti IA.",
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
    freePerk1: "2 capi per categoria (14 in totale)",
    freePerk2: "Avatar IA realistico",
    freePerk3: "Pianificazione base",
    soloPerk1: "Vestiti illimitati",
    soloPerk2: "Look IA realistici",
    soloPerk3: "Statistiche avanzate", soloPerk4: "Valigia virtuale",
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
    step2Desc: "O teu guarda-roupa virtual, organizado por categoria. 40 subcategorias inteligentes.",
    step3Title: "Visualiza",
    step3Desc: "Vê-te nos teus looks. O teu avatar IA veste as tuas roupas.",
    avatarSection: "O teu Avatar IA",
    avatarTagline: "Sem manequim. Sem template. És tu.",
    avatarDesc: "Cria o teu avatar a partir de uma selfie. A IA gera uma renderização ultra-realista de ti a vestir as tuas roupas. Cada look, cada combinação — antes de te vestires.",
    before: "A tua peça",
    after: "Tu, vestido/a",
    featuresTitle: "Tudo o que precisas",
    feat1Title: "Guarda-roupa IA",
    feat1Desc: "6 categorias, 40 subcategorias. A IA classifica e regenera cada peça automaticamente.",
    feat2Title: "Planeamento Ilimitado",
    feat2Desc: "Planeia os teus outfits sem limites. Notificação todas as noites com o look de amanhã.",
    feat3Title: "Modo Casal",
    feat3Desc: "Acede às tamanhos e ao guarda-roupa do teu parceiro. Propõe outfits. Uma notificação, uma escolha, um estilo partilhado.",
    feat4Title: "Modo Família",
    feat4Desc: "Gere o guarda-roupa dos teus filhos. Prepara os outfits à noite, veste-os de manhã.",
    feat5Title: "Viagem",
    feat5Desc: "Mala virtual inteligente para toda a família. Meteorologia integrada, planeamento diário, sugestões IA.",
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
    freePerk1: "2 peças por categoria (14 no total)",
    freePerk2: "Avatar IA realista",
    freePerk3: "Planeamento básico",
    soloPerk1: "Roupas ilimitadas",
    soloPerk2: "Looks IA realistas",
    soloPerk3: "Estatísticas avançadas", soloPerk4: "Mala virtual",
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
    step2Desc: "خزانتك الافتراضية، مرتبة حسب الفئة. 40 فئة فرعية ذكية.",
    step3Title: "تصوّر",
    step3Desc: "شاهد نفسك بإطلالاتك. أفاتارك بالذكاء الاصطناعي يرتدي ملابسك.",
    avatarSection: "أفاتارك بالذكاء الاصطناعي",
    avatarTagline: "لا عارض أزياء. لا قالب. إنه أنت.",
    avatarDesc: "أنشئ أفاتارك من سيلفي. الذكاء الاصطناعي يولّد صورة فائقة الواقعية لك بملابسك. كل إطلالة، كل تركيبة — قبل أن ترتدي.",
    before: "قطعة ملابسك",
    after: "أنت، مرتدياً",
    featuresTitle: "كل ما تحتاجه",
    feat1Title: "خزانة ذكية",
    feat1Desc: "6 فئات، 40 فئة فرعية. الذكاء الاصطناعي يصنّف ويجدّد كل قطعة تلقائياً.",
    feat2Title: "تخطيط غير محدود",
    feat2Desc: "خطط إطلالاتك بلا حدود. إشعار كل مساء بإطلالة الغد.",
    feat3Title: "وضع الثنائي",
    feat3Desc: "اطّلع على مقاسات وخزانة شريكك. اقترح إطلالات. إشعار واحد، اختيار واحد، أسلوب مشترك.",
    feat4Title: "وضع العائلة",
    feat4Desc: "أدِر خزانة أطفالك. حضّر إطلالاتهم مساءً، ألبسهم صباحاً.",
    feat5Title: "سفر",
    feat5Desc: "حقيبة سفر افتراضية ذكية لكل العائلة. طقس مدمج، تخطيط يومي، اقتراحات ذكية.",
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
    freePerk1: "قطعتان لكل فئة (14 إجمالاً)",
    freePerk2: "أفاتار ذكاء اصطناعي واقعي",
    freePerk3: "تخطيط أساسي",
    soloPerk1: "ملابس غير محدودة",
    soloPerk2: "إطلالات ذكية واقعية",
    soloPerk3: "إحصائيات متقدمة", soloPerk4: "حقيبة سفر افتراضية",
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
    step2Desc: "你的虚拟衣橱，按类别整理。40个智能子类别。",
    step3Title: "预览",
    step3Desc: "看看你穿上的样子。你的AI分身穿着你的衣服。",
    avatarSection: "你的AI分身",
    avatarTagline: "不是模特。不是模板。是你自己。",
    avatarDesc: "用一张自拍创建你的分身。AI生成超逼真的你穿着衣服的效果图。每个造型，每种搭配——在你穿上之前。",
    before: "你的衣物",
    after: "穿上后的你",
    featuresTitle: "你需要的一切",
    feat1Title: "AI衣橱",
    feat1Desc: "6大类别，40个子类别。AI自动分类并重新生成每件衣物。",
    feat2Title: "无限规划",
    feat2Desc: "无限制地规划你的穿搭。每晚收到明天造型的通知。",
    feat3Title: "情侣模式",
    feat3Desc: "查看伴侣的尺码和衣橱。推荐穿搭。一条通知，一个选择，共享风格。",
    feat4Title: "家庭模式",
    feat4Desc: "管理孩子的衣橱。晚上准备好穿搭，早上轻松穿衣。",
    feat5Title: "旅行",
    feat5Desc: "全家共享的智能虚拟行李箱。内置天气、每日规划、AI建议。",
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
    freePerk1: "每类别2件（共14件）",
    freePerk2: "逼真AI分身",
    freePerk3: "基础规划",
    soloPerk1: "无限衣物",
    soloPerk2: "逼真AI造型",
    soloPerk3: "高级统计", soloPerk4: "虚拟行李箱",
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
    step2Desc: "Твой виртуальный гардероб, организованный по категориям. 40 умных подкатегорий.",
    step3Title: "Визуализируй",
    step3Desc: "Посмотри на себя в своих образах. Твой ИИ-аватар носит твою одежду.",
    avatarSection: "Твой ИИ-аватар",
    avatarTagline: "Без манекена. Без шаблона. Это ты.",
    avatarDesc: "Создай аватар из селфи. ИИ генерирует ультра-реалистичное изображение тебя в твоей одежде. Каждый образ, каждая комбинация — до того, как оденешься.",
    before: "Твоя одежда",
    after: "Ты, одетый(ая)",
    featuresTitle: "Всё, что тебе нужно",
    feat1Title: "ИИ-гардероб",
    feat1Desc: "6 категорий, 40 подкатегорий. ИИ классифицирует и обновляет каждую вещь автоматически.",
    feat2Title: "Безлимитное планирование",
    feat2Desc: "Планируй свои образы без ограничений. Уведомление каждый вечер с образом на завтра.",
    feat3Title: "Режим пары",
    feat3Desc: "Доступ к размерам и гардеробу партнёра. Предлагай образы. Одно уведомление, один выбор, общий стиль.",
    feat4Title: "Семейный режим",
    feat4Desc: "Управляй гардеробом детей. Готовь образы вечером, одевай утром.",
    feat5Title: "Путешествие",
    feat5Desc: "Умный виртуальный чемодан для всей семьи. Встроенная погода, ежедневное планирование, предложения ИИ.",
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
    freePerk1: "2 вещи на категорию (14 всего)",
    freePerk2: "Реалистичный ИИ-аватар",
    freePerk3: "Базовое планирование",
    soloPerk1: "Безлимитная одежда",
    soloPerk2: "Реалистичные ИИ-образы",
    soloPerk3: "Продвинутая статистика", soloPerk4: "Виртуальный чемодан",
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

const languages = ["en", "pt", "fr", "de", "es", "it", "ar", "zh", "ru"];

const HERO_IMG = "/images/hero.jpg";

// ═══════════════════════════════════════════════════
// ANIMATION SYSTEM 2026 — Scroll-linked, Apple-style
// ═══════════════════════════════════════════════════

const EASE = [0.22, 1, 0.36, 1];

// Basic variants (kept for simple elements)
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.15, ease: EASE } }),
};
const heroWord = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 + i * 0.12, ease: EASE } }),
};
const phoneSlide = {
  hidden: { opacity: 0, x: 120, rotateY: -15 },
  visible: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 1.2, delay: 0.4, ease: EASE } },
};

// Hero scatter text — letters fly from random positions
const letterVariant = {
  hidden: (i) => ({ opacity: 0, y: 40 + Math.random() * 30, x: (Math.random() - 0.5) * 60, rotate: (Math.random() - 0.5) * 20, scale: 0.5 }),
  visible: (i) => ({ opacity: 1, y: 0, x: 0, rotate: 0, scale: 1, transition: { duration: 0.5, delay: 0.5 + i * 0.025, ease: EASE } }),
};
function ScatterText({ text }) {
  const words = text.split(" ");
  let charIndex = 0;
  return (
    <motion.span initial="hidden" animate="visible" style={{ display: "inline" }}>
      {words.map((word, wi) => {
        const startIdx = charIndex;
        charIndex += word.length + 1;
        return (
          <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
            {word.split("").map((char, ci) => (
              <motion.span key={ci} custom={startIdx + ci} variants={letterVariant} style={{ display: "inline-block" }}>
                {char}
              </motion.span>
            ))}
            {wi < words.length - 1 && <span style={{ display: "inline-block", width: "0.3em" }}>{"\u00A0"}</span>}
          </span>
        );
      })}
    </motion.span>
  );
}

// Blur-to-sharp for any children (subtitle, paragraphs)
function BlurReveal({ children, delay = 0, style, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 1.0, delay, ease: EASE }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// Scroll-linked blur-to-sharp heading (word by word)
function BlurText({ text, style, dark }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 90%", "start 40%"] });
  const words = text.split(" ");
  return (
    <h2 ref={ref} style={style}>
      {words.map((word, i) => (
        <BlurWord key={i} progress={scrollYProgress} index={i} total={words.length}>
          {word}
        </BlurWord>
      ))}
    </h2>
  );
}
function BlurWord({ children, progress, index, total }) {
  const start = index / (total + 2);
  const end = (index + 1) / (total + 2);
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const blur = useTransform(progress, [start, end], [10, 0]);
  const y = useTransform(progress, [start, end], [15, 0]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);
  return (
    <motion.span style={{ display: "inline-block", opacity, filter, y, marginRight: "0.3em" }}>
      {children}
    </motion.span>
  );
}

// CascadeText — characters drop from above with rotation (Pricing)
function CascadeText({ text, style }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.h2 ref={ref} style={style} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.03 } } }}>
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={{ hidden: { opacity: 0, y: -40, rotateX: -90 }, visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.5, ease: EASE } } }} style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal", transformOrigin: "top" }}>
          {char}
        </motion.span>
      ))}
    </motion.h2>
  );
}

// TiltCard — 3D cursor-following tilt on hover (desktop only)
function TiltCard({ children, style, className }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });
  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => { x.set(0); y.set(0); };
  return (
    <motion.div ref={ref} onMouseMove={handleMouse} onMouseLeave={handleLeave} className={className} style={{ ...style, rotateX, rotateY, transformPerspective: 800, transformStyle: "preserve-3d" }}>
      {children}
    </motion.div>
  );
}

// CountUp — animated number counter for steps
function CountUp({ target, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      let frame = 0;
      const frames = 30;
      const interval = setInterval(() => { frame++; setCount(Math.round((frame / frames) * target)); if (frame >= frames) clearInterval(interval); }, 30);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [isInView, target, delay]);
  return <span ref={ref}>{String(count).padStart(2, "0")}</span>;
}

// Scroll-linked section wrapper — Apple-style entrance tied to scroll
function ScrollSection({ children, style, className, id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 20%"] });
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.01, 0.6, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  return (
    <section ref={ref} id={id} className={className} style={{ ...style }}>
      <motion.div style={{ opacity, y, scale, width: "100%" }}>
        {children}
      </motion.div>
    </section>
  );
}

// Variants for whileInView elements (steps, cards)
const clipReveal = {
  hidden: (i) => ({ clipPath: "inset(100% 0% 0% 0%)", opacity: 0 }),
  visible: (i) => ({ clipPath: "inset(0% 0% 0% 0%)", opacity: 1, transition: { clipPath: { duration: 1.0, delay: i * 0.25, ease: EASE }, opacity: { duration: 0.4, delay: i * 0.25 } } }),
};
const glassRise = {
  hidden: (i) => ({ opacity: 0, y: 60, scale: 0.95 }),
  visible: (i) => ({ opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, delay: i * 0.08, ease: EASE } }),
};
const slideFromRight = {
  hidden: (i) => ({ opacity: 0, x: 200 + i * 40, rotateY: -15, scale: 0.9 }),
  visible: (i) => ({ opacity: 1, x: 0, rotateY: 0, scale: 1, transition: { duration: 0.9, delay: i * 0.12, ease: EASE } }),
};
const scaleBurst = {
  hidden: { opacity: 0, scale: 0.8, filter: "blur(8px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 1.0, ease: EASE } },
};
const springBounce = {
  hidden: (i = 0) => ({ opacity: 0, y: 40, scale: 0.9 }),
  visible: (i = 0) => ({ opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.4 + i * 0.15 } }),
};
const materialize = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(8px)" },
  visible: (i = 0) => ({ opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.8, delay: 0.6 + i * 0.15, ease: EASE } }),
};

function useParallax() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    if (window.innerWidth <= 768) return;
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => { setOffset(window.scrollY); ticking = false; });
        ticking = true;
      }
    };
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
  const { lang, setLanguage } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);
  const t = translations[lang] || translations.fr;
  const scrollY = useParallax();
  const vp = { once: true, amount: 0.1 };

  const prices = {
    solo: isAnnual ? "99.90 CHF" : "9.90 CHF",
    couple: isAnnual ? "149.90 CHF" : "14.90 CHF",
    famille: isAnnual ? "179.90 CHF" : "17.90 CHF",
    period: isAnnual ? t.year : t.month,
  };

  const [showToast, setShowToast] = useState(false);
  const handleComingSoon = (e) => { e.preventDefault(); setShowToast(true); setTimeout(() => setShowToast(false), 2500); };

  return (
    <div style={{ fontFamily: "'HighCruiser', sans-serif", background: "#000", color: "#fff", overflowX: "hidden" }}>
      {showToast && <div style={{ position: "fixed", bottom: 40, left: "50%", transform: "translateX(-50%)", background: "#222", color: "#fff", padding: "12px 28px", borderRadius: 12, fontSize: 14, fontWeight: 600, zIndex: 9999, animation: "fadeIn 0.3s ease", fontFamily: "'HighCruiser', sans-serif", letterSpacing: 1 }}>Bientôt disponible ✨</div>}
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
        @keyframes glowPulse { 0%, 100% { box-shadow: 0 0 20px rgba(0,0,0,0.1); } 50% { box-shadow: 0 0 60px rgba(0,0,0,0.2), 0 0 120px rgba(0,0,0,0.05); } }
        @keyframes pulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.15); } 50% { box-shadow: 0 0 0 20px rgba(255,255,255,0); } }
        @keyframes gradientShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes borderGlow { 0%, 100% { box-shadow: 0 0 15px rgba(255,255,255,0.08), 0 0 30px rgba(255,255,255,0.04); } 50% { box-shadow: 0 0 25px rgba(255,255,255,0.15), 0 0 50px rgba(255,255,255,0.08); } }
        @keyframes shimmerBorder { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes ctaGlow { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.1); } }
        .glow-border { position: relative; animation: borderGlow 3s ease-in-out infinite; border: 1px solid rgba(255,255,255,0.1); }
        .shimmer-border { position: relative; overflow: visible; }
        .shimmer-border::before { content: ''; position: absolute; inset: -2px; border-radius: 26px; background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%); background-size: 200% 100%; animation: shimmerBorder 3s linear infinite; z-index: -1; }
        .badge-btn { display: inline-block; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .badge-btn:hover { transform: scale(1.05); box-shadow: 0 10px 30px rgba(255,255,255,0.1); }
        @keyframes fadeIn { from { opacity: 0; transform: translateX(-50%) translateY(20px); } to { opacity: 1; transform: translateX(-50%) translateY(0); } }
        .feature-card { transition: transform 0.4s ease, box-shadow 0.4s ease; }
        .feature-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .price-card { transition: transform 0.4s ease, box-shadow 0.4s ease; }
        .price-card:hover { transform: translateY(-12px); box-shadow: 0 30px 60px rgba(0,0,0,0.4); }
        .nav-glass { backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
        html { overflow-x: hidden; overflow-y: scroll !important; width: 100%; height: auto !important; }
        body { overflow-x: hidden; overflow-y: auto !important; width: 100%; height: auto !important; min-height: 100vh; }
        section { overflow-x: hidden; overflow-y: visible; -webkit-transform: translateZ(0); transform: translateZ(0); }
        .hero-phone { will-change: transform; }
        .nav-glass { will-change: transform; }
        .hero-grid { display: grid !important; grid-template-columns: 1fr auto; grid-template-areas: "text phone" "buttons phone"; align-items: center; gap: 80px; }
        .hero-text { grid-area: text; }
        .hero-buttons { grid-area: buttons; display: flex; gap: 12px; flex-wrap: wrap; }
        .hero-phone { grid-area: phone; align-self: center; }
        @media (max-width: 1024px) {
          .hero-grid { display: flex !important; flex-direction: column !important; text-align: center !important; gap: 0px !important; }
          .hero-text { order: 1; }
          .hero-phone { order: 2; margin-top: 40px !important; }
          .hero-buttons { order: 3; margin-top: 24px !important; justify-content: center !important; }
          .hero-subtitle { max-width: 80% !important; margin-left: auto !important; margin-right: auto !important; text-align: center !important; }
          .pricing-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .avatar-grid { flex-direction: column !important; gap: 40px !important; text-align: center !important; }
          .avatar-comparison { gap: 12px !important; justify-content: center !important; }
          .avatar-comparison > div > div:first-child { width: 140px !important; height: 186px !important; }
          .steps-grid { flex-direction: column !important; align-items: center !important; }
          .hero-subtitle { max-width: 90% !important; margin-left: auto !important; margin-right: auto !important; text-align: center !important; }
        }
        @media (max-width: 580px) {
          .features-grid { grid-template-columns: 1fr !important; }
          .pricing-grid { grid-template-columns: 1fr !important; }
          .avatar-comparison > div > div:first-child { width: 130px !important; height: 173px !important; }
          .footer-top { flex-direction: column !important; align-items: center !important; gap: 20px !important; text-align: center !important; }
          .footer-links { gap: 16px !important; }
          .site-footer > div > div:last-child { justify-content: center !important; text-align: center !important; }
          .site-footer > div > div:last-child > div { justify-content: center !important; }
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
                  <div key={l} onClick={() => { setLanguage(l); setShowLangMenu(false); }} style={{ padding: "8px 16px", cursor: "pointer", fontSize: 13, color: l === lang ? "#fff" : "#888", background: l === lang ? "#222" : "transparent", fontWeight: l === lang ? 600 : 400 }}>
                    {l.toUpperCase()}
                  </div>
                ))}
              </div>
            )}
          </div>
          <a href="#download-bottom" style={{ background: "#fff", color: "#000", textDecoration: "none", padding: "8px 20px", borderRadius: 8, fontSize: 13, fontWeight: 700, letterSpacing: 0.5 }}>{t.download}</a>
        </div>
      </nav>

      {/* HERO — BLACK */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 32px 80px", background: "radial-gradient(ellipse at 50% 0%, rgba(40,40,40,0.5) 0%, #000 70%)", position: "relative", overflow: "hidden" }}>
        <div className="hero-grid" style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div className="hero-text">
            <motion.div initial="hidden" animate="visible">
              <motion.img variants={heroWord} custom={0} src={WHITE_LOGO} alt="BISK8" style={{ height: 32, marginBottom: 24, opacity: 0.6 }} />
              <h1 className="hero-title" style={{ fontFamily: "'HighCruiser', sans-serif", fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 900, lineHeight: 1.2, letterSpacing: 2, marginBottom: 24, paddingTop: 4, background: "linear-gradient(135deg, #fff 0%, #ccc 50%, #fff 100%)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "gradientShift 6s ease infinite", wordBreak: "keep-all", overflowWrap: "break-word" }}>
                <ScatterText text={t.tagline} />
              </h1>
              <BlurReveal delay={0.8} style={{ fontSize: 18, color: "#999", lineHeight: 1.6, maxWidth: 440, fontWeight: 300 }} className="hero-subtitle">{t.subtitle}</BlurReveal>
            </motion.div>
          </div>
          <motion.div className="hero-buttons" initial="hidden" animate="visible" id="download">
            <motion.a variants={materialize} custom={0} href="#" onClick={handleComingSoon} className="badge-btn" style={{ background: "#fff", color: "#000", padding: "14px 28px", borderRadius: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
              <svg width="20" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
              <div><div style={{ fontSize: 10, fontWeight: 400, opacity: 0.65 }}>DOWNLOAD ON THE</div><div style={{ fontSize: 15, fontWeight: 700 }}>App Store</div></div>
            </motion.a>
            <motion.a variants={materialize} custom={1} href="#" onClick={handleComingSoon} className="badge-btn" style={{ background: "transparent", color: "#fff", padding: "14px 28px", borderRadius: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 10, border: "1px solid rgba(255,255,255,0.2)" }}>
              <svg width="20" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"/></svg>
              <div><div style={{ fontSize: 10, fontWeight: 400, opacity: 0.65 }}>GET IT ON</div><div style={{ fontSize: 15, fontWeight: 700 }}>Google Play</div></div>
            </motion.a>
          </motion.div>
          <motion.div className="hero-phone" initial="hidden" animate="visible" variants={phoneSlide} style={{ perspective: 1200 }}>
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
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS — WHITE */}
      <section style={{ padding: "120px 32px", background: "#fff", color: "#000", position: "relative" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <BlurText text={t.howItWorks} style={{ fontFamily: "'HighCruiser', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, textAlign: "center", marginBottom: 80, letterSpacing: 2 }} />
          <div className="steps-grid" style={{ display: "flex", gap: 48, justifyContent: "center" }}>
            {[
              { num: "01", title: t.step1Title, desc: t.step1Desc, img: STEP1_IMG },
              { num: "02", title: t.step2Title, desc: t.step2Desc, img: STEP2_IMG },
              { num: "03", title: t.step3Title, desc: t.step3Desc, img: STEP3_IMG },
            ].map((step, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={vp} style={{ flex: 1, textAlign: "center", maxWidth: 300 }}>
                <div style={{ fontFamily: "'HighCruiser', sans-serif", fontSize: 72, fontWeight: 900, color: "rgba(0,0,0,0.06)", marginBottom: -24, position: "relative", zIndex: 0, letterSpacing: 4 }}><CountUp target={parseInt(step.num)} delay={i * 0.25} /></div>
                <div className="step-img-container" style={{ width: 220, height: 440, margin: "0 auto", borderRadius: 28, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", border: "3px solid #e8e8e8", background: "#f0f0f0" }}>
                  <img src={step.img} alt={step.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <h3 style={{ fontFamily: "'HighCruiser', sans-serif", fontSize: 24, fontWeight: 900, marginBottom: 10, marginTop: 24, letterSpacing: 1.5 }}>{step.title}</h3>
                <p style={{ fontFamily: "'HighCruiser', sans-serif", fontSize: 15, color: "#666", lineHeight: 1.7, maxWidth: 280, margin: "0 auto" }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AVATAR IA — BLACK */}
      <ScrollSection style={{ padding: "120px 32px", background: "#000", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 50%, rgba(60,60,60,0.2) 0%, transparent 60%)" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div className="avatar-grid" style={{ display: "flex", alignItems: "center", gap: 80 }}>
            <div style={{ flex: 1 }}>
              <motion.div initial={{ opacity: 0, x: -60, filter: "blur(8px)" }} whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} transition={{ duration: 1.0, ease: EASE }} viewport={{ once: false, amount: 0.3 }}>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 4, color: "#666", textTransform: "uppercase", marginBottom: 16 }}>AI AVATAR</div>
                <h2 style={{ fontFamily: "'HighCruiser', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, marginBottom: 16, lineHeight: 1.1, letterSpacing: 2 }}>{t.avatarTagline}</h2>
                <p style={{ fontSize: 16, color: "#999", lineHeight: 1.7, maxWidth: 480 }}>{t.avatarDesc}</p>
              </motion.div>
            </div>
            <motion.div className="avatar-comparison" initial={{ opacity: 0, x: 60, filter: "blur(8px)" }} whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} transition={{ duration: 1.0, delay: 0.2, ease: EASE }} viewport={{ once: false, amount: 0.3 }} style={{ flex: 1, display: "flex", gap: 20, justifyContent: "center" }}>
              <div style={{ textAlign: "center" }}>
                <div className="glow-border" style={{ width: 180, height: 240, borderRadius: 20, overflow: "hidden", marginBottom: 12, background: "#f0f0f0" }}>
                  <img src="/images/section3_1.png" alt="Before" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 95%" }} />
                </div>
                <div style={{ fontSize: 12, color: "#666", fontWeight: 500 }}>{t.before}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", fontSize: 24, color: "#444" }}>→</div>
              <div style={{ textAlign: "center" }}>
                <div className="glow-border" style={{ width: 180, height: 240, borderRadius: 20, overflow: "hidden", marginBottom: 12, background: "#f0f0f0" }}>
                  <img src="/images/section3_2.png" alt="After" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ fontSize: 12, color: "#999", fontWeight: 600 }}>{t.after}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </ScrollSection>

      {/* FEATURES — WHITE */}
      <section style={{ padding: "120px 32px", background: "#fff", color: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <BlurText text={t.featuresTitle} style={{ fontFamily: "'HighCruiser', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, textAlign: "center", marginBottom: 64, letterSpacing: 2 }} />
          <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C10.34 2 9 3.34 9 5c0 1.31.83 2.42 2 2.83V9"/><path d="M12 9L3 16h18L12 9Z"/></svg>', title: t.feat1Title, desc: t.feat1Desc },
              { icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><text x="12" y="17" textAnchor="middle" fill="#222" stroke="none" fontSize="8" fontWeight="700">7</text></svg>', title: t.feat2Title, desc: t.feat2Desc },
              { icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>', title: t.feat3Title, desc: t.feat3Desc },
              { icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="2.5"/><circle cx="17" cy="7" r="2.5"/><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/><path d="M17 11.5a3 3 0 013 3V21"/></svg>', title: t.feat4Title, desc: t.feat4Desc },
              { icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>', title: t.feat5Title, desc: t.feat5Desc },
              { icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 4v6h6"/><path d="M23 20v-6h-6"/><path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15"/></svg>', title: t.feat6Title, desc: t.feat6Desc },
            ].map((f, i) => (
              <TiltCard key={i} className="feature-card" style={{ background: "#fafafa", borderRadius: 20, padding: 32, border: "1px solid #eee", cursor: "default" }}>
                <motion.div variants={glassRise} custom={i} initial="hidden" whileInView="visible" viewport={vp}>
                  <div style={{ marginBottom: 16 }} dangerouslySetInnerHTML={{ __html: f.icon }} />
                  <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6 }}>{f.desc}</p>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING — BLACK */}
      <section style={{ padding: "120px 32px", background: "#000", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 100%, rgba(40,40,40,0.3) 0%, transparent 60%)" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <CascadeText text={t.pricingTitle} style={{ fontFamily: "'HighCruiser', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, textAlign: "center", marginBottom: 24, letterSpacing: 2, color: "#fff" }} />
          <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={vp} style={{ display: "flex", justifyContent: "center", marginBottom: 48 }}>
            <div style={{ background: "#111", borderRadius: 12, padding: 4, display: "flex", gap: 4 }}>
              <button onClick={() => setIsAnnual(false)} style={{ padding: "8px 20px", borderRadius: 8, border: "none", background: !isAnnual ? "#fff" : "transparent", color: !isAnnual ? "#000" : "#888", fontWeight: 600, fontSize: 13, cursor: "pointer", fontFamily: "'HighCruiser', sans-serif" }}>{t.monthly}</button>
              <button onClick={() => setIsAnnual(true)} style={{ padding: "8px 20px", borderRadius: 8, border: "none", background: isAnnual ? "#fff" : "transparent", color: isAnnual ? "#000" : "#888", fontWeight: 600, fontSize: 13, cursor: "pointer", fontFamily: "'HighCruiser', sans-serif", position: "relative" }}>{t.annual} <span style={{ background: "linear-gradient(135deg, #16a34a, #22c55e)", color: "#fff", fontSize: 9, fontWeight: 700, padding: "2px 8px", borderRadius: 20, marginLeft: 6, letterSpacing: 0.5 }}>-17%</span></button>
            </div>
          </motion.div>
          <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[
              { name: t.free, price: "0 CHF", period: "", perks: [t.freePerk1, t.freePerk2, t.freePerk3], highlight: false },
              { name: t.solo, price: prices.solo, period: prices.period, perks: [t.soloPerk1, t.soloPerk2, t.soloPerk3, t.soloPerk4], highlight: true, discount: isAnnual },
              { name: t.couple, price: prices.couple, period: prices.period, perks: [t.couplePerk1, t.couplePerk2, t.couplePerk3], highlight: false, discount: isAnnual },
              { name: t.famille, price: prices.famille, period: prices.period, perks: [t.famillePerk1, t.famillePerk2, t.famillePerk3], highlight: false, discount: isAnnual },
            ].map((plan, i) => (
              <motion.div key={i} className={`price-card${plan.highlight ? " shimmer-border" : ""}`} variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={vp} whileHover={{ y: -12, boxShadow: "0 30px 60px rgba(0,0,0,0.4)" }} style={{ background: plan.highlight ? "#fff" : "#111", color: plan.highlight ? "#000" : "#fff", borderRadius: 24, padding: "36px 24px", border: plan.highlight ? "none" : "1px solid #222", position: "relative" }}>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL — WHITE + GLOW */}
      <section id="download-bottom" className="cta-glow" style={{ padding: "100px 32px", background: "#fff", color: "#000", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "auto", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(200,200,200,0.3) 0%, transparent 60%)", animation: "ctaGlow 4s ease-in-out infinite" }} />
        <div style={{ maxWidth: 600, margin: "0 auto", position: "relative" }}>
          <motion.h2 variants={scaleBurst} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} style={{ fontFamily: "'HighCruiser', sans-serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 900, marginBottom: 16, letterSpacing: 2 }}>{t.ctaTitle}</motion.h2>
          <motion.p variants={springBounce} custom={0} initial="hidden" whileInView="visible" viewport={vp} style={{ fontSize: 18, color: "#666", marginBottom: 40 }}>{t.ctaSubtitle.split("BISK8").map((part, i, arr) => <span key={i}>{part}{i < arr.length - 1 && <img src={BLACK_LOGO} alt="BISK8" style={{ height: 23, verticalAlign: "middle", display: "inline", margin: "0 4px", opacity: 0.65 }} />}</span>)}</motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={vp} style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <motion.a variants={springBounce} custom={1} href="#" onClick={handleComingSoon} className="badge-btn" style={{ background: "#000", color: "#fff", padding: "14px 28px", borderRadius: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
              <svg width="20" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/></svg>
              <div><div style={{ fontSize: 10, fontWeight: 400, opacity: 0.65 }}>DOWNLOAD ON THE</div><div style={{ fontSize: 15, fontWeight: 700 }}>App Store</div></div>
            </motion.a>
            <motion.a variants={springBounce} custom={2} href="#" onClick={handleComingSoon} className="badge-btn" style={{ background: "#000", color: "#fff", padding: "14px 28px", borderRadius: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
              <svg width="20" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"/></svg>
              <div><div style={{ fontSize: 10, fontWeight: 400, opacity: 0.65 }}>GET IT ON</div><div style={{ fontSize: 15, fontWeight: 700 }}>Google Play</div></div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER — BLACK */}
      <footer className="site-footer" style={{ padding: "48px 32px", background: "#000", borderTop: "1px solid #111" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div className="footer-top" variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={vp} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
            <img src={WHITE_LOGO} alt="BISK8" style={{ height: 22 }} />
            <div className="footer-links" style={{ display: "flex", gap: 24 }}>
              <a href="/terms" style={{ color: "#666", textDecoration: "none", fontSize: 13 }}>{t.footerTerms}</a>
              <a href="/privacy" style={{ color: "#666", textDecoration: "none", fontSize: 13 }}>{t.footerPrivacy}</a>
              <a href="/contact" style={{ color: "#666", textDecoration: "none", fontSize: 13 }}>{t.footerContact}</a>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={vp} style={{ borderTop: "1px solid #111", paddingTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <div style={{ fontSize: 12, color: "#444", display: "flex", alignItems: "center", gap: 0 }}>{t.footerRights.split("BISK8").map((part, i, arr) => i < arr.length - 1 ? <span key={i}>{part}<img src={WHITE_LOGO} alt="BISK8" style={{ height: 14, opacity: 0.3, verticalAlign: "middle", margin: "0 2px" }} /></span> : <span key={i}>{part}</span>)}</div>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <a href="https://instagram.com/bisk8.app" target="_blank" rel="noopener noreferrer" style={{ color: "#666", transition: "color 0.3s" }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#666'}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://tiktok.com/@bisk8.app" target="_blank" rel="noopener noreferrer" style={{ color: "#666", transition: "color 0.3s" }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#666'}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.41a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.84z"/></svg>
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
