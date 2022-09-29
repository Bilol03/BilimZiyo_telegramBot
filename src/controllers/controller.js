import generator from "generate-password"
import options from "../options/options.js"
class Controller {
    static async MessageController (message, bot) {
        
        const chat_id = message.chat.id
        const user_id = message.from.id
        const text = message.text
        const username = message.chat.first_name
        if(text === "/start") {
            return await bot.sendMessage(chat_id, "Assalam alaykum! Siz qaysi kursimiz haqida ma'lumot olmoqchisiz?", options)
        }
       

        

        if(text=== "/info") {
            return await bot.sendMessage(chat_id, "Bu botimiz orqali siz o'quv markazimizdagi kurslar haqida umumiy ma'lumotga ega bo'lasiz")
        }
        console.log(message);
    }
}

export default Controller