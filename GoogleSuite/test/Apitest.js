const request = require('sync-request')

module.exports = function()
{
    var res = request('GET','https://demo.vievusolution.com/');
    return res;
}