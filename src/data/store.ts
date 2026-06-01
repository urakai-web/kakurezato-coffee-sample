export const storeData = {
  name: 'kakurezato coffee',
  nameEn: 'kakurezato coffee',
  catchcopy: '金沢の路地裏にある隠れ家',
  description:
    'こだわりのコーヒーと、数量限定の手作りパイが楽しめる隠れ家カフェです。\nゆっくり過ごしたい日や、金沢散策の休憩にもおすすめです。',
  address: '〒000-0000 石川県金沢市',
  addressMapQuery: 'kakurezato coffee 金沢',
  phone: '000-000-0000',
  businessHours: [
    { day: '営業時間', time: '00:00 〜 00:00', lastOrder: '00:00' },
  ],
  closedDays: '未定',
  smoking: {
    allowed: false,
    note: '全席禁煙',
  },
  parking: {
    available: false,
    spaces: 0,
    note: '',
  },
  reservation: {
    phone: '000-000-0000',
    note: '',
    onlineUrl: '',
    hours: '',
  },
  payment: [
    { name: '現金', icon: '💴' },
    { name: 'PayPay', icon: '📱' },
    { name: 'クレジットカード', icon: '💳' },
    { name: '交通系ICカード', icon: '🎫' },
  ],
  sns: {
    instagram: '',
    twitter: '',
    facebook: '',
    line: '',
  },
  news: [
    {
      date: '2026.06.01',
      tag: 'お知らせ',
      title: 'ホームページをオープンしました',
    },
    {
      date: '2026.06.01',
      tag: 'メニュー',
      title: '数量限定の手作りパイをご用意しています',
    },
  ],
  menu: [
    {
      name: 'スペシャルティコーヒー',
      description: '厳選した豆を丁寧にハンドドリップしてお届けします。',
      category: 'コーヒー',
      image: '/images/menu/menu1.jpg',
    },
    {
      name: '手作りパイ',
      description: '毎日数量限定で焼き上げる、こだわりの手作りパイです。',
      category: 'フード',
      image: '/images/menu/menu2.jpg',
    },
    {
      name: 'ケーキ',
      description: '季節の素材を使った自家製ケーキ。',
      category: 'スイーツ',
      image: '/images/menu/menu3.jpg',
    },
  ],
  gallery: [
    { label: '店内の様子', image: '/images/gallery/gallery1.jpg' },
    { label: 'テーブル席', image: '/images/gallery/gallery2.jpg' },
    { label: '店舗外観', image: '/images/gallery/gallery3.jpg' },
  ],
}
