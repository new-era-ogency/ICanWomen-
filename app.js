/** ICAN Women Foundation — vanilla JS per PRD (two-file site). Zero deps; CONFIG at top — replace placeholders before production. */

(() => {
  'use strict';

  /* ================================================================
     CONFIG — client-editable values  (PRD §11.2)
     Replace placeholder values before going live.
     ================================================================ */
  const CONFIG = {
    donateDescription: 'ICAN Women Foundation donation',
    wayforpay: {
      merchantAccount:    'YOUR_MERCHANT_ACCOUNT',
      merchantDomainName: 'icanwomen.org',
      baseUrl:            'https://secure.wayforpay.com/pay'
    },
    liqpay: {
      /** Real LiqPay checkout needs server-signed payload; GET ?params here is PRD-aligned stub for staging only. */
      publicKey: 'YOUR_PUBLIC_KEY',
      baseUrl:   'https://www.liqpay.ua/api/3/checkout'
    },
    forms: {
      contact:   'https://formspree.io/f/YOUR_CONTACT_FORM_ID',
      volunteer: 'https://formspree.io/f/YOUR_VOLUNTEER_FORM_ID'
    },
    telegramBot: 'https://t.me/bo_bf_ican',
    defaultLang: 'ua'
  };

  /* ================================================================
     TRANSLATIONS  (PRD §6.1.1)
     ================================================================ */
  const translations = {
    ua: {
      a11y: { skip_main: 'Перейти до основного вмісту' },
      nav: {
        about:    'Про нас',
        programs: 'Програми',
        projects: 'Проекти',
        partners: 'Співпраця',
        contact:  'Контакти',
        donate:   'Підтримати'
      },
      hero: {
        headline:   'Підтримка для жінок і дітей, які живуть поруч із війною',
        subheading: 'Психологічна, юридична та соціальна допомога у громадах Харківщини',
        cta_donate: 'Хочу допомогти',
        cta_help:   'Отримати допомогу',
        trust1:     'Офіційний благодійний фонд',
        trust2:     'Понад 2300 жінок отримали допомогу'
      },
      impact: {
        stat1_label: 'жінок і дітей отримали допомогу',
        stat2_label: 'заходів з профілактики насильства',
        stat3_label: 'громади Харківщини',
        stat4_label: 'гігієнічних наборів роздано'
      },
      about: {
        headline:   'Ми там, де найскладніше — поруч із громадами на межі',
        body1:      'ICAN Women Foundation — благодійна організація, яка з 2022 року надає психологічну, юридичну та соціальну підтримку жінкам і дітям у прифронтових громадах Харківщини.',
        body2:      'Ми будуємо стійкість там, де вона потрібна найбільше — у невеликих містах і селах, куди рідко доходить системна допомога.',
        cta_report: 'Звіт про діяльність',
        cta_donate: 'Підтримати',
        val1_title: 'Орієнтованість на громаду',
        val1_body:  'Ми працюємо безпосередньо в громадах, а не з офісу',
        val2_title: 'Безпека та конфіденційність',
        val2_body:  'Кожна жінка заслуговує на захищений простір',
        val3_title: 'Прозорість та підзвітність',
        val3_body:  'Публічна звітність і відкрита фінансова інформація'
      },
      programs: {
        headline:   'Як ми допомагаємо',
        subheading: 'Шість ключових напрямків комплексної підтримки',
        psy:         { title: 'Психосоціальна підтримка', body: 'Індивідуальне консультування, групова терапія та кризова допомога для жінок і дітей з травмами війни.' },
        legal:       { title: 'Юридична допомога',        body: 'Безкоштовні юридичні консультації з питань прав, документів та захисту від насильства.' },
        education:   { title: 'Освіта та розвиток',       body: 'Навчальні програми, тренінги та майстер-класи для підвищення кваліфікації та самодостатності.' },
        humanitarian:{ title: 'Гуманітарна допомога',     body: 'Роздача гігієнічних наборів, предметів першої необхідності та продуктових пакетів у 32 громадах.' },
        p2p:         { title: 'Peer-to-Peer підтримка',   body: 'Групи взаємопідтримки та програми лідерства, де вижилі стають наставниками для інших.' },
        retreats:    { title: 'Ретріти та відновлення',   body: 'Програми відновлення та оздоровчі поїздки для жінок, які пережили найтяжчі випробування.' }
      },
      how: {
        headline: 'Як ми працюємо',
        step1: { title: 'Виявлення потреб',       body: 'Оцінюємо реальну ситуацію в кожній громаді через виїзди та партнерські організації.' },
        step2: { title: 'Комплексна відповідь',   body: 'Поєднуємо психологічну, юридичну та матеріальну підтримку в єдиний пакет допомоги.' },
        step3: { title: 'Залучення місцевих',     body: 'Навчаємо місцевих активісток та волонтерів, щоб підтримка тривала після нашого відходу.' },
        step4: { title: 'Моніторинг та звітність', body: 'Відстежуємо результати і публічно звітуємо перед донорами та громадою.' }
      },
      projects: {
        headline:  'Ключові проекти',
        subheading: 'Реальні зміни в реальних громадах',
        p1_tag:   'Психологічна підтримка',
        p1_title: 'Мобільні групи підтримки',
        p1_desc:  'Виїзні психологи в 12 прифронтових громадах. Понад 800 індивідуальних консультацій у 2024 році.',
        p2_tag:   'Безпека',
        p2_title: 'Safe Women Hubs',
        p2_desc:  'Безпечні простори в 5 містах для жінок, які зазнали насильства або потребують термінової допомоги.',
        p3_tag:   'Гуманітарна допомога',
        p3_title: 'Dignity Kits',
        p3_desc:  '2500+ гігієнічних наборів доставлено у 32 громади. Кожен набір — це гідність і турбота.'
      },
      donate: {
        headline:          'Ваш внесок — це реальна допомога',
        subheading:        'Кожна гривня йде безпосередньо до жінок і дітей у прифронтових громадах Харківщини.',
        module_title:      'Оберіть суму внеску',
        custom_placeholder:'Інша сума (грн)',
        gateway_label:     'Спосіб оплати:',
        cta:               'Підтримати зараз',
        trust:             '🔒 Безпечна оплата · Офіційний благодійний фонд України',
        error_amount:      'Мінімальна сума — 10 грн',
        error_amount_max:  'Максимум 999 999 грн за одну операцію',
        preset_sr:         'Готові суми або ввести свою нижче',
        impact_list_sr:    'Приклади, що може профінансувати ваш внесок',
        custom_sr_label:   'Сума пожертви в гривнях — не менше 10',
        cta_aria_label:    'Перейти до безпечної оплати вибраним способом',
        amt200_aria:       'Пожертва 200 гривень',
        amt500_aria:       'Пожертва 500 гривень',
        amt1000_aria:      'Пожертва 1000 гривень'
      },
      partners: {
        headline:   'Нам довіряють',
        subheading: 'Міжнародні та національні організації, що підтримують нашу місію'
      },
      volunteer: {
        headline:    'Приєднайтесь до команди',
        subheading:  'Ваш час і навички — це теж внесок. Ми завжди раді людям, які хочуть змінювати реальність.',
        field_name:    'Повне ім\'я',
        field_email:   'Email',
        field_phone:   'Телефон',
        field_city:    'Місто / Регіон',
        field_message: 'Як ви можете допомогти?',
        field_consent_before: 'Я даю згоду на обробку персональних даних відповідно до',
        field_consent_link:   'Політики конфіденційності',
        cta:           'Приєднатися до команди',
        success:       'Дякуємо! Ми зв\'яжемося з вами найближчим часом',
        success_detail:'Вашу заявку отримано успішно.',
        error:         'Щось пішло не так. Спробуйте ще раз.',
        err_name:      'Введіть ім\'я лише літерами (мінімум 2 символи)',
        err_email:     'Введіть коректну email-адресу',
        err_phone:     'Телефон: +380 і 9 цифр, або залиште порожнім',
        err_city:      'Вкажіть місто або регіон (літери, мінімум 2 символи)',
        err_message:   'Мінімум 20 символів',
        err_consent:   'Потрібна згода на обробку даних'
      },
      contact: {
        headline:           'Зв\'яжіться з нами',
        field_name:         'Ваше ім\'я',
        field_email:        'Email',
        field_subject:      'Тема',
        field_message:      'Повідомлення',
        select_placeholder: 'Оберіть тему...',
        subject_general:    'Загальне питання',
        subject_media:      'ЗМІ та Медіа',
        subject_partnership:'Партнерство',
        subject_help:       'Запит на допомогу',
        cta:                'Надіслати повідомлення',
        success:            'Повідомлення надіслано!',
        success_detail:     'Ми відповімо вам найближчим часом.',
        error:              'Щось пішло не так. Спробуйте ще раз.',
        err_name:           'Введіть ім\'я лише літерами (мінімум 2 символи)',
        err_email:          'Введіть коректну email-адресу',
        err_subject:        'Оберіть тему зі списку',
        err_message:        'Мінімум 10 символів'
      },
      form: {
        send_another_volunteer: 'Надіслати ще раз',
        send_another_contact:   'Написати ще раз'
      },
      footer: {
        tagline:           'Психологічна, юридична та соціальна підтримка жінок і дітей у громадах Харківщини.',
        col1_title:        'Навігація',
        col2_title:        'Допомога',
        col3_title:        'Правова інформація',
        volunteer_link:    'Стати волонтером',
        get_help:          'Отримати допомогу',
        reports_link:      'Звіти',
        privacy:           'Конфіденційність',
        terms:             'Умови використання',
        registration_link: 'Реєстраційні документи',
        registration:      'БФ «ICAN Women Foundation» · Код ЄДРПОУ: XXXXXXXX · Зареєстровано в Україні',
        rights:            '© 2024–2026 ICAN Women Foundation. Всі права захищені.'
      }
    },

    en: {
      a11y: { skip_main: 'Skip to main content' },
      nav: {
        about:    'About',
        programs: 'Programs',
        projects: 'Projects',
        partners: 'Partners',
        contact:  'Contact',
        donate:   'Donate'
      },
      hero: {
        headline:   'Support for Women and Children Living Beside War',
        subheading: 'Psychological, legal and social assistance in Kharkiv region communities',
        cta_donate: 'I Want to Help',
        cta_help:   'Get Support',
        trust1:     'Officially registered charitable foundation',
        trust2:     'Over 2,300 women and children supported'
      },
      impact: {
        stat1_label: 'women and children supported',
        stat2_label: 'violence prevention events held',
        stat3_label: 'communities in Kharkiv region',
        stat4_label: 'hygiene kits distributed'
      },
      about: {
        headline:   'We are where it\'s hardest — beside frontline communities',
        body1:      'ICAN Women Foundation has been providing psychological, legal and social support to women and children in frontline communities of Kharkiv region since 2022.',
        body2:      'We build resilience where it is needed most — in small towns and villages that rarely receive systematic aid.',
        cta_report: 'Activity Report',
        cta_donate: 'Support Us',
        val1_title: 'Community-centred',
        val1_body:  'We work directly in communities, not from an office',
        val2_title: 'Safety & Confidentiality',
        val2_body:  'Every woman deserves a protected space',
        val3_title: 'Transparency & Accountability',
        val3_body:  'Public reporting and open financial information'
      },
      programs: {
        headline:   'How We Help',
        subheading: 'Six key areas of comprehensive support',
        psy:         { title: 'Psychosocial Support',   body: 'Individual counselling, group therapy and crisis support for women and children with war trauma.' },
        legal:       { title: 'Legal Aid',              body: 'Free legal consultations on rights, documentation and protection from violence.' },
        education:   { title: 'Education & Development', body: 'Training programmes and workshops to build skills and self-sufficiency.' },
        humanitarian:{ title: 'Humanitarian Aid',       body: 'Distribution of hygiene kits, essential goods and food packages in 32 communities.' },
        p2p:         { title: 'Peer-to-Peer Support',   body: 'Peer support groups and leadership programmes where survivors become mentors for others.' },
        retreats:    { title: 'Retreats & Recovery',    body: 'Recovery programmes and wellness retreats for women who have endured the most severe hardship.' }
      },
      how: {
        headline: 'How We Work',
        step1: { title: 'Needs Assessment',       body: 'We assess the real situation in each community through field visits and partner organisations.' },
        step2: { title: 'Comprehensive Response', body: 'We combine psychological, legal and material support into a single assistance package.' },
        step3: { title: 'Local Empowerment',      body: 'We train local activists and volunteers so support continues after our engagement ends.' },
        step4: { title: 'Monitoring & Reporting', body: 'We track outcomes and report transparently to donors and the community.' }
      },
      projects: {
        headline:  'Key Projects',
        subheading: 'Real change in real communities',
        p1_tag:   'Psychosocial Support',
        p1_title: 'Mobile Support Groups',
        p1_desc:  'Field psychologists in 12 frontline communities. Over 800 individual consultations in 2024.',
        p2_tag:   'Safety',
        p2_title: 'Safe Women Hubs',
        p2_desc:  'Safe spaces in 5 cities for women who have experienced violence or need urgent assistance.',
        p3_tag:   'Humanitarian Aid',
        p3_title: 'Dignity Kits',
        p3_desc:  '2,500+ hygiene kits delivered to 32 communities. Every kit represents dignity and care.'
      },
      donate: {
        headline:          'Your contribution is real help',
        subheading:        'Every hryvnia goes directly to women and children in frontline communities of Kharkiv region.',
        module_title:      'Choose your donation amount',
        custom_placeholder:'Custom amount (UAH)',
        gateway_label:     'Payment method:',
        cta:               'Support Now',
        trust:             '🔒 Secure payment · Officially registered charitable foundation in Ukraine',
        error_amount:      'Minimum amount is 10 UAH',
        error_amount_max:  'Maximum 999,999 UAH per transaction',
        preset_sr:         'Preset amounts or enter a custom sum below',
        impact_list_sr:    'Examples of what your donation can fund',
        custom_sr_label:   'Donation amount in hryvnia — at least 10',
        cta_aria_label:    'Proceed to secure payment via selected method',
        amt200_aria:       'Donate 200 Ukrainian hryvnia',
        amt500_aria:       'Donate 500 Ukrainian hryvnia',
        amt1000_aria:      'Donate 1000 Ukrainian hryvnia'
      },
      partners: {
        headline:   'Trusted By',
        subheading: 'International and national organisations supporting our mission'
      },
      volunteer: {
        headline:    'Join Our Team',
        subheading:  'Your time and skills are also a contribution. We always welcome people who want to change reality alongside us.',
        field_name:    'Full name',
        field_email:   'Email',
        field_phone:   'Phone',
        field_city:    'City / Region',
        field_message: 'How can you help?',
        field_consent_before: 'I consent to the processing of personal data in accordance with the',
        field_consent_link:   'Privacy Policy',
        cta:           'Join Our Team',
        success:       'Thank you! We will contact you shortly',
        success_detail:'Your submission was received.',
        error:         'Something went wrong. Please try again.',
        err_name:      'Enter a name using letters only (min. 2 characters)',
        err_email:     'Enter a valid email address',
        err_phone:     'Use +380 and 9 digits, or leave empty',
        err_city:      'Enter city or region (letters, min. 2 characters)',
        err_message:   'At least 20 characters required',
        err_consent:   'Consent is required'
      },
      contact: {
        headline:           'Contact Us',
        field_name:         'Your name',
        field_email:        'Email',
        field_subject:      'Subject',
        field_message:      'Message',
        select_placeholder: 'Select a topic...',
        subject_general:    'General enquiry',
        subject_media:      'Media & Press',
        subject_partnership:'Partnership',
        subject_help:       'Help request',
        cta:                'Send message',
        success:            'Message sent!',
        success_detail:     'We will get back to you soon.',
        error:              'Something went wrong. Please try again.',
        err_name:           'Enter a name using letters only (min. 2 characters)',
        err_email:          'Enter a valid email address',
        err_subject:        'Choose a topic from the list',
        err_message:        'At least 10 characters required'
      },
      form: {
        send_another_volunteer: 'Send another',
        send_another_contact:   'Write again'
      },
      footer: {
        tagline:           'Psychological, legal and social support for women and children in Kharkiv region communities.',
        col1_title:        'Navigation',
        col2_title:        'Help',
        col3_title:        'Legal',
        volunteer_link:    'Volunteer',
        get_help:          'Get Support',
        reports_link:      'Reports',
        privacy:           'Privacy Policy',
        terms:             'Terms of Use',
        registration_link: 'Registration Docs',
        registration:      'CF "ICAN Women Foundation" · EDRPOU: XXXXXXXX · Registered in Ukraine',
        rights:            '© 2024–2026 ICAN Women Foundation. All rights reserved.'
      }
    }
  };

  /* ================================================================
     PARTNER DATA  (PRD §6.3.1)
     Edit this array to add / remove partner logos.
     ================================================================ */
  const partners = [
    {
      id: 'usaid',
      name: 'USAID Ukraine',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/USAID-Identity.svg/330px-USAID-Identity.svg.png',
      url: 'https://www.usaid.gov/ukraine',
      category: 'international'
    },
    {
      id: 'unwomen',
      name: 'UN Women Ukraine',
      logo: '',
      url: 'https://ukraine.unwomen.org/',
      category: 'international'
    },
    {
      id: 'unicef',
      name: 'UNICEF Ukraine',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/UNICEF_logo.svg/440px-UNICEF_logo.svg.png',
      url: 'https://www.unicef.org/ukraine/',
      category: 'international'
    },
    {
      id: 'unhcr',
      name: 'UNHCR Ukraine',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/United_Nations_High_Commissioner_for_Refugees_logo.svg/440px-United_Nations_High_Commissioner_for_Refugees_logo.svg.png',
      url: 'https://www.unhcr.org/ua/en',
      category: 'international'
    },
    {
      id: 'kharkiv-reg',
      name: 'Харківська ОДА',
      logo: '',
      url: 'https://kharkivoda.gov.ua/',
      category: 'national'
    },
    {
      id: 'savelife',
      name: 'Come Back Alive Foundation',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Come_Back_Alive_logo_square.jpg/440px-Come_Back_Alive_logo_square.jpg',
      url: 'https://savelife.in.ua/en/',
      category: 'national'
    }
  ];

  /* ================================================================
     IMPACT STATS  (PRD §8.3)
     Update values quarterly.
     ================================================================ */
  const impactStats = [
    { value: 2300, suffix: '+', key: 'stat1' },
    { value: 900,  suffix: '+', key: 'stat2' },
    { value: 32,   suffix: '',  key: 'stat3' },
    { value: 2500, suffix: '+', key: 'stat4' }
  ];

  /* ================================================================
     UTILITIES
     ================================================================ */
  /** Internal `ua` → document `lang="uk"` (PRD §10, BCP 47) */
  function documentLang(internalCode) {
    return internalCode === 'ua' ? 'uk' : internalCode;
  }

  function numberLocale(internalCode) {
    return internalCode === 'ua' ? 'uk-UA' : 'en-US';
  }

  /* ================================================================
     I18N ENGINE  (PRD §6.1.2)
     ================================================================ */
  let currentLang = localStorage.getItem('ican_lang') || CONFIG.defaultLang;

  function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('ican_lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const text = getNestedValue(translations[lang], el.getAttribute('data-i18n'));
      if (text !== null) el.textContent = text;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const text = getNestedValue(translations[lang], el.getAttribute('data-i18n-placeholder'));
      if (text !== null) el.placeholder = text;
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
      const t = getNestedValue(translations[lang], el.getAttribute('data-i18n-aria-label'));
      if (t !== null) el.setAttribute('aria-label', t);
    });

    document.documentElement.lang = documentLang(lang);

    refreshFinalizedCounters();

    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  /** Update already-finished animated counters after language switch */
  function refreshFinalizedCounters() {
    document.querySelectorAll('[data-counter][data-count-done="1"]').forEach(el => {
      const target = parseInt(el.dataset.counter, 10);
      const suffix = el.dataset.suffix || '';
      el.textContent = target.toLocaleString(numberLocale(currentLang)) + suffix;
    });
  }

  /* ================================================================
     RENDER PARTNERS  (PRD §6.3.2)
     ================================================================ */
  function renderPartners() {
    const grid = document.getElementById('partners-grid');
    if (!grid) return;

    grid.replaceChildren();

    partners.forEach(p => {
      const a = document.createElement('a');
      a.href = p.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.className = 'partner-card';
      a.setAttribute('aria-label', p.name);
      a.dataset.category = p.category;

      if (p.logo) {
        const img = document.createElement('img');
        img.src = p.logo;
        img.alt = '';
        img.setAttribute('aria-hidden', 'true');
        img.loading = 'lazy';
        a.append(img);
      } else {
        const span = document.createElement('span');
        span.style.cssText =
          'font-family:Onest,sans-serif;font-size:0.875rem;font-weight:600;color:var(--color-muted);text-align:center;line-height:1.3;display:block;padding:0.35rem';
        span.textContent = p.name;
        a.append(span);
      }

      grid.append(a);
    });
  }

  /** Apply quantitative stats from JS config to #impact markup (single source of truth) */
  function syncImpactCountersFromConfig() {
    const nodes = document.querySelectorAll('.impact__stat .impact__number[data-counter]');
    impactStats.forEach((stat, i) => {
      const el = nodes[i];
      if (!el) return;
      el.dataset.counter = String(stat.value);
      el.dataset.suffix = stat.suffix;
      delete el.dataset.countDone;
      el.textContent = '0';
    });
  }

  /* ================================================================
     DONATION MODULE STATE  (PRD §6.2.2)
     ================================================================ */
  const donationState = { selectedAmount: null, customAmount: '', gateway: 'wayforpay' };

  function sanitizeNumericInput(el) {
    const v = el.value.replace(/\D/g, '').slice(0, 9);
    if (el.value !== v) el.value = v;
    donationState.customAmount = v;
    donationState.selectedAmount = null;
    document.querySelectorAll('.donate__amount-btn').forEach(b => b.classList.remove('selected'));
    clearDonationError();
  }

  function donationGatewayFromDOM() {
    const r = document.querySelector('input[name="gateway"]:checked');
    donationState.gateway = r ? r.value : 'wayforpay';
  }

  function resolveDonationAmount() {
    if (donationState.selectedAmount != null) return donationState.selectedAmount;
    const digits = donationState.customAmount.replace(/\D/g, '');
    return digits ? parseInt(digits, 10) : NaN;
  }

  function buildWayForPayUrl(amount) {
    const qs = new URLSearchParams({
      merchantAccount:   CONFIG.wayforpay.merchantAccount,
      merchantDomainName:CONFIG.wayforpay.merchantDomainName,
      orderReference:    `ICAN-${Date.now()}`,
      amount:            String(amount),
      currency:          'UAH'
    });
    return `${CONFIG.wayforpay.baseUrl}?${qs.toString()}`;
  }

  /** LiqPay production usually requires signed data from a server — this mirrors PRD §6.2 for static hosting only. */
  function buildLiqPayUrl(amount) {
    const qs = new URLSearchParams({
      amount:      String(amount),
      currency:    'UAH',
      description: CONFIG.donateDescription
    });
    if (CONFIG.liqpay.publicKey && !/^YOUR/i.test(CONFIG.liqpay.publicKey)) {
      qs.set('public_key', CONFIG.liqpay.publicKey);
    }
    return `${CONFIG.liqpay.baseUrl}?${qs}`;
  }

  function initDonationModule() {
    const amountBtns = document.querySelectorAll('.donate__amount-btn');
    const customInput = document.getElementById('donate-custom-input');
    const radios = document.querySelectorAll('input[name="gateway"]');
    donationGatewayFromDOM();

    amountBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const amt = parseInt(btn.dataset.amount, 10);
        if (donationState.selectedAmount === amt) {
          donationState.selectedAmount = null;
          btn.classList.remove('selected');
        } else {
          donationState.selectedAmount = amt;
          donationState.customAmount = '';
          if (customInput) customInput.value = '';
          amountBtns.forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
        }
        clearDonationError();
      });
    });

    if (customInput) {
      customInput.addEventListener('input', () => sanitizeNumericInput(customInput));
      customInput.addEventListener('paste', () => queueMicrotask(() => sanitizeNumericInput(customInput)));
      customInput.addEventListener('keydown', e => {
        if (['.', ',', 'e', 'E', '+', '-'].includes(e.key)) e.preventDefault();
      });
    }

    radios.forEach(r => r.addEventListener('change', donationGatewayFromDOM));

    document.getElementById('donate-btn')?.addEventListener('click', handleDonate);

    if (customInput) donationState.customAmount = customInput.value.replace(/\D/g, '');
  }

  function setDonateError(kind) {
    const input = document.getElementById('donate-custom-input');
    const msg = document.getElementById('donate-error-msg');
    const bundle = translations[currentLang]?.donate;
    let text = bundle?.error_amount;
    if (kind === 'max') text = bundle?.error_amount_max;
    if (msg && text) msg.textContent = text;
    msg?.classList.add('visible');
    input?.classList.add('error');
    if (input) input.setAttribute('aria-invalid', 'true');
    input?.focus();
  }

  function handleDonate() {
    const amount = resolveDonationAmount();
    const btn = document.getElementById('donate-btn');

    if (!Number.isFinite(amount) || amount < 10) {
      setDonateError('min');
      return;
    }
    if (amount > 999999) {
      setDonateError('max');
      return;
    }

    clearDonationError();
    donationGatewayFromDOM();
    btn?.classList.add('loading');
    if (btn) btn.disabled = true;

    const url =
      donationState.gateway === 'liqpay' ? buildLiqPayUrl(amount) : buildWayForPayUrl(amount);

    window.setTimeout(() => {
      window.location.href = url;
    }, 300);
  }

  function clearDonationError() {
    const bundle = translations[currentLang]?.donate;
    document.getElementById('donate-custom-input')?.classList.remove('error');
    const msg = document.getElementById('donate-error-msg');
    if (msg) {
      msg.classList.remove('visible');
      const def = bundle?.error_amount;
      if (def) msg.textContent = def;
    }
    document.getElementById('donate-custom-input')?.setAttribute('aria-invalid', 'false');
  }

  /* ================================================================
     FORM VALIDATION ENGINE  (PRD §6.4)
     ================================================================ */
  const fullname = v => {
    const t = v.trim();
    return t.length >= 2 && /^[\p{L}\s'-]+$/u.test(t);
  };

  const validators = {
    fullname,
    email:        v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    phone:        v => !v || /^\+380\d{9}$/.test(String(v).replace(/\s/g, '')),
    volunteer_msg:v => v.trim().length >= 20,
    contact_msg:  v => v.trim().length >= 10,
    subject:      v => String(v || '').trim() !== '',
    consent:      v => v === true
  };

  function validateField(rule, value) {
    return validators[rule] ? validators[rule](value) : true;
  }

  function toggleFieldError(field, hasError) {
    const group = field.closest('.form__group');
    const errorEl = group ? group.querySelector('.form__field-error') : null;
    field.classList.toggle('error', hasError);
    field.setAttribute('aria-invalid', hasError ? 'true' : 'false');
    if (errorEl) errorEl.classList.toggle('visible', hasError);
  }

  function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    let firstInvalid = null;
    let ok = true;

    form.querySelectorAll('[data-validate]').forEach(field => {
      const rule = field.getAttribute('data-validate');
      const value = field.type === 'checkbox' ? field.checked : field.value;
      const valid = validateField(rule, value);
      toggleFieldError(field, !valid);
      if (!valid) {
        ok = false;
        if (!firstInvalid) firstInvalid = field;
      }
    });

    if (firstInvalid) {
      const scrollBehav = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
      firstInvalid.scrollIntoView({ block: 'center', behavior: scrollBehav });
      firstInvalid.focus({ preventScroll: true });
    }
    return ok;
  }

  /* ================================================================
     FORM SUBMISSION  (PRD §6.4.5, Formspree)
     ================================================================ */
  function setFormLoadingState(formId, isLoading) {
    const form = document.getElementById(formId);
    const submitBtn = form?.querySelector('[type="submit"]');
    if (!form || !submitBtn) return;
    submitBtn.classList.toggle('loading', isLoading);
    submitBtn.disabled = isLoading;
    form.querySelectorAll('input, textarea, select').forEach(el => {
      el.disabled = isLoading;
    });
  }

  function showFormSuccess(formId) {
    const prefix = formId === 'volunteer-form' ? 'vol' : 'con';
    const form = document.getElementById(formId);
    const success = document.getElementById(`${prefix}-success`);
    if (form) form.style.display = 'none';
    success?.classList.add('visible');
  }

  function showFormError(formId) {
    const prefix = formId === 'volunteer-form' ? 'vol' : 'con';
    const banner = document.getElementById(`${prefix}-error-banner`);
    if (!banner) return;
    const key = formId === 'volunteer-form' ? 'volunteer' : 'contact';
    banner.textContent = translations[currentLang][key].error;
    banner.classList.add('visible');
  }

  function resetForm(type) {
    const formId = type === 'volunteer' ? 'volunteer-form' : 'contact-form';
    const prefix = type === 'volunteer' ? 'vol' : 'con';
    const form = document.getElementById(formId);
    const success = document.getElementById(`${prefix}-success`);
    const banner = document.getElementById(`${prefix}-error-banner`);

    if (form) {
      form.reset();
      form.style.display = '';
      form.querySelectorAll('[data-validate]').forEach(f => toggleFieldError(f, false));
    }
    success?.classList.remove('visible');
    banner?.classList.remove('visible');
  }

  async function submitForm(formId, endpoint) {
    if (!validateForm(formId)) return;

    const form = document.getElementById(formId);
    setFormLoadingState(formId, true);
    document.getElementById(formId === 'volunteer-form' ? 'vol-error-banner' : 'con-error-banner')?.classList.remove('visible');

    const fd = new FormData(form);
    const emailEl = form.querySelector('[name="email"]');
    if (emailEl?.value) fd.set('_replyto', emailEl.value.trim());
    fd.set('_subject', formId === 'volunteer-form' ? 'ICAN — Volunteer' : 'ICAN — Contact');

    try {
      const res = await fetch(endpoint, { method: 'POST', body: fd, headers: { Accept: 'application/json' } });
      setFormLoadingState(formId, false);
      if (res.ok) showFormSuccess(formId);
      else showFormError(formId);
    } catch {
      setFormLoadingState(formId, false);
      showFormError(formId);
    }
  }

  function initForms() {
    document.getElementById('volunteer-form')?.addEventListener('submit', e => {
      e.preventDefault();
      submitForm('volunteer-form', CONFIG.forms.volunteer);
    });
    document.getElementById('contact-form')?.addEventListener('submit', e => {
      e.preventDefault();
      submitForm('contact-form', CONFIG.forms.contact);
    });

    document.querySelectorAll('[data-reset-form]').forEach(btn => {
      btn.addEventListener('click', () => resetForm(btn.getAttribute('data-reset-form')));
    });

    document.querySelectorAll('[data-validate]').forEach(field => {
      const clear = () => toggleFieldError(field, false);
      field.addEventListener('input', clear);
      field.addEventListener('change', clear);
    });
  }

  /* ================================================================
     HEADER SCROLL BEHAVIOUR  (PRD §5.2)
     ================================================================ */
  function initHeaderScroll() {
    const header = document.getElementById('site-header');
    const scrollInd = document.getElementById('scroll-indicator');
    if (!header) return;

    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY > 80;
      header.classList.toggle('scrolled', scrolled);
      if (scrollInd) scrollInd.classList.toggle('hidden', scrolled);
    }, { passive: true });
  }

  /* ================================================================
     ACTIVE NAV LINK TRACKING  (PRD §5.2)
     ================================================================ */
  function initActiveNavTracking() {
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('a.nav-link[href^="#"]');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
          });
        }
      });
    }, { threshold: 0.35 });

    sections.forEach(sec => observer.observe(sec));
  }

  /* ================================================================
     MOBILE MENU  (PRD §5.2)
     ================================================================ */
  function initMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileCloseBtn = document.getElementById('mobile-close-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
    let menuPrevFocus = null;

    function openMenu() {
      menuPrevFocus = document.activeElement;
      mobileMenu.classList.add('is-open');
      hamburgerBtn.classList.add('is-open');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() =>
        mobileMenu.querySelector('a[href], button:not([disabled])')?.focus()
      );
    }

    function closeMenu() {
      mobileMenu.classList.remove('is-open');
      hamburgerBtn.classList.remove('is-open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      if (menuPrevFocus && typeof menuPrevFocus.focus === 'function') menuPrevFocus.focus();
      menuPrevFocus = null;
    }

    if (!mobileMenu || !hamburgerBtn) return;

    hamburgerBtn.addEventListener('click', openMenu);
    if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMenu);

    mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

    mobileMenu.addEventListener('click', e => {
      if (e.target === mobileMenu) closeMenu();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) closeMenu();
    });
  }

  /* ================================================================
     SCROLL ENTRANCE ANIMATIONS  (PRD §6.6)
     ================================================================ */
  function initScrollAnimations() {
    const elements = document.querySelectorAll('[data-animate], [data-animate-stagger]');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    elements.forEach(el => observer.observe(el));
  }

  /* ================================================================
     ANIMATED IMPACT COUNTERS  (PRD §6.5)
     ================================================================ */
  function animateCounter(el, target, suffix, duration = 1800) {
    const start = performance.now();
    const loc = () => numberLocale(currentLang);

    function update(time) {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.floor(eased * target);

      el.textContent = current.toLocaleString(loc()) + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target.toLocaleString(loc()) + suffix;
        el.dataset.countDone = '1';
      }
    }

    requestAnimationFrame(update);
  }

  function initCounterAnimations() {
    const counterEls = document.querySelectorAll('[data-counter]');
    if (!counterEls.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      counterEls.forEach(el => {
        const target = parseInt(el.dataset.counter, 10);
        const suffix = el.dataset.suffix || '';
        el.textContent = target.toLocaleString(numberLocale(currentLang)) + suffix;
        el.dataset.countDone = '1';
      });
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.counter, 10);
          const suffix = el.dataset.suffix || '';
          animateCounter(el, target, suffix);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.35 });

    counterEls.forEach(el => observer.observe(el));
  }

  /* ================================================================
     LANGUAGE TOGGLE WIRING
     ================================================================ */
  function initLanguageToggle() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
  }

  /* ================================================================
     INITIALISATION SEQUENCE  (PRD §13.C)
     ================================================================ */
  document.addEventListener('DOMContentLoaded', () => {
    syncImpactCountersFromConfig();

    renderPartners();

    setLanguage(localStorage.getItem('ican_lang') || CONFIG.defaultLang);

    initScrollAnimations();
    initCounterAnimations();
    initActiveNavTracking();

    initMobileMenu();
    initDonationModule();
    initForms();
    initLanguageToggle();

    initHeaderScroll();
  });

})();
