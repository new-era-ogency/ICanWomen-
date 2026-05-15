/** I CAN Women Foundation - vanilla JS per PRD (two-file site). Zero deps; CONFIG at top - replace placeholders before production. */

(() => {
  'use strict';

  /* ================================================================
     CONFIG - client-editable values  (PRD §11.2)
     Replace placeholder values before going live.
     ================================================================ */
  const CONFIG = {
    wayforpay: {
      paymentPageUrl: 'https://secure.wayforpay.com/page?vkh=6a042d1d-3cdc-4c40-bee4-0acd22d1dba8'
    },
    telegramBot: 'https://t.me/bo_bf_ican',
    social: {
      telegram:
        'https://t.me/bo_bf_ican',
      instagram:
        'https://www.instagram.com/ngo_ican?igsh=N21sYTRpaGdlcTZt&utm_source=qr',
      facebook:
        'https://www.facebook.com/bo.bf.ican/',
      linkedin:
        'https://www.linkedin.com/in/co-cf-ican-0368b2290/'
    },
    defaultLang: 'ua'
  };

  /* ================================================================
     TRANSLATIONS  (PRD §6.1.1)
     ================================================================ */
  const translations = {
    ua: {
      a11y: { skip_main: 'Перейти до основного вмісту' },
      nav: {
        about:        'Про нас',
        directions:   'Напрямки діяльності',
        reporting:    'Звітність',
        impact:       'У цифрах',
        programs:     'Напрямки діяльності',
        reports:      'Звіти',
        stories:      'Історії',
        team:         'Команда',
        projects:     'Проєкти',
        partners:     'Партнери',
        contact:      'Контакти',
        donate_outline: 'Підтримати фонд'
      },
      hero: {
        brand_lockup: 'I CAN',
        headline:    'Підтримка жінок і дітей там, де війна змінила все',
        subheading:  'Психологічна допомога, право та гуманітарна підтримка в громадах Харківщини - поруч і без зайвого шуму.',
        cta_support: 'Підтримати фонд',
        cta_join:    'Долучитися до спільноти',
        cta_get_help:'Отримати допомогу',
        cta_learn:   'Дізнатися більше про програми',
        cta_community:'До спільноти волонтерів',
        quote:       '«Ця спільнота допомогла мені почуватися менш самотньою» - учасниця групи підтримки.',
      },
      impact: {
        section_tag:   'У цифрах',
        title:         'Наш вплив',
        subtitle:      'Показуємо коротко, куди саме йде зусилля команди та партнерів щоквартально.',
        pillar_women:       'Жінок і родин із комплексною підтримкою',
        pillar_consults:    'Індивідуальних консультацій психологів і юристів',
        pillar_programs:    'Подій освіти, профілактики насильства та груп підтримки',
        pillar_partners:    'Партнерських організацій у спільних програмах'
      },
      reports: {
        section_tag: 'Документи',
        headline:   'Звіт про діяльність',
        subtitle:   'Офіційні матеріали для партнерів, донорів і громади. Річні звіти доступні для перегляду та завантаження.',
        r2025:       'Річний звіт 2025',
        r2024:       'Річний звіт 2024',
        r2023:       'Річний звіт 2023',
        download:    'Завантажити PDF'
      },
      programs: {
        section_tag: 'Напрямки діяльності',
        headline:   'Як ми допомагаємо',
        subheading: 'Три ключові напрями комплексної підтримки',
        pillar_support: {
          title: 'Комплексна підтримка й захист',
          body: 'Професійна психосоціальна допомога, зокрема конфіденційна підтримка для переживших насильство на ґрунті статі (ГЗН), а також правовий захист.'
        },
        pillar_women: {
          title: 'Посилення жінок',
          body: 'Розвиток лідерства, економічних можливостей і спеціалізованого простору «Хаб» для безпечної комунікації та навчання.'
        },
        pillar_child: {
          title: 'Підтримка й розвиток дітей',
          body: 'Психологічна адаптація, соціалізація та особлива увага до дітей з особливими освітніми потребами.'
        }
      },
      stories: {
        tag: 'Реальні історії',
        headline: 'Історії людей, не кейси для сайту',
        philosophy: 'Люди, а не кейси - це не слоган, а наш спосіб працювати з підтримкою й розповідями.',
        subtitle: 'Ми змінюємо імена й деталі, але зберігаємо форму допомоги - так чесно перед донором і безопасно для людини.',
        read_more: 'Читати далі',
        read_less: 'Згорнути',
        p1_name: 'Олена, учасниця програми',
        p1_a: 'Я приїхала всередині війни без «своїх стін» й без порадника. Спочатку було соромно навіть питати дорогу до лікаря.',
        p1_b: 'У хабі мені без черги підказали, як записатися до психолога державної лінії, а паралельно запросили до кола жінок, що збирається щотижня.',
        p1_help: 'Фонд дав три речі: живий простір без оцінювання, два юридичні супроводи щодо аліментів і пакунок гігієни, бо гроші пішли на оренду.',
        p2_name: 'Марія, кураторка волонтерів',
        p2_a: 'Наші активістки вигорають через постійний «режим тривожності» - хотілося місце, де можна просто перевести подих.',
        p2_b: 'I CAN дав ноутбук бухгалтеру, аптечку і шаблон графіка чергування. Мобільний психолог приїхав із нами тричі - це було видно очима громади.',
        p2_help: 'Ми тримаємо волонтерський чат уже 14 місяців без «вігоньок»: фонд платить символічну доплату локальній координаторці через прозору угоду.',
        p3_name: 'Юлія, партнерка-юристка',
        p3_a: 'На консультаціях ми бачимо: жінку лякає не закон - а відсутність супроводу. Одна фраза «ми запишемо разом» вже заспокоює.',
        p3_help: 'Спільно зібрали 12 модулів простою мовою про захист від насильства під час переїзду - і роздали партнерам у п’яти містах уздовж нашого маршруту.'
      },
      mission: {
        tag: 'Про I CAN',
        title: 'Історія, місія й цінності',
        lead: 'Ми там, де найскладніше - поруч із громадами на межі',
        body1:
          'Благодійна організація I CAN заснована у 2023 році в Харкові; ми допомагаємо тим, хто найбільше постраждав від війни - через психосоціальну, освітню й гуманітарну підтримку жінок і дітей у Харківській області.',
        body2:
          'Ми будуємо стійкість там, де вона потрібна найбільше - у невеликих містах і селах, куди рідко доходить системна допомога.',
        mission_heading: 'Місія',
        body_mission: 'Допомагати людям у складних обставинах подолати наслідки втрат і насильства; зміцнювати жіноче лідерство й самоорганізацію через психосоціальну, освітню та гуманітарну підтримку, яка залишається доступною там, де система ще не встигає.',
        values_heading: 'Цінності',
        val_trust_title: 'Довіра',
        val_trust_desc: 'будуємо стосунки на передбачуваності, чесності й підтримці без засудження.',
        val_safety_title: 'Безпека',
        val_safety_desc: 'піклуємося про фізичну й психоемоційну безпеку людей і команди; нуль толерантності до насильства.',
        val_respect_title: 'Повага',
        val_respect_desc: 'визнаємо гідність і автономію, слухаємо по-справжньому й дотримуємося особистих меж.',
        val_solidarity_title: 'Солідарність',
        val_solidarity_desc: 'тримаємо одна одну в кризі - мережа взаємодопомоги без змагання «хто старанніший».',
        val_responsibility_title: 'Відповідальність',
        val_responsibility_desc: 'публічна звітність, етичні стандарти роботи та відповідь перед людьми, які нам довірилися.',
        quote: '«Коли поруч є люди без засудження, легше дихати навіть у найважчі тижні» - зворотний зв’язок учасниць програм I CAN.',
        cta_donate: 'Підтримати місію'
      },
      strategy: {
        headline: 'Стратегія розвитку',
        intro:
          'Ми хочемо, щоб підтримка залишалась доступною - не випадково, а стабільно. Щоб жінки в прифронтових громадах знали: звернутись по допомогу - це не привілей, а можливість, яка поруч. У найближчі роки плануємо:',
        carousel_prev: 'Попередній слайд',
        carousel_next: 'Наступний слайд',
        photo_alt:
          'Учасниці та учасник навчального заходу I CAN Women Foundation за столом: бейдж «АЙ КЕН», зошит і вода на столі.',
        s1_title: 'Розширити сталий доступ до підтримки',
        s1_body:
          'закріпити роботу хабів і мобільних бригад, щоб допомога була передбачуваною та надійною, а не лише від випадку до випадку.',
        s2_title: 'Посилити роботу з психічним здоров’ям',
        s2_body:
          'запровадити нові практики, зокрема TRE-терапію, збільшити кількість фахівців і просторів відновлення.',
        s3_title: 'Підтримати жінок, які доглядають за іншими',
        s3_body:
          'мам, які виховують дітей з інвалідністю, жінок, що втратили близьких, і тих, хто тривалий час не мав змоги подбати про себе.',
        s4_title: 'Зміцнити партнерства',
        s4_body:
          'розвивати співпрацю з міжнародними й локальними організаціями, громадами та донорами - із прозорою звітністю та спільними програмами.',
        s5_title: 'Посилити просвітницькі напрями',
        s5_body:
          'масштабувати заходи з профілактики насильства й підтримки жіночого лідерства в прифронтових громадах.'
      },
      team: {
        tag: 'Команда',
        headline: 'Команда',
        subtitle: 'Люди, які координують програми та підтримку громад.',
        m1_name: 'Юлія Лісова',
        m1_role: 'Голова фонду',
        m2_name: 'Ірина Черкашина',
        m2_role: 'Психолог',
        m3_name: 'Максим Терехов',
        m3_role: 'Координатор програм / проєктний менеджер',
        m4_name: 'Наталія Коротя',
        m4_role: 'Психолог',
        m5_name: 'Ірина Подвальна',
        m5_role: 'Психолог',
        m6_name: 'Ірина Макушина',
        m6_role: 'SMM-менеджер',
        m7_name: 'Крістіна Максименко',
        m7_role: 'Амбасадор фонду'
      },
      teamMembers: [
        { photo: 'images/team-yuliia-lisova.png', nameKey: 'team.m1_name', roleKey: 'team.m1_role' },
        { photo: 'images/team-iryna-cherkashyna.png', nameKey: 'team.m2_name', roleKey: 'team.m2_role' },
        { photo: 'images/team-maksym-terekhov.png', nameKey: 'team.m3_name', roleKey: 'team.m3_role' },
        { photo: 'images/team-nataliia-korotia.png', nameKey: 'team.m4_name', roleKey: 'team.m4_role' },
        { photo: 'images/team-iryna-podvalna.png', nameKey: 'team.m5_name', roleKey: 'team.m5_role' },
        { photo: 'images/team-iryna-makushyna.png', nameKey: 'team.m6_name', roleKey: 'team.m6_role' },
        { photo: 'images/team-kristina-maksymenko.png', nameKey: 'team.m7_name', roleKey: 'team.m7_role' }
      ],
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
        headline:  'Ключові проєкти',
        subheading: 'Чотири ініціативи підтримки громад',
        p1_tag:   'Інтегрована допомога',
        p1_title: '«Добрі руки»',
        p1_desc:
          'Комплексна психосоціальна та адресна соціальна допомога на Харківщині: індивідуальні та групові формати, матеріальна підтримка й супровід у зверненнях до служб - для родин після втрат, насильства й примусового переміщення.',
        p2_tag:   'Ментальне здоров’я',
        p2_title: 'Психологічна підтримка',
        p2_desc:
          'Подолання наслідків травми війни та відновлення опорності: сесії з психологами, групи підтримки, простір хабу та активності для зміцнення соціальних зв’язків у громадах уздовж лінії зіткнення й після деокупації.',
        p3_tag:   'Пряма солідарність',
        p3_title: '«Від людини до людини»',
        p3_desc:
          'Благодійні збори й події прямої солідарності: кошти, подарунки та увага для дітей із вразливих родин - щоб повернути відчуття турботи й святковості навіть під час війни.',
        p4_tag:   'Жіноче лідерство й відновлення',
        p4_title: 'Проєкт «Форум Сила Харків’янок»',
        p4_desc:
          'Це ініціатива, спрямована на посилення ролі жінок у процесах відновлення, соціальної згуртованості та розвитку громад Харківської області в умовах війни. Форум об’єднує активісток, представниць громадських організацій, місцевої влади, освітнього сектору, бізнесу та міжнародних партнерів для спільного обговорення викликів, з якими стикаються жінки у прифронтовому регіоні, а також пошуку практичних рішень і можливостей для співпраці.'
      },
      donate: {
        headline:          'Ваша підтримка відкриває жінкам доступ до турботи й спільноти',
        subheading:        'Не «донат як кнопка» - а їжа, терапія, право на тишу для тих, хто тягне родину в прифронтових селах Харківщини.',
        emotional:         'Жодна гривня не йде на маркетинг - тільки виїзди, хаби й супровід волонтерів, яким теж потрібне пальне та страховки.',
        impact_200:       '200 ₴ - один шанс поговорити з психологом без черги',
        impact_500:       '500 ₴ - гідний гігієнічний набір для жінки й дитини',
        impact_1000:      '1000 ₴ - юридичний супровід + оформлення заяви',
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
        error_amount:      'Мінімальна сума - 10 (у вибраній валюті)',
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
        headline: 'Наші донори та партнери'
      },
      faq: {
        headline: 'Поширені запитання',
        lead:
          'Можливо, у вас вже є питання? Ми зібрали відповіді на найважливіші. Якщо не знайдете потрібного - пишіть нам, ми завжди поруч, щоб допомогти.',
        cta: 'Задати запитання',
        q1: 'Як стати партнером фонду?',
        a1:
          'Напишіть нам на електронну пошту або в Telegram - коротко опишіть організацію, сферу діяльності та ідею співпраці. Координаторка програм зв’яжеться, щоб узгодити формат: проєкт, гуманітарний напрям, експертиза чи інший варіант.',
        q2: 'Які можливості для партнерства ви пропонуєте?',
        a2:
          'Ми відкриті до спільних грантових заявок, польових програм, навчань для команд, інформаційних кампаній і локальних ініціатив у громадах Харківщини. Конкретний формат залежить від потреб громад і ваших компетенцій.',
        q3: 'Чи є вимоги до потенційних партнерів?',
        a3:
          'Важливі прозорість, дотримання етики роботи з вразливими групами, готовність до публічної звітності там, де це передбачено угодою, та реалістичні зобов’язання щодо обсягів і термінів.',
        q4: 'Чи є можливість стати ексклюзивним партнером у певній сфері?',
        a4:
          'За погодженням сторін можлива фокусна співпраця в окремій тематиці (наприклад, ментальне здоров’я чи юридичний супровід) без ущемлення інших партнерів - умови обговорюємо індивідуально.',
        q5: 'Як фонд підтримує своїх партнерів?',
        a5:
          'Надаємо методичні матеріали, координацію з польовою командою, підсвічування партнерства у звітах і, де доречно, у комунікаціях, а також зворотний зв’язок після ключових етапів проєкту.'
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
        ben3_body:   'Раз на місяць - відкриті тренінги з польової етики без зайвого «корпоративного глянцю».',
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
        registration:      'БО «БФ «АЙ КЕН»» · Код ЄДРПОУ 45404369 · Зареєстровано в Україні',
        rights:            '© 2023-2026 I CAN. Всі права захищені.'
      }
    },

    en: {
      a11y: { skip_main: 'Skip to main content' },
      nav: {
        about:        'About us',
        directions:   'Areas of work',
        reporting:    'Reporting',
        impact:       'In numbers',
        programs:     'Areas of work',
        reports:      'Reports',
        stories:      'Stories',
        team:         'Team',
        projects:     'Projects',
        partners:     'Partners',
        contact:      'Contact',
        donate_outline: 'Support the foundation'
      },
      hero: {
        brand_lockup: 'I CAN',
        headline:    'Standing with women and children when war changes everything',
        subheading:  'Psychological care, legal support and humanitarian help in Kharkiv Oblast communities - close by, grounded in dignity.',
        cta_support: 'Support the foundation',
        cta_join:    'Join the community',
        cta_get_help:'Get help',
        cta_learn:   'Learn more about our programmes',
        cta_community:'Join our community',
        quote:       '“This community helped me feel less alone” - participant in a support circle.',
      },
      impact: {
        section_tag:   'Impact by numbers',
        title:         'Our impact',
        subtitle:      'Quarterly KPIs shared with municipalities, donors and the women steering local hubs.',
        pillar_women:       'Families receiving holistic accompaniment',
        pillar_consults:    'Individual psycholegal counselling sessions delivered',
        pillar_programs:    'Community trainings, resilience circles & prevention clinics',
        pillar_partners:    'Partner organisations in joint programming'
      },
      reports: {
        section_tag: 'Documents',
        headline:   'Activity reports',
        subtitle:   'Official materials for partners, donors and communities. Annual reports are available to view and download.',
        r2025:       'Annual report 2025',
        r2024:       'Annual report 2024',
        r2023:       'Annual report 2023',
        download:    'Download PDF'
      },
      programs: {
        section_tag: 'Areas of work',
        headline:   'How We Help',
        subheading: 'Three pillars of comprehensive support',
        pillar_support: {
          title: 'Comprehensive Support & Protection',
          body: 'Professional psychosocial support, including confidential assistance for survivors of gender-based violence (GBV), alongside legal protection.'
        },
        pillar_women: {
          title: 'Women’s Empowerment',
          body: 'Developing leadership, economic capacity and a specialised Hub space for secure communication and training.'
        },
        pillar_child: {
          title: 'Child Support & Development',
          body: 'Psychological adaptation and socialisation, with particular attention to children with special educational needs.'
        }
      },
      stories: {
        tag: 'Real voices',
        headline: 'People, not portfolio testimonials',
        philosophy: 'People, not cases - this is how we hold stories, data and dignity together.',
        subtitle: 'We change names and trim details to protect privacy while showing what shifts after support lands.',
        read_more: 'Read more',
        read_less: 'Show less',
        p1_name: 'Olena, programme participant',
        p1_a: 'Displacement takes more than a roof - it quietly erases your circle. I was ashamed to even ask how to find a therapist.',
        p1_b: 'The hub invited me to a listening circle, then walked me through two legal consults about child support while kids played in the corner.',
        p1_help: 'I CAN gave three grounded gifts: a shame-free room, paperwork help and dignity kits during the emptiest paycheck week.',
        p2_name: 'Mariya, volunteer lead',
        p2_a: 'Local activists were burning out from constant alert mode yet still feeding entire streets.',
        p2_b: 'I CAN financed the first rent month, coached us on safeguarding and brought mobile therapy teams three times alongside us.',
        p2_help: 'Our volunteer roster stayed above 40 people thanks to stipends routed transparently through the foundation.',
        p3_name: 'Yuliia, partner jurist',
        p3_a: 'People fear stigma more than statutes. Saying «we\'ll draft this together» calms quicker than brochures.',
        p3_help: 'We packaged 12 plain-language protections for women on the move and shipped them via I CAN vans to five county seats.'
      },
      mission: {
        tag: 'About I CAN',
        title: 'Our history, mission and values',
        lead: 'We are where it is hardest - beside communities on the front line',
        body1:
          'I CAN is a charitable organisation founded in Kharkiv in 2023. We support those most affected by the war - through psychosocial, educational and humanitarian assistance to women and children across Kharkiv region.',
        body2:
          'We build resilience where it is needed most - in small towns and villages that rarely receive systematic support.',
        mission_heading: 'Mission',
        body_mission: 'We help people in difficult circumstances overcome the consequences of loss and violence; we strengthen women’s leadership and self-organisation through psychosocial, educational and humanitarian support that remains reachable where formal systems are still catching up.',
        values_heading: 'Values',
        val_trust_title: 'Trust',
        val_trust_desc: 'relationships built on predictability, honesty and support free from judgment.',
        val_safety_title: 'Safety',
        val_safety_desc: 'physical and psychosocial safety for participants and our team; zero tolerance for violence.',
        val_respect_title: 'Respect',
        val_respect_desc: 'we honour dignity and agency, listen with care and maintain clear personal boundaries.',
        val_solidarity_title: 'Solidarity',
        val_solidarity_desc: 'we hold each other through crisis-a mutual-aid network without competing over “who helps more”.',
        val_responsibility_title: 'Responsibility',
        val_responsibility_desc: 'public reporting, ethical practice and accountability to the people who place their trust in us.',
        quote: '“When someone stands beside you without judgment, it becomes easier to breathe-even in the hardest weeks.” - feedback from I CAN programme participants.',
        cta_donate: 'Support our mission'
      },
      strategy: {
        headline: 'Development strategy',
        intro:
          'We want support to remain reachable-not by chance, but steadily. So that women in frontline communities know that asking for help is not a privilege, but an option that is close by. In the coming years we plan to:',
        carousel_prev: 'Previous slide',
        carousel_next: 'Next slide',
        photo_alt:
          'I CAN Women Foundation workshop: participants at a table with an I CAN name badge, notebook and water bottle.',
        s1_title: 'Expand reliable access to support',
        s1_body:
          'strengthen hubs and mobile brigades so assistance is predictable and dependable-not only from one-off visits.',
        s2_title: 'Deepen mental health work',
        s2_body:
          'introduce new practices including TRE therapy, grow the number of specialists and safe recovery spaces.',
        s3_title: 'Support women who care for others',
        s3_body:
          'mothers raising children with disabilities, women who have lost loved ones, and those who have long had no chance to care for themselves.',
        s4_title: 'Strengthen partnerships',
        s4_body:
          'develop cooperation with international and local organisations, communities and donors-with transparent reporting and joint programmes.',
        s5_title: 'Scale awareness-raising work',
        s5_body:
          'grow activities on violence prevention and women’s leadership in frontline municipalities.'
      },
      team: {
        tag: 'Team',
        headline: 'Our team',
        subtitle: 'The people coordinating programmes and community support.',
        m1_name: 'Yuliia Lisova',
        m1_role: 'Head of the foundation',
        m2_name: 'Iryna Cherkashyna',
        m2_role: 'Psychologist',
        m3_name: 'Maksym Terekhov',
        m3_role: 'Program coordinator / project manager',
        m4_name: 'Nataliia Korotia',
        m4_role: 'Psychologist',
        m5_name: 'Iryna Podvalna',
        m5_role: 'Psychologist',
        m6_name: 'Iryna Makushyna',
        m6_role: 'SMM manager',
        m7_name: 'Kristina Maksymenko',
        m7_role: 'Foundation ambassador'
      },
      teamMembers: [
        { photo: 'images/team-yuliia-lisova.png', nameKey: 'team.m1_name', roleKey: 'team.m1_role' },
        { photo: 'images/team-iryna-cherkashyna.png', nameKey: 'team.m2_name', roleKey: 'team.m2_role' },
        { photo: 'images/team-maksym-terekhov.png', nameKey: 'team.m3_name', roleKey: 'team.m3_role' },
        { photo: 'images/team-nataliia-korotia.png', nameKey: 'team.m4_name', roleKey: 'team.m4_role' },
        { photo: 'images/team-iryna-podvalna.png', nameKey: 'team.m5_name', roleKey: 'team.m5_role' },
        { photo: 'images/team-iryna-makushyna.png', nameKey: 'team.m6_name', roleKey: 'team.m6_role' },
        { photo: 'images/team-kristina-maksymenko.png', nameKey: 'team.m7_name', roleKey: 'team.m7_role' }
      ],
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
        subheading: 'Four initiatives standing with communities',
        p1_tag:   'Integrated assistance',
        p1_title: 'Good Hands',
        p1_desc:
          'Integrated psychosocial and targeted social assistance in Kharkiv region-individual and group formats, material aid and help navigating public services for families after loss, violence and displacement.',
        p2_tag:   'Mental health',
        p2_title: 'Psychological support',
        p2_desc:
          'Addressing the impact of war trauma and rebuilding resilience: sessions with psychologists, support groups, hub space and activities that strengthen social ties along the front line and in de-occupied areas.',
        p3_tag:   'Direct solidarity',
        p3_title: 'From Person to Person',
        p3_desc:
          'Solidarity fundraising and events where people support people-resources, gifts and attention for children in vulnerable families, bringing back a sense of care and celebration even in wartime.',
        p4_tag:   'Women’s leadership & recovery',
        p4_title: 'Project «Forum Syla Kharkivyanok»',
        p4_desc:
          'An initiative to strengthen the role of women in recovery, social cohesion and community development in Kharkiv Oblast during the war. The Forum brings together activists, representatives of civil society, local government, education, business and international partners to discuss the challenges women face in the near-frontline region and to seek practical solutions and opportunities for cooperation.'
      },
      donate: {
        headline:          'Your support helps women access care and community',
        subheading:        'No lifestyle-brand gloss - fuel for counsellors, vans and quiet rooms in Kharkiv border communities.',
        emotional:         'Every hryvnia skips billboards; it pays stipends, fuel and insurance for humans carrying boxes and stories.',
        impact_200:       '200 UAH - one counseling hour when public queues fail',
        impact_500:       '500 UAH - hygiene + warmth bundle for a mother and child',
        impact_1000:      '1,000 UAH - legal drafting with follow-up texting',
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
        headline: 'Our donors and partners'
      },
      faq: {
        headline: 'Frequently asked questions',
        lead:
          'Maybe you already have questions? Here are answers to the most important ones. If you don’t find what you need, write to us - we’re always here to help.',
        cta: 'Ask a question',
        q1: 'How can we become a foundation partner?',
        a1:
          'Email us or message on Telegram with a short outline of your organisation, field of work and cooperation idea. Our programmes lead will get in touch to agree the format - project, humanitarian track, expertise or another model.',
        q2: 'What partnership opportunities do you offer?',
        a2:
          'We are open to joint grant applications, field programmes, team trainings, awareness campaigns and local initiatives in Kharkiv region communities. The exact format depends on community needs and your strengths.',
        q3: 'Are there requirements for potential partners?',
        a3:
          'We look for transparency, ethical practice with vulnerable groups, willingness for public reporting where the agreement requires it, and realistic commitments on scope and timelines.',
        q4: 'Can we become an exclusive partner in a specific area?',
        a4:
          'By mutual agreement, focused cooperation on one theme (e.g. mental health or legal support) is possible without disadvantaging other partners - terms are discussed case by case.',
        q5: 'How does the foundation support its partners?',
        a5:
          'We provide guidance materials, coordination with the field team, recognition in reports and, where appropriate, in communications, plus feedback after key project milestones.'
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
        ben3_body:   'Monthly open trainings on safeguarding and trauma-informed presence - zero startup theatrics.',
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
        registration:      'Charitable organisation «BF «I CAN»» · EDRPOU 45404369 · Registered in Ukraine',
        rights:            '© 2023-2026 I CAN. All rights reserved.'
      }
    }
  };

  /* ================================================================
     PARTNER DATA  (PRD §6.3.1)
     Edit this array to add / remove partner logos.
     ================================================================ */
  const partners = [
    {
      id: 'oxfam',
      name: 'OXFAM',
      logo: 'images/partner-oxfam.png',
      url: 'https://www.oxfam.org/',
      category: 'international'
    },
    {
      id: 'r2p',
      name: 'Право на захист',
      logo: 'images/partner-pravo-na-zakhyst.png',
      url: 'https://r2p.org.ua/',
      category: 'international'
    },
    {
      id: 'yednannia',
      name: 'Єднання',
      logo: 'images/partner-ednannia.png',
      url: 'https://ednannia.ua/',
      category: 'national'
    },
    {
      id: 'lwf',
      name: 'LWF (The Lutheran World Federation)',
      logo: 'images/partner-lwf.png',
      url: 'https://www.lutheranworld.org/',
      category: 'international'
    },
    {
      id: 'cafi',
      name: 'CAFI II',
      logo: 'images/partner-cafi.png',
      url: 'https://www.facebook.com/p/CAFI-%D0%97%D0%B0%D0%BA%D0%BB%D0%B8%D0%BA-%D0%B4%D0%BE-%D0%B4%D1%96%D1%97-%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D0%B5-%D1%80%D0%B5%D0%B0%D0%B3%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F-61555848638948/',
      category: 'international'
    },
    {
      id: 'kharkivshchyna1325',
      name: 'Коаліція «Харківщина 1325»',
      logo: 'images/partner-kharkivshchyna-1325.png',
      url: 'https://www.facebook.com/kharkiv1325/?locale=uk_UA',
      category: 'national'
    }
  ];

  /** Slides: two text cards, photo placeholder, three text cards (carousel of 6). */
  const STRATEGY_SLIDES_LAYOUT = [
    { type: 'text', icon: 'network', titleKey: 'strategy.s1_title', bodyKey: 'strategy.s1_body' },
    { type: 'text', icon: 'mental', titleKey: 'strategy.s2_title', bodyKey: 'strategy.s2_body' },
    { type: 'photo', src: 'images/strategy-carousel-seminar.png' },
    { type: 'text', icon: 'care', titleKey: 'strategy.s3_title', bodyKey: 'strategy.s3_body' },
    { type: 'text', icon: 'partners', titleKey: 'strategy.s4_title', bodyKey: 'strategy.s4_body' },
    { type: 'text', icon: 'education', titleKey: 'strategy.s5_title', bodyKey: 'strategy.s5_body' }
  ];

  /* ================================================================
     IMPACT STATS  (PRD §8.3)
     Update values quarterly.
     ================================================================ */
  const impactStats = [
    { value: 2300, suffix: '+', key: 'pillar_women' },
    { value: 840, suffix: '+', key: 'pillar_consults' },
    { value: 140, suffix: '+', key: 'pillar_programs' },
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
    renderTeam();
    renderStrategyCarousel();
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

  /* ================================================================
     RENDER TEAM
     ================================================================ */
  function renderTeam() {
    const grid = document.getElementById('team-grid');
    if (!grid) return;

    const list = translations[currentLang]?.teamMembers;
    grid.replaceChildren();

    if (!Array.isArray(list) || !list.length) return;

    list.forEach(m => {
      const article = document.createElement('article');
      article.className = 'team-card';

      const photoWrap = document.createElement('div');
      photoWrap.className = 'team-card__photo';

      const img = document.createElement('img');
      img.src = m.photo || 'images/placeholder.jpg';
      img.alt = '';
      img.setAttribute('aria-hidden', 'true');
      img.width = 224;
      img.height = 224;
      img.loading = 'lazy';
      img.decoding = 'async';
      photoWrap.append(img);

      const nameEl = document.createElement('h3');
      nameEl.className = 'team-card__name';
      nameEl.setAttribute('data-i18n', m.nameKey);
      nameEl.textContent = getNestedValue(translations[currentLang], m.nameKey) || '';

      const roleEl = document.createElement('p');
      roleEl.className = 'team-card__role';
      roleEl.setAttribute('data-i18n', m.roleKey);
      roleEl.textContent = getNestedValue(translations[currentLang], m.roleKey) || '';

      article.append(photoWrap, nameEl, roleEl);
      grid.append(article);
    });
  }

  /* ================================================================
     STRATEGY CAROUSEL
     ================================================================ */
  function strategyIconSvg(kind) {
    const a = 'aria-hidden="true"';
    const s =
      'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
    switch (kind) {
      case 'network':
        return `<svg ${s} ${a}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`;
      case 'mental':
        return `<svg ${s} ${a}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`;
      case 'care':
        return `<svg ${s} ${a}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
      case 'partners':
        return `<svg ${s} ${a}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
      case 'education':
        return `<svg ${s} ${a}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`;
      default:
        return `<svg ${s} ${a}><circle cx="12" cy="12" r="10"/></svg>`;
    }
  }

  function refreshStrategyCarouselNav() {
    const root = document.querySelector('[data-strategy-carousel]');
    const vp = root?.querySelector('.strategy-carousel__viewport');
    const prev = root?.querySelector('[data-strategy-prev]');
    const next = root?.querySelector('[data-strategy-next]');
    if (!vp || !prev || !next) return;
    const max = vp.scrollWidth - vp.clientWidth - 2;
    if (max <= 0) {
      prev.disabled = true;
      next.disabled = true;
      return;
    }
    prev.disabled = vp.scrollLeft <= 2;
    next.disabled = vp.scrollLeft >= max - 2;
  }

  function renderStrategyCarousel() {
    const track = document.getElementById('strategy-carousel-track');
    if (!track) return;
    const bundle = translations[currentLang];
    if (!bundle?.strategy) return;

    track.replaceChildren();
    const total = STRATEGY_SLIDES_LAYOUT.length;

    STRATEGY_SLIDES_LAYOUT.forEach((spec, i) => {
      if (spec.type === 'photo') {
        const art = document.createElement('article');
        art.className = 'strategy-slide strategy-slide--photo';
        const img = document.createElement('img');
        img.src = spec.src || 'images/placeholder.jpg';
        img.alt = bundle.strategy.photo_alt ?? '';
        img.loading = 'lazy';
        img.decoding = 'async';
        art.append(img);
        track.append(art);
        return;
      }

      const art = document.createElement('article');
      art.className = 'strategy-slide strategy-slide--text';

      const top = document.createElement('div');
      top.className = 'strategy-slide__top';

      const iconWrap = document.createElement('div');
      iconWrap.className = 'strategy-slide__icon';
      iconWrap.innerHTML = strategyIconSvg(spec.icon);

      const idx = document.createElement('span');
      idx.className = 'strategy-slide__index';
      idx.textContent = `${String(i + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;

      top.append(iconWrap, idx);

      const h3 = document.createElement('h3');
      h3.className = 'strategy-slide__title';
      h3.textContent = getNestedValue(bundle, spec.titleKey) || '';

      const p = document.createElement('p');
      p.className = 'strategy-slide__body';
      p.textContent = getNestedValue(bundle, spec.bodyKey) || '';

      art.append(top, h3, p);
      track.append(art);
    });

    const vp = document.querySelector('[data-strategy-carousel] .strategy-carousel__viewport');
    if (vp) vp.scrollLeft = 0;
    window.requestAnimationFrame(refreshStrategyCarouselNav);
  }

  function initStrategyCarousel() {
    const root = document.querySelector('[data-strategy-carousel]');
    if (!root || root.dataset.strategyBound === '1') return;
    root.dataset.strategyBound = '1';

    const vp = root.querySelector('.strategy-carousel__viewport');
    const prev = root.querySelector('[data-strategy-prev]');
    const next = root.querySelector('[data-strategy-next]');
    if (!vp || !prev || !next) return;

    function slideDistance() {
      const slide = vp.querySelector('.strategy-slide');
      if (!slide) return 376;
      const tr = vp.querySelector('.strategy-carousel__track');
      const gapRaw = tr ? parseFloat(getComputedStyle(tr).gap || '0') : 16;
      const gap = Number.isFinite(gapRaw) ? gapRaw : 16;
      return slide.getBoundingClientRect().width + gap;
    }

    prev.addEventListener('click', () => {
      vp.scrollBy({ left: -slideDistance(), behavior: 'smooth' });
    });
    next.addEventListener('click', () => {
      vp.scrollBy({ left: slideDistance(), behavior: 'smooth' });
    });

    vp.addEventListener('scroll', () => window.requestAnimationFrame(refreshStrategyCarouselNav), { passive: true });
    window.addEventListener('resize', refreshStrategyCarouselNav, { passive: true });

    refreshStrategyCarouselNav();
  }

  /* ================================================================
     FAQ ACCORDION
     ================================================================ */
  function initFaqAccordion() {
    const root = document.querySelector('[data-faq-accordion]');
    if (!root || root.dataset.faqBound === '1') return;
    root.dataset.faqBound = '1';

    root.querySelectorAll('[data-faq-trigger]').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        if (!item) return;
        const willOpen = !item.classList.contains('is-open');

        root.querySelectorAll('.faq-item.is-open').forEach(el => {
          el.classList.remove('is-open');
          el.querySelector('[data-faq-trigger]')?.setAttribute('aria-expanded', 'false');
        });

        if (willOpen) {
          item.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
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

  /** Soft cursor-follow glow + subtle hero visual parallax (respects motion & pointer prefs). */
  function initPremiumChrome() {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (reduced || !finePointer) return;

    const glow = document.getElementById('cursor-glow');
    if (glow) {
      document.body.classList.add('is-premium-cursor');
      glow.classList.add('is-active');
      let tx = window.innerWidth / 2;
      let ty = window.innerHeight / 2;
      let bx = tx;
      let by = ty;
      window.addEventListener(
        'pointermove',
        e => {
          tx = e.clientX;
          ty = e.clientY;
        },
        { passive: true }
      );
      function tickGlow() {
        bx += (tx - bx) * 0.07;
        by += (ty - by) * 0.07;
        glow.style.transform = `translate(${bx}px, ${by}px)`;
        requestAnimationFrame(tickGlow);
      }
      tickGlow();
    }

    const heroVis = document.querySelector('[data-parallax-visual]');
    const inner = heroVis?.querySelector('.hero__visual-inner');
    if (heroVis && inner) {
      window.addEventListener(
        'pointermove',
        e => {
          const r = heroVis.getBoundingClientRect();
          const cx = r.left + r.width / 2;
          const cy = r.top + r.height / 2;
          const nx = (e.clientX - cx) / Math.max(window.innerWidth * 0.5, 1);
          const ny = (e.clientY - cy) / Math.max(window.innerHeight * 0.5, 1);
          inner.style.transform = `translate(${nx * 12}px, ${ny * 10}px)`;
        },
        { passive: true }
      );
    }
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
    const backdrop = mobileMenu?.querySelector('.mobile-menu__backdrop');
    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('.mobile-menu__panel a[href]') : [];
    let menuPrevFocus = null;

    function openMenu() {
      menuPrevFocus = document.activeElement;
      mobileMenu.classList.add('is-open');
      mobileMenu.setAttribute('aria-hidden', 'false');
      hamburgerBtn.classList.add('is-open');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() =>
        mobileMenu
          .querySelector('.mobile-menu__panel')
          ?.querySelector('a[href], button:not([disabled])')
          ?.focus()
      );
    }

    function closeMenu() {
      mobileMenu.classList.remove('is-open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      hamburgerBtn.classList.remove('is-open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      if (menuPrevFocus && typeof menuPrevFocus.focus === 'function') menuPrevFocus.focus();
      menuPrevFocus = null;
    }

    if (!mobileMenu || !hamburgerBtn) return;

    hamburgerBtn.addEventListener('click', openMenu);
    if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMenu);
    if (backdrop) backdrop.addEventListener('click', closeMenu);

    mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

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

  /** Single source of truth for social URLs (CONFIG.social + telegramBot fallback). */
  function applySocialHrefsFromConfig() {
    document.querySelectorAll('[data-social]').forEach(el => {
      const key = el.getAttribute('data-social');
      if (!key) return;
      const url = CONFIG.social[key] || (key === 'telegram' ? CONFIG.telegramBot : '');
      if (url) el.setAttribute('href', url);
    });
  }

  /* ================================================================
     INITIALISATION SEQUENCE  (PRD §13.C)
     ================================================================ */
  document.addEventListener('DOMContentLoaded', () => {
    applySocialHrefsFromConfig();
    syncImpactCountersFromConfig();

    renderPartners();

    setLanguage(localStorage.getItem('ican_lang') || CONFIG.defaultLang);

    initStrategyCarousel();
    initFaqAccordion();

    initScrollAnimations();
    initCounterAnimations();
    initActiveNavTracking();

    initMobileMenu();
    initDonationModule();
    initLanguageToggle();
    initStoryExpandButtons();

    initHeaderScroll();
    initPremiumChrome();
  });

})();
