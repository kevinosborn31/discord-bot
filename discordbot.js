import dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";

dotenv.config();

const client = new Client({
  intents: [GatewayIntentBits.GUILDS, GatewayIntentBits.GUILD_MESSAGES, GatewayIntentBits.MESSAGE_CONTENT],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.CLIENT_TOKEN);

client.on("messageCreate", (msg) => {
  if (msg.content === "Hello") {
    msg.reply(`Hello ${msg.author.username}`);
  }
});
