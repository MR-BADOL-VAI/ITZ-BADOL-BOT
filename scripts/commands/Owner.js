 module.exports.config = {
	name: "owner",
    version: "1.0.1",
    permission: 0,
    credits: "BADOL-KHAN",
    prefix: true,
    description: "ask any thing",
    category: "admin",
    usages: "",
    cooldowns: 5,
    dependencies: {
        "openai": ""
    }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/hnX7Skc.jpeg",
        
            "https://i.imgur.com/t1eDXqW.jpeg", 
            
            "https://i.imgur.com/hnX7Skc.jpeg",

"https://i.imgur.com/t1eDXqW.jpeg",
            
            "https://i.imgur.com/hnX7Skc.jpeg"];
  
var callback = () => api.sendMessage({body:`╭•┄┅══𝙈𝘾𝙎-𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╮\n\nꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿⃟ꗥꔸআসসালামু আলাইকুমꔸꗥ⃟ꗥ̳̳̳̳̳̳̳̳̳̳̿̿̿̿̿̿̿̿̿̿\n

◢◥▂▂▂▂⭕▂▂▂▂◤◣
   ☘️আমার🌺পরিচয়🌿
◥◢▔▔▔▔⭕▔▔▔▔◣◤    


╰┈►আমি           :🌺✰𝐁𝐀𝐃𝐎𝐋^𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘★🌺↙️
╰┈►ডাক নাম     :🍀🌺বাদল↙🌺
╰┈►ধর্ম              :🍀ইসলাম🕌🌺
╰┈►বাড়ি            :🍀খুলনা জেলায়🌍☘️
╰┈►থানার নাম   :🌺পাইকগাছা থানা🏟️☘️
╰┈►গ্রামের নাম  :🍀চাঁদখালি বাজার🏞️🌺
╰┈►পেশা           :🌺নীল আকাশে গাড়ি চালাই🚜🍀
╰┈►বয়স            :🍀২৫+ চলছে✅🌺
╰┈►উচ্চতা         :🌺৫ ফুট ৬ইন্সি🚻🍀
╰┈►ওজন          : 🍀৫০ কেজি🚷🌺
╰┈►রক্ত             :☘️B Pojetib🚹🌺
╰┈►গায়ের রং    :🌺পাতিলের মতো♨️🍀
╰┈►ধূমপান        :🌺করি হালকা🚭🍀
╰┈►বেয়াদবি      :🍀হালকা♨️🌺
╰┈►ধন সম্পদ    :🌺জাতীয় ফকির⚠️🍀
╰┈►ভালোবাসা   :☘️কপাল ফুটা♨️🍁
\n\n•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•\n\n╰┈►রোবট এডমিন কে কন্টাক করুন★\n\n╰┈►𝙈𝙀𝙎𝙎𝙀𝙉𝙂𝙀𝙍-𝙇𝙄𝙉𝙆★\n\n╰┈►m.me/100007070042228\n\n╰┈►𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆-𝙇𝙄𝙉𝙆★\n\nhttps://www.facebook.com/RAJA.BABU.TERA.REAL.ABBU.OK.07\n\n•━━━━━━━━━━━━━━━━━━━━━━━━━━━━━•\n\n┏━━ [ 𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 ]━━➣\n┃🌻  𝐁𝐀𝐃𝐀𝐋 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘\n┃🌺 𝐁𝐨𝐭 𝐌𝐨𝐝𝐢𝐟𝐲 𝐑𝐚𝐣𝐚-𝐁𝐚𝐛𝐮 \n┗━━━━━━━━━━━━➢`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
