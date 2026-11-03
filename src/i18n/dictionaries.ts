// ─────────────────────────────────────────────────────────────
//  All website text in English, Arabic and Kurdish (Sorani).
//  Keep the same structure in every language.
//  In `statement`, wrap the highlighted words in *stars*.
// ─────────────────────────────────────────────────────────────

export type Lang = 'en' | 'ar' | 'ku'

export const languages: { code: Lang; label: string; short: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'en', label: 'English', short: 'EN', dir: 'ltr' },
  { code: 'ar', label: 'العربية', short: 'ع', dir: 'rtl' },
  { code: 'ku', label: 'کوردی', short: 'کو', dir: 'rtl' },
]

const en = {
  meta: {
    title: 'Anwar Kirkuk for Transformers — We make power with confidence',
    description:
      'Anwar Kirkuk factory produces electrical distribution transformers from 100 kVA up to 1 MVA (11–33 kV) in Kirkuk, Iraq — manufacturing, maintenance, rehabilitation and equipping.',
  },
  company: 'Anwar Kirkuk for Transformers',
  nav: { about: 'About', services: 'Services', products: 'Transformers', videos: 'Video', contact: 'Contact', cta: 'Contact us', menu: 'Menu' },
  hero: {
    kicker: 'Electrical transformer factory · Kirkuk, Iraq',
    line1: 'We make power',
    line2: 'with confidence.',
    rotating: ['Transformer manufacturing', 'Maintenance & repair', 'Rehabilitation & rewinding', 'Supply & equipping'],
    intro: 'Distribution transformers from 100 kVA up to 1 MVA, built in Kirkuk for Iraq’s grid, Iraq’s summers and Iraq’s projects.',
    primary: 'Chat on WhatsApp',
    secondary: 'See our transformers',
  },
  specs: [
    { value: '100', unit: 'kVA', label: 'Starting capacity' },
    { value: '1', unit: 'MVA', label: 'Up to' },
    { value: '11–33', unit: 'kV', label: 'Voltage classes' },
    { value: '24/7', unit: '', label: 'Always open' },
  ],
  marquee: ['Manufacturing', 'Maintenance', 'Rehabilitation', 'Equipping', '100 kVA', '250 kVA', '400 kVA', '630 kVA', '1 MVA'],
  statement: 'We always hear that imported is the best. In Kirkuk, we build transformers that prove *the opposite.*',
  about: {
    eyebrow: 'About us',
    title: 'Iraqi hands. Real power.',
    body: 'Anwar Kirkuk is a factory for producing electrical transformers, located on the Erbil road in Darman, Kirkuk. From fabricating the tank to winding the coils, our engineers and technicians handle every step in‑house — and we stand behind every transformer that leaves our floor.',
    values: [
      { title: 'Made in Iraq', text: 'Built in our own Kirkuk factory — close to you, your site and your project.' },
      { title: 'Built in‑house', text: 'Tank fabrication, winding and assembly are all done under one roof.' },
      { title: 'Direct support', text: 'Talk to our team directly on WhatsApp or by phone — day or night.' },
    ],
  },
  services: {
    eyebrow: 'What we do',
    title: 'Four ways we keep the power on.',
    items: [
      { title: 'Manufacturing', text: 'New distribution transformers from 100 kVA to 1 MVA, 11 kV and 33 kV.' },
      { title: 'Maintenance', text: 'Inspection, testing and repair to keep your transformers running safely.' },
      { title: 'Rehabilitation', text: 'Broken transformer? We rewind and restore it to full working order.' },
      { title: 'Equipping', text: 'Supplying and preparing transformers for contractors, factories and projects.' },
    ],
  },
  products: {
    eyebrow: 'Our transformers',
    title: 'The right size for every project.',
    lead: 'Pick a capacity and message us — we reply fast.',
    ask: 'Ask for a price',
    askMessage: (name: string) => `Hello Anwar Kirkuk, I'd like a price and details for the ${name} transformer.`,
    other: 'Need a different rating?',
    otherCta: 'Tell us what you need',
    items: [
      { name: '100 kVA', category: 'Distribution', description: '11 kV / 33 kV distribution transformer for homes, shops and small sites.' },
      { name: '250 kVA', category: 'Distribution', description: 'A dependable choice for neighbourhood generators and workshops.' },
      { name: '400 kVA', category: 'Most requested', description: 'Our most popular rating for residential areas and medium projects.' },
      { name: '630 kVA', category: 'Heavy duty', description: 'For factories, commercial buildings and larger loads.' },
      { name: '1 MVA', category: 'Industrial', description: 'Our largest unit, built for industrial sites and major projects.' },
    ],
  },
  videos: {
    eyebrow: 'Watch',
    title: 'Imported, or made in Iraq?',
    lead: 'We always hear that imported is the best. Watch what our factory in Kirkuk has to say about that.',
    play: 'Play video',
    facebook: 'Watch on Facebook',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s talk power.',
    lead: 'Contractor, factory owner, workshop or project — if you need a transformer or specialised technical service, contact us today.',
    whatsapp: 'Message on WhatsApp',
    call: 'Call now',
    labels: { whatsapp: 'WhatsApp', call: 'Call us', visit: 'Visit the factory', facebook: 'Facebook' },
    address: 'Darman, Erbil Road, Kirkuk',
    hours: 'Always open',
    followUs: 'Follow us',
  },
  whatsappDefault: 'Hello Anwar Kirkuk, I need a transformer / technical service.',
  footer: { rights: 'All rights reserved.' },
}

