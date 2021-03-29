const Discord = require("discord.js");
const ms = require("ms");
const db = require("quick.db");
const ayarlar = require('../ayarlar.json');
const moment = require('moment')
const prefix = ayarlar.prefix;
module.exports.run = async (client, message, args) => {

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\  
          
if(!message.member.roles.cache.has(ayarlar.JailYetkilisi) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('<a:hydraalevv:822878820368646215> **Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta.** <a:hydraalevv:822878820368646215>')
  
  const kişi = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
  if(!kişi) return message.channel.send('**<a:hydrastar:790708497637572638> Jaile Atmam Gereken Kişiyi Belirt <a:hydrastar:790708497637572638>**')
  if(kişi.roles.highest.position >= message.member.roles.highest.position) return message.channel.send('<a:hydraforever:816355857246715955>``Etiketlenen Kullanıcı Sizden Üst/Aynı Pozisyonda.``<a:hydraforever:816355857246715955>')
  
  
  
    let zaman1 = args[1]
          .replace("sn", "s")
          .replace("dk", "m")
          .replace("sa", "h")
          .replace("gün", "d");
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\ 
 var vakit = zaman1
            .replace("m", " dakika")
            .replace("s", " saniye")
            .replace("h", " saat")
            .replace("d", " d");
        
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\

  db.set(`cezali_${message.guild.id + kişi.id}`, 'cezali')

  db.set(`süreJail_${message.mentions.users.first().id + message.guild.id}`, zaman1)

  db.add(`cezaPuan.${kişi.id}`, 15)
  
  let cezapuan = db.fetch(`cezaPuan.${kişi.id}`);
  
  db.add(`jailSorgu.${kişi.id}`, 1)
  
  let jailsorgu = db.fetch(`jailSorgu.${kişi.id}`);  
  
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\  
  
  let zaman = args[1]
  if(!args[1]) return message.channel.send('**Ne Kadar Süre Duracağını Belirt.**')
    
let sebep = args.join(``).slice(args[1].length+args[0].length)
if(!sebep) return message.channel.send('**Bir Sebep Belirt.**')
  
  const jail = new Discord.MessageEmbed()
  .setImage('https://images-ext-1.discordapp.net/external/7c3xcV3btjH674Im1sgTlywt8t5LyMe8jN020BJA4ss/%3Fcid%3D790b7611927a1206a32a987fa98e88a78b2a26dcabe41fd6%26rid%3Dgiphy.gif/https/media2.giphy.com/media/P4bLhbzfxDaM0/giphy.gif?width=400&height=165')  
  .setColor(`#220230`)
  .setAuthor(message.author.username, message.author.avatarURL({ dynamic : true }))
  .setDescription(`
• **<a:hydracrown3:816355855179841557> <@${kişi.id}> (\`${kişi.id}\`) üyesi sunucuda cezalandırıldı.**
  
• **<a:hydraforever:816355857246715955> Yetkili: <@${message.author.id}> (\`${message.author.id}\`)**
• **<a:hydracrown3:816355855179841557> Zaman: \`${vakit}\`**
• **<a:hydraforever:816355857246715955> Kanal: \`${message.channel.name}\`**

• **<a:hydracrown3:816355855179841557> Sebep: \`${sebep}\`**`)

  .setFooter(`Ceza Puanı Toplam: ${cezapuan} Oldu`)

  const jailson = new Discord.MessageEmbed()
  .setImage('https://images-ext-1.discordapp.net/external/7c3xcV3btjH674Im1sgTlywt8t5LyMe8jN020BJA4ss/%3Fcid%3D790b7611927a1206a32a987fa98e88a78b2a26dcabe41fd6%26rid%3Dgiphy.gif/https/media2.giphy.com/media/P4bLhbzfxDaM0/giphy.gif?width=400&height=165') 
  .setColor('#220230')
  .setAuthor(message.author.username, message.author.avatarURL({ dynamic : true }))
  .setDescription(`
• **<a:hydracrown3:816355855179841557> <@${kişi.id}> (\`${kişi.id}\`) üyesinin cezası sonlandı.**
  
• **<a:hydraforever:816355857246715955> Yetkili: <@${message.author.id}> (\`${message.author.id}\`)**
• **<a:hydracrown3:816355855179841557> Zaman: \`${vakit}\`**
• **<a:hydraforever:816355857246715955> Kanal: \`${message.channel.name}\`**

• **<a:hydracrown3:816355855179841557> Sebep: \`${sebep}\`**`)
  
 
  //━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\  
  
  kişi.roles.add(ayarlar.JailCezalıRol);
    kişi.roles.cache.forEach(r => {
kişi.roles.remove(r.id)
db.set(`${message.guild.id}.jail.${kişi.id}.roles.${r.id}`, r.id )})
    client.channels.cache.get(ayarlar.JailKanal).send(jail)
    message.react('🔱')
    setTimeout(async () =>{
    kişi.roles.remove(ayarlar.JailCezalıRol)
    client.channels.cache.get(ayarlar.JailKanal).send(jailson)
  }, ms(zaman));
            setTimeout(async () =>{
message.guild.roles.cache.forEach(async r => {
const i = await db.fetch(`${message.guild.id}.jail.${kişi.id}.roles.${r.id}` )
if(i != r.id)  return ;
if(i){kişi.roles.add(i)}
db.delete(`${message.guild.id}.jail.${kişi.id}.roles.${r.id}`)
})
              }, ms(zaman));
}

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['jail'],
    permLevel: 0,
}

exports.help = {
      name: "jail"  
  
}