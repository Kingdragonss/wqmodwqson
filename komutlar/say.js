//SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA
const { MessageEmbed } = require("discord.js");
// module.exports.onLoad = (client) => {}
module.exports.run = (client, message, args) => {
  
  if(!['824339767050240031'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new MessageEmbed().setColor('RANDOM').setAuthor(`Başarısız !`).setDescription(`
<a:hydrastarrr:802176913757831198> **Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta <a:hydrastarrr:802176913757831198>**`))


  let tag = "✵";
  const booster = message.guild.roles.cache.get("789206634429677619").members.size
  const online = message.guild.members.cache.filter(u => u.presence.status != "offline").size
  const ttag = message.guild.members.cache.filter(m => m.user.username.includes(tag)).size
  const toplam = message.guild.memberCount
  const ses = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b) 

  const embed = new MessageEmbed()
  .setImage('https://images-ext-1.discordapp.net/external/keOmqfDdQg_q8G6dd2TCx2LJzY8JHcDC5Ivty9RcpYY/https/media.discordapp.net/attachments/789194952688533558/803543295753453568/ezgif-3-6ab7341e25b3.gif?width=238&height=202')
  .setTimestamp()
  .setColor('RANDOM')
  .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
  message.channel.send(embed.setDescription(`
  <a:hydracrown3:816355855179841557> \`Toplam Üye\`  ·⊱ **${toplam}** <a:hydracrown3:816355855179841557>
  
  <a:hydraforever:816355857246715955> \`Offline Üye\` ·⊱ **${online}** <a:hydraforever:816355857246715955>
  
  <a:hydratac:789369824249643009> \`Taglı Üye\` ·⊱ **${ttag}** <a:hydratac:789369824249643009>
  
  <a:hydraalevv:808620322030878750> \`Booster Üye\` ·⊱ **${booster}** <a:hydraalevv:808620322030878750>
  
  <a:hydrastarrr:802176913757831198> \`Sesteki Üye\` ·⊱ **${ses}** <a:hydrastarrr:802176913757831198>`)); 
};

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["say"],
  permLvl: 0,
}

  exports.help = {
  name: 'say'
}

//SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA SAD X MAMY SAD X STRIGA