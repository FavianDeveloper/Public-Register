const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.some(r => ["810584429332398090", "ROL ID"].includes(r.id)) && (!message.member.hasPermission("ADMINISTRATOR")))
    return message.reply("**<:rejection:808390168239145011> Yetkin Yok.**")
 
 let kullanıcı = message.mentions.users.first()
    
 
if(!kullanıcı) {

let erkek = db.fetch(`yetkili.${message.author.id}.erkek`);
let kadın = db.fetch(`yetkili.${message.author.id}.kadin`);
let kayıtlar = db.fetch(`yetkili.${message.author.id}.toplam`); 
if(erkek === null) erkek = "0"  
if(erkek === undefined) erkek = "0"
if(kadın === null) kadın = "0"
if(kadın === undefined) kadın = "0"
if(kayıtlar === null) kayıtlar = "0"
if(kayıtlar === undefined) kayıtlar = "0"
  
const sorgu1 = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL ({ dynamic: true}))
.setAuthor(message.author.username, message.author.avatarURL)
.setDescription(`
 <:confirmation:808390218818388001> Toplam **Kayıtların**: \`${kayıtlar}\`
 <:confirmation:808390218818388001> Toplam **Erkek** Kayıtların: \`${erkek}\`
 <:confirmation:808390218818388001> Toplam **Kadın** Kayıtların: \`${kadın}\``)
.setColor('#00ff0c')
.setFooter('İnexplicable 💚  RyZen')
 return message.channel.send(sorgu1)
};
  
if(kullanıcı) {  
let erkek1 = db.fetch(`yetkili.${kullanıcı.id}.erkek`);
let kadın1 = db.fetch(`yetkili.${kullanıcı.id}.kadin`);
let kayıtlar1 = db.fetch(`yetkili.${kullanıcı.id}.toplam`); 
if(erkek1 === null) erkek1 = "0"  
if(erkek1 === undefined) erkek1 = "0"
if(kadın1 === null) kadın1 = "0"
if(kadın1 === undefined) kadın1 = "0"
if(kayıtlar1 === null) kayıtlar1 = "0"
if(kayıtlar1 === undefined) kayıtlar1 = "0"
  
const sorgu2 = new Discord.MessageEmbed()
.setThumbnail(kullanıcı.avatarURL ({ dynamic: true})) 
.setAuthor(`${kullanıcı.username}`)
.setDescription(`
<:confirmation:808390218818388001> Toplam **Kayıtların**: \`${kayıtlar1}\`
<:confirmation:808390218818388001> Toplam **Erkek** Kayıtların: \`${erkek1}\`
<:confirmation:808390218818388001> Toplam **Kadın** Kayıtların: \`${kadın1}\``)
.setColor('#00ff0c')
.setFooter('İnexplicable 💚  RyZen')
 return message.channel.send(sorgu2)
  
};
  
  };

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["stat", "kayıtlar", "kayıt-kontrol"],
    permLvl: 0,
}
  
exports.help = {  
  name: "stat"
}