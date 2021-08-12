const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '£';

const fs = require ('fs');

client.command = new Discord.Collection();

const commandFiles =fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.command.set(command.name, command);
}

client.once('ready', () => {
   console.log('nekoyabot is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix)|| message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'hi'){
        message.channel.send('hello how are you?');
    } else if (command === 'imgood'){
         message.channel.send('hamdolilah');
    } else if (command === 'imfine'){
        message.channel.send('hamdolilah');
    } else if (command === 'imfinehowaboutyou'){
        message.channel.send('hamdolilah im fine as well :)');
    } else if (command === 'salam'){
        message.channel.send('yahoo! labas?');
    } else if (command === 'imgoodhowaboutyou'){
        message.channel.send('yokata im good as well :)');
    } else if (command === 'clear'){
        client.command.get('clear').execute(message, args);
    } else if (command === 'command'){
        client.command.get('command').execute(message, args, Discord);
    } else if (command === 'cat'){
        client.command.get('cat').execute(message, args, Discord);
    }else if (command === 'banner'){
        client.command.get('banner').execute(message, args, Discord);
    }else if (command === 'news'){
        message.channel.send('hi @everyone, I have a new prefix. Its £ you get it while pressing shift with 3 :) ');
    }
});

























client.login('ODY5NTIxMDE0Mzk1MTI1Nzgw.YP_ajA.NtdfdkwiScHOY8PyvI36qrbAUbs');
