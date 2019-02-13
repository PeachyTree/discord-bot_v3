// This command reloads other commands, using the command handler from our series
exports.run = (client, message, args, ops) => {

    // We're going to be passing an extra argument, titled 'ops'
    // We can choose what to pass into it via the index.js
    // Now, we can access ops.ownerID & it will return the ID defined at the top of index.js
    
    // Check if author is the bot owner
    if (message.author.id !== ops.ownerID) return message.channel.send('Sorry, only the bot owner can use this command.');
    // If the two IDs aren't the same, it will return and send this message to the channel.

    // Delete from cache
    try { // This will be a try statement incase the command isn't found
        delete require.cache[require.resolve(`./${args[0]}.js`)];
        // Since we're already in the commands folder, we won't need to specify it.
    } catch (e) {
        // If we encouter an error, return & respond in channel
        return message.channel.send(`Unable to reload: ${args[0]}`); 
    }

    // Finally, send an output if it hasn't returned yet
    message.channel.send(`Successfully reloaded: ${args[0]}`);

} // Now, we can test it!