const Discord = require("discord.js")
const ayarlar = require('../ayarlar.json');
exports.run = async(client, message) => {
	
	var prefix = ayarlar.prefix;

	const codare = new Discord.RichEmbed()
       .setAuthor(`Komutlar`)
       .setTitle(`Örnek (ÜYE) Komutları`)
       .setDescription(`${prefix}yardım = Yardım Komutlarını Gösterir.\n \n${prefix}gifara = Bota Gif Aratmak İçin Kullanılır.\n \n${prefix}g-woman = Gacı Gifleri Atar.\n \n${prefix}g-man = Erkek Gifleri Atar.\n \n${prefix}g-baby = Bebek Gifleri Atar.\n \n${prefix}g-couple = Sevgili Gifleri Atar.\n \n${prefix}g-animal = Hayvan Gifleri Atar.\n \n${prefix}g-anime = Anime Gifleri Atar.\n \n${prefix}avatar = Avatarınızı Gösterir Ya da Etiketlediğiniz Kişinin Avatarını Gösterir.\n \n${prefix}kullanıcı = Kullanıcı Bilgilerini Gösterir.\n \n${prefix}yapımcım = Yapımcıları gösterir.\n \n${prefix}öneri = Önerilerinizi Bu komutu Kullanarak Yapabilirsiniz.\n \n${prefix}istatistik = Bot İstatistiğini Gösterir.`)
       .addField("» Linkler", ` [Destek Sunucusu](https://discord.gg/BEuGJYG) `, false)
       .setFooter(`ALON GİF`)
  return message.channel.send(codare)
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'yardım',
  description: '[Admin Komutu]',
  usage: 'yardım komutu'
};//////FERZAH & ZEUS