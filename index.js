// Require Packages - You will need to install them.
const Discord = require("discord.js");
const client = new Discord.Client(); // This uses the discord.js package, in order to setup a client

// Constant Variables
const prefix = '-'; // This can be chnaged to anything you want
const ownerID = '393788668701179914'; // This will be used in future videos


// Listener Events
client.on('message', message => {
    // This runs whenever a message is received

    // Variables
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    // Now, we have two variables.  cmd contains the command following the prefix
    // args contains everything following that and splits it into an array by slices

    // Return Statements
    if (message.author.bot) return; // This will ignore all bots
    if (!message.content.startsWith(prefix)) return; // This will run if the message doesn't starts with the prefix

    // Command Handler
    try {

        // Bonus: Auto-Reload (You should move this into it's own command)
        delete require.cache[require.resolve(`./commands/${cmd}.js`)]; 

        // Options
        let ops = {
            ownerID: ownerID
        }

        let commandFile = require(`./commands/${cmd}.js`); // This will require a file in the commands folder
        commandFile.run(client, message, args, ops); // This will pass three variables into the file

        // We can now create a basic ping-pong command for staters.

    } catch (e) { // This will catch any errors, either withing the code or if the command doesn't exist/ wasn't found.
        console.log(e.stack);
    }

});

// Ready Event - Bot Online / Bot started
client.on('ready', () => console.log('Bot Launched!'));

// Discord Login 
client.login('NTM0NDM5OTk4MDc0NzgxNzIw.DzeWiw.3ivbhbTvQWIzPn3QBq0udIh9frw'); // This will be your token instead of TOKEN