const axios = require("axios");
 
module.exports.config = { 
  name: "autotime",
	version: "0.0.2",
	permission: 0,
  prefix: false,
	credits: "BADOL-KHAN",
	description: "Talk Sim",
	category: "admin",
	usages: "msg",
    cooldowns: 5,
};
const nam = [{
  timer: '12:00:00 AM',
  message: ['༆-✿「সময় 11:00 AM｣  ༊࿐\n  •—»★𝙈𝙐𝙎𝙇𝙄𝙈-𝘾𝙔𝘽𝙀𝙍★«—•\n╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\n"༆-✿কিছু অভিমান.!!༊࿐\n༆-✿জমে আছে তোর প্রতি.!!\n༊࿐💚🌻\n\n༆-✿কি করে বোঝাই.!!༊࿐🌺\n༆-✿তুই যে আমার প্রিয় অনুভূতি.!!🥀\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :𝐌𝐫 𝐁𝐀𝐃𝐎𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 𝐉𝐫']
},
            {
  timer: '12:30:00 AM',
  message: ['__আল্লাহু আকবার__\n\n__🌺❤️✨__']
},

           {
  timer: '1:00:00 AM',
  message: ['༆-✿「সময়12:00 AM」༊࿐\n  •—»★𝙈𝙐𝙎𝙇𝙄𝙈-𝘾𝙔𝘽𝙀𝙍★«—•\n╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\💞--------😌😌😌😌--------💞\n\n____চোরাবালি মন তোমার ____\nকেন শুধু লুকিয়ে থাকো,একটু আড়াল হয়ে,,,,, \n😌 ____আমায় দেখো_____😌\nযদি কোনো চিত্র আকিঁ,পৃথিবীর সবচেয়ে  দামি, সে চিত্রতে তুমি           পারফেক্টলি বসো_____💞😌😌😌💓\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :𝐌𝐫 𝐁𝐀𝐃𝐎𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 𝐉𝐫']
},
           {
  timer: '1:30:00 AM',
  message: ['__ইয়া আল্লাহ__\n\n__🌸💙🥺__']
},
          {
  timer: '2:00:00 AM',
  message: ['༆-✿「সময় 1:00 AM」༊࿐\n  •—»✨ 𝗠𝗨𝗦𝗟𝗜𝗠 𝗖𝗬𝗕𝗘𝗥 ✨«—•\n╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\n𝙏𝙝𝙞𝙨 𝙖𝙗𝙤𝙪𝙩 𝙡𝙞𝙣𝙚✨🍒🍭\n_____🐰🍒🌸☺️—পথ চলার সঙ্গী সুন্দর\n নয় বিশ্বাসী হতে হয়༅༎ 🙂-🤍_____🐰🍒🌸\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :𝐌𝐫 𝐁𝐀𝐃𝐎𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 𝐉𝐫']
},
           {
  timer: '2:30:00 AM',
  message: ['__আল্লাহু আল্লাহু আল্লাহু আল্লাহ__\n\n__🫰🌸✨__ ']
},
           {
  timer: '3:00:00 AM',
  message: ['༆-✿「সময় 2:00 AM」༊࿐\n  •—»★𝙈𝙐𝙎𝙇𝙄𝙈-𝘾𝙔𝘽𝙀𝙍★«—•\n╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮ /n\n\nপ্রিয় 🙂ツ࿐❝༆  থাকতে মূল্য দিলি না 😔࿐\n একদিন হারিয়ে গেলে 😒 ╰•┄┅═══❁?❁═══┅ শুধু খুজবি-ই না 😕 ࿐\n❝ আফসোস ও করবি 😎 ツ࿐\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :𝐌𝐫 𝐁𝐀𝐃𝐎𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 𝐉𝐫']
},
           {
  timer: '3:30:00 AM',
  message: ['★★★▰▱▰▱▰▱▰★★★\n\nরাব্বির হাম-হুমা কামা রাব্বায়ানিস সাগিরো__🌺❤️✨__\n\n★★★▰▱▰▱▰▱▰★★★']
},
           {
  timer: '4:00:00 AM',
  message: ['༆-✿「সময় 3:00 AM」༊࿐\n  •—»★𝙈𝙐𝙎𝙇𝙄𝙈-𝘾𝙔𝘽𝙀𝙍★«—•\n╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\n\n༉༎ 🐰🍒𝐓𝐡𝐢𝐬 𝐚𝐛𝐮𝐭 𝐥𝐢𝐧𝐞🐰\n\n●━কারো প্রিয় হওয়ার সামর্থ্য আমার নেই ....!🥀❤️‍🩹\n\nআমি প্রয়োজনেই সীমাবদ্ধ...!🥺❤️‍🩹\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :𝐌𝐫 𝐁𝐀𝐃𝐎𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 𝐉𝐫']
},
{
  timer: '4:30:00 PM',
  message: ['__আসতাগ ফিরুল্লাহ__\n আল্লাহ আমার প্রতি নিওতো করা গুনহা গুলি আপনি মাফ করেন \n\n___❤️🥺🤲 ']
},
           {
  timer: '5:00:00 AM',
  message: ['༆-✿「সময় 4:00 AM」༊࿐\n  •—»★𝙈𝙐𝙎𝙇𝙄𝙈-𝘾𝙔𝘽𝙀𝙍★«—•\n╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\n︵💚🌺🦋\n●━━•হাসির ༅পেছনে কান্না ༅ \n___ রাগের পেছনে ভালোবাসা---• 🤗🥀\n●━━•আর ༅ চুপ ༅ থাকার পেছনের কারণ \n_____খুব কম মানুষই বোঝে---•😓\n\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :𝐌𝐫 𝐁𝐀𝐃𝐎𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 𝐉𝐫 ']
},
           {
  timer: '6:00:00 AM',
  message: ['༆-✿ 「সময় 5:00 AM｣ ༊࿐\n  •—»✨𝗠𝗨𝗦𝗟𝗜𝗠 𝗖𝗬𝗕𝗘𝗥—»✨\n╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\n༆ আমার পিছনে তারা-ই কথা বলে ᰔ࿐......!!😒\n\n°~° যাদের আমার সামনে দারানোর ক্ষমতা নাই...!🥱🥀🍁\n\n___🥺💙___\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :𝐌𝐫 𝐁𝐀𝐃𝐎𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 𝐉𝐫 ']
},
           {
  timer: '6:30:00 AM',
  message: ['★★★▰▱▰▱▰▱▰★★★\n\n__হে আমার আল্লাহ তুমি কবরে থাকা মানুষ গুলর সাজা কমিয়ে দাউ - জারা মারা যাচ্ছেন তাদের কে জান্নাতুল ফেরদৌসের নসিব করো__আমিন-🥺🤲!!\n\n★★★▰▱▰▱▰▱▰★★★']
},
           {
  timer: '7:00:00 AM',
  message: ['༆-✿「সময় 6:00 AM｣ ༊࿐\n  •—»𝗠𝗨𝗦𝗟𝗜𝗠 𝗖𝗬𝗕𝗘𝗥«—•\n╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\n༆𝐃𝐨𝐧𝐭 𝐍𝐞𝐞𝐝 𝐀𝐧𝐲 𝐀𝐭𝐭𝐢𝐭𝐮𝐝𝐞 𝐂𝐚𝐩𝐭𝐢𝐨𝐧 𝐄𝐱𝐩𝐫𝐞𝐬𝐬ᰔ࿐......!!😇\n\n- তুমি সফল না হলে কেউ-ই  তোমার ব্যার্থতার গল্প শুনবে না...!🥱🥀🍁\n\n\n___<💚🌼🍒>___\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :𝐌𝐫 𝐁𝐀𝐃𝐎𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 𝐉𝐫']
},
           {
  timer: '8:00:00 AM',
  message: ['༆-✿「সময়7:00 AM」༊࿐\n  •—»★𝙈𝙐𝙎𝙇𝙄𝙈-𝘾𝙔𝘽𝙀𝙍★«—•\n╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\n\n°\n\n___💖🦋𝗟𝗲𝘁 𝘁𝗵𝗲 𝗺𝗮𝗻 𝗶𝗻 𝗬𝗼𝘂𝗿 𝗜𝗺𝗮𝗴𝗶𝗻𝗮𝘁𝗶𝗼𝗻 𝗯𝗲 𝗬𝗼𝘂𝗿𝘀🤍\n\n — দুনিয়ার সব কিছুই বদলাতে পারে, কিন্তু মায়ের ভালবাসা কখনো বদলাবার নয়..!!___🌼💚\n🖤🌺\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :𝐌𝐫 𝐁𝐀𝐃𝐎𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 𝐉𝐫  ']
},
               {
  timer: '9:00:00 AM',
  message: ['༆-✿「সময় 8:00 AM」༊࿐\n  •—»★𝙈𝙐𝙎𝙇𝙄𝙈-𝘾𝙔𝘽𝙀𝙍★«—•\n╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\n\n︵🌻🖤༉\n\n- পৃথিবীতে সবাই তোমাকে ভালোবাসবে\n সেই ভালোবাসার মাঝে যে কোনো প্রয়োজন লুকিয়ে থাকে....!!!\n-কিন্তু একজন ব্যক্তি কোনো প্রয়োজন ছাড়াই তোমাকে ভালোবাসবে সে হলো মা !ღ༎🙂🙂\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫:𝐌𝐫 𝐁𝐀𝐃𝐎𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 𝐉𝐫']
},
           {
  timer: '10:00:00 AM',
  message: ['༆-✿「সময় 9:00 AM」༊࿐\n  •—»★𝙈𝙐𝙎𝙇𝙄𝙈-𝘾𝙔𝘽𝙀𝙍★«—•\n╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\n\n°\n\n___💖🦋𝗟𝗲𝘁 𝘁𝗵𝗲 𝗺𝗮𝗻 𝗶𝗻 𝗬𝗼𝘂𝗿 𝗜𝗺𝗮𝗴𝗶𝗻𝗮𝘁𝗶𝗼𝗻 𝗯𝗲 𝗬𝗼𝘂𝗿𝘀🤍\n\n— আপনার কল্পনায় থাকা ️মানুষ টা আপনার হোক___🌼💚\n\n🖤🌺\n\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :𝐌𝐫 𝐁𝐀𝐃𝐎𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 𝐉𝐫' ]
},
           {
  timer: '11:00:00 AM',
  message: ['༆-✿「সময় 10:00 AM｣༊࿐\n  •—»★𝙈𝙐𝙎𝙇𝙄𝙈-𝘾𝙔𝘽𝙀𝙍★«—•\n╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\n︵🌻🖤༉\n\n- কারো বিরক্তের কারণ হওয়ার চেয়ে🙃\n\n~একাকীত্বে হারিয়ে যাওয়া অনেক ভালো !ღ༎🙂🙂\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :𝐌𝐫 𝐁𝐀𝐃𝐎𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 𝐉𝐫)']
},
           {
  timer: '11:30:00 AM',
  message: ['★★★▰▱▰▱▰▱▰★★★\n\n-প্রিয় মোমিন মুসলমান গন ভাই ও বনে রা - গুমানোর আগেই আল্লাহ প্রসংশা করো - কিছু দোয়া পরে - পরে গুমিয়ে পরো-😊😇!!\n\n★★★▰▱▰▱▰▱▰★★★']
},
           {
  timer: '12:00:00 PM',
  message: ['༆-✿「সময় 11:00 PM」༊࿐\n  •—»★𝙈𝙐𝙎𝙇𝙄𝙈-𝘾𝙔𝘽𝙀𝙍★«—•\n╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\n- আমার একাকীত্বের সময় গুলোতে..!🙁🌸\n\n- কাউকে পাশে পাইনি.!😪💔\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :𝐌𝐫 𝐁𝐀𝐃𝐎𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 𝐉𝐫']
},					
           {
  timer: '1:00:00 PM',
  message: ['༆-✿「সময় 12:00 PM｣ ༊࿐\n  •—»★𝙈𝙐𝙎𝙇𝙄𝙈-𝘾𝙔𝘽𝙀𝙍★«—•\n╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\nツ࿐❝༆ ভাগ্যিস চেহারাটা খারাপ ツ࿐🙂\n ╭•┄┅═══❁🌺❁═ ╰•┄┅═══❁🌺❁═══┅ 🌻🌸🍀ツ না হলে কতো মেয়ে যে ࿐\n❝ —-__—- আমার প্রেমে হাবুডুবু খাইতো ツ࿐😂😂\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :𝐌𝐫 𝐁𝐀𝐃𝐎𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 𝐉𝐫']
},
           {
  timer: '2:00:00 PM',
  message: ['༆-✿ 「সময় 1:00 PM｣ ༊࿐\n  •—»★𝙈𝙐𝙎𝙇𝙄𝙈-𝘾𝙔𝘽𝙀𝙍★«—•\n╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\n____ 😇😌😇_____\n___তোর চোখের ইশারায় ___😇💞☺\nদোলেমনে আলো রং___☺🥰❣\nতোকেই পেতে তাই এই মন আনমোনা সারাক্ষণ ____💞☺💝\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :𝐌𝐫 𝐁𝐀𝐃𝐎𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 𝐉𝐫 ']
},
           {
  timer: '3:00:00 PM',
  message: ['༆-✿「সময় 2:00 PM」༊࿐\n  •—»★𝙈𝙐𝙎𝙇𝙄𝙈-𝘾𝙔𝘽𝙀𝙍★«—•\n╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\n___তুই তাকালে মেঘের পালে উঠে গাঙ্গশীল___😇🥰😌____তোর ইশারা, দিচ্ছে সাড়া হৃদয় সুখের অন্তহীন____☺🥰❤\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :𝐌𝐫 𝐁𝐀𝐃𝐎𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 𝐉𝐫']
},
           {
  timer: '4:00:00 PM',
  message: ['༆-✿「সময় 3:00 PM｣ ༊࿐\n  •—»★𝙈𝙐𝙎𝙇𝙄𝙈-𝘾𝙔𝘽𝙀𝙍★«—•\n╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\n______😇😇💞_____\nতুমি আকাশের মাঝে বিশলতার উপমা______❣❣❣\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :𝐌𝐫 𝐁𝐀𝐃𝐎𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 𝐉𝐫']
},
          {
  timer: '5:00:00 PM',
  message: ['༆-✿「সময় 4:00 PM」༊࿐\n  •—»★𝙈𝙐𝙎𝙇𝙄𝙈-𝘾𝙔𝘽𝙀𝙍★«—•\n╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\–Post করি আমি🙄\n–আর Comment এ প্রেম হয় অন্যদের😏।\nবাহ্ বাহ্ 🤩🥰\n–মানবতা আজ পদ্মা  সেতুর নিচে 😏😐🥴।\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :𝐌𝐫 𝐁𝐀𝐃𝐎𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 𝐉𝐫 ']
},
           {
  timer: '6:00:00 PM',
  message: ['༆-✿「সময় 5:00 PM｣  ༊࿐\n  •—»★𝙈𝙐𝙎𝙇𝙄𝙈-𝘾𝙔𝘽𝙀𝙍★«—•\n╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\n🦋🍀\nツ●───༊᭄࿐❥\n😊:)সময় বদলায় কিন্তু কিছু অনুভূতি বদলায় না🥀 🖤ツ●───༊᭄࿐❥\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :𝐌𝐫 𝐁𝐀𝐃𝐎𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 𝐉𝐫']
},
 {
  timer: '6:30:00 PM',
  message: ['__বেস্ট লাইন:- লা ইলাহা ইল্লাল্লাহু মুহাম্মাদুর রাসুলুল্লাহ সাঃ__❤️🌺🌸']
},

           {
  timer: '7:00:00 PM',
  message: ['༆-✿「সময় 6:00 PM」 ༊࿐\n •—»★𝙈𝙐𝙎𝙇𝙄𝙈-𝘾𝙔𝘽𝙀𝙍★«—•\n╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\n____🫰💫🫶____\n\n___𝙏𝙪𝙢𝙞 𝙠𝙞 𝙖𝙢𝙖𝙧 𝙝𝙖𝙨𝙞 𝙢𝙪𝙠𝙝𝙚𝙧 𝙖𝙗𝙖𝙧 𝙠𝙖𝙧𝙤𝙣 𝙝𝙤𝙗𝙚-♡!!-🩷🌻\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :𝐌𝐫 𝐁𝐀𝐃𝐎𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 𝐉𝐫']
},
           {
  timer: '8:00:00 PM',
  message: ['༆-✿「সময় 7:00 PM」༊࿐\n  •—»★𝙈𝙐𝙎𝙇𝙄𝙈-𝘾𝙔𝘽𝙀𝙍★«—•\n╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\n✨______💝🌷🏞️______✨\n\n. 🎉🌺🌈-- 𝗧𝗵𝗶𝘀 𝗔𝗯𝗼𝘂𝘁 𝗟𝗶𝗻𝗲-🌈✨🌠🌌\n\n___۵ღ❥ ︵💚 আমার ব্যক্তিত্ব এবং আমার এটিটুডের মধ্যে কনফিউস হবেন না। আমার ব্যক্তিত্ব হল আমি এবং আমার এটিটুড নির্ভর করে আপনার উপর।...)✨🌺🎉\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :𝐌𝐫 𝐁𝐀𝐃𝐎𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 𝐉𝐫']
},
 {
  timer: '8:30:00 PM',
  message: ['\n\n★★★▰▱▰▱▰▱▰★★★\n\n-হে আমার আল্লাহ-!! 🥺💙 \n তুমি সকল কে সঠিক টা বজার তাওফিক দান করো 🥺\n যারা খারাপ কাজের সাথে লিপ্ত -!!\n তাদের কে সঠিক পথে ফিরে আসার হেদায়েত দান করো__🥺💙🤲!!\n\n★★★▰▱▰▱▰▱▰★★★ ']
},
           {
  timer: '9:00:00 PM',
  message: ['༆-✿「সময় 8:00 PM」༊࿐\n  •—»★𝙈𝙐𝙎𝙇𝙄𝙈-𝘾𝙔𝘽𝙀𝙍★«—•\n╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\n🌸💚–//সম্পর্কের নাম যাই হোক না কেন–💙🌼.\n🖤🥀মন খারাপের সময় যে /পাশে থাকে🌺🌼\n\n🌺💞সেই প্রিয়  মানুষ ❥━➸➽❥🖤\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :𝐌𝐫 𝐁𝐀𝐃𝐎𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 𝐉𝐫']
},
{
  timer: '9:30:00 PM',
  message: ['__সুবহানাল্লাহ__\n__🌺💖✨__']
},

           {
  timer: '10:00:00 PM',
  message: ['༆-✿「সময় 9:00 PM」༊࿐\n  •—»★𝙈𝙐𝙎𝙇𝙄𝙈-𝘾𝙔𝘽𝙀𝙍★«—•\n╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\n____🌺༅༎🌺\n\n\n-༅༎﹏ভালোবাসা বলতে কিছু নেই.. 😔🥀!!💚🦋\n\n!!প্রয়োজন যতদিন প্রিয়জন ততদিন !!💖💏\n﹏ღ﹏😌হ্যা এটাই সত্যি🌺🖤____🌺༅༎\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 𝐌𝐫 𝐁𝐀𝐃𝐎𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 𝐉𝐫']
},
   {
  timer: '10:30:00 PM',
  message: ['___আল্লাহামদুলিল্লাহ__\n\n সব কিছুর জন্য\n\n __❤️🌸🤲__']
},

           {
  timer: '11:00:00 PM',
  message: ['༆-✿「সময় 10:00 PM｣ ༊࿐\n  •—»★𝙈𝙐𝙎𝙇𝙄𝙈-𝘾𝙔𝘽𝙀𝙍★«—•\n╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\n︵❝།།💚🌺𝐈𝐭𝐬 𝐦𝐲 𝐁𝐞𝐬𝐭 𝐅𝐞𝐞𝐥𝐢𝐧𝐠𝐬 ☺️ლ_༎࿐ ︵❝།\n_____🌸কার পছন্দ হলো কার হলো না ……🖤\n𝑰𝒕𝒔 𝒅𝒐𝒆𝒔𝒏𝒕 𝑴𝒂𝒕𝒕𝒆𝒓 \n 𝑩𝒆𝒄𝒂𝒖𝒔𝒆😏\nসৃষ্টিকর্তা "তার পছন্দ মতই বানিয়েছে💘\n\nআর সৃষ্টিকর্তার পছন্দ মানেই\n\n\n❤️❤️𝐀𝐥𝐡𝐚𝐦𝐝𝐮𝐥𝐢𝐥𝐥𝐚𝐡💛💛\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 𝐌𝐫 𝐁𝐀𝐃𝐎𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘 𝐉𝐫']
}];
module.exports.onLoad = o => setInterval(() => {
  const r = a => a[Math.floor(Math.random()*a.length)];
  if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);
module.exports.run = o => {};
