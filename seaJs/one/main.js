/**
 * Created by Administrator on 14-8-22.
 */
/**
 * 主线js
 * 点击小图查看大图测试
 */
define(function(require, exports) {
    var query = require("./model/queryRandom")
        , flbox = require("./model/flbox");

    exports.bind = function(element) {
        element.onclick = function() {
            var href = this.href;
            flbox.open(query.queryRandom(href));
            return false;
        };
    };
});