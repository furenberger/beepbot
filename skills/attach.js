module.exports = function(controller){
    controller.hears(['attach'],['direct_message','direct_mention'],function(bot,message) {

        var attachments = [];
        var attachment = {
            title: 'This is an attachment',
            color: '#FFCC99',
            fields: [],
        };

        attachment.fields.push({
            label: 'Field',
            value: 'A longish value',
            short: false,
        });

        attachment.fields.push({
            label: 'Field',
            value: 'Value',
            short: true,
        });

        attachment.fields.push({
            label: 'Field',
            value: 'Value',
            short: true,
        });

        attachments.push(attachment);

        bot.reply(message,{
            text: 'See below...',
            attachments: attachments,
        },function(err,resp) {
            console.log(err,resp);
        });
    });
};