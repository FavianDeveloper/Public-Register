const { MessageEmbed } = require("discord.js")
const db = require('quick.db');
module.exports.run = async (client, message, users, args) => {

    if(!message.member.roles.cache.some(r => ['810584429332398090'].includes(r.id)) && (!message.member.hasPermission("ADMINISTRATOR")))
    return message.reply("**<:rejection:808390168239145011> Yetkin Yok.**")
    
//------------------------------------------------KAYITLAR-----------------------------------------------\\  

let user = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
let isim = message.mentions.members.first() || message.guild.members.get(args[0]);//Useri tanımladık
var sayi = 1 //Sıralam için sayı tanımladık
let data = db.get(`isim.${message.guild.id}`)//İsim verisini data diye tanımladık
let rol = db.fetch(`rol.${message.guild.id}`)
if(!data) return message.channel.send(new MessageEmbed()
    .setColor("#fa1a1a") 
    .setThumbnail(user.user.avatarURL ({ dynamic: true}))      
    .setDescription(`
    **${isim} Verilerde Kullanıcıya Ait Kayıt Bulunmamakta.**`)
    .setColor("#fa1a1a")
    .setFooter('İnexplicable 💚  RyZen')
)
let isimler = data.filter(x => x.userID === isim.id).map(x => `${sayi++}- \`${x.isim} | ${x.yas}\`  (<@&${x.role}>)\n`).join("\n")
if(isimler === null) isimler = "**Kullanıcı Hiç Kayıt Olmamış.**"
if(isimler === undefined) isimler = "**Kullanıcı Hiç Kayıt olmamış.**"
//------------------------------------------------KAYITLAR-----------------------------------------------\\      


const embed = new MessageEmbed()
.setColor("#fa1a1a")
        .setThumbnail(user.user.avatarURL ({ dynamic: true}))     
    .setAuthor(`**Bu Kullanıcı \`${sayi-1}\` Kere Kayıt Olmuş.**`) 
    .setDescription(`
    ${isimler}`)
    .setColor("#fa1a1a")
.setFooter('İnexplicable 💚  RyZen')
message.channel.send(embed)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['isimler', 'eski-isim'],
  permLevel: 0,
}

exports.help = {
      name: "isimler"
  
}