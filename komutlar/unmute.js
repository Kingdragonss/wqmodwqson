const Discord = require("discord.js");
const ms = require("ms");
const db = require("quick.db");
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
  
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\    
  
 if(!message.member.roles.cache.get(ayarlar.MuteYetkilisi) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta.**')

  let kişi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!kişi) return message.channel.send(`**Mutesini Açmam Gereken Kişiyi Belirt.**`)
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\  

        let mutezaman = args[0]
          .replace("sn", "s")
          .replace("dk", "m")
          .replace("sa", "h")
          .replace("gün", "d");
          let vakit = mutezaman
            .replace("m", " dakika")
            .replace("s", " saniye")
            .replace("h", " saat")
            .replace("d", " d");

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\    
  
  db.add(`cezaPuan.${kişi.id}`, -5)
  
  let cezapuan = db.fetch(`cezaPuan.${kişi.id}`);
  
  db.add(`muteSorgu.${kişi.id}`, -1)
  
  let mutesorgu = db.fetch(`muteSorgu.${kişi.id}`); 
  
  db.delete(`muteli_${message.guild.id + kişi.id}`, 'muteli')
db.delete(`süre_${message.mentions.users.first().id + message.guild.id}`, mutezaman)
  
          

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\          
            kişi.roles.remove(ayarlar.MuteliRol);
            message.react("💠")

            const sadxstriga = new Discord.MessageEmbed()
  .setAuthor(message.author.username, message.author.avatarURL ({ dynamic: true })) 
  .setColor(`ORANGE`)
  .setImage('https://images-ext-1.discordapp.net/external/7c3xcV3btjH674Im1sgTlywt8t5LyMe8jN020BJA4ss/%3Fcid%3D790b7611927a1206a32a987fa98e88a78b2a26dcabe41fd6%26rid%3Dgiphy.gif/https/media2.giphy.com/media/P4bLhbzfxDaM0/giphy.gif?width=400&height=165')
  .setTimestamp()
  .setDescription(`
• **<a:hydrastarrr:802176913757831198> Yetkili: <@${message.author.id}> | \`${message.author.id}\`**
• **<a:hydratac:789369824249643009> Mutesi Kalkan: <@${kişi.id}> | \`${kişi.id}\`**
• **<a:hydrastarrr:802176913757831198> Kanal: \`${message.channel.name}\`**`)
client.channels.cache.get(ayarlar.MuteKanal).send(sadxstriga)
  
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━◆◆◆━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\
  

}
      
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["unmute"],
  permLevel: 0,
}

exports.help = {
  name: "unmute"
};