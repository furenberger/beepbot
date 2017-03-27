module.exports = function(controller){
    controller.hears(['pizzatime'],['ambient'],function(bot,message) {
        bot.startConversation(message, askFlavor);
    });

    askFlavor = function(response, convo) {
        convo.ask("What flavor of pizza do you want?", function(response, convo) {
            convo.say("Awesome.");
            askSize(response, convo);
            convo.next();
        });
    };
    askSize = function(response, convo) {
        convo.ask("What size do you want?", function(response, convo) {
            convo.say("Ok.");
            askWhereDeliver(response, convo);
            convo.next();
        });
    };
    askWhereDeliver = function(response, convo) {
        convo.ask("So where do you want it delivered?", function(response, convo) {
            convo.say("Ok! Goodbye.");
            convo.next();
        });
    };
};