/** ICAN Women Foundation — vanilla JS per PRD (two-file site). Zero deps; CONFIG at top — replace placeholders before production. */

(() => {
  'use strict';

  /* ================================================================
     CONFIG — client-editable values  (PRD §11.2)
     Replace placeholder values before going live.
     ================================================================ */
  const CONFIG = {
    wayforpay: {
      paymentPageUrl: 'https://secure.wayforpay.com/page?vkh=6a042d1d-3cdc-4c40-bee4-0acd22d1dba8'
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
        our_projects: 'Наші проекти',
        impact:       'Вплив',
        programs:     'Програми',
        reports:      'Звіти',
        stories:      'Історії',
        team:         'Команда',
        projects:     'Ініціативи',
        partners:     'Партнери',
        history_nav:  'Хронологія',
        contact:      'Контакти',
        donate_outline: 'Підтримати місію'
      },
      hero: {
        brand_lockup: 'I CAN',
        region:      'Харківська область · Україна',
        headline:    'Поруч із жінками та дітьми в громадах уздовж лінії допомоги',
        subheading:  'Юристи, психологині, логістика гуманітарних комплектів і простори без осуду — ми приїжджаємо туди, де складно записатися «через установу».',
        mission:     'Місія фонду — відновити почуття опори: безпека, голос людини та практичні інструменти на кожному етапі війни й переїзду.',
        impact_line: 'Разом ми вже підтримали понад 2&nbsp;300 родин лише через польові команди й хаби в 32 громадах.',
        cta_support: 'Підтримати місію',
        cta_get_help:'Отримати допомогу',
        cta_learn:   'Дізнатися більше про програми',
        cta_community:'До спільноти волонтерів',
        quote:       '«Ця спільнота допомогла мені почуватися менш самотньою» — учасниця групи підтримки.',
        trust1:      'Офіційна реєстрація в Україні й публічна звітність',
        trust2:      'Команди поруч із людьми, а не лише в чаті'
      },
      impact: {
        section_tag:   'У цифрах',
        title:         'Наш вплив',
        subtitle:      'Показуємо коротко, куди саме йде зусилля команди та партнерів щоквартально.',
        pillar_women:       'Жінок і родин із комплексною підтримкою',
        pillar_consults:    'Індивідуальних консультацій психологів і юристів',
        pillar_programs:    'Подій освіти, профілактики насильства та груп підтримки',
        pillar_volunteers:  'Активних волонтерів щомісяця',
        pillar_partners:    'Партнерських організацій у спільних програмах'
      },
      ourProjects: {
        section_tag: 'Наші проекти',
        headline:   'Ми там, де найскладніше — поруч із громадами на межі',
        body1:      'ICAN Women Foundation — благодійна організація, яка з 2022 року надає психологічну, юридичну та соціальну підтримку жінкам і дітям у прифронтових громадах Харківщини.',
        body2:      'Ми будуємо стійкість там, де вона потрібна найбільше — у невеликих містах і селах, куди рідко доходить системна допомога.',
        cta_report: 'Звіти про діяльність',
        cta_donate: 'Підтримати місію'
      },
      reports: {
        section_tag: 'Документи',
        headline:   'Звіт про діяльність',
        subtitle:   'Офіційні матеріали для партнерів, донорів і громади. Файли-плейсхолдери — замініть посилання на реальні PDF перед публікацією.',
        r2025:       'Річний звіт 2025',
        r2024:       'Річний звіт 2024',
        r_finance:   'Фінансовий звіт',
        download:    'Завантажити PDF'
      },
      programs: {
        section_tag: 'Напрямки роботи',
        headline:   'Як ми допомагаємо',
        subheading: 'Шість ключових напрямків комплексної підтримки',
        psy:         { title: 'Психосоціальна підтримка', body: 'Індивідуальне консультування, групова терапія та кризова допомога для жінок і дітей з травмами війни.' },
        legal:       { title: 'Юридична допомога',        body: 'Безкоштовні юридичні консультації з питань прав, документів та захисту від насильства.' },
        education:   { title: 'Освіта та розвиток',       body: 'Навчальні програми, тренінги та майстер-класи для підвищення кваліфікації та самодостатності.' },
        humanitarian:{ title: 'Гуманітарна допомога',     body: 'Роздача гігієнічних наборів, предметів першої необхідності та продуктових пакетів у 32 громадах.' },
        p2p:         { title: 'Peer-to-Peer підтримка',   body: 'Групи взаємопідтримки та програми лідерства, де вижилі стають наставниками для інших.' },
        retreats:    { title: 'Ретріти та відновлення',   body: 'Програми відновлення та оздоровчі поїздки для жінок, які пережили найтяжчі випробування.' }
      },
      stories: {
        tag: 'Реальні історії',
        headline: 'Історії людей, не кейси для сайту',
        philosophy: 'Люди, а не кейси — це не слоган, а наш спосіб працювати з підтримкою й розповідями.',
        subtitle: 'Ми змінюємо імена й деталі, але зберігаємо форму допомоги — так чесно перед донором і безопасно для людини.',
        read_more: 'Читати далі',
        read_less: 'Згорнути',
        p1_name: 'Олена, учасниця програми',
        p1_a: 'Я приїхала всередині війни без «своїх стін» й без порадника. Спочатку було соромно навіть питати дорогу до лікаря.',
        p1_b: 'У хабі мені без черги підказали, як записатися до психолога державної лінії, а паралельно запросили до кола жінок, що збирається щотижня.',
        p1_help: 'Фонд дав три речі: живий простір без оцінювання, два юридичні супроводи щодо аліментів і пакунок гігієни, бо гроші пішли на оренду.',
        p2_name: 'Марія, кураторка волонтерів',
        p2_a: 'Наші активістки вигорають через постійний «режим тривожності» — хотілося місце, де можна просто перевести подих.',
        p2_b: 'ICAN дав ноутбук бухгалтеру, аптечку і шаблон графіка чергування. Мобільний психолог приїхав із нами тричі — це було видно очима громади.',
        p2_help: 'Ми тримаємо волонтерський чат уже 14 місяців без «вігоньок»: фонд платить символічну доплату локальній координаторці через прозору угоду.',
        p3_name: 'Юлія, партнерка-юристка',
        p3_a: 'На консультаціях ми бачимо: жінку лякає не закон — а відсутність супроводу. Одна фраза «ми запишемо разом» вже заспокоює.',
        p3_help: 'Спільно зібрали 12 модулів простою мовою про захист від насильства під час переїзду — і роздали партнерам у п’яти містах уздовж нашого маршруту.'
      },
      mission: {
        tag: 'Звідки все почалося',
        title: 'Місія народилася там, де не вистачало моста',
        body1: 'Після лютого 2022 три різні громади зателефонували в один день із однаковим запитом: «Потрібні психолог, адвокат і просто місце, де жінки не відчувають себе «зайвими»». Ми побачили локальну сміливість без системної ресурсної підтримки.',
        body2: 'Ми створили маленький «штаб довіри»: штат із трьох фахівчинь, платформа партнерських угод і прозора логістика замість складних KPI. Так гроші досягають їжака на передовій дорозі між двома селами, а не залипають у таблицях.',
        quote: '«Спільнота допомогла мені почуватися менш самотньою» — з поля нашої першої виїзної групи, дозволено цитату без імені.',
        cta_donate: 'Підтримати місію',
        cta_history: 'Подивитися напряму «Хронологія»'
      },
      team: {
        tag: 'Про команду',
        headline: 'Кого ви фактично чекаєте в громадах',
        subtitle: 'Керівництво невелике навмисно — ми інвестуємо в локальну мережу більше, ніж у ряд широких чиновних посад.',
        p1_name: 'Ірина Сергеєнко',
        p1_role: 'Співзасновниця · керуюча партнерка',
        p1_bio: 'Тримає стратегію впливу, міжнародні грантові узгоди й ескалації, коли на кону безпека сімей у прифронтових селах.',
        p2_name: 'Кирило Пономарьов',
        p2_role: 'Координатор польових операцій',
        p2_bio: 'Будує маршрути мобільних бригад, синхронізує лікарню, школу й волонтерів там, де немає зайвої адмінструктури.',
        p3_name: 'Хмара волонтерів ICAN',
        p3_role: 'Фасилітатори на місцях і дистанційно',
        p3_bio: 'Юристи-про-боно, студентські логісти, пекарі домових кооперацій — ми даємо їм методички й ментора в штаті фонду.'
      },
      history: {
        tag: 'Короткий шлях',
        headline: 'Що встигло змінитися між хвилями',
        subtitle: 'Не повна біографія — просто дороговказ, як ми дорослішали поруч із громадами.',
        y1: '2022 — відповідь на гостру кризу',
        d1: 'Перший маршрут психологині + логіст гуманітарки в три громади, де не було офіційного «соцзахисту поруч».',
        y2: '2023 — узгодження із державним контуром',
        d2: 'Підключення до муніципальних соцслужб, створення першого статичного хабу доступу без запису за талончиком із міської ради.',
        y3: '2024 — KPI і прозорі набори',
        d3: 'Публічні KPI по виїздам, понад 800 індивідуальних сесій, перші міжнародні звіти із стандартним M&E.',
        y4: '2025–2026 — утримуємо темп',
        d4: 'Пріоритет: довгі peer-програми, оплата локальним координаторам, менше «героїзації», більше рутини підтримки.'
      },
      how: {
        section_tag: 'Методологія',
        headline: 'Як ми працюємо',
        step1: { title: 'Виявлення потреб',       body: 'Оцінюємо реальну ситуацію в кожній громаді через виїзди та партнерські організації.' },
        step2: { title: 'Комплексна відповідь',   body: 'Поєднуємо психологічну, юридичну та матеріальну підтримку в єдиний пакет допомоги.' },
        step3: { title: 'Залучення місцевих',     body: 'Навчаємо місцевих активісток та волонтерів, щоб підтримка тривала після нашого відходу.' },
        step4: { title: 'Моніторинг та звітність', body: 'Відстежуємо результати і публічно звітуємо перед донорами та громадою.' }
      },
      projects: {
        section_tag: 'Ініціативи',
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
        headline:          'Ваша підтримка відкриває жінкам доступ до турботи й спільноти',
        subheading:        'Не «донат як кнопка» — а їжа, терапія, право на тишу для тих, хто тягне родину в прифронтових селах Харківщини.',
        emotional:         'Жодна гривня не йде на маркетинг — тільки виїзди, хаби й супровід волонтерів, яким теж потрібне пальне та страховки.',
        impact_200:       '200 ₴ — один шанс поговорити з психологом без черги',
        impact_500:       '500 ₴ — гідний гігієнічний набір для жінки й дитини',
        impact_1000:      '1000 ₴ — юридичний супровід + оформлення заяви',
        card_title:        'Підтримати',
        module_title:      'Підтримати',
        freq_monthly:      'Щомісячно',
        freq_once:         'Одноразово',
        freq_group_sr:     'Тип платежу',
        currency_label:    'Оберіть валюту',
        currency_group_sr: 'Валюта платежу',
        amount_label:      'Оберіть суму',
        other_amount:      'інша сума',
        custom_placeholder:'Введіть суму',
        custom_placeholder_uah: 'Сума в гривнях',
        custom_placeholder_usd: 'Сума в доларах США',
        custom_placeholder_eur: 'Сума в євро',
        cta:               'Продовжити до оплати',
        section_tag:       'Допомога',
        trust:             '🔒 Безпечна оплата WayForPay · Офіційний благодійний фонд України',
        error_amount:      'Мінімальна сума — 10 (у вибраній валюті)',
        error_amount_max:  'Максимум 999 999 за операцію',
        preset_sr:         'Готові суми лише в обраній валюті (за замовчуванням ₴)',
        impact_list_sr:    'Приклади, що може профінансувати ваш внесок',
        custom_sr_label:   'Сума платежу',
        cta_aria_label:    'Перейти на сторінку оплати WayForPay',
        amt250_aria:       'Пожертва у розмірі 250',
        amt500_aria:       'Пожертва у розмірі 500',
        amt1000_aria:      'Пожертва у розмірі 1000',
        amt5000_aria:      'Пожертва у розмірі 5000',
        bank_title:        'Реквізити для переказу',
        iban_uah_hint:     'UAH · IBAN',
        iban_usd_hint:     'USD · IBAN',
        iban_eur_hint:     'EUR · IBAN',
        copy_iban:         'Скопіювати',
        copied:            'Скопійовано!',
        gateway_label:     ''
      },
      partners: {
        section_tag: 'Партнери й разом із нами',
        headline:   'Партнери та громади, що нас підтримують',
        subheading: 'Міжнародні фонди, державні партнери та місцеві активні групи — усі на рівних у наших звітах.',
        community_note: 'Ми дякуємо релігійним общинам, школам і мікрогрантодавцям із діаспори — вони часто лишаються за кадром маркетингових фото, але тримають нашу логістику.'
      },
      volunteer: {
        section_tag: 'Волонтерство',
        headline:    'Долучайтесь як волонтери',
        subheading:  'Ваша година на тиждень у хабі або дистанційна перекладна сесія інколи важливіші за один великий чек.',
        ben1_title:  'Живий графік',
        ben1_body:   'Можемо синхронізувати з роботою; більшість задач сумісні із дистанцією або короткими змінами в хабі.',
        ben2_title:  'Наставництво',
        ben2_body:   'Кожному волонтеру призначаємо члена координ-команди, щоб ви не зависали в «невидимій» задачі.',
        ben3_title:  'Спільний розвиток',
        ben3_body:   'Раз на місяць — відкриті тренінги з польової етики без зайвого «корпоративного глянцю».',
        field_name:    'Повне ім\'я',
        field_email:   'Email',
        field_phone:   'Телефон',
        field_city:    'Місто / Регіон',
        field_message: 'Як ви можете допомогти?',
        field_consent_before: 'Я даю згоду на обробку персональних даних відповідно до',
        field_consent_link:   'Політики конфіденційності',
        cta:           'Долучитися до спільноти',
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
        section_tag:        'Контакти',
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
        mission:           'Ми створюємо відчуття опори там, де війна виснажує родини: поєднуємо психосоціальну допомогу, юридичну підтримку та гуманітарну логістику без маркетингового шуму.',
        tagline:           'З вами поруч для жінок і дітей у громадах Харківщини — чесно й по-людськи.',
        col1_title:        'Швидкі посилання',
        col_contact_title: 'Контакти',
        col2_title:        'Дії',
        col3_title:        'Юридичне',
        volunteer_link:    'До спільноти волонтерів',
        get_help:          'Отримати допомогу',
        reports_link:      'Фінзвіти',
        privacy:           'Політика конфіденційності',
        terms:             'Умови сайту',
        registration_link: 'Реєстраційні документи',
        registration:      'БФ «ICAN Women Foundation» · Код ЄДРПОУ: XXXXXXXX · Зареєстровано в Україні',
        rights:            '© 2024–2026 ICAN Women Foundation. Всі права захищені.'
      }
    },

    en: {
      a11y: { skip_main: 'Skip to main content' },
      nav: {
        our_projects: 'Our Projects',
        impact:       'Impact',
        programs:     'Programs',
        reports:      'Reports',
        stories:      'Stories',
        team:         'Team',
        projects:     'Initiatives',
        partners:     'Partners',
        history_nav:  'Timeline',
        contact:      'Contact',
        donate_outline: 'Support our mission'
      },
      hero: {
        brand_lockup: 'I CAN',
        region:      'Kharkiv region · Ukraine',
        headline:    'Beside women and children across frontline communities',
        subheading:  'Therapists, jurists, humanitarian kits and calm rooms — built for people who cannot wait for bureaucracy to catch up.',
        mission:     'We exist so every woman can find safety, dignity and practical next steps while war keeps moving the goalposts.',
        impact_line: 'Together we have already accompanied 2,300+ families through outreach teams and hubs spanning 32 municipalities.',
        cta_support: 'Support our mission',
        cta_get_help:'Get help',
        cta_learn:   'Learn more about our programmes',
        cta_community:'Join our community',
        quote:       '“This community helped me feel less alone” — participant in a support circle.',
        trust1:      'Registered Ukrainian foundation with public reporting',
        trust2:      'Field teams rooted in communities, not dashboards'
      },
      impact: {
        section_tag:   'Impact by numbers',
        title:         'Our impact',
        subtitle:      'Quarterly KPIs shared with municipalities, donors and the women steering local hubs.',
        pillar_women:       'Families receiving holistic accompaniment',
        pillar_consults:    'Individual psycholegal counselling sessions delivered',
        pillar_programs:    'Community trainings, resilience circles & prevention clinics',
        pillar_volunteers:  'Active volunteers each month maintaining logistics',
        pillar_partners:    'Partner organisations in joint programming'
      },
      ourProjects: {
        section_tag: 'Our projects',
        headline:   'We are where it\'s hardest — beside frontline communities',
        body1:      'ICAN Women Foundation has been providing psychological, legal and social support to women and children in frontline communities of Kharkiv region since 2022.',
        body2:      'We build resilience where it is needed most — in small towns and villages that rarely receive systematic aid.',
        cta_report: 'Activity reports',
        cta_donate: 'Support our mission'
      },
      reports: {
        section_tag: 'Documents',
        headline:   'Activity reports',
        subtitle:   'Official materials for partners, donors and communities. Placeholder links — replace with real PDF URLs before launch.',
        r2025:       'Annual report 2025',
        r2024:       'Annual report 2024',
        r_finance:   'Financial report',
        download:    'Download PDF'
      },
      programs: {
        section_tag: 'Programmes',
        headline:   'How We Help',
        subheading: 'Six key areas of comprehensive support',
        psy:         { title: 'Psychosocial Support',   body: 'Individual counselling, group therapy and crisis support for women and children with war trauma.' },
        legal:       { title: 'Legal Aid',              body: 'Free legal consultations on rights, documentation and protection from violence.' },
        education:   { title: 'Education & Development', body: 'Training programmes and workshops to build skills and self-sufficiency.' },
        humanitarian:{ title: 'Humanitarian Aid',       body: 'Distribution of hygiene kits, essential goods and food packages in 32 communities.' },
        p2p:         { title: 'Peer-to-Peer Support',   body: 'Peer support groups and leadership programmes where survivors become mentors for others.' },
        retreats:    { title: 'Retreats & Recovery',    body: 'Recovery programmes and wellness retreats for women who have endured the most severe hardship.' }
      },
      stories: {
        tag: 'Real voices',
        headline: 'People, not portfolio testimonials',
        philosophy: 'People, not cases — this is how we hold stories, data and dignity together.',
        subtitle: 'We change names and trim details to protect privacy while showing what shifts after support lands.',
        read_more: 'Read more',
        read_less: 'Show less',
        p1_name: 'Olena, programme participant',
        p1_a: 'Displacement takes more than a roof — it quietly erases your circle. I was ashamed to even ask how to find a therapist.',
        p1_b: 'The hub invited me to a listening circle, then walked me through two legal consults about child support while kids played in the corner.',
        p1_help: 'ICAN gave three grounded gifts: a shame-free room, paperwork help and dignity kits during the emptiest paycheck week.',
        p2_name: 'Mariya, volunteer lead',
        p2_a: 'Local activists were burning out from constant alert mode yet still feeding entire streets.',
        p2_b: 'ICAN financed the first rent month, coached us on safeguarding and brought mobile therapy teams three times alongside us.',
        p2_help: 'Our volunteer roster stayed above 40 people thanks to stipends routed transparently through the foundation.',
        p3_name: 'Yuliia, partner jurist',
        p3_a: 'People fear stigma more than statutes. Saying «we\'ll draft this together» calms quicker than brochures.',
        p3_help: 'We packaged 12 plain-language protections for women on the move and shipped them via ICAN vans to five county seats.'
      },
      mission: {
        tag: 'Where it began',
        title: 'The mission crystallised once three towns called the same afternoon',
        body1: 'Each mayor\'s office begged not for flashy kits but for a psychologist, jurist and a warm room women could enter without proving anything first.',
        body2: 'Instead of polishing a SaaS-perfect story, we became the bridge — connecting brave locals, audited logistics and patient reporting so resources did not dissolve mid-route.',
        quote: '“This community helped me feel less alone” — field note from our first caravan, anonymised.',
        cta_donate: 'Fuel the mission',
        cta_history: 'See timeline milestones'
      },
      team: {
        tag: 'Meet the scaffolding',
        headline: 'Who actually answers your knock at the hub',
        subtitle: 'We keep HQ lean deliberately so municipalities and volunteers absorb the daylight budget.',
        p1_name: 'Iryna Serheienko',
        p1_role: 'Co-founder · managing partner',
        p1_bio: 'Keeps fiduciary relationships honest, translates donor intent into safeguarding rules and hops on night calls during escalations.',
        p2_name: 'Kyrylo Ponomarov',
        p2_role: 'Field mobilisation coordinator',
        p2_bio: 'Sequences mobile jurist buses, aligns schools and pharmacies on shared calendars when infrastructure is fractured.',
        p3_name: 'ICAN Volunteer Cloud',
        p3_role: 'Neighbour volunteers & remote pals',
        p3_bio: 'Pack parcels, babysit registrations, whisper-translate trauma stories — guided by mentors on payroll.'
      },
      history: {
        tag: 'Short arc',
        headline: 'Moments between waves',
        subtitle: 'Not a glossy annual report — a compass showing how seriousness compounded.',
        y1: '2022 · crisis reflex',
        d1: 'First rolling clinic + humanitarian drops in municipalities without resident social offices.',
        y2: '2023 · public sector braiding',
        d2: 'Signed cooperation with rayon councils, opened stationary safe entry without ticket theatre.',
        y3: '2024 · transparent throughput',
        d3: 'Public KPI dashboard, >800 psychotherapy sessions tracked, multinational audit templates adopted.',
        y4: '2025–2026 · stewardship',
        d4: 'Focus on sustaining peer mentors, livelihood circles and humane stipends rather than stunt PR.'
      },
      how: {
        section_tag: 'Method',
        headline: 'How We Work',
        step1: { title: 'Needs Assessment',       body: 'We assess the real situation in each community through field visits and partner organisations.' },
        step2: { title: 'Comprehensive Response', body: 'We combine psychological, legal and material support into a single assistance package.' },
        step3: { title: 'Local Empowerment',      body: 'We train local activists and volunteers so support continues after our engagement ends.' },
        step4: { title: 'Monitoring & Reporting', body: 'We track outcomes and report transparently to donors and the community.' }
      },
      projects: {
        section_tag: 'Initiatives',
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
        headline:          'Your support helps women access care and community',
        subheading:        'No lifestyle-brand gloss — fuel for counsellors, vans and quiet rooms in Kharkiv border communities.',
        emotional:         'Every hryvnia skips billboards; it pays stipends, fuel and insurance for humans carrying boxes and stories.',
        impact_200:       '200 UAH — one counseling hour when public queues fail',
        impact_500:       '500 UAH — hygiene + warmth bundle for a mother and child',
        impact_1000:      '1,000 UAH — legal drafting with follow-up texting',
        card_title:        'Support us',
        module_title:      'Support',
        freq_monthly:       'Monthly',
        freq_once:          'One-time',
        freq_group_sr:     'Payment type',
        currency_label:    'Choose currency',
        currency_group_sr: 'Currency',
        amount_label:      'Choose amount',
        other_amount:      'Other amount',
        custom_placeholder:'Enter amount',
        custom_placeholder_uah: 'Amount in UAH',
        custom_placeholder_usd: 'Amount in USD',
        custom_placeholder_eur: 'Amount in EUR',
        cta:               'Continue to payment',
        section_tag:       'Support',
        trust:             '🔒 Secure WayForPay checkout · Registered charitable foundation',
        error_amount:      'Minimum amount is 10 (in selected currency)',
        error_amount_max:  'Maximum 999,999 per transaction',
        preset_sr:         'Suggested amounts match the currency you chose (defaults to ₴)',
        impact_list_sr:    'Examples of what your donation can fund',
        custom_sr_label:   'Payment amount',
        cta_aria_label:    'Open WayForPay payment page',
        amt250_aria:       'Donate 250',
        amt500_aria:       'Donate 500',
        amt1000_aria:      'Donate 1000',
        amt5000_aria:      'Donate 5000',
        bank_title:        'Bank transfer details',
        iban_uah_hint:     'UAH · IBAN',
        iban_usd_hint:     'USD · IBAN',
        iban_eur_hint:     'EUR · IBAN',
        copy_iban:        'Copy',
        copied:            'Copied!',
        gateway_label:     ''
      },
      partners: {
        section_tag: 'Partners standing with us',
        headline:   'Partners strengthening legitimacy',
        subheading: 'International agencies, state actors and fearless micro-grant circles — credited equally inside our PDF reports.',
        community_note: 'Churches hosting storerooms, school principals lending buses and diaspora fundraisers rarely show up in hero photos yet keep pallets moving.'
      },
      volunteer: {
        section_tag: 'Volunteering',
        headline:    'Volunteer with us',
        subheading:  'Sometimes your Saturday shift unloading vans matters more than a one-off flashy donation.',
        ben1_title:  'Flexible cadence',
        ben1_body:   'Hybrid-friendly roles: remote translation shifts or two-hour onsite welcoming desks.',
        ben2_title:  'Buddy system',
        ben2_body:   'Matched with a coordinator so you never feel ghosted halfway through onboarding.',
        ben3_title:  'Practice-based learning',
        ben3_body:   'Monthly open trainings on safeguarding and trauma-informed presence — zero startup theatrics.',
        field_name:    'Full name',
        field_email:   'Email',
        field_phone:   'Phone',
        field_city:    'City / Region',
        field_message: 'How can you help?',
        field_consent_before: 'I consent to the processing of personal data in accordance with the',
        field_consent_link:   'Privacy Policy',
        cta:           'Join our community',
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
        section_tag:        'Contact',
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
        mission:           'We knit psychosocial support, juridical accompaniment and dusty-road logistics together so wartime burnout does not have to fight alone.',
        tagline:           'Staying humane for women & children rebuilding life along Kharkiv frontline towns.',
        col1_title:        'Navigate',
        col_contact_title: 'Contact',
        col2_title:        'Take action',
        col3_title:        'Legal',
        volunteer_link:    'Volunteer pathways',
        get_help:          'Get help',
        reports_link:      'Annual reports',
        privacy:           'Privacy policy',
        terms:             'Site terms',
        registration_link: 'Registration files',
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
    { value: 2300, suffix: '+', key: 'pillar_women' },
    { value: 840, suffix: '+', key: 'pillar_consults' },
    { value: 140, suffix: '+', key: 'pillar_programs' },
    { value: 55, suffix: '+', key: 'pillar_volunteers' },
    { value: 6, suffix: '', key: 'pillar_partners' }
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
    refreshStoryExpandButtons();

    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    updateDonateCustomPlaceholder();
  }

  function refreshStoryExpandButtons() {
    document.querySelectorAll('[data-story-expand]').forEach(btn => {
      const expanded = btn.closest('.story-card')?.classList.contains('is-expanded');
      const bundle = translations[currentLang]?.stories;
      const text = expanded ? bundle?.read_less : bundle?.read_more;
      if (text) btn.textContent = text;
      btn.setAttribute('aria-expanded', String(!!expanded));
    });
  }

  function initStoryExpandButtons() {
    document.querySelectorAll('[data-story-expand]').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.closest('.story-card')?.classList.toggle('is-expanded');
        refreshStoryExpandButtons();
      });
    });
    refreshStoryExpandButtons();
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

  /** Apply quantitative stats from JS config to impact pillars (single source of truth) */
  function syncImpactCountersFromConfig() {
    const nodes = document.querySelectorAll('#our-impact .impact-pillar__num[data-counter]');
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
     DONATION MODULE  (WayForPay hosted page + bank transfer block)
     ================================================================ */
  const donationState = {
    selectedAmount: null,
    customAmount: '',
    otherMode: false,
    currency: 'UAH',
    recurring: true
  };

  function getActiveDonatePresetPanel() {
    return document.querySelector(`.donate-amt-grid[data-donate-presets-for="${donationState.currency}"]`);
  }

  function updateDonateCustomPlaceholder() {
    const input = document.getElementById('donate-custom-input');
    if (!input) return;
    const bundle = translations[currentLang]?.donate;
    const key =
      donationState.currency === 'UAH'
        ? 'custom_placeholder_uah'
        : donationState.currency === 'USD'
          ? 'custom_placeholder_usd'
          : 'custom_placeholder_eur';
    let text =
      bundle && bundle[key] !== undefined ? bundle[key] : bundle?.custom_placeholder;
    if (!text && bundle) text = bundle.custom_placeholder || '';
    if (text) input.placeholder = text;
  }

  function sanitizeNumericInput(el) {
    const v = el.value.replace(/\D/g, '').slice(0, 9);
    if (el.value !== v) el.value = v;
    donationState.customAmount = v;
    donationState.selectedAmount = null;
    donationState.otherMode = true;
    document.querySelectorAll('.donate__amount-btn').forEach(b => b.classList.remove('selected'));
    const panel = getActiveDonatePresetPanel();
    panel?.querySelector('[data-other="1"]')?.classList.add('selected');
    clearDonationError();
  }

  /** WayForPay donation page: preset amount + currency (+ optional monthly regular). */
  function buildWayForPayPageUrl(amount, currency, recurring) {
    const u = new URL(CONFIG.wayforpay.paymentPageUrl);
    u.searchParams.set('amount', String(amount));
    u.searchParams.set('currency', currency);
    if (recurring) {
      u.searchParams.set('regularOn', '1');
      u.searchParams.set('regularMode', 'monthly');
      u.searchParams.set('regularAmount', String(amount));
    } else {
      u.searchParams.set('regularMode', 'none');
    }
    return u.toString();
  }

  function navigateToWayForPay(amount, currency, recurring) {
    const url = buildWayForPayPageUrl(amount, currency, recurring);
    window.location.href = url;
  }

  function toggleDonatePanels(currency) {
    document.querySelectorAll('[data-donate-presets-for]').forEach(panel => {
      const on = panel.getAttribute('data-donate-presets-for') === currency;
      panel.hidden = !on;
      panel.setAttribute('aria-hidden', on ? 'false' : 'true');
    });
  }

  function setFrequencyUI(recurring) {
    donationState.recurring = recurring;
    document.querySelectorAll('[data-donate-freq]').forEach(btn => {
      const r = btn.getAttribute('data-donate-freq') === 'recurring';
      btn.classList.toggle('is-active', r === recurring);
      btn.setAttribute('aria-pressed', String(r === recurring));
    });
  }

  function setCurrencyUI(code) {
    donationState.currency = code;
    toggleDonatePanels(code);
    document.querySelectorAll('[data-donate-currency]').forEach(btn => {
      const on = btn.getAttribute('data-donate-currency') === code;
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-pressed', String(on));
    });
    donationState.selectedAmount = null;
    donationState.otherMode = false;
    document.querySelectorAll('.donate__amount-btn').forEach(b => {
      b.classList.remove('selected');
    });
    const input = document.getElementById('donate-custom-input');
    if (input) {
      input.value = '';
      donationState.customAmount = '';
    }
    const wrap = document.getElementById('donate-custom-wrap');
    wrap?.classList.remove('is-visible');
    clearDonationError();
    updateDonateCustomPlaceholder();
  }

  function resolveDonationAmountInput() {
    if (donationState.selectedAmount != null) return donationState.selectedAmount;
    const digits = (donationState.customAmount || '').replace(/\D/g, '');
    return digits ? parseInt(digits, 10) : NaN;
  }

  function initBankIbanCopyButtons() {
    document.querySelectorAll('[data-copy-target]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-copy-target');
        const el = id ? document.getElementById(id) : null;
        const text = el?.textContent?.trim() || '';
        if (!text || !navigator.clipboard?.writeText) return;
        const bundle = translations[currentLang]?.donate;
        const defLabel = bundle?.copy_iban || '';
        const okLabel = bundle?.copied || '';
        try {
          await navigator.clipboard.writeText(text);
          const label = btn.querySelector('.donate-iban-copy-text');
          if (label) {
            label.textContent = okLabel;
            window.setTimeout(() => {
              label.textContent = defLabel;
            }, 2000);
          }
        } catch {
          /* ignore */
        }
      });
    });
  }

  function initDonationModule() {
    const customInput = document.getElementById('donate-custom-input');
    const customWrap = document.getElementById('donate-custom-wrap');

    toggleDonatePanels(donationState.currency);
    setFrequencyUI(donationState.recurring);
    setCurrencyUI(donationState.currency);

    document.querySelectorAll('[data-donate-freq]').forEach(btn => {
      btn.addEventListener('click', () => {
        setFrequencyUI(btn.getAttribute('data-donate-freq') === 'recurring');
      });
    });

    document.querySelectorAll('[data-donate-currency]').forEach(btn => {
      btn.addEventListener('click', () => {
        setCurrencyUI(btn.getAttribute('data-donate-currency'));
      });
    });

    document.querySelectorAll('.donate__amount-btn[data-amount]').forEach(btn => {
      btn.addEventListener('click', () => {
        const amt = parseInt(btn.dataset.amount, 10);
        if (!Number.isFinite(amt)) return;
        donationState.otherMode = false;
        donationState.customAmount = '';
        if (customInput) customInput.value = '';
        customWrap?.classList.remove('is-visible');

        document.querySelectorAll('.donate__amount-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        donationState.selectedAmount = amt;
        clearDonationError();
        navigateToWayForPay(amt, donationState.currency, donationState.recurring);
      });
    });

    document.querySelectorAll('.donate__amount-btn[data-other="1"]').forEach(otherBtn => {
      otherBtn.addEventListener('click', () => {
        donationState.selectedAmount = null;
        donationState.otherMode = true;
        document.querySelectorAll('.donate__amount-btn').forEach(b => b.classList.remove('selected'));
        otherBtn.classList.add('selected');
        customWrap?.classList.add('is-visible');
        clearDonationError();
        updateDonateCustomPlaceholder();
        window.requestAnimationFrame(() => customInput?.focus());
      });
    });

    if (customInput) {
      customInput.addEventListener('input', () => sanitizeNumericInput(customInput));
      customInput.addEventListener('paste', () => queueMicrotask(() => sanitizeNumericInput(customInput)));
      customInput.addEventListener('keydown', e => {
        if (['.', ',', 'e', 'E', '+', '-'].includes(e.key)) e.preventDefault();
        if (e.key === 'Enter') {
          e.preventDefault();
          handleDonate();
        }
      });
    }

    document.getElementById('donate-btn')?.addEventListener('click', handleDonate);
    initBankIbanCopyButtons();

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
    if (!donationState.otherMode && donationState.selectedAmount != null) {
      return;
    }
    const amount = resolveDonationAmountInput();
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
    btn?.classList.add('loading');
    if (btn) btn.disabled = true;

    window.setTimeout(() => {
      navigateToWayForPay(amount, donationState.currency, donationState.recurring);
    }, 200);
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
    initLanguageToggle();
    initStoryExpandButtons();

    initHeaderScroll();
  });

})();
