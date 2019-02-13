// This command requires the discord-js package to create embeds
const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {

    // This will contain some extra things

    // Role Verification - Runs only if a user has a specific role (Optional)
    if (!message.member.roles.find(r => r.name === 'roleName')) return message.channel.send('This requires the role: roleName');

    // Permission Verification - Runs only if a user has Admin permission (optional)
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This requires the permission: ADMINISTRATOR');

    // First, we want to check if the user has input
    if (!args[0]) return message.channel.send('Proper Usage: <prefix>poll question');

    // Then, create the embed
    const embed = new Discord.RichEmbed()
        .setColor(0xffffff)
        .setFooter('React to vote.')
        .setDescription(args.join(' '))
        .setTitle(`Poll created by ${message.author.username}`);

    // Finally, using await send the message
    let msg = await message.channel.send(embed);
    // The sent message will now be stored in the msg variable

    // React to the message
    await msg.react('✅'); // Using await here will make sure the first one runs before the second
    await msg.react('❌');

    // Make sure you delete the original message
    message.delete({timeout: 1000}); // This waits 1000 milliseconds before deleting (1 second)

    // That's it, you can add collectors to it if you want, although it will limit the time you can have the poll for.

} // Now, let's test it!