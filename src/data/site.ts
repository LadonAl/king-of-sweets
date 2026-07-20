export const site = {
  name: 'King of Sweets',
  nameAr: 'ملك الحلويات',
  address: '404 Westgate Rd, Newcastle upon Tyne NE4 5NH',
  phone: '+441916607143',
  phoneDisplay: '0191 660 7143',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=404+Westgate+Rd+Newcastle+upon+Tyne+NE4+5NH',
  uberUrl: 'https://www.ubereats.com',
  deliverooUrl: 'https://deliveroo.co.uk',
  justEatUrl: 'https://www.just-eat.co.uk',
};

export type TagKey = 'nuts' | 'dairy' | 'veg' | 'vegan' | 'halal';

export const tagColors: Record<TagKey, { bg: string; fg: string }> = {
  nuts: { bg: 'oklch(0.93 0.05 55)', fg: 'oklch(0.4 0.1 45)' },
  dairy: { bg: 'oklch(0.93 0.03 240)', fg: 'oklch(0.4 0.08 240)' },
  veg: { bg: 'oklch(0.92 0.05 140)', fg: 'oklch(0.38 0.1 140)' },
  vegan: { bg: 'oklch(0.92 0.06 145)', fg: 'oklch(0.36 0.12 145)' },
  halal: { bg: 'oklch(0.93 0.03 300)', fg: 'oklch(0.4 0.09 300)' },
};

export const menuItems: { id: string; name: string; nameAr: string; tags: TagKey[] }[] = [
  { id: 'kunafa', name: 'Kunafa', nameAr: 'كنافة', tags: ['nuts', 'dairy', 'veg', 'halal'] },
  { id: 'cheese', name: 'Cheese Sweets', nameAr: 'حلاوة الجبن', tags: ['dairy', 'veg', 'halal'] },
  { id: 'baqlawa', name: 'Baqlawa', nameAr: 'بقلاوة', tags: ['nuts', 'dairy', 'veg', 'halal'] },
];

export const reviews = [
  {
    quote:
      'One of the only desert place in Newcastle that sells Halawet el jibn. An amazing syrian desert. Great value for money and delicious taste',
    name: 'Umair Sheikh',
  },
  {
    quote: 'The ice cream and baklava combo here is amazing, would 100% recommend.',
    name: 'Mimi',
  },
  {
    quote: 'Very fresh very bright very happy to see customer all the selection is amazing.',
    name: 'Umar Wasim',
  },
];
