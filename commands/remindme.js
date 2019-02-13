// We require 2 packages for this command, discord.js & ms
const Discord = require('discord.js');
const ms = require('ms');

// Command Handler - You can use your own
exports.run = async (client, message, args) => {

    let reminderTime = args[0]; // Variable
    if (!reminderTime) {
        let embed = new Discord.RichEmbed() // Forming new Embed (Use Discord.MessageEmbed() for master version)
            .setTitle('Proper Usage') // This sets the title of the emebd
            .setDescription(`\`<prefix>remindme 15min any text or code\``) // This sends a message for the command usage & example

        return message.channel.send(embed) // This sends the embed 

    }

    let reminder = args.slice(1).join(" "); // This slices the args

    let remindEmbed = new Discord.RichEmbed() // Same as above
        .setColor('#ffffff')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
        .addField('Reminder', `\`\`\`${reminder}\`\`\``) // Shows the remind from the user
        .addField('Time', `\`\`\`${reminderTime}\`\`\``) // Displays the Time
        .setTimestamp();

    message.channel.send(remindEmbed); // Sends the embed

    setTimeout(function() {
        let remindEmbed = new Discord.RichEmbed()
            .setColor('#ffffff')
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
            .addField('Reminder', `\`\`\`${reminder}\`\`\``)
            .setTimestamp()

            message.channel.send(remindEmbed);
    }, ms(reminderTime));

} // Now, lets test it!