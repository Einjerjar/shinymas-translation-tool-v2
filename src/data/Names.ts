const names: NameMapT[] = [
  {
    name: 'はづき',
    trans: 'Hazuki'
  },
  {
    name: '店員',
    trans: 'Salesperson'
  },
  {
    name: 'めぐるの友達',
    trans: 'Meguru\'s Friend'
  },
  {
    name: 'めぐる＆恋鐘＆咲耶',
    trans: 'Meguru&Kogane&Sakuya'
  },
  {
    name: 'めぐる',
    trans: 'Meguru'
  },
  {
    name: 'カメラマン',
    trans: 'Cameraman'
  },
  {
    name: 'スタイリスト',
    trans: 'Stylist'
  },
  {
    name: 'スタッフＡ',
    trans: 'Staff A'
  },
  {
    name: 'スタッフＢ',
    trans: 'Staff B'
  },
  {
    name: 'スタッフ',
    trans: 'Staff'
  },
  {
    name: 'ステージ主催者',
    trans: 'Stage Organizer'
  },
  {
    name: 'テロップ',
    trans: 'Teleprompter'
  },
  {
    name: 'ファン１',
    trans: 'Fan 1'
  },
  {
    name: 'ファン２',
    trans: 'Fan 2'
  },
  {
    name: 'ファン3',
    trans: 'Fan 3'
  },
  {
    name: 'ファンA',
    trans: 'Fan A'
  },
  {
    name: 'ファンB',
    trans: 'Fan B'
  },
  {
    name: 'プロデューサー',
    trans: 'Producer'
  },
  {
    name: '一同',
    trans: 'Everyone'
  },
  {
    name: '今週ボーカルレッスンがしたいです',
    trans: 'I want to do a vocal lesson this week'
  },
  {
    name: '凛世',
    trans: 'Rinze'
  },
  {
    name: '千雪＆プロデューサー',
    trans: 'Chiyuki&Producer'
  },
  {
    name: '千雪',
    trans: 'Chiyuki'
  },
  {
    name: '周囲の女の子たち',
    trans: 'Surrounding Girls'
  },
  {
    name: '咲耶＆結華＆霧子',
    trans: 'Sakuya&Yuika&Kiriko'
  },
  {
    name: '咲耶＆結華',
    trans: 'Sakuya&Yuika'
  },
  {
    name: '咲耶',
    trans: 'Sakuya'
  },
  {
    name: '夏葉',
    trans: 'Natsuha'
  },
  {
    name: '女の子',
    trans: 'Girl'
  },
  {
    name: '幽霊？',
    trans: 'Ghost?'
  },
  {
    name: '恋鐘＆咲耶＆果穂',
    trans: 'Kogane&Sakuya&Kaho'
  },
  {
    name: '恋鐘＆咲耶＆結華',
    trans: 'Kogane&Sakuya&Yuika'
  },
  {
    name: '恋鐘＆咲耶',
    trans: 'Kogane&Sakuya'
  },
  {
    name: '恋鐘＆摩美々＆咲耶',
    trans: 'Kogane&Mamimi&Sakuya'
  },
  {
    name: '恋鐘＆摩美々＆結華',
    trans: 'Kogane&Mamimi&Yuika'
  },
  {
    name: '恋鐘＆摩美々＆霧子',
    trans: 'Kogane&Mamimi&Kiriko'
  },
  {
    name: '恋鐘＆摩美々',
    trans: 'Kogane&Mamimi'
  },
  {
    name: '恋鐘＆樹里',
    trans: 'Kogane&Juri'
  },
  {
    name: '恋鐘＆甘奈',
    trans: 'Kogane&Amana'
  },
  {
    name: '恋鐘＆霧子',
    trans: 'Kogane&Kiriko'
  },
  {
    name: '恋鐘',
    trans: 'Kogane'
  },
  {
    name: '摩美々＆咲耶＆結華',
    trans: 'Mamimi&Sakuya&Yuika'
  },
  {
    name: '摩美々＆結華',
    trans: 'Mamimi&Yuika'
  },
  {
    name: '摩美々＆霧子',
    trans: 'Mamimi&Kiriko'
  },
  {
    name: '摩美々',
    trans: 'Mamimi'
  },
  {
    name: '撮影スタッフ',
    trans: 'Photoshoot Staff'
  },
  {
    name: '智代子＆夏葉',
    trans: 'Chiyoko&Natsuha'
  },
  {
    name: '智代子＆樹里＆夏葉',
    trans: 'Choco&Juri&Natsuha'
  },
  {
    name: '智代子＆樹里',
    trans: 'Chiyoko&Juri'
  },
  {
    name: '智代子',
    trans: 'Chiyoko'
  },
  {
    name: '智代子&凛世',
    trans: 'Chiyoko&Rinze'
  },
  {
    name: '果穂＆樹里＆凛世',
    trans: 'Kaho&Juri&Rinze'
  },
  {
    name: '果穂＆凛世',
    trans: 'Kaho&Rinze'
  },
  {
    name: '果穂＆夏葉＆千雪',
    trans: 'Kaho&Natsuha&Chiyuki'
  },
  {
    name: '果穂＆夏葉',
    trans: 'Kaho&Natsuha'
  },
  {
    name: '果穂＆智代子＆夏葉',
    trans: 'Kaho&Choco&Natsuha'
  },
  {
    name: '果穂＆智代子＆樹里',
    trans: 'Kaho&Choco&Juri'
  },
  {
    name: '果穂＆智代子',
    trans: 'Kaho&Chiyoko'
  },
  {
    name: '果穂＆樹里＆夏葉',
    trans: 'Kaho&Juri&Natsuha'
  },
  {
    name: '果穂＆樹里',
    trans: 'Kaho&Juri'
  },
  {
    name: '智代子＆凛世',
    trans: 'Chiyoko&Rinze'
  },
  {
    name: '果穂＆甜花',
    trans: 'Kaho&Tenka'
  },
  {
    name: '果穂',
    trans: 'Kaho'
  },
  {
    name: '樹里・夏葉',
    trans: 'Juri·Natsuha'
  },
  {
    name: '樹里＆凛世＆夏葉',
    trans: 'Juri&Rinze&Natsuha'
  },
  {
    name: '樹里＆凛世',
    trans: 'Juri&Rinze'
  },
  {
    name: '樹里＆智代子',
    trans: 'Juri&Chiyoko'
  },
  {
    name: '樹里',
    trans: 'Juri'
  },
  {
    name: '灯織＆めぐる',
    trans: 'Hiori&Meguru'
  },
  {
    name: '灯織',
    trans: 'Hiori'
  },
  {
    name: '甘奈・甜花',
    trans: 'Amana·Tenka'
  },
  {
    name: '甘奈＆千雪',
    trans: 'Amana&Chiyuki'
  },
  {
    name: '甘奈＆甜花',
    trans: 'Amana&Tenka'
  },
  {
    name: '甜花＆千雪',
    trans: 'Tenka&Chiyuki'
  },
  {
    name: '甘奈',
    trans: 'Amana'
  },
  {
    name: '甜花',
    trans: 'Tenka'
  },
  {
    name: '男性',
    trans: 'Male'
  },
  {
    name: '番組スタッフ',
    trans: 'TV Staff'
  },
  {
    name: '監督',
    trans: 'Supervisor'
  },
  {
    name: '真乃＆めぐる',
    trans: 'Mano&Meguru'
  },
  {
    name: '真乃＆恋鐘＆結華',
    trans: 'Mano&Kogane&Yuika'
  },
  {
    name: '真乃＆灯織＆めぐる',
    trans: 'Mano&Hiori&Meguru'
  },
  {
    name: '真乃＆灯織',
    trans: 'Mano&Hiori'
  },
  {
    name: '真乃',
    trans: 'Mano'
  },
  {
    name: '社長',
    trans: 'President'
  },
  {
    name: '結華＆摩美々',
    trans: 'Yuika&Mamimi'
  },
  {
    name: '結華＆霧子',
    trans: 'Yuika&Kiriko'
  },
  {
    name: '結華',
    trans: 'Yuika'
  },
  {
    name: '観客',
    trans: 'Judge'
  },
  {
    name: '記者',
    trans: 'Reporter'
  },
  {
    name: '赤ちゃん',
    trans: 'Baby'
  },
  {
    name: '霧子',
    trans: 'Kiriko'
  },
  {
    name: '３、２、１──',
    trans: '3\t 2\t 1──'
  },
  {
    name: 'アイドル',
    trans: 'Idol'
  },
  {
    name: 'イベント関係者',
    trans: 'Event Staff'
  },
  {
    name: '愛依',
    trans: 'Mei'
  },
  {
    name: '通行人',
    trans: 'Passerby'
  },
  {
    name: '冬優子',
    trans: 'Fuyuko'
  },
  {
    name: 'あさひ',
    trans: 'Asahi'
  },
  {
    name: 'めぐる＆プロデューサー',
    trans: 'Meguru&Producer'
  },
  {
    name: '真乃＆プロデューサー',
    trans: 'Mano&Producer'
  },
  {
    name: '灯織＆プロデューサー',
    trans: 'Hiori&Producer'
  },
  {
    name: '凛世＆プロデューサー',
    trans: 'Rinze&Producer'
  },
  {
    name: '男性１',
    trans: 'Male 1'
  },
  {
    name: '男性２',
    trans: 'Male 2'
  },
  {
    name: '女性１',
    trans: 'Woman 1'
  },
  {
    name: '智代子＆プロデューサー',
    trans: 'Chiyoko&Producer'
  },
  {
    name: 'ナレーション',
    trans: 'Narration'
  },
  {
    name: 'スタッフ１',
    trans: 'Staff1'
  },
  {
    name: 'スタッフ２',
    trans: 'Staff2'
  },
  {
    name: 'スタッフ３',
    trans: 'Staff3'
  },
  {
    name: 'スタッフ４',
    trans: 'Staff4'
  },
  {
    name: 'クラスメイト',
    trans: 'Classmate'
  },
  {
    name: 'カホ＆ジュリ＆ナツハ',
    trans: 'Kaho&Juri&Natsuha'
  },
  {
    name: 'カホ＆ジュリ',
    trans: 'Kaho&Juri'
  },
  {
    name: 'カホ＆チヨコ＆ジュリ',
    trans: 'Kaho&Chiyoko&Juri'
  },
  {
    name: 'カホ＆チヨコ',
    trans: 'Kaho&Chiyoko'
  },
  {
    name: 'カホ＆ナツハ',
    trans: 'Kaho&Natsuha'
  },
  {
    name: 'カホ＆リンゼ＆ナツハ',
    trans: 'Kaho&Rinze&Natsuha'
  },
  {
    name: 'カホ',
    trans: 'Kaho'
  },
  {
    name: 'ジュリ＆ナツハ',
    trans: 'Juri&Natsuha'
  },
  {
    name: 'ジュリ',
    trans: 'Juri'
  },
  {
    name: 'チヨコ＆ジュリ',
    trans: 'Chiyoko&Juri'
  },
  {
    name: 'チヨコ',
    trans: 'Chiyoko'
  },
  {
    name: 'ナツハ',
    trans: 'Natsuha'
  },
  {
    name: 'リンゼ',
    trans: 'Rinze'
  },
  {
    name: 'リーダーの少女',
    trans: 'Leader Girl'
  },
  {
    name: '校長',
    trans: 'Principal'
  },
  {
    name: 'あさひ＆冬優子',
    trans: 'Asahi&Fuyuko'
  },
  {
    name: 'あさひ＆愛依',
    trans: 'Asahi&Mei'
  },
  {
    name: '冬優子＆愛依',
    trans: 'Fuyuko&Mei'
  },
  {
    name: '司会者',
    trans: 'Chairman'
  },
  {
    name: '女性の観客',
    trans: 'Female Judge'
  },
  {
    name: '男性の観客',
    trans: 'Male Judge'
  },
  {
    name: '観客１',
    trans: 'Judge 1'
  },
  {
    name: '観客２',
    trans: 'Judge 2'
  },
  {
    name: '観客３',
    trans: 'Judge 3'
  },
  {
    name: '責任者',
    trans: 'Manager'
  },
  {
    name: '白うさぎ',
    trans: 'White Rabbit'
  },
  {
    name: '恋鐘&咲耶&結華',
    trans: 'Kogane&Sakuya&Yuika'
  },
  {
    name: '結華＆霧子',
    trans: 'Yuika&Kiriko'
  },
  {
    name: 'おばあさん',
    trans: 'Grandma'
  },
  {
    name: '美容師',
    trans: 'Hairdresser'
  },
  {
    name: '同級生１＆２',
    trans: 'Classmate 1&2'
  },
  {
    name: '同級生１',
    trans: 'Classmate 1'
  },
  {
    name: '同級生２',
    trans: 'Classmate 2'
  },
  {
    name: '子どもたち',
    trans: 'Children'
  },
  {
    name: '不審な男',
    trans: 'Suspicious Man'
  },
  {
    name: '仔馬',
    trans: 'Pony'
  },
  {
    name: '果穂＆甘奈＆千雪',
    trans: 'Kaho&Amana&Chiyuki'
  },
  {
    name: '賞金稼ぎ',
    trans: 'Bounty Hunter'
  },
  {
    name: '乗務員一同',
    trans: 'Transport Crew'
  },
  {
    name: '智代子＆凛世＆夏葉',
    trans: 'Chiyoko&Rinze&Natsuha'
  },
  {
    name: '生徒会長',
    trans: 'Student Council President'
  },
  {
    name: '副会長',
    trans: 'Vice President'
  },
  {
    name: 'コーチ',
    trans: 'Coach'
  },
  {
    name: '校内放送',
    trans: 'School Broadcast'
  },
  {
    name: 'ラジオ番組',
    trans: 'Radio Program'
  },
  {
    name: '生徒',
    trans: 'Student'
  },
  {
    name: 'オニ',
    trans: 'Oni'
  },
  {
    name: 'ゲーム画面',
    trans: 'Game Screen'
  },
  {
    name: '真乃＆霧子＆甜花',
    trans: 'Mano&Kiriko&Tenka'
  },
  {
    name: '無線連絡',
    trans: 'Wireless Communication'
  },
  {
    name: '透',
    trans: 'Toru'
  },
  {
    name: '小糸',
    trans: 'Koito'
  },
  {
    name: '円香',
    trans: 'Madoka'
  },
  {
    name: '雛菜',
    trans: 'Hinana'
  },
  {
    name: '透＆円香＆小糸＆雛菜',
    trans: 'All of Noctchill'
  },
  {
    name: '円香＆プロデューサー',
    trans: 'Madoka&Producer'
  },
  {
    name: 'TV局職員',
    trans: 'TV Staff'
  },
  {
    name: 'ADふうの女性',
    trans: 'Director Woman'
  },
  {
    name: '番組ディレクター',
    trans: 'Program Director'
  },
  {
    name: '芸能人ふうの男性',
    trans: 'Celebrity Guy'
  },
  {
    name: 'モデルふうの女性',
    trans: 'Model'
  },
  {
    name: 'トレーナー',
    trans: 'Trainer'
  },
  {
    name: '女子高生',
    trans: 'Highschool Girl'
  },
  {
    name: 'コンビニ店員',
    trans: 'Sales Clerk'
  },
  {
    name: '街頭モニター',
    trans: 'Street Monitor'
  },
  {
    name: 'つけっぱなしのテレビ',
    trans: 'TV that was left on'
  },
  {
    name: 'テレビの音声',
    trans: 'Voices from the TV'
  },
  {
    name: 'メッセージ',
    trans: 'Message'
  },
  {
    name: '女の子',
    trans: 'Girl'
  },
  {
    name: '男の子',
    trans: 'Boy'
  },
  {
    name: '男の子＆女の子',
    trans: 'Both'
  },
  {
    name: '女生徒',
    trans: 'Schoolgirl'
  },
  {
    name: '主人公',
    trans: 'Protagonist'
  },
  {
    name: '作業員',
    trans: 'Worker'
  },
  {
    name: '摩美々&プロヂューサー',
    trans: 'Mamimi&Producer'
  },
  {
    name: '智代子＆樹里＆凛世',
    trans: 'Choco&Juri&Rinze'
  },
  {
    name: '少女',
    trans: 'Little Girl'
  },
  {
    name: '学生',
    trans: 'Student'
  },
  {
    name: '少女＆透',
    trans: 'Girl&Toru'
  },
  {
    name: '隣室の歌声',
    trans: 'Singer in next room'
  },
  {
    name: '撮影ディレクター',
    trans: 'Cinematographer'
  },
  {
    name: 'イベント主催者',
    trans: 'Event Organizer'
  },
  {
    name: 'アナウンス',
    trans: 'Announcer'
  },
  {
    name: '偉い人',
    trans: 'Person in charge'
  },
  {
    name: 'ファン',
    trans: 'Fans'
  },
  {
    name: '恋鐘＆結華＆霧子',
    trans: 'Kogane&Yuika&Kiriko'
  },
  {
    name: '摩美々＆咲耶',
    trans: 'Mamimi&Sakuya'
  },
  {
    name: '咲耶＆摩美々',
    trans: 'Sakuya&Mamimi'
  },
  {
    name: '透＆プロデューサー',
    trans: 'Toru&Producer'
  },
  {
    name: '撮影スタッフ１',
    trans: 'Photo Staff 1'
  },
  {
    name: '撮影スタッフ２',
    trans: 'Photo Staff 2'
  },
  {
    name: 'メイクスタッフ',
    trans: 'Makeup Artist'
  },
  {
    name: '撮影スタッフ３',
    trans: 'Photo Staff 3'
  },
  {
    name: '雑誌記者',
    trans: 'Magazine Writer'
  },
  {
    name: '誰か',
    trans: 'Someone'
  },
  {
    name: '広告マン',
    trans: 'Adperson'
  },
  {
    name: '少年',
    trans: 'Youth'
  },
  {
    name: '母親',
    trans: 'Mother'
  },
  {
    name: '衣装スタッフ',
    trans: 'Wardrobe Stylist'
  },
  {
    name: '女子高生１',
    trans: 'Highschool Girl 1'
  },
  {
    name: '女子高生２',
    trans: 'Highschool Girl 2'
  },
  {
    name: 'ウェイター',
    trans: 'Waiter'
  },
  {
    name: '関係者',
    trans: 'Event Staff'
  },
  {
    name: '円香＆小糸',
    trans: 'Madoka&Koito'
  },
  {
    name: 'ダンストレーナー',
    trans: 'Dance Trainer'
  },
  {
    name: '透＆小糸＆雛菜',
    trans: 'Toru&Koito&Hinana'
  },
  {
    name: '社会科教諭',
    trans: 'Social Studies Teacher'
  },
  {
    name: '２年の生徒たち',
    trans: '2nd Year Boys'
  },
  {
    name: 'ディレクターふうの男性',
    trans: 'Director-ish Guy'
  },
  {
    name: '番組出演者',
    trans: 'TV Actor'
  },
  {
    name: '番組ＭＣ',
    trans: 'Program MC'
  },
  {
    name: 'SNSの投稿',
    trans: 'SNS Post'
  },
  {
    name: '透＆雛菜',
    trans: 'Toru&Hinana'
  },
  {
    name: '音楽番組ディレクター',
    trans: 'Program Director'
  },
  {
    name: '透＆円香',
    trans: 'Toru&Madoka'
  },
  {
    name: '小糸＆雛菜',
    trans: 'Koito&Hinana'
  },
  {
    name: '円香＆小糸＆雛菜',
    trans: 'Madoka&Koito&Hinana'
  },
  {
    name: '会議進行役',
    trans: 'Meeting Director'
  },
  {
    name: '周囲の参加者',
    trans: 'Surrounding Participant'
  },
  {
    name: 'クマ',
    trans: 'Bear'
  },
  {
    name: 'リスナー',
    trans: 'Listener'
  },
  {
    name: '生徒２',
    trans: 'Student 2'
  },
  {
    name: '生徒１',
    trans: 'Student 1'
  },
  {
    name: '生徒１&生徒２',
    trans: 'Students 1&2'
  },
  {
    name: 'アシスタント',
    trans: 'Assistant'
  },
  {
    name: 'カメラマンの声',
    trans: 'Cameraman\'s Voice'
  },
  {
    name: 'ヘアメイク',
    trans: 'Hairdresser'
  },
  {
    name: '小さな女の子',
    trans: 'Little Girl'
  },
  {
    name: '女の子の母親',
    trans: 'Girl\'s Mother'
  },
  {
    name: '真乃のファン',
    trans: 'Fan of Mano'
  }
]

const nameMap = new Map<string, string>()
names.forEach(v => nameMap.set(v.name, v.trans))

export default nameMap
