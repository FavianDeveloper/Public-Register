const Discord = require('discord.js')
const datab = require('quick.db')
const ms = require('ms')
const moment = require("moment");
const { parseZone } = require("moment");

exports.run =  async (client, message, args) => {
  
if(!['810584429332398090'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) 
return message.reply(`**<:rejection:808390168239145011> Yetkin Yok.**`) 
  
const erkekrol = message.guild.roles.cache.find(r => r.id === '795297457491148810') //erkekrol ismini değişmeyin
const erkekrol2 = message.guild.roles.cache.find(r => r.id === '795297457491148810')
const kayıtsız = message.guild.roles.cache.find(r => r.id === '799002077942382602')


const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));

if(!member) return message.channel.send(`<:rejection:808390168239145011> Bir Kullanıcı Belirt.`)
if(member.id === message.author.id) return message.channel.send('<:rejection:808390168239145011>  Kendini Kayıt Edemezsin.')
if(member.id === client.user.id) return message.channel.send('<:rejection:808390168239145011>  Botları Kayıt Edemezsin.')
if(member.id === message.guild.OwnerID) return message.channel.send('<:rejection:808390168239145011>  Sunucu Sahibini Kayıt Edemezsin.')
if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(`<:rejection:808390168239145011> Bu Kullanıcı Sizden \`Üst/Aynı\` Pozsiyondadır.`)
  
if(!args[0]) return message.channel.send('<:rejection:808390168239145011> Kullanıcı Belirt.')  
let timereplace = args[0];
let time = timereplace.replace(/y/, ' yıl').replace(/d/, ' gün').replace(/s/, ' saniye').replace(/m/, ' dakika').replace(/h/, ' saat') 
 datab.add('case', 1)
 const sadxstg = await datab.fetch('case')
 var tarih = new Date(Date.now())
 var tarih2 = ms(timereplace)
 var tarih3 = Date.now() + tarih2 + 1296000000
 let ay = moment(Date.now()+1296000000).format("MM")
 let gün = moment(Date.now()+1296000000).format("DD")
 let saat = moment(Date.now()+1296000000).format("HH:mm:ss")
 let yıl = moment(Date.now()+1296000000).format("YYYY")
 let kayıtsaat = `\`${gün} ${ay.replace(/01/, 'Ocak').replace(/02/, 'Şubat').replace(/03/, 'Mart').replace(/04/, 'Nisan').replace(/05/, 'Mayıs').replace(/06/, 'Haziran').replace(/07/, 'Temmuz').replace(/08/, 'Ağustos').replace(/09/, 'Eylül').replace(/10/, 'Ekim').replace(/11/, 'Kasım').replace(/12/, 'Aralık')} ${saat} (${yıl})\``
 
 
let name = args[1]
let age = Number(args[2])
if(!name) return message.channel.send('<:rejection:808390168239145011> Kullanıcının İsmini Belirtmelisin.')
if(!age) return message.channel.send('<:rejection:808390168239145011> Kullanıcının Yaşını Belirtmelisin.')
  
datab.add(`yetkili.${message.author.id}.erkek`, 1)
datab.add(`yetkili.${message.author.id}.toplam`, 1)
let alldata = datab.fetch(`yetkili.${message.author.id}.toplam`)

member.setNickname(`${name} | ${age}`)
member.roles.add(erkekrol)
member.roles.add(erkekrol2)
member.roles.remove(kayıtsız)


const embed = new Discord.MessageEmbed()
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
.setDescription(`
<:confirmation:808390218818388001>  ${member}, ${message.author} Tarafından Kayıt Edildi.
<:confirmation:808390218818388001>  ${erkekrol} Rolü Verildi.
<:confirmation:808390218818388001>  Kullanıcı \` ${name} | ${age}\` Olarak Güncellendi.`) 
.setFooter(`${message.author.username} Toplam ${alldata} Kayıta Sahip.`)
.setColor("#00ff0c")
message.channel.send(embed)


  
datab.push(`isim.${message.guild.id}`, {
  userID: member.id, 
  isim: name,
  yas: age,
  role: erkekrol.id
})

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['erkek', 'e', 'boy', 'man'],
    permLevel: 0
  }

  exports.help = {
    name: 'erkek',
    description: "Etiketlenen kişiyi erkek rolleriyle kayıt eder.",
    usage: '.erkek @etiket/id İsim Yaş'
  }