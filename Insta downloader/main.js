const TelegramBot = require('node-telegram-bot-api')
require('dotenv').config()
const {downloaderMethod}=require('./request')
const TOKEN =process.env.TOKEN


const bot = new TelegramBot(TOKEN, {polling: true})



bot.on ('message', async(message)=>{
    try {
        const chatId=message.chat.id 
    const name=message.from.first_name
    
    if(message.text=='/start'){
       await bot.sendMessage(chatId, `Добро пожаловать, <b>${name}</b> в наш бот. В настоящее время этот бот загружает видео только из Instagram.`,{
            parse_mode: 'HTML' 
    })
       
    }
      const getVideoUrl=await downloaderMethod(message.text)
       await bot.sendVideo(chatId, getVideoUrl.videoUrl, {
        caption:getVideoUrl.caption +'\n тг: @krypton04'
       })
    } catch (error) {
        console.log(error+ "")
        
    }
    
} )