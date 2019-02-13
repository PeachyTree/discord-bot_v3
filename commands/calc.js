// This command requires 2 packages - discord.js & mathjs

const math = require('mathjs');
const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {

    // First, we want to check if they input text
    if (!args[0]) return message.channel.send('Please input a calculation.');

    // Then, we want to try to evaluate the calculation using the mathjs package
    let resp;
    try {
        resp = math.eval(args.join(' '));
    } catch (e) {
        return message.channel.send('Sorry, please input a valid calculation.');
    }

    // Finally, send the output
    const embed = new Discord.RichEmbed()
        .setColor(0xffffff)
        .setTitle('Math Calculation')
        .addField('Input', `\`\`\`js\n${args.join('')}\`\`\``)
        .addField('Output', `\`\`\`js\n${resp}\`\`\``)

    message.channel.send(embed);

    // Now, we can test it.
}