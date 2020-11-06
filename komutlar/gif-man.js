const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {



    let replies = ["https://cdn.discordapp.com/avatars/756083430889881661/a_dd44d9715f10adb8964c0b00db7d91e4.gif","https://cdn.discordapp.com/avatars/672050387632652288/a_e50a55c6f7a9db01d4e41940e73f8cce.gif","https://cdn.discordapp.com/avatars/752637650204229784/a_ab6036ca7b3637294f105023cc7b5f0a.gif","https://cdn.discordapp.com/avatars/492731275267014656/a_9006b3575f81e0bec93cdc120afad2af.gif","https://cdn.discordapp.com/avatars/767282617564921857/a_09b4540f52953eb65b23ec7b402bbfa5.gif","https://cdn.discordapp.com/avatars/438809646522826782/a_5ab9ae6528ba349a768038f2fbf99296.gif","https://cdn.discordapp.com/avatars/595261188007264267/a_305250dd7a6cc163b8a0a8071a70056d.gif","https://cdn.discordapp.com/avatars/600257116791373843/a_403362ff61e8faf834c685e60a5fff21.gif","https://cdn.discordapp.com/avatars/731488011539316766/a_e93c1d03585105355035841d16038dbc.gif","https://cdn.discordapp.com/avatars/423047348709490691/a_b4db12601ed44e6ef4134ab41b3ad1aa.gif","https://cdn.discordapp.com/avatars/647019232667893771/a_cde95b36924d484f7bc98e13d3048f25.gif","https://cdn.discordapp.com/avatars/741566079758893099/a_d4e861205473258d19542f451ed1083e.gif","https://cdn.discordapp.com/avatars/667762337289207818/a_7e7fea0cecbd76be09620da403daf307.gif","https://cdn.discordapp.com/avatars/750428386710650961/a_a0773df06f4ec76059e04b1a0017ad4d.gif","https://cdn.discordapp.com/avatars/584769578983489536/a_c8972c319ffdf3519be174722b1b58c3.gif","https://cdn.discordapp.com/avatars/697259809552072794/a_0b72d64e47e58e07d6d111c9f9acfa10.gif","https://cdn.discordapp.com/attachments/694693923486171177/737203415339499621/a_c3451f3e42065b560180028d3a62ef5a.gif","https://cdn.discordapp.com/attachments/694693923486171177/737219168822362183/a_9c8d6cb51559b033674ed8dd16234ee7.gif","https://cdn.discordapp.com/attachments/694693923486171177/737219065977765888/a_cb483fd9bfa2068e5b57aa6cf973986e.gif","https://cdn.discordapp.com/attachments/694693923486171177/737203076691394570/a_e8727598fec06c471cc305358b97596b.gif","https://cdn.discordapp.com/attachments/694693923486171177/737106443932532796/gif_200.gif","https://cdn.discordapp.com/attachments/694693923486171177/737106458080051330/gif_201.gif","https://cdn.discordapp.com/attachments/694693923486171177/737050698293968976/a_a873a018a2751ecaf654d116ae15c261.gif","https://cdn.discordapp.com/attachments/694693923486171177/737105973155463259/gif_180.gif","https://cdn.discordapp.com/attachments/694693923486171177/737106004977647726/gif_182.gif","https://cdn.discordapp.com/attachments/694693923486171177/737106176541589544/gif_187.gif","https://cdn.discordapp.com/attachments/694693923486171177/737106247643562004/gif_191.gif","https://cdn.discordapp.com/attachments/694693923486171177/737106368158367804/gif_196.gif","https://cdn.discordapp.com/attachments/694693923486171177/737013617538629722/a_fb64ba0c5d3b48b24d4334d7ac2b70af.gif","https://cdn.discordapp.com/attachments/694693923486171177/737013649058824252/a_ee0eab432a8d1eb6521c1a932dd04e22.gif","https://cdn.discordapp.com/attachments/694693923486171177/737038327672340541/a_2df0464c0f0e4dabf60385103b18addd.gif","https://cdn.discordapp.com/attachments/694693923486171177/737038499043213332/a_b4cad593a04df36fae504536a7971825.gif","https://cdn.discordapp.com/attachments/694693923486171177/737039041022787624/image0.gif","https://cdn.discordapp.com/attachments/694693923486171177/737039232065077269/image0-70.gif","https://cdn.discordapp.com/attachments/694693923486171177/737039292832153640/kaan.gif.gif"];



    let result = Math.floor((Math.random() * replies.length));



    let gifembed = new Discord.RichEmbed()

        .setTitle("Man Gif ;")

        .setColor("BLACK")

        .setFooter(`${message.author.tag} `, message.author.avatarURL)

        .setImage(replies[result]);



    message.channel.send(gifembed);

};



exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-man','man-gif','gifman','mangif'],

  permLevel: 0

};



exports.help = {

  name: 'g-man',

  description: 'Rastgele gif atar.',

  usage: 'man'

};//////FERZAH & ZEUS