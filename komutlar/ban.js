const Discord = require("discord.js");
const moment = require("moment");
const talkedRecently = new Set();
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");
const ms = require("ms");
const { parseZone } = require("moment");
const prefix = ayarlar.Prefix

module.exports.run = async(client, message, args)  => {

  
 if(!message.member.roles.cache.get(ayarlar.BanYetkilisi) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('<a:hydrastar:790708497637572638>**Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta.**<a:hydrastar:790708497637572638>')

 if(!args[0]) return message.channel.send('<a:hydraalevv:808620322030878750><a:hydrabanned2:808705412530176031><a:hydrabanned2:808705418968170597><a:hydrabanned3:808705419072503838><a:hydraalevv:808620322030878750>')

let reason = args.slice(1).join(' ')
let user = message.mentions.users.first() || client.users.get(args[0]) || message.guild.members.find(u => u.user.username.toLowerCase().includes(args[0].toLowerCase())).user
if(!reason) return message.channel.send('**<a:hydrahayr:816551461219205160> Bir Sebep Belirt.<a:hydrahayr:816551461219205160>**')
if(!user) return message.channel.send('**<a:hydrahayr:816551461219205160> Belirtilen Kullanıcı Sunucuda Bulunmamakta.<a:hydrahayr:816551461219205160>**')
let member = message.guild.member(user)
if(!member) return message.channel.send('**<a:hydrahayr:816551461219205160> Belirtilen Kullanıcı Sunucuda Bulunmamakta.<a:hydrahayr:816551461219205160>**')
if(member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send('**<a:hydrahayr:816551461219205160> Etiketlenen Kullanıcı Sizden Üst/Aynı Pozisyonda.<a:hydrahayr:816551461219205160>**')
  member.ban({days: 7, reason: reason})

         const embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setColor(`#ac0000`)
        .setImage('https://cdn.discordapp.com/attachments/794287568697950248/815278057794699314/48d87bf8dd506da65a7308481efc98e3.gif')
        .setDescription(`**<@${member.id}> (\`${member.id}\`) Adlı Kullanıcı <@${message.author.id}> Tarafından Sunucudan Yasaklandı.**
        
      • **<a:hydraforever:816355857246715955> Yetkili: <@${message.author.id}> (\`${message.author.id}\`)**
      • **<a:hydrastarrr:802176913757831198>  Sebebi: \`${reason}\`**
      • **<a:hydraalevv:808620322030878750> Kanal: \`${message.channel.name}\`**
      • **<a:hydracrown3:816355855179841557> Hayırlı Uçuşlar!**
       `)
        client.channels.cache.get(ayarlar.BanKanal).send(embed)
        message.react('🚀')

};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["ban", "yasakla"],
    PermLvl: 0,
}

exports.help = {
  name: 'ban'
};