exports.eejsBlock_styles = function (hook_name, args, cb)
{
  args.content = args.content + require('ep_etherpad-lite/node/eejs/').require("ep_printer/static/css/style.css");
}
exports.eejsBlock_editbarMenuRight = function (hook_name, args, cb) {
  args.content = require('ep_etherpad-lite/node/eejs/').require("ep_printer/templates/printer.ejs") + args.content;
}
