module.exports = {
    name: 'clear',
    description: "this command clears messages!",
   async execute(message, args){
        if(!args[0]) return message.reply("you must add how many messages you want to clear!");
        if(isNaN(args[0])) return message.reply("please enter a real number!");

        if(args[0] > 100) return message.reply("you cant clear more than a 100 messages!");
        if(args[0] < 1) return message.reply("you can not delete less than one message!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
          message.channel.bulkDelete(messages);
        });
    }
}