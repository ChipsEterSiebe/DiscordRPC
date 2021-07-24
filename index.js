const DiscordRPC = require('discord-rpc');
const client = new DiscordRPC.Client({ transport: 'ipc' });
require ('dotenv').config();

(async () => {
    client.on('ready', async () => {
        await client.setActivity({
            buttons: [{ label: "Discord", url: "https://discord.gg/QSeJ5x9X" }] ,
            detals: "De OP-MT van nu!",
            largeImageKey: "milrato",
            largeImageText: ".gg/grandmt"
        }).catch(err => console.log(err));

        console.log("Discord Rick Prescence has been enabled. Made by ! Siebe#7799");
    });

    await client.login({ clientId: process.env.applicationID }).catch(console.error);
}) ();