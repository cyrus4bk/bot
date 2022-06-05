const Discord = require("discord.js")   
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

var nbTcket = 0;

const prefix = "!b";

Client.on("ready", async () => {
    /*var row = new Discord.MessageActionRow()
            .addComponents(new Discord.MessageButton()
                .setCustomId("open-ticket")
                .setLabel("ouvrire un ticket")
                .setStyle("PRIMARY")
            );

    Client.channels.cache.get("982543662938476554").send({content:"Appuyer sur le bouton pour ouvrire un ticket", components: [row]});
        */
    console.log("bot opérationnel");
});

Client.on("interactionCreate", interaction => {
    if(interaction.isButton()){
        if(interaction.customId === "open-ticket"){
            nbTcket++;

            interaction.guild.channels.create("ticket-" + nbTcket, {
                prent: "982544213071761419"
            }).then(channel => {
                var row = (new Discord.MessageButton()
                    .setCustomId("close-ticket")
                    .setLabel("fermer le ticket")
                    .setStyle("DANGER")
                );

            channel.send({content: "<@" + interaction.user.id + ">Votre ticket à étais fais. Veullez appuyer sur le bouton ci-dessous pour le fermer^^." , components: [row]})
            
                interaction.reply({content: "Le ticket a bien étais crée.", ephemeral: true});
            });                                                             //ephemera: true cele permet que ceul l'uitilisateure le voi .
        }
    }
});


Client.on("messageCreate",message => {
    if (message.author.bot) return;  

// !ping
    if(message.content === prefix+" quoi"){
       message.reply(" feur !");  //if(else pour ne pas ping la persone ) message.channel.send pour rajouter un commande au bot !!
    }
    else if (message.content === prefix + " bruh"){
        message.channel.send("**Voici mes commande !!!**\n - !b quoi : renvoie feur\n - !b lol : drop gif\n - !b admin : pour devenir admin     ");
    }
    if(message.content === prefix + " lol"){
        message.channel.send("https://tenor.com/view/memes-bone-skull-skeleton-dancing-gif-17871793")
    }   


    
});

Client.on("messageCreate", message => {
    if(message.content === prefix + " admin"){
        var row = new Discord.MessageActionRow()
        .addComponents(new Discord.MessageButton()
            .setCustomId("bouton1")
            .setLabel("appuyez")
            .setStyle("DANGER")
            .setEmoji("👀")
        );  
        message.channel.send({content: "appuie sur le bouton pour devenir admin 🙀 !", components: [row]});
    }
});

Client.on("interactionCreate", interaction => {
    if(interaction.isButton()){
        if(interaction.customId === "bouton1"){
            interaction.reply("MDR vous avez vraiment crue devenir admin dans vos reve 🤣!");
        }
    }
});

Client.on("messageCreate", message => {
    if(message.content === prefix + " réseaux de cyrusbk"){     // "Voila"
        var row = new Discord.MessageActionRow()
        .addComponents(new Discord.MessageButton()
            .setLabel("Twitch")
            .setStyle("LINK")
            .setEmoji("🛌")
            .setURL("https://www.twitch.tv/cyrusbk_")

        );
        
        message.channel.send({content: "appuyez pour voir les réseaux social de cyrusbk !", components: [row]});
    }
});

Client.on("messageCreate", message => {
    if (message.content.bot) return;


    if(message.content === prefix + " help"){
        const embed = new Discord.MessageEmbed()
            .setColor("#9f40ff")
            .setTitle(" Hi hello if you have a problem join my discord server\n")
          //.setURL("https://discord...") cela permet de nous dirigez sur un lien quand on appui sur le titre . 
            .setURL("https://discord.gg/7ECzbFxq4k")
          //.setAuthor("Voici la liste des commandes!", "https://cdn.discordapp.com/attachments/936675437583675403/946519277115166780/BK.png ")
          //cela sert a mettre  un petit image a cotée de l'author.
          //.setDescription("descrition")
          .setThumbnail("https://cdn.discordapp.com/attachments/978622994094116877/982538046488580147/c_korp.png")
          .addField("list of commands:","\n-!b lol\n-!b admin\n-réseaux de cyrusbk\n-!b help")
          .setImage("https://cdn.discordapp.com/attachments/978622994094116877/982538046488580147/c_korp.png")
        // .setTimeStamp() cela définie a qu'elle heure l'embed a était drop.
            .setFooter("by : cyrusbk#0002 " ); // vous pouvez ensuite mettre un image en mettant un "," puis le "texte".
            message.channel.send({ embeds: [embed]});
    }

}); 


Client.on("message",message => {
    if(message.author.bot) return;
    if(message.channel.type = "dm") return;

    if(message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startswith(prefix + "ban")){
            let mention = message.mention.members.first(); 

                if(mention = undefined){
                    message.reply("Membre Ban ");
                }
                else {
                    if(mention.bannable){
                        mention.ban();
                        message.channel.send(mention.displayName + " a été BANNI avec réussite ");
}
                        else {
                            message.reply("Imposible de le ban.")
                        }
                    
                }
        }
        
    }
});


Client.login("OTgyNTE0MTcxODM5MTI3NTgy.Gm9FHa.smorf4v6yo1WhQTBKVFBQeS0-0ikUO3z2HlDOU"); 