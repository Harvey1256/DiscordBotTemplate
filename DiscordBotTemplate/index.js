const Discord = require("discord.js"); // You need this to collect all the discord.js api data
const { token } = require('./config.json'); // Config file including your Token, Prefix, ID's
const discordBot = require("./handler/ClientBuilder.js"); // Basic Template For A Description
const client = new discordBot();

require("./handler/module.js")(client);
require("./handler/Event.js")(client);

client.package = require("./package.json");
client.on("warn", console.warn); // This will warn you via logs if there was something wrong with your bot.
client.on("error", console.error); // This will send you an error message via logs if there was something missing with your coding.
client.login(token); // This will get your token from the config.json file
