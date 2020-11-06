const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {



    let replies = ["https://cdn.discordapp.com/avatars/697798291316015144/a_44c74861ef5e9c06673e7d6232901db0.gif","https://cdn.discordapp.com/avatars/748931066915455148/a_2969ce21da421cbe58f13421116ce9c4.gif","https://cdn.discordapp.com/avatars/473237942127689740/a_2875830fbad56d4f323db303fdb4902f.gif","https://cdn.discordapp.com/avatars/610958977685258242/a_2e49f16c95b090b220436d7fbe6ecc31.gif","https://cdn.discordapp.com/avatars/695940374572826624/a_8b5b547ba94fb0e251d8dc4f737ab74f.gif","https://cdn.discordapp.com/avatars/523896992162643991/a_d7d8d2bde1745e213ce1ab403d64533a.gif","https://cdn.discordapp.com/avatars/608716549078908930/a_1b57bedae7fdf0dfce5603c47a200e0b.gif","https://cdn.discordapp.com/avatars/714600925225943081/a_2676e6bd974bc4c380358fafa03ec02b.gif","https://cdn.discordapp.com/avatars/714600925225943081/a_002cb5f0fae4ef7d9e3e4383e89667f6.gif","https://cdn.discordapp.com/avatars/729378625312522240/a_0422b88415c5ba53668f65edf0d83721.gif","https://cdn.discordapp.com/avatars/751160186634371122/a_0217b2f051bfeb89d00233521f126bdc.gif","https://cdn.discordapp.com/avatars/537620733749231626/a_7f91f6bbfebc0f2ba382f01d28b7b81f.gif","https://cdn.discordapp.com/avatars/695940374572826624/a_8bbf22f4ed3cfdbb29c0fbf7e2a524a9.gif","https://cdn.discordapp.com/avatars/694585427117604884/a_b9a9647c6bb19479429c715233d48491.gif","https://cdn.discordapp.com/avatars/759014398303141918/a_b5afd3fc020c57746b536718fe8dcbba.gif","https://cdn.discordapp.com/avatars/448127902886789140/a_ace28e48101d951050bbb54aac14439e.gif","https://cdn.discordapp.com/avatars/748931066915455148/a_080f97ca9b9d80a4271c96b88cbab66d.gif","https://cdn.discordapp.com/avatars/607133680489594880/a_96505d0eb08bfeeb25a0bcabc9977878.gif","https://cdn.discordapp.com/avatars/746043710114103449/a_60d895150f9f05edc1875d19793e7788.gif","https://cdn.discordapp.com/avatars/750427529369747668/a_e0cea06973ccc11695d41e2b6c091f1d.gif","https://cdn.discordapp.com/avatars/602770609747001344/a_9927871976e7a768e53f62019efc41e4.gif","https://cdn.discordapp.com/avatars/751160186634371122/a_d8ab0053f5549ff92b3af04586b04c5e.gif","https://cdn.discordapp.com/avatars/647019232667893771/a_636d1cf393202e056802e9ccd7c1813e.gif","https://cdn.discordapp.com/avatars/759014398303141918/a_2b5906af6dc833d2fe59de425c8cabcc.gif","https://cdn.discordapp.com/avatars/751160186634371122/a_56b61c8f83146e23c3368d1ca10ec994.gif","https://cdn.discordapp.com/avatars/714600925225943081/a_c1cf963fafa94a583f9a75c9b4c1ef58.gif","https://cdn.discordapp.com/avatars/714600925225943081/a_dbba55650c50a102ee060415568a144b.gif","https://cdn.discordapp.com/avatars/550393040301195264/a_d9a9ff4ba6594d72f84e5812712d20bd.gif","https://cdn.discordapp.com/avatars/695940374572826624/a_4c7dcbdbc608d3b90800630097af4552.gif","https://cdn.discordapp.com/avatars/656171696059056130/a_94b5aed98480aaced8deaacf7b8ea790.gif","https://cdn.discordapp.com/attachments/694694493525377035/737302021295833109/GIF-200727_113742.gif","https://cdn.discordapp.com/attachments/694694493525377035/737302739444301824/wqeqw.gif","https://cdn.discordapp.com/attachments/694694493525377035/737303378173886554/a_14254a7b0842b2a7f32a19cb34028da4.gif","https://cdn.discordapp.com/attachments/694694493525377035/737302765520551946/a_dfda87717edc3a1ee1057aec5304f082.gif","https://cdn.discordapp.com/attachments/694694493525377035/737310262906060810/image0.gif","https://cdn.discordapp.com/attachments/694694493525377035/737310178180989009/image0.gif","https://cdn.discordapp.com/attachments/694694493525377035/737310007929864252/image0.gif","https://cdn.discordapp.com/attachments/694694493525377035/737300958031380549/a_e052cc1eb09b212fa6b4c3644450b154.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301552750002226/rosiegif4.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301660455534642/GIF.6.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301813912666145/gif_342.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301817615974471/GIF.5.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301870971846687/gif_346.gif","https://cdn.discordapp.com/attachments/694694493525377035/737301916379381790/gif_335.gif","https://cdn.discordapp.com/attachments/694694493525377035/737021018333249546/Lorie10.gif","https://cdn.discordapp.com/attachments/694694493525377035/737021142547693618/a_3a35e998e21a471ca9999b2e78051d53.gif","https://cdn.discordapp.com/attachments/694694493525377035/737036899612360774/a_0edcde786dca1aa7cb3caf12af732bc5.gif"];



    let result = Math.floor((Math.random() * replies.length));



    let gifembed = new Discord.RichEmbed()

        .setTitle("Woman Gif ;")

        .setColor("BLACK")

        .setFooter(`${message.author.tag} `, message.author.avatarURL)

        .setImage(replies[result]);



    message.channel.send(gifembed);

};



exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-woman','woman-gif','gifwoman','womangif'],

  permLevel: 0

};



exports.help = {

  name: 'g-woman',

  description: 'Rastgele gif atar.',

  usage: 'woman'

};//////FERZAH & ZEUS