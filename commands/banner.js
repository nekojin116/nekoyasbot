module.exports = {
    name:'banner',
    description:"",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#F0E8E1')
        .setImage('https://media.discordapp.net/attachments/844516939836555264/855225391392358400/Untitled60_20210612165249.png')
        message.channel.send(newEmbed);
    }    
}