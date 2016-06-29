exports.addToJQuery = function ($) {
    var window = require('window-handle').getWindow();
    var _$ = window.$;
    var _jQuery = window.jQuery;

    try {
        window.$ = $;
        window.jQuery = $;

        require('./remodal');

    } finally {
        window.$ = _$;
        window.jQuery = _jQuery;
    }
};
