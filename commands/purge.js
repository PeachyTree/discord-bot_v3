// Purge Command - we require 1 package
const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You must specify the number of text to delete');
    if(!args[0]) return message.channel.send('You must specify the number of messages to delete');

    // Sending to chat
    message.channel.bulkDelete(args[0]).then(() => { // This deletes the command from the user
        message.channel.send(`:pencil2: ${args[0]} messages have been deleted.`).then(msg => msg.delete(5000));
    });

} // Now, we can test it!