export type Dict = typeof en

const ar: Dict = {
  meta: {
    title: 'معمل أنوار كركوك لإنتاج المحولات الكهربائية — نصنع الطاقة بثقة',
    description:
      'معمل أنوار كركوك لإنتاج المحولات الكهربائية من 100 كي في أي حتى 1 ميغا (11–33 كي في) — تصنيع، صيانة، إعادة تأهيل، تجهيز. كركوك – طريق أربيل – دارمان.',
  },
  company: 'معمل أنوار كركوك',
  nav: { about: 'من نحن', services: 'خدماتنا', products: 'المحولات', videos: 'فيديو', contact: 'تواصل', cta: 'تواصل معنا', menu: 'القائمة' },
  hero: {
    kicker: 'معمل أنوار كركوك لإنتاج المحولات الكهربائية',
    line1: 'نصنع الطاقة',
    line2: 'بثقة.',
    rotating: ['تصنيع المحولات', 'الصيانة والتصليح', 'إعادة التأهيل واللف', 'التجهيز والتوريد'],
    intro: 'محولات توزيع من 100 كي في أي حتى 1 ميغا، تُصنع في كركوك لشبكة العراق وصيف العراق ومشاريع العراق.',
    primary: 'تواصل عبر واتساب',
    secondary: 'شاهد محولاتنا',
  },
  specs: [
    { value: '100', unit: 'kVA', label: 'تبدأ من' },
    { value: '1', unit: 'MVA', label: 'حتى' },
    { value: '11–33', unit: 'kV', label: 'فئات الجهد' },
    { value: '24/7', unit: '', label: 'مفتوح دائماً' },
  ],
  marquee: ['تصنيع', 'صيانة', 'إعادة تأهيل', 'تجهيز', '100 kVA', '250 kVA', '400 kVA', '630 kVA', '1 MVA'],
  statement: 'دائماً نسمع أن المستورد هو الأفضل. في كركوك، نصنع محولات تُثبت *العكس.*',
  about: {
    eyebrow: 'من نحن',
    title: 'أيادٍ عراقية. طاقة حقيقية.',
    body: 'معمل أنوار كركوك لإنتاج المحولات الكهربائية، يقع على طريق أربيل في دارمان – كركوك. من حدادة خزان المحولة إلى لف الملفات، يتولى مهندسونا وفنيونا كل مرحلة داخل المعمل — ونقف خلف كل محولة تخرج من معملنا.',
    values: [
      { title: 'صناعة عراقية', text: 'نصنع في معملنا في كركوك — قريبين منك ومن موقعك ومشروعك.' },
      { title: 'كل شيء داخل المعمل', text: 'حدادة الخزانات واللف والتجميع، كلها تحت سقف واحد.' },
      { title: 'تواصل مباشر', text: 'تحدث مع فريقنا مباشرة عبر واتساب أو الهاتف — ليلاً ونهاراً.' },
    ],
  },
  services: {
    eyebrow: 'ماذا نقدم',
    title: 'تصنيع • صيانة • إعادة تأهيل • تجهيز',
    items: [
      { title: 'تصنيع', text: 'محولات توزيع جديدة من 100 كي في أي حتى 1 ميغا، بجهد 11 و 33 كي في.' },
      { title: 'صيانة', text: 'فحص واختبار وتصليح لتبقى محولاتك تعمل بأمان.' },
      { title: 'إعادة تأهيل', text: 'عندك محولة عاطلة؟ نعيد لفها وتأهيلها لتعود للعمل بكفاءة.' },
      { title: 'تجهيز', text: 'تجهيز وتوريد المحولات للمقاولين والمعامل والمشاريع.' },
    ],
  },
  products: {
    eyebrow: 'محولاتنا',
    title: 'الحجم المناسب لكل مشروع.',
    lead: 'اختر القدرة وراسلنا — نرد بسرعة.',
    ask: 'اطلب السعر',
    askMessage: (name: string) => `مرحباً معمل أنوار كركوك، أريد سعر وتفاصيل محولة ${name}.`,
    other: 'تحتاج قدرة مختلفة؟',
    otherCta: 'أخبرنا بما تحتاج',
    items: [
      { name: '100 kVA', category: 'توزيع', description: 'محولة توزيع 11 / 33 كي في للمنازل والمحلات والمواقع الصغيرة.' },
      { name: '250 kVA', category: 'توزيع', description: 'خيار موثوق لمولدات الأحياء والورش.' },
      { name: '400 kVA', category: 'الأكثر طلباً', description: 'القدرة الأكثر طلباً للمناطق السكنية والمشاريع المتوسطة.' },
      { name: '630 kVA', category: 'أحمال ثقيلة', description: 'للمعامل والمباني التجارية والأحمال الكبيرة.' },
      { name: '1 MVA', category: 'صناعي', description: 'أكبر محولاتنا، مصممة للمواقع الصناعية والمشاريع الكبرى.' },
    ],
  },
  videos: {
    eyebrow: 'شاهد',
    title: 'المستورد، أم صناعة عراقية؟',
    lead: 'دائماً نسمع أن المستورد هو الأفضل. شاهد ماذا يقول معملنا في كركوك.',
    play: 'شغّل الفيديو',
    facebook: 'شاهد على فيسبوك',
  },
  contact: {
    eyebrow: 'تواصل',
    title: 'لنتحدث عن الطاقة.',
    lead: 'إذا كنت مقاولاً، صاحب معمل، ورشة أو مشروع وتحتاج محولة أو خدمة فنية متخصصة، تواصل معنا اليوم.',
    whatsapp: 'راسلنا على واتساب',
    call: 'اتصل الآن',
    labels: { whatsapp: 'واتساب', call: 'اتصل بنا', visit: 'زوروا المعمل', facebook: 'فيسبوك' },
    address: 'كركوك – طريق أربيل – دارمان',
    hours: 'مفتوح دائماً',
    followUs: 'تابعنا',
  },
  whatsappDefault: 'مرحباً معمل أنوار كركوك، أحتاج محولة / خدمة فنية.',
  footer: { rights: 'جميع الحقوق محفوظة.' },
}

