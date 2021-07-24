const DiscordRPC = require('discord-rpc');
const client = new DiscordRPC.Client({ transport: 'ipc' });
require ('dotenv').config();

(async () => {
    client.on('ready', async () => {
        await client.setActivity({
            buttons: [{ label: "Button1", url: "urlbutton1"},{label : "Button2" , url : "Urlbutton2"}] ,
            detals: "descripton!",
            largeImageKey: "image name",
            largeImageText: "imagetext"
        }).catch(err => console.log(err));

        console.log("Discord Rich Prescence has been enabled. Made by ! Siebe#7799");
    });

    await client.login({ clientId: process.env.applicationID }).catch(console.error);
}) ();
