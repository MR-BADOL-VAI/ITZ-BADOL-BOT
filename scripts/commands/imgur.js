const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const url = require('url');

module.exports.config = {
    name: "imgur",
    version: "1.0.0",
    permission: 0,
    credits: "BADOL-KHAN",
    description: "Uploads replied attachment to Imgur",
    prefix: true, 
    category: "Video and images Imgur upload", 
    usages: "imgur",
    cooldowns: 5,
    dependencies: {
        "axios": ""
    }
};

module.exports.run = async ({ api, event }) => {
    try {
        const attachmentUrl = event.messageReply.attachments[0]?.url || event.messageReply.attachments[0];
        if (!attachmentUrl) return api.sendMessage('Please reply to an image or video with /imgur', event.threadID, event.messageID);

        const moment = require("moment-timezone");
  var times = moment.tz("Asia/Dhaka").format("hh:mm:ss || D/MM/YYYY");
  var thu = moment.tz("Asia/Dhaka").format("dddd");
  moment.tz("Asia/Dhaka").format("dddd");
  if (thu == "Sunday") thu = "𝚂𝚞𝚗𝚍𝚊𝚢";
  if (thu == "Monday") thu = "𝙼𝚘𝚗𝚍𝚊𝚢";
  if (thu == "Tuesday") thu = "𝚃𝚞𝚎𝚜𝚍𝚊𝚢";
  if (thu == "Wednesday") thu = "𝚆𝚎𝚍𝚗𝚎𝚜𝚍𝚊𝚢";
  if (thu == "Thursday") thu = "𝚃𝚑𝚞𝚛𝚜𝚍𝚊𝚢";
  if (thu == "Friday") thu = "𝙵𝚛𝚒𝚍𝚊𝚢";
  if (thu == "Saturday") thu = "𝚂𝚊𝚝𝚞𝚛𝚍𝚊𝚢";
  var { threadID, messageID, body } = event,
    { PREFIX } = global.config;
  let threadSetting = global.data.threadData.get(threadID) || {};
  let prefix = threadSetting.PREFIX || PREFIX;
  const timeStart = Date.now();
        
        const { path } = await download(attachmentUrl);

        console.log('Attachment downloaded:', path);

        
        const imgurLink = await uploadToImgur(path);

        console.log('Imgur link:', imgurLink);

     
        const replyMessage = `====『𝐑𝐚𝐣𝐚-𝐁𝐚𝐛𝐮___//😈🤬👿』====\n
▱▱▱▱▱▱▱▱▱▱▱▱▱\n
✿ 𝖨𝗆𝗀𝗎𝗋 𝗅𝗂𝗇𝗄: ${imgurLink}\n
▱▱▱▱▱▱▱▱▱▱▱▱▱\n
『  ${thu} || ${times} 』`;
        return api.sendMessage(replyMessage, event.threadID, event.messageID);
    } catch (error) {
        console.error('Error:', error.response?.data || error.message);
        return api.sendMessage('An error occurred while processing the attachment.', event.threadID, event.messageID);
    }
};

async function download(url) {
    return new Promise((resolve, reject) => {
        let path;
        axios({
            url,
            method: 'GET',
            responseType: 'stream'
        }).then(response => {
            const parsedUrl = new URL(url);
            const ext = parsedUrl.pathname.split('.').pop().toLowerCase();
            path = `./${Date.now()}.${ext}`;
            response.data.pipe(fs.createWriteStream(path));
            response.data.on('end', () => {
                console.log('Download completed:', path);
                resolve({ path });
            });
        }).catch(error => {
            console.error('Download error:', error);
            reject(error);
        });
    });
}

async function uploadToImgur(path) {
    try {
        const formData = new FormData();
        formData.append('image', fs.createReadStream(path));

        console.log('Uploading to Imgur...');

        const uploadResponse = await axios.post('https://api.imgur.com/3/upload', formData, {
            headers: {
                ...formData.getHeaders(),
                Authorization: `Client-ID c76eb7edd1459f3` // Replace with your Imgur client ID
            }
        });

        console.log('Upload response:', uploadResponse.data);

        return uploadResponse.data.data.link;
    } catch (error) {
        console.error('Imgur upload error:', error.response?.data || error.message);
        throw new Error('An error occurred while uploading to Imgur.');
    }
}
