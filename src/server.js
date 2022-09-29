import TelegramBot from "node-telegram-bot-api"
import express from "express"
const app = express()
import "../config.js"
import Controller from "./controllers/controller.js"
import MessageController from "./controllers/message.controller.js"

app.use(express.json())

const TOKEN  = process.env.TOKEN

const bot = new TelegramBot(TOKEN, {polling: true})
async function main() {
    bot.setMyCommands([
        {command: "/start", description: "Start"},
        {command: "/info", description: "Bot haqida ma'lumot"},
    ]) 

    bot.on('message', message => Controller.MessageController(message, bot ))
    bot.on('callback_query', example => MessageController.MessageController(example, bot))

    console.log("*Server is running*")
}
main()
