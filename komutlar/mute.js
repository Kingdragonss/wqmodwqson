const Discord = require("discord.js");
const ms = require("ms");
const db = require("quick.db");
const moment = require('moment')
const momentt = require("moment-duration-format")

const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
  
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\    
  
 if(!message.member.roles.cache.get(ayarlar.MuteYetkilisi) && !message.member.hasPermission('741973537669251163')) return message.channel.send('<a:hydratac:789369824249643009> **Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta.** <a:hydratac:789369824249643009>')

  let kişi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!kişi) return message.channel.send(`**<a:hydratac:789369824249643009> Mutelemek istediğin kişiyi belirt** <a:hydratac:789369824249643009>`)
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\    

  
  
  
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\  
  
  db.add(`cezaPuan.${kişi.id}`, 5)
  
  let cezapuan = db.fetch(`cezaPuan.${kişi.id}`);
  
  db.add(`muteSorgu.${kişi.id}`, 1)
  
  let mutesorgu = db.fetch(`muteSorgu.${kişi.id}`);  
  
  

  
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\    

    let muted = message.mentions.members.first() || message.guild.members.cache.find(c => c.id === args[0]);
    if (!muted) { message.channel.send(`<a:hydratac:789369824249643009> **Mute Atmam Gereken Kişiyi Belirt. <a:hydratac:789369824249643009>s**`);
   } else {
      if (muted.roles.highest.position >= message.member.roles.highest.position) 
      {
        return message.channel.send(`**<a:hydratac:789369824249643009> Bu Kullanıcı Senden Üst/Aynı Pozisyonda. <a:hydratac:789369824249643009>**`);
      } else {
        let mutezaman = args[1]
          .replace("sn", "s")
          .replace("dk", "m")
          .replace("sa", "h")
          .replace("gün", "d");
        if (!mutezaman) {
          message.reply("**bir zaman girmediniz!**");
        } else {
          let sebep = args[2]
          if(!args[2]) return message.channel.send(`**<a:hydratac:789369824249643009> Bir Sebep Belirt. <a:hydratac:789369824249643009>**`)
           
          
          let vakit = mutezaman
            .replace("m", " dakika")
            .replace("s", " saniye")
            .replace("h", " saat")
            .replace("d", " d");
          


db.set(`muteli_${message.guild.id + kişi.id}`, 'muteli')
db.set(`süre_${message.mentions.users.first().id + message.guild.id}`, mutezaman)
          
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\ 
          
          try {
            client.channels.cache.get(ayarlar.MuteKanal).send(
              new Discord.MessageEmbed()
              .setAuthor(message.author.username, message.author.avatarURL ({ dynamic: true})) 
              .setColor(`ORANGE`)
              .setImage('https://images-ext-1.discordapp.net/external/k87GvHOflwBRAilfgXWwqtONNNaLGXkL3m_fLGr50tU/%3Fwidth%3D192%26height%3D192/https/images-ext-1.discordapp.net/external/4-o93lP4Blrun_GC95QLXm10Bstl0YkfnO25AnmeMqE/%253Fwidth%253D240%2526height%253D240/https/media.discordapp.net/attachments/697503497217638451/800048100629938256/tenor.gif?width=154&height=154')   
              .setDescription(`
• **<a:hydrastarrr:802176913757831198> <@${kişi.id}> (\`${kişi.id}\`) üye metin kanallarında susturuldu.**

• **<a:hydracrown3:816355855179841557> Yetkili: <@${message.author.id}> (\`${message.author.id}\`) **
• **<a:hydrastarrr:802176913757831198> Zaman: \`${vakit}\`**
• **<a:hydracrown3:816355855179841557> Kanal: \`${message.channel.name}\`**

• <a:hydrastarrr:802176913757831198> **Sebep:** \`${sebep}\``)
            );
            muted.roles.add(ayarlar.MuteliRol);
            message.react('🔱')
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\ 

          } catch (e) {
            console.log(e);
          }

          setTimeout(async function() {
            muted.roles.remove(
              ayarlar.MuteliRol,
              client.channels.cache.get(ayarlar.MuteKanal).send(
              new Discord.MessageEmbed()
              .setColor('ORANGE')
              .setImage('https://images-ext-1.discordapp.net/external/Nf2H6M8nuHGy1OWRzJ8VyXOMvYGcNhhC-tEXNgKcuTk/%3Fwidth%3D320%26height%3D180/https/images-ext-1.discordapp.net/external/ze4NnzVRpR9pMATPfTAkg2DOHSYabMUq1Qy5lllFu_A/%253Fwidth%253D400%2526height%253D225/https/images-ext-2.discordapp.net/external/_H0_fJCHHpzJBXY5hxm7nKb60HO9vASJLQny2JSQBYQ/https/media.discordapp.net/attachments/756257192763457646/810648543437520916/image0.gif?width=256&height=144') 
              .setDescription(`
• **<a:hydrastarrr:802176913757831198> <@${kişi.id}> (\`${kişi.id}\`) üyesinin metin kanallarında susturulması sonlandı.**

• **<a:hydracrown3:816355855179841557> Yetkili: <@${message.author.id}> (\`${message.author.id}\`) **
• **<a:hydrastarrr:802176913757831198> Zaman: \`${vakit}\`**
• **<a:hydracrown3:816355855179841557> Kanal: \`${message.channel.name}\`**

• **<a:hydrastarrr:802176913757831198> Sebep: \`${sebep}\`**`))
              
            );
          }, ms(mutezaman));
        }
      }
    }
  }


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mute"],
  permLevel: 0,
  name: "mute"
}

exports.help = {
  name: "mute"
};