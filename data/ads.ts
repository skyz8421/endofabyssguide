// Adsterra site 6116311, endofabyss.quest. Only this site's issued keys belong here.
export const AD_HOST='bauval.org';
export const AD_FRAME_ORIGIN='https://ads.endofabyss.quest';
export const AD_CONSENT_KEY='eoa-ads-consent';
export const AD_UNITS={
 leaderboard:{key:'27bf57fdced9137140f38e1279884ebc',width:728,height:90,document:'728x90'},
 rectangle:{key:'2972689af8de97ceea810b836152fd48',width:300,height:250,document:'300x250'},
 mobile:{key:'d550cdbd9a9bcc56fe76b34308a2668a',width:320,height:50,document:'320x50'},
 railCompact:{key:'05ef9916aec509622675dd57917b4690',width:160,height:300,document:'160x300'},
 railTall:{key:'e3dd149c0ee72b2d9729df44880bcbed',width:160,height:600,document:'160x600'},
 inline:{key:'bb3c0005a2b6b4a554f9e5a88a8d5328',width:468,height:60,document:'468x60'},
 native:{key:'2edac4672d3a8975b555c26c4936c932',width:'',height:'',document:'native'},
} as const;
export type DisplayUnit=keyof typeof AD_UNITS;
// Oct 5–11 GSC identifies these as the two routes with clicks.
export const AD_ROUTES=['/','/energy-node-door-not-opening/'];

// Popunder placement31683006 was approved but is deliberately not enabled: parent scripts can read private notes.
