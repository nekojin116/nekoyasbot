module.exports = {
    name:'cat',
    description:"",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setImage('https://cdn.discordapp.com/attachments/856682872495931392/869612880310464582/4e81dee35802b2feb21bdb31d7202692.png')
        message.channel.send(newEmbed);
    }    
}