const { MessageEmbed } = require("discord.js");

// Help command will create a message embed with all 
// the commands and categories that your bot uses


exports.run = async (client, message, args) => {
  let prefix = client.config.prefix;

  if (!args[0]) {
    // This will turn the folder (category) into array.
    let module = client.helps.array();

    // This will hide a folder from display that includes "hide: true" in their module.json
    if (!client.config.owners.includes(message.author.id)) module = client.helps.array().filter(x => !x.hide);
    const embed = new MessageEmbed()
      .setColor(0x00C09A)
      .setTimestamp(new Date())
      .setDescription(`Type \`${prefix}help [command]\` to get more specific information about a command.`)
      .setTitle("Discord Bot")

    for (const mod of module) {
      // You can change the .join(" | ") to commas, dots or every symbol.
      embed.addField(`${mod.name}`, mod.cmds.map(x => `\`${x}\``).join(" *|* "));
    }

    return message.channel.send(embed);
  } else {
    let cmd = args[0];

    // If the user type the [command], also with the aliases.
    if (client.commands.has(cmd) || client.commands.get(client.aliases.get(cmd))) {
      let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
      let name = command.help.name; // The command name.
      let desc = command.help.description; // The command description.
      let cooldown = command.conf.cooldown + " second(s)"; // The command cooldown.
      let aliases = command.conf.aliases.join(", ") ? command.conf.aliases.join(", ") : "No aliases provided.";
      let usage = command.help.usage ? command.help.usage : "No usage provided.";
      let example = command.help.example ? command.help.example : "No example provided.";

	  // This is the embed which the bot will send to the channel when a user runs -help
      let embed = new MessageEmbed()
        .setColor(0x00C09A)
        .setTitle(name)
        .setDescription(desc)
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter("[] = optional | <> = required")
        .addField("Cooldown", cooldown)
        .addField("Aliases", aliases, true)
        .addField("Usage", usage, true)
        .addField("Example", example, true)

      return message.channel.send(embed);
    }
  }
}

exports.help = {

  name: "help", // The command name which will show up in the help command
  description: "Show a command list.", // The command description which will show up in the help command
  usage: "help [command]", // The command usage which will show up in the help command
  example: "-help ping" // The command example which will show up in the help command

}

exports.conf = {

  aliases: [],  // Aliases are something that make the command easier 
			   // to use instead of using -ping you can use -hi
  cooldown: 5 // After using this command once you cannot use it for another 5 seconds

}
