const { readdirSync } = require("fs"); // Required to find the events within fs.

module.exports = client => {
  const events = readdirSync("./events/");
  for (let event of events) {
    let file = require(`../events/${event}`);
    client.on(event.split(".")[0], (...args) => file(client, ...args));
    // This will remove the .js and only with the name of the event.
  }
}
