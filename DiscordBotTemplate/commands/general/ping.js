const Discord = require('discord.js');

// This ping command will calculate how long 
// it took the bot to reply back to your -ping message

exports.run = (client, message, args) => {

    message.channel.send(':ping_pong: | Pinging... ').then(pingMessage => {

      const start = message.createdTimestamp;
      const end = pingMessage.createdTimestamp;
      const subtraction = end - start;

      pingMessage.edit(`:ping_pong: | Pong! That took ${subtraction} ms.`);
    });
  } 
}

exports.help = {

  name: "ping", // The command name which will show up in the help command
  description: "A simple test command.", // The command description which will show up in the help command
  usage: "", // The command usage which will show up in the help command
  example: "-ping" // The command example which will show up in the help command

};

exports.conf = {

  aliases: [],  // Aliases are something that make the command easier 
			   // to use instead of using -ping you can use -hi
  cooldown: 5 // After using this command once you cannot use it for another 5 seconds

}
