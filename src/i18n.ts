export type Locale = 'en' | 'ar';

export const translations = {
  en: {
    meta: {
      title: 'King of Sweets · Syrian Sweets in Newcastle',
      description:
        'Handmade Syrian sweets on Westgate Road, Newcastle — kunafa, baqlawa and cheese sweets made fresh daily since 2004.',
    },
    nav: {
      story: 'Our Story',
      menu: 'Menu',
      order: 'Order Online',
      reviews: 'Reviews',
      visit: 'Visit Us',
      cta: 'Come visit us',
    },
    hero: {
      tagline:
        "Handmade Syrian sweets, baked with a craft whose journey began in 2004 — proudly the North‑East's only home of real kunafa, baqlawa and cheese sweets. Made in Newcastle, from the heart.",
      visitCta: 'Come visit us',
      orderCta: 'Order Online',
      imgAlt: 'Trays of kunafa and baqlawa on the King of Sweets counter',
    },
    ribbon: {
      big: 'Welcome',
      mid: 'To The',
      small: 'King Of Sweets',
      other: 'مرحبا بكم في\nملك الحلويات',
    },
    story: {
      kicker: 'Our Story',
      title: 'From Damascus to Westgate Road',
      damascusKicker: 'Damascus',
      damascusTitle: 'Where it all began',
      damascusP1:
        "I came to the UK with nothing but a love for the sweets I grew up on in Syria. I spent years learning the trade, working in other people's kitchens, before I had the confidence — and the respect of my community — to open my own shop.",
      damascusP2:
        'Since 2004, every tray of kunafa and every layer of baqlawa has been made the way I learned it: patiently, by hand, with the same recipes passed down in my family.',
      damascusAlt: 'The owner as a young man in a sweets kitchen in Damascus',
      newcastleKicker: 'Newcastle',
      newcastleTitle: 'Home, today',
      newcastleP1:
        'Newcastle is my home now, and this shop is my way of bringing a piece of Syria to the people here — made fresh, every day, on Westgate Road.',
      newcastleQuote: '"Sweets made from the heart, for the hearts of Newcastle."',
      newcastleAlt: 'The owner standing proudly in the King of Sweets shop in Newcastle',
    },
    menu: {
      kicker: 'Our Menu',
      title: 'A taste of what awaits',
      sub: 'A few of our best‑loved favourites — the full menu, made fresh daily, is best enjoyed by ordering online or visiting us in person.',
      allergyNote:
        'Allergy info is a guide only — please ask in‑store or via the ordering app for full ingredient details.',
      items: {
        kunafa:
          'Golden semolina pastry layered with soft cheese, soaked in rose-scented syrup — our most-loved sweet.',
        cheese:
          'Delicate cheese rolls in light sugar syrup, filled with clotted cream — a Syrian classic done right.',
        baqlawa: 'Crisp filo layers with hand-chopped pistachios, finished in honey syrup.',
      } as Record<string, string>,
      tags: {
        nuts: 'Contains Nuts',
        dairy: 'Dairy',
        veg: 'Vegetarian',
        vegan: 'Vegan',
        halal: 'Halal',
      } as Record<string, string>,
    },
    counter: {
      alt: 'Baklava rolls and a pyramid of pistachio baklava on the shop counter',
      caption: 'Fresh from the counter, every day',
    },
    order: {
      kicker: 'Order Online',
      title: "Can't make it in? We'll bring it to you",
      sub: 'Order King of Sweets straight to your door through your favourite delivery app.',
      uber: 'Order on Uber Eats',
      deliveroo: 'Order on Deliveroo',
      justEat: 'Order on Just Eat',
    },
    reviews: {
      kicker: 'Reviews',
      title: 'What Newcastle is saying',
      source: 'Google review',
      cta: 'Read all our reviews on Google',
    },
    visit: {
      kicker: 'Visit Us',
      title: "The North‑East's home of Syrian sweets",
      addressLabel: 'Address',
      hoursLabel: 'Opening hours',
      phoneLabel: 'Phone',
      directions: 'Come visit us — Get Directions',
      storefrontAlt: 'The King of Sweets storefront on Westgate Road at night',
      hours: [
        { days: 'Monday – Saturday', time: '11:00am – 10:00pm' },
        { days: 'Sunday', time: '11:00am – 9:00pm' },
      ],
    },
    footer: {
      sub: 'ملك الحلويات · Newcastle',
      line: '404 Westgate Rd, Newcastle upon Tyne NE4 5NH · Open daily from 11am',
    },
  },
  ar: {
    meta: {
      title: 'ملك الحلويات · حلويات سورية في نيوكاسل',
      description:
        'حلويات سورية مصنوعة يدوياً في طريق ويستغيت، نيوكاسل — كنافة وبقلاوة وحلاوة الجبن طازجة يومياً منذ عام 2004.',
    },
    nav: {
      story: 'قصتنا',
      menu: 'القائمة',
      order: 'اطلب أونلاين',
      reviews: 'آراء الزبائن',
      visit: 'زورونا',
      cta: 'تفضلوا بزيارتنا',
    },
    hero: {
      tagline:
        'حلويات سورية مصنوعة يدوياً، بحرفة بدأت رحلتها عام 2004 — وبكل فخر، البيت الوحيد للكنافة والبقلاوة وحلاوة الجبن الأصلية في شمال شرق إنجلترا. صُنعت في نيوكاسل، من القلب.',
      visitCta: 'تفضلوا بزيارتنا',
      orderCta: 'اطلب أونلاين',
      imgAlt: 'صواني الكنافة والبقلاوة على واجهة ملك الحلويات',
    },
    ribbon: {
      big: 'مرحبا بكم',
      mid: 'في',
      small: 'ملك الحلويات',
      other: 'Welcome to the\nKing of Sweets',
    },
    story: {
      kicker: 'قصتنا',
      title: 'من دمشق إلى طريق ويستغيت',
      damascusKicker: 'دمشق',
      damascusTitle: 'حيث بدأ كل شيء',
      damascusP1:
        'جئت إلى بريطانيا ولا أملك سوى حبي للحلويات التي كبرت عليها في سوريا. قضيت سنوات أتعلّم المهنة وأعمل في مطابخ الآخرين، حتى امتلكت الثقة — واحترام أهلي وناسي — لأفتتح محلي الخاص.',
      damascusP2:
        'منذ عام 2004، كل صينية كنافة وكل طبقة بقلاوة تُصنع كما تعلّمتها: بصبر، وبيدي، وبنفس الوصفات المتوارثة في عائلتي.',
      damascusAlt: 'صاحب المحل شاباً في مطبخ حلويات في دمشق',
      newcastleKicker: 'نيوكاسل',
      newcastleTitle: 'بيتنا اليوم',
      newcastleP1:
        'نيوكاسل هي بيتي الآن، وهذا المحل هو طريقتي لأحمل قطعة من سوريا إلى الناس هنا — طازجة كل يوم، في طريق ويستغيت.',
      newcastleQuote: '«حلويات مصنوعة من القلب، لقلوب نيوكاسل.»',
      newcastleAlt: 'صاحب المحل واقفاً بفخر داخل محل ملك الحلويات في نيوكاسل',
    },
    menu: {
      kicker: 'قائمتنا',
      title: 'لمحة عمّا ينتظركم',
      sub: 'بعض من أحب أصنافنا إلى الزبائن — القائمة الكاملة، الطازجة يومياً، تتذوقونها على أصولها بالطلب أونلاين أو بزيارتنا شخصياً.',
      allergyNote:
        'معلومات الحساسية إرشادية فقط — يرجى السؤال في المحل أو عبر تطبيق الطلب عن تفاصيل المكونات الكاملة.',
      items: {
        kunafa:
          'عجينة سميد ذهبية بطبقات من الجبن الطري، مسقية بقطر معطّر بماء الورد — أحب حلوياتنا إلى القلوب.',
        cheese:
          'لفائف جبن رقيقة بقطر خفيف، محشوة بالقشطة — كلاسيكية سورية على أصولها.',
        baqlawa: 'طبقات رقاقات مقرمشة مع فستق حلبي مفروم يدوياً، مسقية بقطر العسل.',
      } as Record<string, string>,
      tags: {
        nuts: 'يحتوي مكسرات',
        dairy: 'ألبان',
        veg: 'نباتي',
        vegan: 'نباتي صرف',
        halal: 'حلال',
      } as Record<string, string>,
    },
    counter: {
      alt: 'لفائف البقلاوة وهرم من البقلاوة بالفستق على واجهة المحل',
      caption: 'طازج من الواجهة، كل يوم',
    },
    order: {
      kicker: 'اطلب أونلاين',
      title: 'ما تقدر تمرّ علينا؟ نوصلها لبابك',
      sub: 'اطلب من ملك الحلويات حتى باب بيتك عبر تطبيق التوصيل المفضل لديك.',
      uber: 'اطلب عبر Uber Eats',
      deliveroo: 'اطلب عبر Deliveroo',
      justEat: 'اطلب عبر Just Eat',
    },
    reviews: {
      kicker: 'آراء الزبائن',
      title: 'ماذا تقول نيوكاسل عنا',
      source: 'تقييم غوغل',
      cta: 'اقرأوا كل تقييماتنا على غوغل',
    },
    visit: {
      kicker: 'زورونا',
      title: 'بيت الحلويات السورية في شمال شرق إنجلترا',
      addressLabel: 'العنوان',
      hoursLabel: 'ساعات العمل',
      phoneLabel: 'الهاتف',
      directions: 'تفضلوا بزيارتنا — الاتجاهات',
      storefrontAlt: 'واجهة محل ملك الحلويات في طريق ويستغيت ليلاً',
      hours: [
        { days: 'الإثنين – السبت', time: '11:00 صباحاً – 10:00 مساءً' },
        { days: 'الأحد', time: '11:00 صباحاً – 9:00 مساءً' },
      ],
    },
    footer: {
      sub: 'King of Sweets · نيوكاسل',
      line: '404 طريق ويستغيت، نيوكاسل أبون تاين NE4 5NH · يومياً من 11 صباحاً',
    },
  },
} as const satisfies Record<Locale, unknown>;

export type Translation = (typeof translations)['en'];

export function useT(locale: string | undefined): Translation {
  return (locale === 'ar' ? translations.ar : translations.en) as Translation;
}

export function localePath(locale: string | undefined, hash = ''): string {
  return (locale === 'ar' ? '/ar/' : '/') + hash;
}
