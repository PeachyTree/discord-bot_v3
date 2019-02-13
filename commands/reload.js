exports.run = (client, message, args, ops) => {

    // We're going to be passing an extra argument, titled 'ops'
    // We can choose what to pass into it via the index.js
    // Now, we can access ops.ownerID & it will return the ID defined at the top of index.js
    
    if (message.author.id !== ops.ownerID) return message.channel.send('Sorry, only the bot owner can use this command.');

    try { 
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch (e) {
        return message.channel.send(`Unable to reload: ${args[0]}`); 
    }

    message.channel.send(`Successfully reloaded: ${args[0]}`);

} 