const ku: Dict = {
  meta: {
    title: 'کارگەی ئەنوار کەرکووک بۆ ترانسفۆرمەر — وزە بە متمانەوە دروست دەکەین',
    description:
      'کارگەی ئەنوار کەرکووک بۆ بەرهەمهێنانی ترانسفۆرمەری کارەبا لە 100 kVA تا 1 MVA (11–33 kV) — دروستکردن، چاککردنەوە، نۆژەنکردنەوە و ئامادەکردن. کەرکووک – ڕێگای هەولێر – دارمان.',
  },
  company: 'کارگەی ئەنوار کەرکووک',
  nav: { about: 'دەربارە', services: 'خزمەتگوزاری', products: 'ترانسفۆرمەرەکان', videos: 'ڤیدیۆ', contact: 'پەیوەندی', cta: 'پەیوەندیمان پێوە بکە', menu: 'لیست' },
  hero: {
    kicker: 'کارگەی ئەنوار کەرکووک بۆ بەرهەمهێنانی ترانسفۆرمەری کارەبا',
    line1: 'وزە دروست دەکەین',
    line2: 'بە متمانەوە.',
    rotating: ['دروستکردنی ترانسفۆرمەر', 'چاککردنەوە و پاراستن', 'نۆژەنکردنەوە و پێچانەوە', 'دابینکردن و ئامادەکردن'],
    intro: 'ترانسفۆرمەری دابەشکردن لە 100 kVA تا 1 MVA، لە کەرکووک دروست دەکرێت بۆ تۆڕی کارەبا، هاوین و پڕۆژەکانی عێراق.',
    primary: 'لە واتسئاپ قسە بکە',
    secondary: 'ترانسفۆرمەرەکانمان ببینە',
  },
  specs: [
    { value: '100', unit: 'kVA', label: 'دەست پێدەکات لە' },
    { value: '1', unit: 'MVA', label: 'تا' },
    { value: '11–33', unit: 'kV', label: 'ئاستەکانی ڤۆڵتیە' },
    { value: '24/7', unit: '', label: 'هەمیشە کراوەیە' },
  ],
  marquee: ['دروستکردن', 'چاککردنەوە', 'نۆژەنکردنەوە', 'ئامادەکردن', '100 kVA', '250 kVA', '400 kVA', '630 kVA', '1 MVA'],
  statement: 'هەمیشە دەبیستین کە کاڵای هاوردە باشترینە. لە کەرکووک ترانسفۆرمەر دروست دەکەین کە *پێچەوانەکەی* دەسەلمێنێت.',
  about: {
    eyebrow: 'دەربارەی ئێمە',
    title: 'دەستی عێراقی. وزەی ڕاستەقینە.',
    body: 'کارگەی ئەنوار کەرکووک بۆ بەرهەمهێنانی ترانسفۆرمەری کارەبا، لە ڕێگای هەولێر لە دارمان – کەرکووک. لە دروستکردنی تانکی ترانسفۆرمەرەوە تا پێچانی کۆیڵەکان، ئەندازیار و تەکنیکارەکانمان هەموو قۆناغێک لە ناو کارگەکەدا ئەنجام دەدەن — و لە پشت هەر ترانسفۆرمەرێکەوە دەوەستین کە لە کارگەکەمان دەردەچێت.',
    values: [
      { title: 'دروستکراوی عێراق', text: 'لە کارگەکەی خۆمان لە کەرکووک دروست دەکرێت — نزیک لە تۆ، شوێنەکەت و پڕۆژەکەت.' },
      { title: 'هەمووی لە ناو کارگە', text: 'دروستکردنی تانک، پێچان و کۆکردنەوە، هەمووی لە ژێر یەک سەقفدا.' },
      { title: 'پەیوەندی ڕاستەوخۆ', text: 'ڕاستەوخۆ لە ڕێگەی واتسئاپ یان تەلەفۆنەوە قسە لەگەڵ تیمەکەمان بکە — شەو و ڕۆژ.' },
    ],
  },
  services: {
    eyebrow: 'چی دەکەین',
    title: 'دروستکردن • چاککردنەوە • نۆژەنکردنەوە • ئامادەکردن',
    items: [
      { title: 'دروستکردن', text: 'ترانسفۆرمەری دابەشکردنی نوێ لە 100 kVA تا 1 MVA، بە 11 kV و 33 kV.' },
      { title: 'چاککردنەوە', text: 'پشکنین، تاقیکردنەوە و چاککردنەوە بۆ ئەوەی ترانسفۆرمەرەکانت بە سەلامەتی کار بکەن.' },
      { title: 'نۆژەنکردنەوە', text: 'ترانسفۆرمەرەکەت تێکچووە؟ دووبارە دەیپێچینەوە و نۆژەنی دەکەینەوە تا بە تەواوی کار بکاتەوە.' },
      { title: 'ئامادەکردن', text: 'دابینکردن و ئامادەکردنی ترانسفۆرمەر بۆ بەڵێندەران، کارگەکان و پڕۆژەکان.' },
    ],
  },
  products: {
    eyebrow: 'ترانسفۆرمەرەکانمان',
    title: 'قەبارەی گونجاو بۆ هەر پڕۆژەیەک.',
    lead: 'توانایەک هەڵبژێرە و نامەمان بۆ بنێرە — خێرا وەڵام دەدەینەوە.',
    ask: 'داوای نرخ بکە',
    askMessage: (name: string) => `سڵاو کارگەی ئەنوار کەرکووک، نرخ و زانیاری ترانسفۆرمەری ${name}م دەوێت.`,
    other: 'توانایەکی ترت پێویستە؟',
    otherCta: 'پێمان بڵێ چیت دەوێت',
    items: [
      { name: '100 kVA', category: 'دابەشکردن', description: 'ترانسفۆرمەری دابەشکردنی 11 / 33 kV بۆ ماڵ، دوکان و شوێنە بچووکەکان.' },
      { name: '250 kVA', category: 'دابەشکردن', description: 'هەڵبژاردەیەکی متمانەپێکراو بۆ مۆلیدەی گەڕەکەکان و وەرشەکان.' },
      { name: '400 kVA', category: 'زۆرترین داواکراو', description: 'زۆرترین توانای داواکراو بۆ ناوچە نیشتەجێبووەکان و پڕۆژە مامناوەندەکان.' },
      { name: '630 kVA', category: 'باری قورس', description: 'بۆ کارگەکان، باڵەخانە بازرگانییەکان و بارە گەورەکان.' },
      { name: '1 MVA', category: 'پیشەسازی', description: 'گەورەترین ترانسفۆرمەرمان، بۆ شوێنە پیشەسازییەکان و پڕۆژە گەورەکان.' },
    ],
  },
  videos: {
    eyebrow: 'سەیر بکە',
    title: 'هاوردە، یان دروستکراوی عێراق؟',
    lead: 'هەمیشە دەبیستین کە کاڵای هاوردە باشترینە. سەیر بکە کارگەکەمان لە کەرکووک چی دەڵێت.',
    play: 'ڤیدیۆکە لێبدە',
    facebook: 'لە فەیسبووک سەیری بکە',
  },
  contact: {
    eyebrow: 'پەیوەندی',
    title: 'با باسی وزە بکەین.',
    lead: 'ئەگەر بەڵێندەر، خاوەن کارگە، وەرشە یان پڕۆژەیت و ترانسفۆرمەر یان خزمەتگوزاری تەکنیکی تایبەتت پێویستە، ئەمڕۆ پەیوەندیمان پێوە بکە.',
    whatsapp: 'لە واتسئاپ نامە بنێرە',
    call: 'ئێستا پەیوەندی بکە',
    labels: { whatsapp: 'واتسئاپ', call: 'پەیوەندی تەلەفۆنی', visit: 'سەردانی کارگە بکە', facebook: 'فەیسبووک' },
    address: 'کەرکووک – ڕێگای هەولێر – دارمان',
    hours: 'هەمیشە کراوەیە',
    followUs: 'شوێنمان بکەوە',
  },
  whatsappDefault: 'سڵاو کارگەی ئەنوار کەرکووک، ترانسفۆرمەر / خزمەتگوزاری تەکنیکیم پێویستە.',
  footer: { rights: 'هەموو مافەکان پارێزراون.' },
}

/**
 * Keep technical units like "100 kVA" or "11 / 33 kV" readable inside
 * Arabic/Kurdish sentences: isolate them as left-to-right and never break the line.
 */
const UNIT = /\d[\d.,]*(?:\s?[–/-]\s?\d[\d.,]*)?\s?(?:kVA|MVA|kV)\b/g
function isolateUnits<T>(v: T): T {
  if (typeof v === 'string') return v.replace(UNIT, (m) => `\u2066${m.replace(/ /g, '\u00A0')}\u2069`) as T
  if (Array.isArray(v)) return v.map(isolateUnits) as T
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, isolateUnits(x)])) as T
  return v
}

export const dictionaries: Record<Lang, Dict> = {
  en,
  ar: { ...isolateUnits(ar), products: { ...isolateUnits(ar.products), items: ar.products.items.map((i) => ({ ...isolateUnits(i), name: i.name })), askMessage: ar.products.askMessage } },
  ku: { ...isolateUnits(ku), products: { ...isolateUnits(ku.products), items: ku.products.items.map((i) => ({ ...isolateUnits(i), name: i.name })), askMessage: ku.products.askMessage } },
}
