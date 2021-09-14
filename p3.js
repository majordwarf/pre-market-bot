const { Client, Intents } = require("discord.js");

myIntents = new Intents();
myIntents.add(32767);

(async () => {
// const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const client = new Client({ intents: myIntents });
let date = new Date(Date.now());
let print_date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

await client.login('ODU5MDY5NjQyMTczODQxNDA5.YNnU8w.a7keiDP7NnIqD7mFI7FmNcGMoEg');

const channel = await client.channels.fetch('887004473615065138');
await channel.send(`${print_date} | NIFTY50 Top Gainers`)
await channel.send({files: [{attachment: "./final.png", name: "nifty.png"}]});
await client.destroy();
})();
