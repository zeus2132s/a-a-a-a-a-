const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {



    let replies = ["https://cdn.discordapp.com/avatars/347418027433918467/a_47ec132d4cefbf6f8a43f50c2c42f5d9.gif","https://cdn.discordapp.com/avatars/689866142587813972/a_597475b1ccfbc71187b1bd0a305cb697.gif","https://cdn.discordapp.com/avatars/717967878963593259/a_968d7b94e35ea2540dff510f7ff5ebde.gif","https://cdn.discordapp.com/avatars/608673597107470336/a_0881a1cc7026db96c7e5ff8a7a7bd2de.gif","https://cdn.discordapp.com/avatars/479892805507088384/a_b95c62cda2ef57b8fd9a6210c1a25c54.gif","https://cdn.discordapp.com/avatars/759014398303141918/a_b576ae4595471b1fe9ab439e3262a6c2.gif","https://cdn.discordapp.com/avatars/759014398303141918/a_d3acf082bc79bc7760ecb62adc412685.gif","https://cdn.discordapp.com/avatars/534450965705654273/a_fa67f085709e2ef449c59c85d1a04a7a.gif","https://cdn.discordapp.com/avatars/717967878963593259/a_70263652e17b799dfb8061f8364a6f22.gif","https://cdn.discordapp.com/avatars/750427529369747668/a_62abc77a777f1cb7d0767af2a74ed8d7.gif","https://cdn.discordapp.com/avatars/755574721579450499/a_12310570a741c79ec9e30b738b41b2fc.gif","https://cdn.discordapp.com/avatars/677016419732553758/a_67d928ab96d6cf672226d415d49ea5f5.gif","https://cdn.discordapp.com/avatars/720347106971484242/a_6f09de6d84ff8604cb5acbadbe00e3b0.gif","https://cdn.discordapp.com/avatars/686263206628425757/a_feaa8d2c05c56dd2d66a862983e86e5f.gif","https://cdn.discordapp.com/avatars/717967878963593259/a_fa67f085709e2ef449c59c85d1a04a7a.gif","https://cdn.discordapp.com/attachments/694694675679936585/737306643355664384/image02.gif","https://cdn.discordapp.com/attachments/694694675679936585/737306628528930816/a_1b0b9e83a11f0e8280c5409e85dc6ecf.gif","https://cdn.discordapp.com/attachments/694694675679936585/737306606068564108/image0_7.gif","https://cdn.discordapp.com/attachments/694694675679936585/737306593485651979/image01.gif","https://cdn.discordapp.com/attachments/694694675679936585/737306585470074890/20.gif","https://cdn.discordapp.com/attachments/694694675679936585/737305042096488478/image03.gif","https://cdn.discordapp.com/attachments/694694675679936585/737305094038749224/a_788eee9ad77c81e7406d1c06c75de1a1.gif","https://cdn.discordapp.com/attachments/694694675679936585/737305150607327255/larissa56.gif","https://cdn.discordapp.com/attachments/694694675679936585/737305158668517486/image0.gif","https://cdn.discordapp.com/attachments/694694675679936585/737305302352789554/image0-4.gif","https://cdn.discordapp.com/attachments/694694675679936585/737306359330111548/gif_dc_dc_dc.gif","https://cdn.discordapp.com/attachments/694694675679936585/736981583474589777/a_48d8e6c6b3ab9bdc3d27e9dc7bfbee53.gif","https://cdn.discordapp.com/attachments/694694675679936585/737305354270015628/a_b77c51a4aa5bc3460d375f415dec1507.gif","https://cdn.discordapp.com/attachments/694694675679936585/737304729444679730/a_73dea0b44c5e1f57bdbbfc036b7cf3dc.gif","https://cdn.discordapp.com/attachments/694694675679936585/737304802501066862/image0-2.gif","https://cdn.discordapp.com/attachments/694694675679936585/737109543263404132/image0.gif","https://cdn.discordapp.com/attachments/694694675679936585/737066393694109718/a_d8f145cc1f4ad05bf97a118f64d673ff.gif","https://cdn.discordapp.com/attachments/694694675679936585/737066415877652490/image0_8.gif","https://cdn.discordapp.com/attachments/694694675679936585/737013297336942603/a_37397898637eca6eae7458899b12826c.gif","https://cdn.discordapp.com/attachments/694694675679936585/736898861913604156/image0-10.gif","https://cdn.discordapp.com/attachments/694694675679936585/736898644808040538/a_e4931ce8b4c41a2f4bb15c51dfd0b898.gif","https://cdn.discordapp.com/attachments/694694675679936585/736898505427386378/f6bd4fa420a9d8ce58c6519a90bc8bc0.gif","https://cdn.discordapp.com/attachments/694694675679936585/736898257925570600/a_1e816625dd242018b144b924043a7933.gif","https://cdn.discordapp.com/attachments/694694675679936585/736897942342074428/a_8634244b88f7dc8eebbf416640489ef2.gif"];



    let result = Math.floor((Math.random() * replies.length));



    let gifembed = new Discord.RichEmbed()

        .setTitle("Couple Gif ;")

        .setColor("BLACK")

        .setFooter(`${message.author.tag} `, message.author.avatarURL)

        .setImage(replies[result]);



    message.channel.send(gifembed);

};



exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-couple','couple-gif','gifcouple','couplegif'],

  permLevel: 0

};



exports.help = {

  name: 'g-couple',

  description: 'Rastgele gif atar.',

  usage: 'couple'

};//////FERZAH & ZEUS