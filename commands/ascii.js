// This command requires 1 package
// `npm i ascii-art`
const ascii = require('ascii-art');

// Command Handler - You can use your own
exports.run = (client, message, args, ops) => {

    // First, we need to generate the font
    ascii.font(args.join(' '), 'Doom', function(rendered) {
        // args holds an array of the words follwing the command.

        // The `rendered` variable now contains out output
        // Although, there is usually a few spaces at the end
        rendered = rendered.trimRight(); // This will remove the whitespace on the right side of the string

        // Now, we need to check if the string exceeds the max cahracters
        if (rendered.length > 2000) return message.channel.send('Sorry, that message is too long!');

        // Finally, if it hasn't returned, send the message
        message.channel.send(rendered, {
            code: 'md'

        }); // The option at the end specifies that the message should be in a codeblock

    }); // Now, we can test it!
}