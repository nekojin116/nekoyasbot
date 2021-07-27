module.exports = {
    name:'command',
    description:"Embed for rules!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#F0E8E1')
        .setTitle('꒰꒰₊˚୨ :ADC99_zz_bunsleep_seviina_f2u: ୧︰ 𝐑𝐮𝐥𝐞𝐬︰')
        .setURL('https://discord.gg/R6hnhj2T')
        .setDescription('꒷︶꒷꒦︶꒷ :ADC99_zz_kittypaw_seviina_f2u: ꒦︶꒷︶₊˚ :ADC99_zz_cottoncandy_seviina_f2u: ˳꒷︶︶꒷:ADC99_zz_kitty_kaiyo_f2u: ꒷꒦╭・・:ADC99_ribbon:')
        .addFields(
            {name: 'RULE 1', value: '@𝐍𝐨 𝐬𝐰𝐞𝐚𝐫𝐢𝐧𝐠 𝐨𝐫 𝐜𝐮𝐫𝐬𝐢𝐧𝐠!'},
            {name: 'RULE 2', value: ' @𝐍𝐨 𝐝𝐢𝐬𝐫𝐞𝐬𝐩𝐞𝐜𝐭𝐢𝐧𝐠 𝐩𝐞𝐨𝐩𝐥𝐞𝐬, 𝐠𝐞𝐧𝐝𝐞𝐫, 𝐫𝐚𝐜𝐞 𝐞𝐭𝐜!'},
             )
         .setImage('https://media.discordapp.net/attachments/844516939836555264/855225391392358400/Untitled60_20210612165249.png')    
    
        message.channel.send(newEmbed);
    }

  
}