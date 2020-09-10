// This will randomly go through the statuses in the array called statuses

module.exports = client => {
  console.log(`This is: ${client.user.tag}`);

  let statuses = [
    `${client.guilds.cache.size} SERVERS!`,
    "-help",
    `OVER ${client.users.cache.size} USERS!`,
  ]

  setInterval(function () {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(status, { type: "WATCHING" });

  }, 2000)
}