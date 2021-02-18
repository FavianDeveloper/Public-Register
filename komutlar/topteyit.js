const dc = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, member) => {
  
if(!message.member.roles.cache.some(r => ['810584429332398090', ''].includes(r.id)) && (!message.member.hasPermission("ADMINISTRATOR")))return message.reply("**<:rejection:808390168239145011> Yetkin Yok.**")  

  let uye = message.mentions.users.first() || message.author;
let bilgi = db.get(`yetkili.${uye.id}.toplam`);
let yazı = "Yetkili Teyit Listesi"
  
let top = message.guild.members.cache.filter(uye => db.get(`yetkili.${uye.id}.toplam`))
.array()
.sort((uye1, uye2) => Number(db.get(`**yetkili.${uye2.id}.toplam**`))-Number(db.get(`yetkili.${uye1.id}.toplam`)))
.slice(0, 15).map((uye, index) => (index+1)+" **<@"+ uye +"> | \`" + db.get(`yetkili.${uye.id}.toplam`) +"\` Kayıt Yapmış.**")
.join('\n');
message.channel.send(new dc.MessageEmbed()
.setAuthor(yazı, message.guild.iconURL({dynamic: true}))
.setColor("#38ff3d").setFooter('İnexplicable 💚  RyZen')
.setDescription(top));
  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["topteyit", "top", "teyit", "top-teyit"],
    permLevel: 0
};

exports.help = {
    name: "topteyit"
}