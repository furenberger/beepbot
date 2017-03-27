module.exports = function (controller) {
    controller.hears(['dm me'],['direct_message','direct_mention'],function(bot,message) {
        bot.startConversation(message,function(err,convo) {
            convo.say('Heard ya');
        });

        bot.startPrivateConversation(message,function(err,dm) {
            dm.say('Private reply!');
        });

    });

};