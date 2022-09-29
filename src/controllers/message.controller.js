class MessageController {
    static async MessageController (message, bot) {
     
        const action = message.data 
        console.log(action);
        const msg = message.message
        const chat_id = msg.chat.id
        console.log(chat_id);
        let text;
      
        
        if (action == 'Beginner'){
            text = 'Beginner kurslarimiz ......';
            return await bot.sendMessage(chat_id, text)

        }

        if (action == 'Elementary'){
            text = 'Elementary Kurslarimiz';
            return await bot.sendMessage(chat_id, text)

        }

        if (action == 'Pre_Intermediate'){
            text = 'Pre-Intermediate';
            return await bot.sendMessage(chat_id, text)

        }

        if (action == 'Intermadiate'){
            text = 'Intermadiate';
            return await bot.sendMessage(chat_id, text)

        }

        if (action == 'Upper_Intermediate'){
            text = 'Upper-Intermediate';
            return await bot.sendMessage(chat_id, text)

        }
        
        if (action == 'Advanced'){
            text = 'Advanced';
            return await bot.sendMessage(chat_id, text)

        }
        
        if (action == 'IELTS'){
            text = 'IELTS';
            return await bot.sendMessage(chat_id, text)

        }
        

    }
}

export default MessageController