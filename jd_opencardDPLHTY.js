/*
联合开卡
https://jinggengjcq-isv.isvjcloud.com/fronth5/#/pages/unitedCardNew20220302/unitedCardNew20220302?actId=fe595e5ceec04518a151_220302
export DPLHTY="活动Id"
cron "1 1 1 1 1" jd_opencardLH.js
*/

const $ = new Env('通用大牌联合开卡');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';


var __encode = 'jsjiami.com', _a = {},
    _0xb483 = ["\x5F\x64\x65\x63\x6F\x64\x65", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];
(function (_0xd642x1) {
    _0xd642x1[_0xb483[0]] = _0xb483[1]
})(_a);
var __Oxe9004 = ["\x63\x72\x79\x70\x74\x6F\x2D\x6A\x73", "", "\x69\x73\x4E\x6F\x64\x65", "\x70\x75\x73\x68", "\x66\x6F\x72\x45\x61\x63\x68", "\x6B\x65\x79\x73", "\x44\x50\x4C\x48\x54\x59", "\x65\x6E\x76", "\x4A\x44\x5F\x44\x45\x42\x55\x47", "\x66\x61\x6C\x73\x65", "\x6C\x6F\x67", "\x66\x69\x6C\x74\x65\x72", "\x43\x6F\x6F\x6B\x69\x65\x4A\x44", "\x67\x65\x74\x64\x61\x74\x61", "\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32", "\x63\x6F\x6F\x6B\x69\x65", "\x6D\x61\x70", "\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44", "\x5B\x5D", "\x68\x6F\x74\x46\x6C\x61\x67", "\x6F\x75\x74\x46\x6C\x61\x67", "\x61\x63\x74\x69\x76\x69\x74\x79\x45\x6E\x64", "\x74\x72\x79\x42\x61\x6E\x64\x69\x6E\x67", "\x74\x72\x79\x4D\x69\x73\x73\x69\x6F\x6E", "\x64\x6F\x6E\x65", "\x66\x69\x6E\x61\x6C\x6C\x79", "\x6C\x6F\x67\x45\x72\x72", "\x63\x61\x74\x63\x68", "\x6E\x61\x6D\x65", "\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F", "\x6D\x73\x67", "\u8BF7\u8BBE\u7F6E\x2C\x20\x65\x78\x70\x6F\x72\x74\x20\x44\x50\x4C\x48\x54\x59\x3D\x22\u6D3B\u52A8\x49\x64\x22", "\u6D3B\u52A8\x49\x64\x3A", "\x61\x70\x70\x6B\x65\x79", "\x35\x31\x42\x35\x39\x42\x42\x38\x30\x35\x39\x30\x33\x44\x41\x34\x43\x45\x35\x31\x33\x44\x32\x39\x45\x43\x34\x34\x38\x33\x37\x35", "\x75\x73\x65\x72\x49\x64", "\x31\x30\x32\x39\x39\x31\x37\x31", "\x61\x63\x74\x49\x64", "\x4D\x69\x78\x4E\x69\x63\x6B\x73", "\x69\x6E\x76\x69\x74\x65\x4E\x69\x63\x6B", "\x4A\x6E\x47\x64\x33\x66\x46\x51\x39\x65\x64\x71\x4E\x58\x71\x53\x33\x6B\x48\x4E\x46\x46\x73\x2F\x79\x65\x39\x6F\x6C\x75\x5A\x58\x34\x6E\x4F\x54\x4B\x35\x36\x54\x65\x4D\x58\x62\x52\x37\x49\x32\x4F\x6C\x7A\x5A\x63\x68\x34\x68\x54\x73\x32\x32\x6F\x43\x55\x53", "\x6C\x65\x6E\x67\x74\x68", "\x55\x73\x65\x72\x4E\x61\x6D\x65", "\x6D\x61\x74\x63\x68", "\x69\x6E\x64\x65\x78", "\x62\x65\x61\x6E", "\x6E\x69\x63\x6B\x4E\x61\x6D\x65", "\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7", "\u3011", "\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A", "\x4D\x69\x78\x4E\x69\x63\x6B", "\x72\x61\x6E\x64\x6F\x6D", "\x77\x61\x69\x74", "\u6B64\x69\x70\u5DF2\u88AB\u9650\u5236\uFF0C\u8BF7\u8FC7\x31\x30\u5206\u949F\u540E\u518D\u6267\u884C\u811A\u672C", "\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79", "\x68\x61\x73\x45\x6E\x64", "\x65\x6E\x64\x54\x69\x6D\x65", "\x54\x6F\x6B\x65\x6E", "\x50\x69\x6E", "\x69\x73\x76\x4F\x62\x66\x75\x73\x63\x61\x74\x6F\x72", "\u83B7\u53D6\x5B\x74\x6F\x6B\x65\x6E\x5D\u5931\u8D25\uFF01", "\x61\x63\x74\x69\x76\x69\x74\x79\x5F\x6C\x6F\x61\x64", "\u6B64\x69\x70\u5DF2\u88AB\u9650\u5236\uFF0C\u8BF7\u8FC7\x31\x30\u5206\u949F\u540E\u518D\u6267\u884C\u811A\u672C\x0A", "\x6E\x6F\x77", "\u6D3B\u52A8\u7ED3\u675F", "\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65\u5931\u8D25", "\x74\x6F\x42\x69\x6E\x64", "\u7ED1\u5B9A", "\u91CD\u8BD5\x3A\x20", "\u6B21", "\x6F\x70\x65\x6E\x43\x61\x72\x64\x4C\x6F\x61\x64", "\u5168\u90E8\u5361\x3A", "\x75\x73\x65\x72\x49\x64\x4C\x69\x73\x74", "\u9700\u8981\u5F00\x3A", "\x75\x73\x65\x72\x49\x64\x4E\x65\x65\x64\x4C\x69\x73\x74", "\u5F00\u5361", "\u5F20", "\x6D\x69\x73\x73\x69\x6F\x6E\x54\x79\x70\x65", "\x6F\x70\x65\x6E\x43\x61\x72\x64", "\x6A\x6F\x69\x6E\x56\x65\x6E\x64\x65\x72\x49\x64", "\x75\x73\x65\x72\x49\x64\x3A", "\u6D3B\u52A8\u592A\u706B\u7206\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5", "\x69\x6E\x64\x65\x78\x4F\x66", "\x65\x72\x72\x6F\x72\x4A\x6F\x69\x6E\x53\x68\x6F\x70", "\u52A0\u5165\u5E97\u94FA\u4F1A\u5458\u5931\u8D25", "\u7B2C\x31\u6B21\u91CD\u8BD5", "\u7B2C\x32\u6B21\u91CD\u8BD5", "\u7B2C\x33\u6B21\u91CD\u8BD5", "\x6D\x69\x73\x73\x69\x6F\x6E", "\x68\x61\x73\x43\x6F\x6C\x6C\x65\x63\x74\x53\x68\x6F\x70", "\x75\x6E\x69\x74\x65\x43\x6F\x6C\x6C\x65\x63\x74\x53\x68\x6F\x70", "\u5DF2\u7ECF\u5173\u6CE8", "\x75\x6E\x69\x74\x65\x41\x64\x64\x43\x61\x72\x74", "\x72\x75\x6E\x46\x61\x6C\x61\x67", "\x75\x73\x65\x64\x43\x68\x61\x6E\x63\x65", "\u62BD\u5956\u6B21\u6570\u4E3A\x3A", "\u9ED8\u8BA4\u4E0D\u6267\u884C\u62BD\u5956", "\x6D\x79\x41\x77\x61\x72\x64", "\x6D\x69\x73\x73\x69\x6F\x6E\x49\x6E\x76\x69\x74\x65\x4C\x69\x73\x74", "\u5F53\u524D\u52A9\u529B\x3A", "\u540E\u9762\u7684\u53F7\u90FD\u4F1A\u52A9\u529B\x3A", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6A\x69\x6E\x67\x67\x65\x6E\x67\x6A\x63\x71\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D", "\x50\x4F\x53\x54", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x69\x73\x76\x4F\x62\x66\x75\x73\x63\x61\x74\x6F\x72", "\x2F\x64\x6D\x2F\x66\x72\x6F\x6E\x74\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x5F\x6C\x6F\x61\x64\x3F\x6D\x69\x78\x5F\x6E\x69\x63\x6B\x3D", "\x30\x31", "\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x5F\x6C\x6F\x61\x64", "\x2F\x64\x6D\x2F\x66\x72\x6F\x6E\x74\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x73\x68\x6F\x70\x4C\x69\x73\x74\x3F\x6D\x69\x78\x5F\x6E\x69\x63\x6B\x3D", "\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x73\x68\x6F\x70\x4C\x69\x73\x74", "\x73\x68\x6F\x70\x4C\x69\x73\x74", "\x2F\x64\x6D\x2F\x66\x72\x6F\x6E\x74\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x73\x68\x6F\x70\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4C\x6F\x61\x64\x3F\x6F\x70\x65\x6E\x5F\x69\x64\x3D\x26\x6D\x69\x78\x5F\x6E\x69\x63\x6B\x3D", "\x26\x75\x73\x65\x72\x5F\x69\x64\x3D", "\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x73\x68\x6F\x70\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4C\x6F\x61\x64", "\x2F\x64\x6D\x2F\x66\x72\x6F\x6E\x74\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x63\x6F\x6D\x70\x6C\x65\x74\x65\x2F\x6D\x69\x73\x73\x69\x6F\x6E\x3F\x6D\x69\x78\x5F\x6E\x69\x63\x6B\x3D", "\x72\x65\x6C\x61\x74\x69\x6F\x6E\x42\x69\x6E\x64", "\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x63\x6F\x6D\x70\x6C\x65\x74\x65\x2F\x6D\x69\x73\x73\x69\x6F\x6E", "\x2F\x64\x6D\x2F\x66\x72\x6F\x6E\x74\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x64\x72\x61\x77\x2F\x70\x6F\x73\x74\x3F\x6D\x69\x78\x5F\x6E\x69\x63\x6B\x3D", "\x64\x72\x61\x77", "\x32", "\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x64\x72\x61\x77\x2F\x70\x6F\x73\x74", "\u62BD\u5956", "\x2F\x64\x6D\x2F\x66\x72\x6F\x6E\x74\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x66\x6F\x6C\x6C\x6F\x77\x53\x68\x6F\x70\x3F\x6D\x69\x78\x5F\x6E\x69\x63\x6B\x3D", "\x63\x6F\x6C\x6C\x65\x63\x74\x53\x68\x6F\x70", "\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x66\x6F\x6C\x6C\x6F\x77\x53\x68\x6F\x70", "\x66\x6F\x6C\x6C\x6F\x77\x53\x68\x6F\x70", "\x2F\x64\x6D\x2F\x66\x72\x6F\x6E\x74\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x61\x64\x64\x43\x61\x72\x74\x3F\x6D\x69\x78\x5F\x6E\x69\x63\x6B\x3D", "\x61\x64\x64\x43\x61\x72\x74", "\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x61\x64\x64\x43\x61\x72\x74", "\x2F\x64\x6D\x2F\x66\x72\x6F\x6E\x74\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x6D\x79\x41\x77\x61\x72\x64\x73\x3F\x6D\x69\x78\x5F\x6E\x69\x63\x6B\x3D", "\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x6D\x79\x41\x77\x61\x72\x64\x73", "\x2F\x64\x6D\x2F\x66\x72\x6F\x6E\x74\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x6D\x69\x73\x73\x69\x6F\x6E\x49\x6E\x76\x69\x74\x65\x4C\x69\x73\x74\x3F\x6D\x69\x78\x5F\x6E\x69\x63\x6B\x3D", "\x73\x68\x61\x72\x65\x41\x63\x74", "\x2F\x6F\x70\x65\x6E\x43\x61\x72\x64\x4E\x65\x77\x2F\x6D\x69\x73\x73\x69\x6F\x6E\x49\x6E\x76\x69\x74\x65\x4C\x69\x73\x74", "\u9519\u8BEF", "\x73\x74\x61\x74\x75\x73\x43\x6F\x64\x65", "\x74\x6F\x53\x74\x72", "\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5", "\x70\x6F\x73\x74", "\x61\x63\x63\x65\x73\x73\x4C\x6F\x67\x57\x69\x74\x68\x41\x44", "\x64\x72\x61\x77\x43\x6F\x6E\x74\x65\x6E\x74", "\x70\x61\x72\x73\x65", "\x20\u6267\u884C\u4EFB\u52A1\u5F02\u5E38", "\x6F\x62\x6A\x65\x63\x74", "\x65\x72\x72\x63\x6F\x64\x65", "\x74\x6F\x6B\x65\x6E", "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64", "\x6D\x65\x73\x73\x61\x67\x65", "\x20", "\x73\x75\x63\x63\x65\x73\x73", "\x6F\x70\x65\x6E\x4C\x69\x73\x74", "\x64\x61\x74\x61", "\x6F\x70\x65\x6E", "\x76\x61\x6C\x75\x65\x73", "\x6C\x6F\x61\x64\x55\x6E\x69\x74\x65\x4F\x70\x65\x6E\x43\x61\x72\x64", "\x73\x65\x74\x4D\x69\x78\x4E\x69\x63\x6B", "\x75\x6E\x69\x74\x65\x4F\x70\x65\x6E\x43\x61\x72\x64\x4F\x6E\x65", "\x63\x68\x65\x63\x6B\x4F\x70\x65\x6E\x43\x61\x72\x64", "\u5173\u6CE8", "\u52A0\u8D2D", "\x73\x74\x61\x74\x75\x73", "\x69\x73\x4F\x70\x65\x6E\x43\x61\x72\x64", "\x72\x65\x6D\x61\x72\x6B", "\x3A", "\u7ED1\u5B9A\u6210\u529F", "\x63\x75\x73\x41\x63\x74\x69\x76\x69\x74\x79", "\x62\x75\x79\x65\x72\x4E\x69\x63\x6B", "\x6D\x69\x73\x73\x69\x6F\x6E\x43\x75\x73\x74\x6F\x6D\x65\x72", "\u4E0D\u662F\u4F1A\u5458", "\x75\x6E\x69\x74\x65\x4F\x70\x65\x6E\x43\x61\x72", "\u6211\u7684\u5956\u54C1\uFF1A", "\x6C\x69\x73\x74", "\x61\x77\x61\x72\x64\x44\x65\x73", "\u5171\u83B7\u5F97", "\u4EAC\u8C46\x5C\x6E\u65E0\u6CD5\u5224\u65AD\u5956\u52B1\u662F\u5426\u4E3A\u9080\u8BF7\u5956\u52B1\uFF0C\u6240\u4EE5\u76F4\u63A5\u663E\u793A\u83B7\u5F97\u591A\u5C11\u8C46\x5C\x6E", "\u9080\u8BF7\u4EBA\u6570\x28", "\x74\x6F\x74\x61\x6C", "\x69\x6E\x76\x69\x74\x65\x64\x4C\x6F\x67\x4C\x69\x73\x74", "\x29", "\u6D3B\u52A8\u672A\u5F00\u59CB", "\x65\x72\x72\x6F\x72\x4D\x65\x73\x73\x61\x67\x65", "\u706B\u7206", "\x2D\x3E\x20", "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E", "\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65\x2C\x20\x62\x72", "\x7A\x68\x2D\x63\x6E", "\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65", "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64", "\x55\x41", "\x58\x4D\x4C\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74", "\x4F\x72\x69\x67\x69\x6E", "\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65", "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E\x3B\x20\x63\x68\x61\x72\x73\x65\x74\x3D\x75\x74\x66\x2D\x38", "\x43\x6F\x6F\x6B\x69\x65", "\x32\x2E\x30", "\x61\x64\x6D\x4A\x73\x6F\x6E", "\x70\x61\x72\x61\x6D\x73", "\x61\x73\x73\x69\x67\x6E", "\x73\x69\x67\x6E", "\x63\x6F\x6D\x6D\x6F\x6E\x50\x61\x72\x61\x6D\x65\x74\x65\x72", "\x74\x69\x6D\x65\x73\x74\x61\x6D\x70", "\x74\x69\x6D\x65\x53\x74\x61\x6D\x70", "\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x31\x30\x2E\x34\x2E\x36\x3B\x31\x33\x2E\x31\x2E\x32\x3B", "\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x77\x69\x66\x69\x3B\x6D\x6F\x64\x65\x6C\x2F\x69\x50\x68\x6F\x6E\x65\x38\x2C\x31\x3B\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2F\x32\x33\x30\x38\x34\x36\x30\x36\x31\x31\x3B\x61\x70\x70\x42\x75\x69\x6C\x64\x2F\x31\x36\x37\x38\x31\x34\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x4D\x6F\x64\x65\x2F\x30\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x33\x5F\x31\x5F\x32\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31", "\x61\x62\x63\x64\x65\x66\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39", "\x66\x6C\x6F\x6F\x72", "\x63\x68\x61\x72\x41\x74", "\x73\x74\x72\x69\x6E\x67", "\u8BF7\u52FF\u968F\u610F\u5728\x42\x6F\x78\x4A\x73\u8F93\u5165\u6846\u4FEE\u6539\u5185\u5BB9\x0A\u5EFA\u8BAE\u901A\u8FC7\u811A\u672C\u53BB\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65", "\x38\x35\x36\x32\x33\x33\x31\x32\x30\x34\x34\x32\x35\x38\x34\x36\x34\x33\x32\x35\x32\x32\x37\x36\x36\x36\x38\x38\x33\x35\x34\x36", "\x32\x35\x37\x34\x37\x37\x31\x37", "\x73\x74\x72\x69\x6E\x67\x69\x66\x79", "\x27", "\x67", "\x7E", "\x25\x32\x37", "\x72\x65\x70\x6C\x61\x63\x65", "\x25\x37\x45", "\x61\x70\x70\x4B\x65\x79", "\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65", "\x73\x68\x6F\x70\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64", "\x2C\x22\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x22\x3A", "\x7B\x22\x76\x65\x6E\x64\x65\x72\x49\x64\x22\x3A\x22", "\x22\x2C\x22\x73\x68\x6F\x70\x49\x64\x22\x3A\x22", "\x22\x2C\x22\x62\x69\x6E\x64\x42\x79\x56\x65\x72\x69\x66\x79\x43\x6F\x64\x65\x46\x6C\x61\x67\x22\x3A\x31\x2C\x22\x72\x65\x67\x69\x73\x74\x65\x72\x45\x78\x74\x65\x6E\x64\x22\x3A\x7B\x7D\x2C\x22\x77\x72\x69\x74\x65\x43\x68\x69\x6C\x64\x46\x6C\x61\x67\x22\x3A\x30", "\x2C\x22\x63\x68\x61\x6E\x6E\x65\x6C\x22\x3A\x34\x30\x31\x7D", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x61\x70\x70\x69\x64\x3D\x6A\x64\x5F\x73\x68\x6F\x70\x5F\x6D\x65\x6D\x62\x65\x72\x26\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x62\x69\x6E\x64\x57\x69\x74\x68\x56\x65\x6E\x64\x65\x72\x26\x62\x6F\x64\x79\x3D", "\x26\x63\x6C\x69\x65\x6E\x74\x3D\x48\x35\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x39\x2E\x32\x2E\x30\x26\x75\x75\x69\x64\x3D\x38\x38\x38\x38\x38\x26\x68\x35\x73\x74\x3D", "\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E\x3B\x20\x43\x68\x61\x72\x73\x65\x74\x3D\x55\x54\x46\x2D\x38", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D", "\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D", "\x2A\x2F\x2A", "\x74\x6F\x4F\x62\x6A", "\x72\x65\x73\x75\x6C\x74", "\x67\x69\x66\x74\x49\x6E\x66\x6F", "\x67\x69\x66\x74\x4C\x69\x73\x74", "\u5165\u4F1A\u83B7\u5F97\x3A", "\x64\x69\x73\x63\x6F\x75\x6E\x74\x53\x74\x72\x69\x6E\x67", "\x70\x72\x69\x7A\x65\x4E\x61\x6D\x65", "\x73\x65\x63\x6F\x6E\x64\x4C\x69\x6E\x65\x44\x65\x73\x63", "\x67\x65\x74", "\x79\x79\x79\x79\x4D\x4D\x64\x64\x68\x68\x6D\x6D\x73\x73\x53\x53\x53", "\x3B", "\x3B\x65\x66\x37\x39\x61\x3B\x74\x6B\x30\x32\x77\x37\x31\x34\x31\x31\x61\x39\x65\x31\x38\x6E\x38\x6A\x6D\x6D\x44\x4B\x48\x4D\x35\x71\x59\x32\x47\x51\x45\x48\x4E\x38\x4D\x45\x44\x6E\x78\x6E\x4D\x4E\x42\x56\x55\x47\x56\x49\x74\x52\x65\x65\x54\x33\x30\x46\x78\x41\x33\x4E\x49\x6F\x49\x6A\x71\x70\x57\x54\x37\x54\x65\x38\x62\x46\x33\x37\x46\x4A\x32\x57\x2B\x57\x7A\x69\x69\x78\x4C\x48\x68\x46\x30\x31\x3B\x33\x39\x32\x63\x66\x39\x62\x61\x64\x65\x34\x65\x31\x62\x30\x32\x65\x36\x66\x61\x38\x33\x63\x31\x64\x34\x37\x64\x37\x66\x31\x32\x34\x35\x65\x35\x61\x37\x61\x65\x39\x65\x62\x39\x32\x36\x34\x35\x31\x34\x32\x32\x37\x61\x64\x36\x66\x39\x33\x35\x64\x66\x39\x65\x3B\x33\x2E\x30\x3B", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x61\x70\x70\x69\x64\x3D\x6A\x64\x5F\x73\x68\x6F\x70\x5F\x6D\x65\x6D\x62\x65\x72\x26\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x67\x65\x74\x53\x68\x6F\x70\x4F\x70\x65\x6E\x43\x61\x72\x64\x49\x6E\x66\x6F\x26\x62\x6F\x64\x79\x3D\x25\x37\x42\x25\x32\x32\x76\x65\x6E\x64\x65\x72\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32", "\x25\x32\x32\x25\x32\x43\x25\x32\x32\x63\x68\x61\x6E\x6E\x65\x6C\x25\x32\x32\x25\x33\x41\x34\x30\x31\x25\x37\x44\x26\x63\x6C\x69\x65\x6E\x74\x3D\x48\x35\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x39\x2E\x32\x2E\x30\x26\x75\x75\x69\x64\x3D\x38\x38\x38\x38\x38\x26\x68\x35\x73\x74\x3D", "\u5165\u4F1A\x3A", "\x76\x65\x6E\x64\x65\x72\x43\x61\x72\x64\x4E\x61\x6D\x65", "\x73\x68\x6F\x70\x4D\x65\x6D\x62\x65\x72\x43\x61\x72\x64\x49\x6E\x66\x6F", "\x69\x6E\x74\x65\x72\x65\x73\x74\x73\x52\x75\x6C\x65\x4C\x69\x73\x74", "\x69\x6E\x74\x65\x72\x65\x73\x74\x73\x49\x6E\x66\x6F", "\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64", "\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39", "\x73\x6C\x69\x63\x65", "\x3B\x65\x66\x37\x39\x61\x3B\x74\x6B\x30\x32\x77\x39\x39\x62\x63\x31\x62\x39\x38\x31\x38\x6E\x38\x75\x46\x68\x52\x38\x6B\x73\x33\x72\x79\x51\x57\x4D\x4F\x5A\x7A\x6A\x70\x44\x56\x43\x49\x4E\x4A\x4A\x48\x38\x61\x50\x30\x79\x32\x52\x57\x46\x4C\x69\x4A\x42\x6D\x4C\x6B\x33\x5A\x37\x6A\x39\x72\x68\x6D\x35\x63\x6A\x37\x44\x4E\x30\x77\x39\x6D\x49\x48\x65\x73\x71\x6F\x6D\x75\x30\x42\x34\x36\x68\x30\x68\x3B\x35\x61\x62\x35\x65\x66\x64\x35\x64\x63\x37\x63\x33\x64\x35\x32\x64\x64\x31\x39\x61\x38\x65\x61\x61\x62\x63\x37\x62\x63\x39\x39\x63\x31\x62\x39\x64\x62\x38\x30\x30\x61\x34\x32\x30\x38\x62\x61\x31\x31\x34\x32\x63\x38\x61\x37\x63\x37\x62\x66\x38\x35\x32\x65\x3B\x33\x2E\x30\x3B", "\x3B\x31\x36\x39\x66\x31\x3B\x74\x6B\x30\x32\x77\x63\x30\x66\x39\x31\x63\x38\x61\x31\x38\x6E\x76\x57\x56\x4D\x47\x72\x51\x4F\x31\x69\x46\x6C\x70\x51\x72\x65\x32\x53\x68\x32\x6D\x47\x74\x4E\x72\x6F\x31\x6C\x30\x55\x70\x5A\x71\x47\x4C\x52\x62\x48\x69\x79\x71\x66\x61\x55\x51\x61\x50\x79\x36\x34\x57\x54\x37\x75\x7A\x37\x45\x2F\x67\x75\x6A\x47\x41\x42\x35\x30\x6B\x79\x4F\x37\x68\x77\x42\x79\x57\x4B\x3B\x37\x37\x63\x38\x61\x30\x35\x65\x36\x61\x36\x36\x66\x61\x65\x65\x64\x30\x30\x65\x34\x65\x32\x38\x30\x61\x64\x38\x63\x34\x30\x66\x61\x62\x36\x30\x37\x32\x33\x62\x35\x62\x35\x36\x31\x32\x33\x30\x33\x38\x30\x65\x62\x34\x30\x37\x65\x31\x39\x33\x35\x34\x66\x37\x3B\x33\x2E\x30\x3B", "\x3B\x65\x66\x37\x39\x61\x3B\x74\x6B\x30\x32\x77\x39\x32\x36\x33\x31\x62\x66\x61\x31\x38\x6E\x68\x44\x34\x75\x62\x66\x33\x51\x66\x4E\x69\x55\x38\x45\x44\x32\x50\x49\x32\x37\x30\x79\x67\x73\x6E\x2B\x76\x61\x6D\x75\x42\x51\x68\x30\x6C\x56\x45\x36\x76\x37\x55\x41\x77\x63\x6B\x7A\x33\x73\x32\x4F\x74\x6C\x46\x45\x66\x74\x68\x35\x4C\x62\x51\x64\x57\x4F\x50\x4E\x76\x50\x45\x59\x48\x75\x55\x32\x54\x77\x3B\x30\x66\x33\x36\x64\x64\x64\x65\x66\x66\x33\x66\x38\x37\x38\x36\x36\x36\x33\x62\x35\x30\x62\x62\x33\x34\x36\x36\x35\x63\x34\x65\x39\x64\x36\x30\x38\x35\x39\x66\x38\x66\x62\x65\x38\x32\x32\x66\x62\x35\x35\x66\x64\x30\x32\x65\x64\x32\x65\x38\x34\x66\x64\x32\x3B\x33\x2E\x30\x3B", "\x46\x6F\x72\x6D\x61\x74", "\x70\x72\x6F\x74\x6F\x74\x79\x70\x65", "\x67\x65\x74\x4D\x6F\x6E\x74\x68", "\x67\x65\x74\x44\x61\x74\x65", "\x67\x65\x74\x48\x6F\x75\x72\x73", "\x67\x65\x74\x4D\x69\x6E\x75\x74\x65\x73", "\x67\x65\x74\x53\x65\x63\x6F\x6E\x64\x73", "\x67\x65\x74\x44\x61\x79", "\x67\x65\x74\x4D\x69\x6C\x6C\x69\x73\x65\x63\x6F\x6E\x64\x73", "\x74\x65\x73\x74", "\x24\x31", "\x73\x75\x62\x73\x74\x72", "\x67\x65\x74\x46\x75\x6C\x6C\x59\x65\x61\x72", "\x63\x6F\x6E\x63\x61\x74", "\x28", "\x53\x2B", "\x30\x30\x30", "\x30\x30", "\x68\x74\x74\x70\x3A\x2F\x2F\x68\x7A\x2E\x66\x65\x76\x65\x72\x72\x75\x6E\x2E\x74\x6F\x70\x3A\x39\x39\x2F\x73\x68\x61\x72\x65\x2F\x63\x61\x72\x64\x2F\x67\x65\x74\x54\x6F\x6B\x65\x6E\x3F\x74\x79\x70\x65\x3D\x6A\x69\x6E\x67\x67\x65\x6E\x67\x6A\x63\x71", "\x6A\x64\x61\x70\x70\x3B\x61\x6E\x64\x72\x6F\x69\x64\x3B\x31\x31\x2E\x31\x2E\x34\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x4D\x6F\x64\x65\x2F\x30\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x4C\x69\x6E\x75\x78\x3B\x20\x41\x6E\x64\x72\x6F\x69\x64\x20\x31\x30\x3B\x20\x50\x43\x43\x4D\x30\x30\x20\x42\x75\x69\x6C\x64\x2F\x51\x4B\x51\x31\x2E\x31\x39\x31\x30\x32\x31\x2E\x30\x30\x32\x3B\x20\x77\x76\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x35\x33\x37\x2E\x33\x36\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x56\x65\x72\x73\x69\x6F\x6E\x2F\x34\x2E\x30\x20\x43\x68\x72\x6F\x6D\x65\x2F\x38\x39\x2E\x30\x2E\x34\x33\x38\x39\x2E\x37\x32\x20\x4D\x51\x51\x42\x72\x6F\x77\x73\x65\x72\x2F\x36\x2E\x32\x20\x54\x42\x53\x2F\x30\x34\x36\x30\x31\x31\x20\x4D\x6F\x62\x69\x6C\x65\x20\x53\x61\x66\x61\x72\x69\x2F\x35\x33\x37\x2E\x33\x36", "\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF", "\x63\x6F\x64\x65", "\u5220\u9664", "\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A", "\u671F\u5F39\u7A97\uFF0C", "\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C", "\x6A\x73\x6A\x69\x61", "\x6D\x69\x2E\x63\x6F\x6D"];
const CryptoJS = require(__Oxe9004[0x0]);
let cookiesArr = [], cookie = __Oxe9004[0x1];
let dplh_actId = __Oxe9004[0x1];
if ($[__Oxe9004[0x2]]()) {
    Object[__Oxe9004[0x5]](jdCookieNode)[__Oxe9004[0x4]]((_0xd2edx5) => {
        cookiesArr[__Oxe9004[0x3]](jdCookieNode[_0xd2edx5])
    });
    if (process[__Oxe9004[0x7]][__Oxe9004[0x6]]) {
        dplh_actId = process[__Oxe9004[0x7]][__Oxe9004[0x6]]
    }
    ;
    if (process[__Oxe9004[0x7]][__Oxe9004[0x8]] && process[__Oxe9004[0x7]][__Oxe9004[0x8]] === __Oxe9004[0x9]) {
        console[__Oxe9004[0xa]] = () => {
        }
    }
} else {
    cookiesArr = [$[__Oxe9004[0xd]](__Oxe9004[0xc]), $[__Oxe9004[0xd]](__Oxe9004[0xe]), ...jsonParse($[__Oxe9004[0xd]](__Oxe9004[0x11]) || __Oxe9004[0x12])[__Oxe9004[0x10]]((_0xd2edx5) => {
        return _0xd2edx5[__Oxe9004[0xf]]
    })][__Oxe9004[0xb]]((_0xd2edx5) => {
        return !!_0xd2edx5
    })
}
;allMessage = __Oxe9004[0x1], message = __Oxe9004[0x1];
$[__Oxe9004[0x13]] = false;
$[__Oxe9004[0x14]] = false;
$[__Oxe9004[0x15]] = false;
$[__Oxe9004[0x16]] = false;
$[__Oxe9004[0x17]] = false;
let lz_jdpin_token_cookie = __Oxe9004[0x1];
let activityCookie = __Oxe9004[0x1];
let tryBandingNum = 0;
let tryMissionNum = 0;
let flagg = false;
!(async () => {
    if (!cookiesArr[0x0]) {
        $[__Oxe9004[0x1f]]($[__Oxe9004[0x1c]], __Oxe9004[0x1d], __Oxe9004[0x1e], {"\x6F\x70\x65\x6E\x2D\x75\x72\x6C": __Oxe9004[0x1e]});
        return
    }
    ;
    if (!dplh_actId) {
        console[__Oxe9004[0xa]](`${__Oxe9004[0x20]}`);
        return
    } else {
        console[__Oxe9004[0xa]](`${__Oxe9004[0x21]}${dplh_actId}${__Oxe9004[0x1]}`)
    }
    ;$[__Oxe9004[0x22]] = __Oxe9004[0x23];
    $[__Oxe9004[0x24]] = __Oxe9004[0x25];
    $[__Oxe9004[0x26]] = dplh_actId;
    $[__Oxe9004[0x27]] = __Oxe9004[0x1];
    $[__Oxe9004[0x28]] = __Oxe9004[0x29];
    for (let _0xd2edxc = 0; _0xd2edxc < cookiesArr[__Oxe9004[0x2a]]; _0xd2edxc++) {
        cookie = cookiesArr[_0xd2edxc];
        if (cookie) {
            $[__Oxe9004[0x2b]] = decodeURIComponent(cookie[__Oxe9004[0x2c]](/pt_pin=([^; ]+)(?=;?)/) && cookie[__Oxe9004[0x2c]](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            $[__Oxe9004[0x2d]] = _0xd2edxc + 1;
            message = __Oxe9004[0x1];
            $[__Oxe9004[0x2e]] = 0;
            $[__Oxe9004[0x13]] = false;
            $[__Oxe9004[0x14]] = false;
            $[__Oxe9004[0x2f]] = __Oxe9004[0x1];
            console[__Oxe9004[0xa]](`${__Oxe9004[0x30]}${$[__Oxe9004[0x2d]]}${__Oxe9004[0x31]}${$[__Oxe9004[0x2f]] || $[__Oxe9004[0x2b]]}${__Oxe9004[0x32]}`);
            await getUA();
            await run();
            if (_0xd2edxc == 0 && !$[__Oxe9004[0x33]]) {
                $[__Oxe9004[0x28]] = __Oxe9004[0x29]
            }
            ;
            if ($[__Oxe9004[0x14]] || $[__Oxe9004[0x15]]) {
                break
            }
            ;await $[__Oxe9004[0x35]](parseInt(Math[__Oxe9004[0x34]]() * 5000 + 15000), 10)
        }
    }
    ;
    if ($[__Oxe9004[0x14]]) {
        let _0xd2edxd = __Oxe9004[0x36];
        $[__Oxe9004[0x1f]]($[__Oxe9004[0x1c]], `${__Oxe9004[0x1]}`, `${__Oxe9004[0x1]}${_0xd2edxd}${__Oxe9004[0x1]}`);
        if ($[__Oxe9004[0x2]]()) {
            await notify[__Oxe9004[0x37]](`${__Oxe9004[0x1]}${$[__Oxe9004[0x1c]]}${__Oxe9004[0x1]}`, `${__Oxe9004[0x1]}${_0xd2edxd}${__Oxe9004[0x1]}`)
        }
    }
})()[__Oxe9004[0x1b]]((_0xd2edxb) => {
    return $[__Oxe9004[0x1a]](_0xd2edxb)
})[__Oxe9004[0x19]](() => {
    return $[__Oxe9004[0x18]]()
});

async function run() {
    try {
        $[__Oxe9004[0x38]] = true;
        $[__Oxe9004[0x39]] = 0;
        lz_jdpin_token_cookie = __Oxe9004[0x1];
        $[__Oxe9004[0x3a]] = __Oxe9004[0x1];
        $[__Oxe9004[0x3b]] = __Oxe9004[0x1];
        $[__Oxe9004[0x33]] = __Oxe9004[0x1];
        flag = false;
        flagg = false;
        tryBandingNum = 0;
        $[__Oxe9004[0x16]] = false;
        $[__Oxe9004[0x17]] = false;
        $[__Oxe9004[0x15]] = false;
        await takePostRequest(__Oxe9004[0x3c]);
        await $[__Oxe9004[0x35]](parseInt(Math[__Oxe9004[0x34]]() * 2500 + 1000), 10);
        if ($[__Oxe9004[0x3a]] == __Oxe9004[0x1]) {
            console[__Oxe9004[0xa]](__Oxe9004[0x3d]);
            return
        }
        ;await takePostRequest(__Oxe9004[0x3e]);
        if ($[__Oxe9004[0x14]]) {
            console[__Oxe9004[0xa]](__Oxe9004[0x3f]);
            return
        }
        ;
        if ($[__Oxe9004[0x13]]) {
            return
        }
        ;
        if ($[__Oxe9004[0x39]] && (Date[__Oxe9004[0x40]]() > $[__Oxe9004[0x39]])) {
            $[__Oxe9004[0x33]] = __Oxe9004[0x1];
            $[__Oxe9004[0x15]] = true;
            console[__Oxe9004[0xa]](__Oxe9004[0x41]);
            return
        }
        ;
        if ($[__Oxe9004[0x33]] == __Oxe9004[0x1]) {
            console[__Oxe9004[0xa]](`${__Oxe9004[0x42]}`);
            return
        }
        ;$[__Oxe9004[0x43]] = 0;
        await takePostRequest(__Oxe9004[0x44]);
        while ($[__Oxe9004[0x16]] == true) {
            tryBandingNum++;
            console[__Oxe9004[0xa]](`${__Oxe9004[0x45]}${tryBandingNum}${__Oxe9004[0x46]}`);
            await $[__Oxe9004[0x35]](parseInt(Math[__Oxe9004[0x34]]() * 3500 + 3500, 10));
            await takePostRequest(__Oxe9004[0x44]);
            if (tryBandingNum >= 5) {
                break
            }
        }
        ;await $[__Oxe9004[0x35]](parseInt(Math[__Oxe9004[0x34]]() * 2500 + 1500, 10));
        await takePostRequest(__Oxe9004[0x47]);
        if ($[__Oxe9004[0x15]]) {
            return
        }
        ;console[__Oxe9004[0xa]](`${__Oxe9004[0x48]}${$[__Oxe9004[0x49]]}${__Oxe9004[0x1]}`);
        console[__Oxe9004[0xa]](`${__Oxe9004[0x4a]}${$[__Oxe9004[0x4b]]}${__Oxe9004[0x1]}`);
        if ($[__Oxe9004[0x4b]]) {
            flag = true;
            console[__Oxe9004[0xa]](`${__Oxe9004[0x4c]}${$[__Oxe9004[0x4b]][__Oxe9004[0x2a]]}${__Oxe9004[0x4d]}`);
            for (o of $[__Oxe9004[0x4b]]) {
                $[__Oxe9004[0x4e]] = __Oxe9004[0x4f];
                $[__Oxe9004[0x4f]] = false;
                $[__Oxe9004[0x50]] = o;
                console[__Oxe9004[0xa]](`${__Oxe9004[0x51]}${o}${__Oxe9004[0x1]}`);
                await joinShop();
                await $[__Oxe9004[0x35]](parseInt(Math[__Oxe9004[0x34]]() * 1500 + 1800, 10));
                if ($[__Oxe9004[0x54]][__Oxe9004[0x53]](__Oxe9004[0x52]) > -1 || $[__Oxe9004[0x54]][__Oxe9004[0x53]](__Oxe9004[0x55]) > -1) {
                    console[__Oxe9004[0xa]](__Oxe9004[0x56]);
                    await joinShop();
                    await $[__Oxe9004[0x35]](parseInt(Math[__Oxe9004[0x34]]() * 1500 + 1800, 10))
                }
                ;
                if ($[__Oxe9004[0x54]][__Oxe9004[0x53]](__Oxe9004[0x52]) > -1 || $[__Oxe9004[0x54]][__Oxe9004[0x53]](__Oxe9004[0x55]) > -1) {
                    console[__Oxe9004[0xa]](__Oxe9004[0x57]);
                    await joinShop();
                    await $[__Oxe9004[0x35]](parseInt(Math[__Oxe9004[0x34]]() * 1500 + 1800, 10))
                }
                ;
                if ($[__Oxe9004[0x54]][__Oxe9004[0x53]](__Oxe9004[0x52]) > -1 || $[__Oxe9004[0x54]][__Oxe9004[0x53]](__Oxe9004[0x55]) > -1) {
                    console[__Oxe9004[0xa]](__Oxe9004[0x58]);
                    await joinShop();
                    await $[__Oxe9004[0x35]](parseInt(Math[__Oxe9004[0x34]]() * 1500 + 1800, 10))
                }
                ;await takePostRequest(__Oxe9004[0x59]);
                await $[__Oxe9004[0x35]](parseInt(Math[__Oxe9004[0x34]]() * 1500 + 1800, 10))
            }
            ;await $[__Oxe9004[0x35]](parseInt(Math[__Oxe9004[0x34]]() * 1500 + 1800, 10));
            await takePostRequest(__Oxe9004[0x3e]);
            await $[__Oxe9004[0x35]](parseInt(Math[__Oxe9004[0x34]]() * 1500 + 1800, 10))
        }
        ;$[__Oxe9004[0x50]] = __Oxe9004[0x1];
        if ($[__Oxe9004[0x5a]] === 0) {
            flagg = true;
            $[__Oxe9004[0x4e]] = __Oxe9004[0x5b];
            await takePostRequest(__Oxe9004[0x59]);
            await $[__Oxe9004[0x35]](parseInt(Math[__Oxe9004[0x34]]() * 1500 + 1500, 10));
            while ($[__Oxe9004[0x17]] == true) {
                tryMissionNum++;
                console[__Oxe9004[0xa]](`${__Oxe9004[0x45]}${tryMissionNum}${__Oxe9004[0x46]}`);
                await takePostRequest(__Oxe9004[0x59]);
                await $[__Oxe9004[0x35]](parseInt(Math[__Oxe9004[0x34]]() * 1500 + 1500, 10));
                if (tryMissionNum >= 5) {
                    break
                }
            }
        } else {
            console[__Oxe9004[0xa]](__Oxe9004[0x5c])
        }
        ;
        if (flagg == true) {
            $[__Oxe9004[0x4e]] = __Oxe9004[0x5d];
            await $[__Oxe9004[0x35]](parseInt(Math[__Oxe9004[0x34]]() * 1500 + 1500, 10));
            await takePostRequest(__Oxe9004[0x59]);
            await $[__Oxe9004[0x35]](parseInt(Math[__Oxe9004[0x34]]() * 1500 + 1500, 10));
            await takePostRequest(__Oxe9004[0x3e]);
            await $[__Oxe9004[0x35]](parseInt(Math[__Oxe9004[0x34]]() * 2500 + 1500), 10)
        }
        ;$[__Oxe9004[0x5e]] = true;
        let _0xd2edxf = parseInt($[__Oxe9004[0x5f]], 10);
        console[__Oxe9004[0xa]](`${__Oxe9004[0x60]}${_0xd2edxf}${__Oxe9004[0x1]}`);
        console[__Oxe9004[0xa]](`${__Oxe9004[0x61]}`);
        await takePostRequest(__Oxe9004[0x62]);
        await $[__Oxe9004[0x35]](parseInt(Math[__Oxe9004[0x34]]() * 2500 + 1500), 10);
        await takePostRequest(__Oxe9004[0x63]);
        await $[__Oxe9004[0x35]](parseInt(Math[__Oxe9004[0x34]]() * 2500 + 1500), 10);
        console[__Oxe9004[0xa]]($.MixNick);
        console[__Oxe9004[0xa]](`${__Oxe9004[0x64]}${$[__Oxe9004[0x28]]}${__Oxe9004[0x1]}`);
        if ($[__Oxe9004[0x2d]] == 1) {
            $[__Oxe9004[0x28]] = $[__Oxe9004[0x33]];
            console[__Oxe9004[0xa]](`${__Oxe9004[0x65]}${$[__Oxe9004[0x28]]}${__Oxe9004[0x1]}`)
        }
        ;await $[__Oxe9004[0x35]](parseInt(Math[__Oxe9004[0x34]]() * 1500 + 2500, 10))
    } catch (e) {
        console[__Oxe9004[0xa]](e)
    }
}

async function takePostRequest(_0xd2edx11) {
    if ($[__Oxe9004[0x14]]) {
        return
    }
    ;let _0xd2edx12 = __Oxe9004[0x66];
    let _0xd2edx13 = `${__Oxe9004[0x1]}`;
    let _0xd2edx14 = __Oxe9004[0x67];
    let _0xd2edx15 = __Oxe9004[0x1];
    switch (_0xd2edx11) {
        case __Oxe9004[0x3c]:
            url = `${__Oxe9004[0x68]}`;
            _0xd2edx13 = await getToken();
            break;
        case __Oxe9004[0x3e]:
            url = `${__Oxe9004[0x1]}${_0xd2edx12}${__Oxe9004[0x69]}${$[__Oxe9004[0x33]] || $[__Oxe9004[0x27]] || __Oxe9004[0x1]}${__Oxe9004[0x1]}`;
            _0xd2edx15 = {
                "\x6A\x64\x54\x6F\x6B\x65\x6E": $[__Oxe9004[0x3a]],
                "\x73\x6F\x75\x72\x63\x65": __Oxe9004[0x6a],
                "\x69\x6E\x76\x69\x74\x65\x4E\x69\x63\x6B": ($[__Oxe9004[0x28]] || __Oxe9004[0x1])
            };
            if ($[__Oxe9004[0x50]]) {
                _0xd2edx15 = {
                    ..._0xd2edx15,
                    "\x73\x68\x6F\x70\x49\x64": `${__Oxe9004[0x1]}${$[__Oxe9004[0x50]]}${__Oxe9004[0x1]}`
                }
            }
            ;_0xd2edx13 = taskPostUrl(__Oxe9004[0x6b], _0xd2edx15);
            break;
        case __Oxe9004[0x6e]:
            url = `${__Oxe9004[0x1]}${_0xd2edx12}${__Oxe9004[0x6c]}${$[__Oxe9004[0x33]] || $[__Oxe9004[0x27]] || __Oxe9004[0x1]}${__Oxe9004[0x1]}`;
            _0xd2edx15 = {};
            _0xd2edx13 = taskPostUrl(__Oxe9004[0x6d], _0xd2edx15);
            break;
        case __Oxe9004[0x47]:
            url = `${__Oxe9004[0x1]}${_0xd2edx12}${__Oxe9004[0x6f]}${$[__Oxe9004[0x33]] || $[__Oxe9004[0x27]] || __Oxe9004[0x1]}${__Oxe9004[0x70]}${$[__Oxe9004[0x24]]}${__Oxe9004[0x1]}`;
            _0xd2edx15 = {};
            _0xd2edx13 = taskPostUrl(__Oxe9004[0x71], _0xd2edx15);
            break;
        case __Oxe9004[0x44]:
            url = `${__Oxe9004[0x1]}${_0xd2edx12}${__Oxe9004[0x72]}${$[__Oxe9004[0x33]] || $[__Oxe9004[0x27]] || __Oxe9004[0x1]}${__Oxe9004[0x1]}`;
            _0xd2edx15 = {
                "\x6D\x69\x73\x73\x69\x6F\x6E\x54\x79\x70\x65": __Oxe9004[0x73],
                "\x69\x6E\x76\x69\x74\x65\x72\x4E\x69\x63\x6B": ($[__Oxe9004[0x28]] || __Oxe9004[0x1])
            };
            _0xd2edx13 = taskPostUrl(__Oxe9004[0x74], _0xd2edx15);
            break;
        case __Oxe9004[0x59]:
            url = `${__Oxe9004[0x1]}${_0xd2edx12}${__Oxe9004[0x72]}${$[__Oxe9004[0x33]] || $[__Oxe9004[0x27]] || __Oxe9004[0x1]}${__Oxe9004[0x1]}`;
            _0xd2edx15 = {"\x6D\x69\x73\x73\x69\x6F\x6E\x54\x79\x70\x65": $[__Oxe9004[0x4e]]};
            if ($[__Oxe9004[0x50]]) {
                _0xd2edx15 = {..._0xd2edx15, "\x73\x68\x6F\x70\x49\x64": $[__Oxe9004[0x50]]}
            }
            ;_0xd2edx13 = taskPostUrl(__Oxe9004[0x74], _0xd2edx15);
            break;
        case __Oxe9004[0x79]:
            url = `${__Oxe9004[0x1]}${_0xd2edx12}${__Oxe9004[0x75]}${$[__Oxe9004[0x33]] || $[__Oxe9004[0x27]] || __Oxe9004[0x1]}${__Oxe9004[0x1]}`;
            _0xd2edx15 = {
                "\x64\x61\x74\x61\x54\x79\x70\x65": __Oxe9004[0x76],
                "\x75\x73\x65\x64\x47\x61\x6D\x65\x4E\x75\x6D": __Oxe9004[0x77]
            };
            _0xd2edx13 = taskPostUrl(__Oxe9004[0x78], _0xd2edx15);
            break;
        case __Oxe9004[0x7d]:
            url = `${__Oxe9004[0x1]}${_0xd2edx12}${__Oxe9004[0x7a]}${$[__Oxe9004[0x33]] || $[__Oxe9004[0x27]] || __Oxe9004[0x1]}${__Oxe9004[0x1]}`;
            _0xd2edx15 = {
                "\x61\x63\x74\x49\x64": $[__Oxe9004[0x26]],
                "\x6D\x69\x73\x73\x69\x6F\x6E\x54\x79\x70\x65": __Oxe9004[0x7b]
            };
            _0xd2edx13 = taskPostUrl(__Oxe9004[0x7c], _0xd2edx15);
            break;
        case __Oxe9004[0x7f]:
            url = `${__Oxe9004[0x1]}${_0xd2edx12}${__Oxe9004[0x7e]}${$[__Oxe9004[0x33]] || $[__Oxe9004[0x27]] || __Oxe9004[0x1]}${__Oxe9004[0x1]}`;
            _0xd2edx15 = {
                "\x61\x63\x74\x49\x64": $[__Oxe9004[0x26]],
                "\x6D\x69\x73\x73\x69\x6F\x6E\x54\x79\x70\x65": __Oxe9004[0x7f]
            };
            _0xd2edx13 = taskPostUrl(__Oxe9004[0x80], _0xd2edx15);
            break;
        case __Oxe9004[0x62]:
            url = `${__Oxe9004[0x1]}${_0xd2edx12}${__Oxe9004[0x81]}${$[__Oxe9004[0x33]] || $[__Oxe9004[0x27]] || __Oxe9004[0x1]}${__Oxe9004[0x1]}`;
            _0xd2edx15 = {"\x70\x61\x67\x65\x4E\x6F": 1, "\x70\x61\x67\x65\x53\x69\x7A\x65": 9999};
            _0xd2edx13 = taskPostUrl(__Oxe9004[0x82], _0xd2edx15);
            break;
        case __Oxe9004[0x63]:
            url = `${__Oxe9004[0x1]}${_0xd2edx12}${__Oxe9004[0x83]}${$[__Oxe9004[0x33]] || $[__Oxe9004[0x27]] || __Oxe9004[0x1]}${__Oxe9004[0x1]}`;
            _0xd2edx15 = {
                "\x69\x6E\x76\x69\x74\x65\x4C\x69\x73\x74\x52\x65\x71\x75\x65\x73\x74": {
                    "\x61\x63\x74\x49\x64": $[__Oxe9004[0x26]],
                    "\x75\x73\x65\x72\x49\x64": 10299171,
                    "\x6D\x69\x73\x73\x69\x6F\x6E\x54\x79\x70\x65": __Oxe9004[0x84],
                    "\x69\x6E\x76\x69\x74\x65\x54\x79\x70\x65": 1,
                    "\x62\x75\x79\x65\x72\x4E\x69\x63\x6B": ($[__Oxe9004[0x33]] || __Oxe9004[0x1])
                }
            };
            _0xd2edx13 = taskPostUrl(__Oxe9004[0x85], _0xd2edx15);
            break;
        default:
            console[__Oxe9004[0xa]](`${__Oxe9004[0x86]}${_0xd2edx11}${__Oxe9004[0x1]}`)
    }
    ;let _0xd2edx16 = getPostRequest(url, _0xd2edx13, _0xd2edx14);
    await $[__Oxe9004[0x35]](1000);
    return new Promise(async (_0xd2edx17) => {
        $[__Oxe9004[0x8a]](_0xd2edx16, (_0xd2edx18, _0xd2edx19, _0xd2edx1a) => {
            try {
                if (_0xd2edx18) {
                    if (_0xd2edx19 && _0xd2edx19[__Oxe9004[0x87]] && _0xd2edx19[__Oxe9004[0x87]] == 493) {
                        console[__Oxe9004[0xa]](__Oxe9004[0x3f]);
                        $[__Oxe9004[0x14]] = true
                    }
                    ;console[__Oxe9004[0xa]](`${__Oxe9004[0x1]}${$[__Oxe9004[0x88]](_0xd2edx18, _0xd2edx18)}${__Oxe9004[0x1]}`);
                    console[__Oxe9004[0xa]](`${__Oxe9004[0x1]}${_0xd2edx11}${__Oxe9004[0x89]}`);
                    if (_0xd2edx11 == __Oxe9004[0x44]) {
                        $[__Oxe9004[0x16]] = true
                    }
                    ;
                    if (_0xd2edx11 == __Oxe9004[0x59]) {
                        $[__Oxe9004[0x17]] = true
                    }
                } else {
                    $[__Oxe9004[0x16]] = false;
                    $[__Oxe9004[0x17]] = false;
                    dealReturn(_0xd2edx11, _0xd2edx1a)
                }
            } catch (e) {
                console[__Oxe9004[0xa]](e, _0xd2edx19)
            } finally {
                _0xd2edx17()
            }
        })
    })
}

async function dealReturn(_0xd2edx11, _0xd2edx1a) {
    let _0xd2edx1c = __Oxe9004[0x1];
    try {
        if (_0xd2edx11 != __Oxe9004[0x8b] || _0xd2edx11 != __Oxe9004[0x8c]) {
            if (_0xd2edx1a) {
                _0xd2edx1c = JSON[__Oxe9004[0x8d]](_0xd2edx1a)
            }
        }
    } catch (e) {
        console[__Oxe9004[0xa]](`${__Oxe9004[0x1]}${_0xd2edx11}${__Oxe9004[0x8e]}`);
        console[__Oxe9004[0xa]](_0xd2edx1a);
        $[__Oxe9004[0x5e]] = false
    }
    ;
    try {
        let _0xd2edx1d = __Oxe9004[0x1];
        switch (_0xd2edx11) {
            case __Oxe9004[0x3c]:
                if (typeof _0xd2edx1c == __Oxe9004[0x8f]) {
                    if (_0xd2edx1c[__Oxe9004[0x90]] == 0) {
                        if (typeof _0xd2edx1c[__Oxe9004[0x91]] != __Oxe9004[0x92]) {
                            $[__Oxe9004[0x3a]] = _0xd2edx1c[__Oxe9004[0x91]]
                        }
                    } else {
                        if (_0xd2edx1c[__Oxe9004[0x93]]) {
                            console[__Oxe9004[0xa]](`${__Oxe9004[0x1]}${_0xd2edx11}${__Oxe9004[0x94]}${_0xd2edx1c[__Oxe9004[0x93]] || __Oxe9004[0x1]}${__Oxe9004[0x1]}`)
                        } else {
                            console[__Oxe9004[0xa]](_0xd2edx1a)
                        }
                    }
                } else {
                    console[__Oxe9004[0xa]](_0xd2edx1a)
                }
                ;
                break;
            case __Oxe9004[0x8b]:
                ;
            case __Oxe9004[0x8c]:
                ;
            case __Oxe9004[0x3e]:
                ;
            case __Oxe9004[0x59]:
                ;
            case __Oxe9004[0x6e]:
                ;
            case __Oxe9004[0x47]:
                if (typeof _0xd2edx1c == __Oxe9004[0x8f]) {
                    if (_0xd2edx1c[__Oxe9004[0x95]] == true) {
                        $[__Oxe9004[0x96]] = [];
                        $[__Oxe9004[0x96]] = _0xd2edx1c[__Oxe9004[0x97]][__Oxe9004[0x97]];
                        $[__Oxe9004[0x49]] = [];
                        $[__Oxe9004[0x4b]] = [];
                        Object[__Oxe9004[0x99]]($[__Oxe9004[0x96]])[__Oxe9004[0x4]](function (_0xd2edx1e) {
                            $[__Oxe9004[0x49]][__Oxe9004[0x3]](_0xd2edx1e[__Oxe9004[0x24]]);
                            if (_0xd2edx1e[__Oxe9004[0x98]] == false) {
                                $[__Oxe9004[0x4b]][__Oxe9004[0x3]](_0xd2edx1e[__Oxe9004[0x24]])
                            }
                        })
                    }
                }
                ;
            case __Oxe9004[0x9a]:
                ;
            case __Oxe9004[0x9b]:
                ;
            case __Oxe9004[0x9c]:
                ;
            case __Oxe9004[0x9d]:
                ;
            case __Oxe9004[0x7d]:
                ;
            case __Oxe9004[0x7f]:
                ;
            case __Oxe9004[0x62]:
                ;
            case __Oxe9004[0x63]:
                ;
            case __Oxe9004[0x79]:
                _0xd2edx1d = __Oxe9004[0x1];
                if (_0xd2edx11 == __Oxe9004[0x7d]) {
                    _0xd2edx1d = __Oxe9004[0x9e]
                }
                ;
                if (_0xd2edx11 == __Oxe9004[0x7f]) {
                    _0xd2edx1d = __Oxe9004[0x9f]
                }
                ;
                if (typeof _0xd2edx1c == __Oxe9004[0x8f]) {
                    if (_0xd2edx1c[__Oxe9004[0x95]] && _0xd2edx1c[__Oxe9004[0x95]] === true && _0xd2edx1c[__Oxe9004[0x97]]) {
                        if (_0xd2edx1c[__Oxe9004[0x97]][__Oxe9004[0xa0]] && _0xd2edx1c[__Oxe9004[0x97]][__Oxe9004[0xa0]] == 200) {
                            _0xd2edx1c = _0xd2edx1c[__Oxe9004[0x97]];
                            if (_0xd2edx11 != __Oxe9004[0x9b] && (_0xd2edx1c[__Oxe9004[0x1f]] || _0xd2edx1c[__Oxe9004[0x97]][__Oxe9004[0xa1]] || _0xd2edx1c[__Oxe9004[0x97]][__Oxe9004[0xa2]])) {
                                console[__Oxe9004[0xa]](`${__Oxe9004[0x1]}${_0xd2edx1d && _0xd2edx1d + __Oxe9004[0xa3] || __Oxe9004[0x1]}${__Oxe9004[0x1]}${_0xd2edx1c[__Oxe9004[0x1f]] || _0xd2edx1c[__Oxe9004[0x97]][__Oxe9004[0xa1]] || _0xd2edx1c[__Oxe9004[0x97]][__Oxe9004[0xa2]] || __Oxe9004[0x1]}${__Oxe9004[0x1]}`)
                            }
                            ;
                            if (_0xd2edx11 == __Oxe9004[0x3e]) {
                                if (_0xd2edx1c[__Oxe9004[0x1f]] || _0xd2edx1c[__Oxe9004[0x97]][__Oxe9004[0xa1]]) {
                                    if ((_0xd2edx1c[__Oxe9004[0x1f]] || _0xd2edx1c[__Oxe9004[0x97]][__Oxe9004[0xa1]] || __Oxe9004[0x1])[__Oxe9004[0x53]](__Oxe9004[0xa4]) > -1) {
                                        $[__Oxe9004[0x43]] = 1
                                    }
                                }
                                ;
                                if (_0xd2edx1c[__Oxe9004[0x97]]) {
                                    $[__Oxe9004[0x39]] = _0xd2edx1c[__Oxe9004[0x97]][__Oxe9004[0xa5]][__Oxe9004[0x39]] || 0;
                                    $[__Oxe9004[0x33]] = _0xd2edx1c[__Oxe9004[0x97]][__Oxe9004[0xa6]] || __Oxe9004[0x1];
                                    $[__Oxe9004[0x5f]] = _0xd2edx1c[__Oxe9004[0x97]][__Oxe9004[0xa7]][__Oxe9004[0x5f]] || 0;
                                    $[__Oxe9004[0x5a]] = _0xd2edx1c[__Oxe9004[0x97]][__Oxe9004[0xa7]][__Oxe9004[0x5a]] || 0
                                }
                            } else {
                                if (_0xd2edx11 == __Oxe9004[0x6e]) {
                                } else {
                                    if (_0xd2edx11 == __Oxe9004[0x59]) {
                                        if (_0xd2edx1c[__Oxe9004[0x97]][__Oxe9004[0xa2]][__Oxe9004[0x53]](__Oxe9004[0xa8]) > -1) {
                                            $[__Oxe9004[0x4f]] = true
                                        } else {
                                            $[__Oxe9004[0x4f]] = false
                                        }
                                    } else {
                                        if (_0xd2edx11 == __Oxe9004[0x9c]) {
                                            $[__Oxe9004[0xa9]] = _0xd2edx1c[__Oxe9004[0x1f]] || _0xd2edx1c[__Oxe9004[0x97]][__Oxe9004[0x1f]] || __Oxe9004[0x1]
                                        } else {
                                            if (_0xd2edx11 == __Oxe9004[0x62]) {
                                                console[__Oxe9004[0xa]](`${__Oxe9004[0xaa]}`);
                                                let _0xd2edx1f = 0;
                                                let _0xd2edx20 = 0;
                                                for (let _0xd2edxc in _0xd2edx1c[__Oxe9004[0x97]][__Oxe9004[0xab]] || []) {
                                                    let _0xd2edx5 = _0xd2edx1c[__Oxe9004[0x97]][__Oxe9004[0xab]][_0xd2edxc];
                                                    _0xd2edx20 += Number(_0xd2edx5[__Oxe9004[0xac]])
                                                }
                                                ;
                                                if (_0xd2edx20 > 0) {
                                                    console[__Oxe9004[0xa]](`${__Oxe9004[0xad]}${_0xd2edx20}${__Oxe9004[0xae]}`)
                                                }
                                            } else {
                                                if (_0xd2edx11 == __Oxe9004[0x63]) {
                                                    console[__Oxe9004[0xa]](`${__Oxe9004[0xaf]}${_0xd2edx1c[__Oxe9004[0x97]][__Oxe9004[0xb1]][__Oxe9004[0xb0]]}${__Oxe9004[0xb2]}`)
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            if (_0xd2edx1c[__Oxe9004[0x97]][__Oxe9004[0x1f]]) {
                                if (_0xd2edx1c[__Oxe9004[0xb4]][__Oxe9004[0x53]](__Oxe9004[0xb3]) > -1) {
                                    $[__Oxe9004[0x15]] = true
                                }
                                ;console[__Oxe9004[0xa]](`${__Oxe9004[0x1]}${_0xd2edx1d || _0xd2edx11}${__Oxe9004[0x94]}${_0xd2edx1c[__Oxe9004[0x97]][__Oxe9004[0x1f]] || __Oxe9004[0x1]}${__Oxe9004[0x1]}`)
                            } else {
                                if (_0xd2edx1c[__Oxe9004[0xb4]]) {
                                    if (_0xd2edx1c[__Oxe9004[0xb4]][__Oxe9004[0x53]](__Oxe9004[0xb5]) > -1) {
                                        $[__Oxe9004[0x13]] = true
                                    }
                                    ;console[__Oxe9004[0xa]](`${__Oxe9004[0x1]}${_0xd2edx1d || _0xd2edx11}${__Oxe9004[0x94]}${_0xd2edx1c[__Oxe9004[0xb4]] || __Oxe9004[0x1]}${__Oxe9004[0x1]}`)
                                } else {
                                    console[__Oxe9004[0xa]](`${__Oxe9004[0x1]}${_0xd2edx1d || _0xd2edx11}${__Oxe9004[0x94]}${_0xd2edx1a}${__Oxe9004[0x1]}`)
                                }
                            }
                        }
                    } else {
                        if (_0xd2edx1c[__Oxe9004[0xb4]]) {
                            console[__Oxe9004[0xa]](`${__Oxe9004[0x1]}${_0xd2edx1d || _0xd2edx11}${__Oxe9004[0x94]}${_0xd2edx1c[__Oxe9004[0xb4]] || __Oxe9004[0x1]}${__Oxe9004[0x1]}`)
                        } else {
                            console[__Oxe9004[0xa]](`${__Oxe9004[0x1]}${_0xd2edx1d || _0xd2edx11}${__Oxe9004[0x94]}${_0xd2edx1a}${__Oxe9004[0x1]}`)
                        }
                    }
                } else {
                    console[__Oxe9004[0xa]](`${__Oxe9004[0x1]}${_0xd2edx1d || _0xd2edx11}${__Oxe9004[0x94]}${_0xd2edx1a}${__Oxe9004[0x1]}`)
                }
                ;
                break;
            default:
                console[__Oxe9004[0xa]](`${__Oxe9004[0x1]}${_0xd2edx1d || _0xd2edx11}${__Oxe9004[0xb6]}${_0xd2edx1a}${__Oxe9004[0x1]}`)
        }
        ;
        if (typeof _0xd2edx1c == __Oxe9004[0x8f]) {
            if (_0xd2edx1c[__Oxe9004[0xb4]]) {
                if (_0xd2edx1c[__Oxe9004[0xb4]][__Oxe9004[0x53]](__Oxe9004[0xb5]) > -1) {
                    $[__Oxe9004[0x13]] = true
                }
            }
        }
    } catch (e) {
        console[__Oxe9004[0xa]](e)
    }
}

function getPostRequest(_0xd2edx22, _0xd2edx13, _0xd2edx14 = __Oxe9004[0x67]) {
    let _0xd2edx23 = {
        "\x41\x63\x63\x65\x70\x74": __Oxe9004[0xb7],
        "\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67": __Oxe9004[0xb8],
        "\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65": __Oxe9004[0xb9],
        "\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E": __Oxe9004[0xba],
        "\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65": __Oxe9004[0xbb],
        "\x43\x6F\x6F\x6B\x69\x65": cookie,
        "\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": $[__Oxe9004[0xbc]],
        "\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68": __Oxe9004[0xbd]
    };
    if (_0xd2edx22[__Oxe9004[0x53]](__Oxe9004[0x66]) > -1) {
        _0xd2edx23[__Oxe9004[0xbe]] = `${__Oxe9004[0x66]}`;
        _0xd2edx23[__Oxe9004[0xbf]] = `${__Oxe9004[0xc0]}`;
        delete _0xd2edx23[__Oxe9004[0xc1]]
    }
    ;
    return {url: _0xd2edx22, method: _0xd2edx14, headers: _0xd2edx23, body: _0xd2edx13, timeout: 65000}
}

function taskPostUrl(_0xd2edx22, _0xd2edx25) {
    const _0xd2edx26 = {
        "\x6A\x73\x6F\x6E\x52\x70\x63": __Oxe9004[0xc2],
        "\x70\x61\x72\x61\x6D\x73": {
            "\x63\x6F\x6D\x6D\x6F\x6E\x50\x61\x72\x61\x6D\x65\x74\x65\x72": {
                "\x61\x70\x70\x6B\x65\x79": $[__Oxe9004[0x22]],
                "\x6D": __Oxe9004[0x67],
                "\x74\x69\x6D\x65\x73\x74\x61\x6D\x70": Date[__Oxe9004[0x40]](),
                "\x75\x73\x65\x72\x49\x64": $[__Oxe9004[0x24]]
            },
            "\x61\x64\x6D\x4A\x73\x6F\x6E": {
                "\x61\x63\x74\x49\x64": $[__Oxe9004[0x26]],
                "\x75\x73\x65\x72\x49\x64": $[__Oxe9004[0x24]], ..._0xd2edx25,
                "\x6D\x65\x74\x68\x6F\x64": _0xd2edx22,
                "\x62\x75\x79\x65\x72\x4E\x69\x63\x6B": ($[__Oxe9004[0x33]] || __Oxe9004[0x1])
            }
        }
    };
    Object[__Oxe9004[0xc5]](_0xd2edx26[__Oxe9004[0xc4]][__Oxe9004[0xc3]], _0xd2edx25);
    let _0xd2edx27 = getSign(_0xd2edx26[__Oxe9004[0xc4]][__Oxe9004[0xc3]]);
    _0xd2edx26[__Oxe9004[0xc4]][__Oxe9004[0xc7]][__Oxe9004[0xc6]] = _0xd2edx27[__Oxe9004[0xc6]];
    _0xd2edx26[__Oxe9004[0xc4]][__Oxe9004[0xc7]][__Oxe9004[0xc8]] = _0xd2edx27[__Oxe9004[0xc9]];
    if (_0xd2edx22[__Oxe9004[0x53]](__Oxe9004[0x63]) > -1) {
        delete _0xd2edx26[__Oxe9004[0xc4]][__Oxe9004[0xc3]][__Oxe9004[0x26]]
    }
    ;
    return $[__Oxe9004[0x88]](_0xd2edx26, _0xd2edx26)
}

async function getUA() {
    $[__Oxe9004[0xbc]] = `${__Oxe9004[0xca]}${randomString(40)}${__Oxe9004[0xcb]}`
}

function randomString(_0xd2edxb) {
    _0xd2edxb = _0xd2edxb || 32;
    let _0xd2edx25 = __Oxe9004[0xcc], _0xd2edx2a = _0xd2edx25[__Oxe9004[0x2a]], _0xd2edx2b = __Oxe9004[0x1];
    for (i = 0; i < _0xd2edxb; i++) {
        _0xd2edx2b += _0xd2edx25[__Oxe9004[0xce]](Math[__Oxe9004[0xcd]](Math[__Oxe9004[0x34]]() * _0xd2edx2a))
    }
    ;
    return _0xd2edx2b
}

function jsonParse(_0xd2edx2d) {
    if (typeof _0xd2edx2d == __Oxe9004[0xcf]) {
        try {
            return JSON[__Oxe9004[0x8d]](_0xd2edx2d)
        } catch (e) {
            console[__Oxe9004[0xa]](e);
            $[__Oxe9004[0x1f]]($[__Oxe9004[0x1c]], __Oxe9004[0x1], __Oxe9004[0xd0]);
            return []
        }
    }
}

function getSign(_0xd2edx2f) {
    var _0xd2edx25 = new Date().valueOf(), _0xd2edx30 = __Oxe9004[0xd1], _0xd2edx2a = __Oxe9004[0xd2],
        _0xd2edx31 = JSON[__Oxe9004[0xd3]](_0xd2edx2f), _0xd2edx32 = encodeURIComponent(_0xd2edx31),
        _0xd2edx26 = new RegExp(__Oxe9004[0xd4], __Oxe9004[0xd5]),
        _0xd2edx33 = new RegExp(__Oxe9004[0xd6], __Oxe9004[0xd5]),
        _0xd2edx32 = _0xd2edx32[__Oxe9004[0xd8]](_0xd2edx26, __Oxe9004[0xd7]),
        _0xd2edx32 = _0xd2edx32[__Oxe9004[0xd8]](_0xd2edx33, __Oxe9004[0xd9]),
        _0xd2edx34 = (_0xd2edx2a + __Oxe9004[0xda] + _0xd2edx2a + __Oxe9004[0xc3] + _0xd2edx32 + __Oxe9004[0xc8] + _0xd2edx25 + _0xd2edx30);
    return {
        '\x73\x69\x67\x6E': CryptoJS.MD5(_0xd2edx34[__Oxe9004[0xdb]]()).toString(),
        '\x74\x69\x6D\x65\x53\x74\x61\x6D\x70': _0xd2edx25
    }
}

function joinShop() {
    if (!$[__Oxe9004[0x50]]) {
        return
    }
    ;
    return new Promise(async (_0xd2edx17) => {
        $[__Oxe9004[0xdc]] = __Oxe9004[0x1];
        $[__Oxe9004[0x54]] = __Oxe9004[0x52];
        await getshopactivityId();
        await $[__Oxe9004[0x35]](500);
        let _0xd2edx36 = `${__Oxe9004[0x1]}`;
        if ($[__Oxe9004[0xdc]]) {
            _0xd2edx36 = `${__Oxe9004[0xdd]}${$[__Oxe9004[0xdc]]}${__Oxe9004[0x1]}`
        }
        ;let _0xd2edx13 = `${__Oxe9004[0xde]}${$[__Oxe9004[0x50]]}${__Oxe9004[0xdf]}${$[__Oxe9004[0x50]]}${__Oxe9004[0xe0]}${_0xd2edx36}${__Oxe9004[0xe1]}`;
        let _0xd2edx37 = __Oxe9004[0x1];
        _0xd2edx37 = await geth5st();
        const _0xd2edx38 = {
            url: `${__Oxe9004[0xe2]}${_0xd2edx13}${__Oxe9004[0xe3]}${_0xd2edx37}${__Oxe9004[0x1]}`,
            headers: {
                '\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65': __Oxe9004[0xe4],
                '\x4F\x72\x69\x67\x69\x6E': __Oxe9004[0xe5],
                '\x48\x6F\x73\x74': __Oxe9004[0xe6],
                '\x61\x63\x63\x65\x70\x74': __Oxe9004[0xe7],
                '\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74': $[__Oxe9004[0xbc]],
                '\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65': __Oxe9004[0xbb],
                '\x43\x6F\x6F\x6B\x69\x65': cookie
            }
        };
        await $[__Oxe9004[0x35]](500);
        $[__Oxe9004[0xf0]](_0xd2edx38, async (_0xd2edx18, _0xd2edx19, _0xd2edx1a) => {
            try {
                let _0xd2edx1c = $[__Oxe9004[0xe8]](_0xd2edx1a, _0xd2edx1a);
                if (typeof _0xd2edx1c == __Oxe9004[0x8f]) {
                    if (_0xd2edx1c[__Oxe9004[0x95]] === true) {
                        $[__Oxe9004[0x54]] = _0xd2edx1c[__Oxe9004[0x93]];
                        console[__Oxe9004[0xa]](_0xd2edx1c[__Oxe9004[0x93]]);
                        if (_0xd2edx1c[__Oxe9004[0xe9]] && _0xd2edx1c[__Oxe9004[0xe9]][__Oxe9004[0xea]]) {
                            for (let _0xd2edxc of _0xd2edx1c[__Oxe9004[0xe9]][__Oxe9004[0xea]][__Oxe9004[0xeb]]) {
                                console[__Oxe9004[0xa]](`${__Oxe9004[0xec]}${_0xd2edxc[__Oxe9004[0xed]]}${__Oxe9004[0x1]}${_0xd2edxc[__Oxe9004[0xee]]}${__Oxe9004[0x1]}${_0xd2edxc[__Oxe9004[0xef]]}${__Oxe9004[0x1]}`)
                            }
                        }
                    } else {
                        if (typeof _0xd2edx1c == __Oxe9004[0x8f] && _0xd2edx1c[__Oxe9004[0x93]]) {
                            $[__Oxe9004[0x54]] = _0xd2edx1c[__Oxe9004[0x93]];
                            console[__Oxe9004[0xa]](`${__Oxe9004[0x1]}${_0xd2edx1c[__Oxe9004[0x93]] || __Oxe9004[0x1]}${__Oxe9004[0x1]}`)
                        } else {
                            console[__Oxe9004[0xa]](_0xd2edx1a)
                        }
                    }
                } else {
                    console[__Oxe9004[0xa]](_0xd2edx1a)
                }
            } catch (e) {
                $[__Oxe9004[0x1a]](e, _0xd2edx19)
            } finally {
                _0xd2edx17()
            }
        })
    })
}

function getshopactivityId() {
    return new Promise((_0xd2edx17) => {
        let _0xd2edx37 = `${__Oxe9004[0x1]}${new Date(Date[__Oxe9004[0x40]]()).Format(__Oxe9004[0xf1])}${__Oxe9004[0xf2]}${generateFp()}${__Oxe9004[0xf3]}${Date[__Oxe9004[0x40]]()}${__Oxe9004[0x1]}`;
        _0xd2edx37 = encodeURIComponent(_0xd2edx37);
        const _0xd2edx38 = {
            url: `${__Oxe9004[0xf4]}${$[__Oxe9004[0x50]]}${__Oxe9004[0xf5]}${_0xd2edx37}${__Oxe9004[0x1]}`,
            headers: {
                '\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65': __Oxe9004[0xe4],
                '\x4F\x72\x69\x67\x69\x6E': __Oxe9004[0xe5],
                '\x48\x6F\x73\x74': __Oxe9004[0xe6],
                '\x61\x63\x63\x65\x70\x74': __Oxe9004[0xe7],
                '\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74': $[__Oxe9004[0xbc]],
                '\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65': __Oxe9004[0xbb],
                '\x43\x6F\x6F\x6B\x69\x65': cookie
            }
        };
        $[__Oxe9004[0xf0]](_0xd2edx38, async (_0xd2edx18, _0xd2edx19, _0xd2edx1a) => {
            try {
                let _0xd2edx1c = $[__Oxe9004[0xe8]](_0xd2edx1a, _0xd2edx1a);
                if (typeof _0xd2edx1c == __Oxe9004[0x8f]) {
                    if (_0xd2edx1c[__Oxe9004[0x95]] == true) {
                        console[__Oxe9004[0xa]](`${__Oxe9004[0xf6]}${_0xd2edx1c[__Oxe9004[0xe9]][__Oxe9004[0xf8]][__Oxe9004[0xf7]] || __Oxe9004[0x1]}${__Oxe9004[0x1]}`);
                        $[__Oxe9004[0xdc]] = _0xd2edx1c[__Oxe9004[0xe9]][__Oxe9004[0xf9]] && _0xd2edx1c[__Oxe9004[0xe9]][__Oxe9004[0xf9]][0x0] && _0xd2edx1c[__Oxe9004[0xe9]][__Oxe9004[0xf9]][0x0][__Oxe9004[0xfa]] && _0xd2edx1c[__Oxe9004[0xe9]][__Oxe9004[0xf9]][0x0][__Oxe9004[0xfa]][__Oxe9004[0xfb]] || __Oxe9004[0x1]
                    }
                } else {
                    console[__Oxe9004[0xa]](_0xd2edx1a)
                }
            } catch (e) {
                $[__Oxe9004[0x1a]](e, _0xd2edx19)
            } finally {
                _0xd2edx17()
            }
        })
    })
}

function generateFp() {
    let _0xd2edxb = __Oxe9004[0xfc];
    let _0xd2edx2a = 13;
    let _0xd2edxc = __Oxe9004[0x1];
    for (; _0xd2edx2a--;) {
        _0xd2edxc += _0xd2edxb[Math[__Oxe9004[0x34]]() * _0xd2edxb[__Oxe9004[0x2a]] | 0]
    }
    ;
    return (_0xd2edxc + Date[__Oxe9004[0x40]]())[__Oxe9004[0xfd]](0, 16)
}

function geth5st() {
    let _0xd2edx3c = Date[__Oxe9004[0x40]]();
    let _0xd2edx3d = generateFp();
    let _0xd2edx3e = new Date(_0xd2edx3c).Format(__Oxe9004[0xf1]);
    let _0xd2edx3f = __Oxe9004[0x1];
    let _0xd2edx40 = __Oxe9004[0x1];
    let _0xd2edx41 = [__Oxe9004[0xfe], __Oxe9004[0xff], __Oxe9004[0x100]];
    let _0xd2edx42 = _0xd2edx41[random(0, _0xd2edx41[__Oxe9004[0x2a]])];
    return encodeURIComponent(_0xd2edx3e + __Oxe9004[0xf2] + _0xd2edx42 + _0xd2edx3d + __Oxe9004[0x1] + Date[__Oxe9004[0x40]]())
}

function getH5st() {
    let _0xd2edx3c = Date[__Oxe9004[0x40]]();
    let _0xd2edx3d = generateFp();
    let _0xd2edx3e = new Date(_0xd2edx3c).Format(__Oxe9004[0xf1]);
    return encodeURIComponent(_0xd2edx3e + __Oxe9004[0xf2] + __Oxe9004[0x1] + _0xd2edx3d + __Oxe9004[0xff] + Date[__Oxe9004[0x40]]())
}

Date[__Oxe9004[0x102]][__Oxe9004[0x101]] = function (_0xd2edx44) {
    var _0xd2edxb, _0xd2edx2b = this, _0xd2edx45 = _0xd2edx44, _0xd2edx46 = {
        "\x4D\x2B": _0xd2edx2b[__Oxe9004[0x103]]() + 1,
        "\x64\x2B": _0xd2edx2b[__Oxe9004[0x104]](),
        "\x44\x2B": _0xd2edx2b[__Oxe9004[0x104]](),
        "\x68\x2B": _0xd2edx2b[__Oxe9004[0x105]](),
        "\x48\x2B": _0xd2edx2b[__Oxe9004[0x105]](),
        "\x6D\x2B": _0xd2edx2b[__Oxe9004[0x106]](),
        "\x73\x2B": _0xd2edx2b[__Oxe9004[0x107]](),
        "\x77\x2B": _0xd2edx2b[__Oxe9004[0x108]](),
        "\x71\x2B": Math[__Oxe9004[0xcd]]((_0xd2edx2b[__Oxe9004[0x103]]() + 3) / 3),
        "\x53\x2B": _0xd2edx2b[__Oxe9004[0x109]]()
    };
    /(y+)/i[__Oxe9004[0x10a]](_0xd2edx45) && (_0xd2edx45 = _0xd2edx45[__Oxe9004[0xd8]](RegExp.$1, __Oxe9004[0x1][__Oxe9004[0x10e]](_0xd2edx2b[__Oxe9004[0x10d]]())[__Oxe9004[0x10c]](4 - RegExp[__Oxe9004[0x10b]][__Oxe9004[0x2a]])));
    for (var _0xd2edx47 in _0xd2edx46) {
        if (new RegExp(__Oxe9004[0x10f][__Oxe9004[0x10e]](_0xd2edx47, __Oxe9004[0xb2]))[__Oxe9004[0x10a]](_0xd2edx45)) {
            var _0xd2edx25, _0xd2edx2a = __Oxe9004[0x110] === _0xd2edx47 ? __Oxe9004[0x111] : __Oxe9004[0x112];
            _0xd2edx45 = _0xd2edx45[__Oxe9004[0xd8]](RegExp.$1, 1 == RegExp[__Oxe9004[0x10b]][__Oxe9004[0x2a]] ? _0xd2edx46[_0xd2edx47] : (__Oxe9004[0x1][__Oxe9004[0x10e]](_0xd2edx2a) + _0xd2edx46[_0xd2edx47])[__Oxe9004[0x10c]](__Oxe9004[0x1][__Oxe9004[0x10e]](_0xd2edx46[_0xd2edx47])[__Oxe9004[0x2a]]))
        }
    }
    ;
    return _0xd2edx45
};

function getToken() {
    return new Promise((_0xd2edx17) => {
        $[__Oxe9004[0xf0]]({
            url: `${__Oxe9004[0x113]}`,
            headers: {"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": __Oxe9004[0x114]},
            timeout: 30000
        }, (_0xd2edx18, _0xd2edx19, _0xd2edx1a) => {
            try {
                if (_0xd2edx18) {
                    console[__Oxe9004[0xa]](`${__Oxe9004[0x115]}`)
                } else {
                    _0xd2edx1a = JSON[__Oxe9004[0x8d]](_0xd2edx1a);
                    if (_0xd2edx1a[__Oxe9004[0x116]] == 0) {
                        _0xd2edx1a = _0xd2edx1a[__Oxe9004[0x97]]
                    } else {
                        _0xd2edx1a = __Oxe9004[0x1]
                    }
                }
            } catch (e) {
                $[__Oxe9004[0x1a]](e, _0xd2edx19)
            } finally {
                _0xd2edx17(_0xd2edx1a || __Oxe9004[0x1])
            }
        })
    })
}

function random(_0xd2edx4a, _0xd2edx4b) {
    return Math[__Oxe9004[0xcd]](Math[__Oxe9004[0x34]]() * (_0xd2edx4b - _0xd2edx4a)) + _0xd2edx4a
}

(function (_0xd2edx26, _0xd2edx33, _0xd2edx4c, _0xd2edx4d, _0xd2edx4e, _0xd2edx47) {
    _0xd2edx47 = __Oxe9004[0x92];
    _0xd2edx4d = function (_0xd2edx4f) {
        if (typeof alert !== _0xd2edx47) {
            alert(_0xd2edx4f)
        }
        ;
        if (typeof console !== _0xd2edx47) {
            console[__Oxe9004[0xa]](_0xd2edx4f)
        }
    };
    _0xd2edx4c = function (_0xd2edx2a, _0xd2edx26) {
        return _0xd2edx2a + _0xd2edx26
    };
    _0xd2edx4e = _0xd2edx4c(__Oxe9004[0x117], _0xd2edx4c(_0xd2edx4c(__Oxe9004[0x118], __Oxe9004[0x119]), __Oxe9004[0x11a]));
    try {
        _0xd2edx26 = __encode;
        if (!(typeof _0xd2edx26 !== _0xd2edx47 && _0xd2edx26 === _0xd2edx4c(__Oxe9004[0x11b], __Oxe9004[0x11c]))) {
            _0xd2edx4d(_0xd2edx4e)
        }
    } catch (e) {
        _0xd2edx4d(_0xd2edx4e)
    }
})({})


// prettier-ignore
function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {url: t} : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {
            }
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({url: t}, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {script_text: t, mock_type: "cron", timeout: r},
                    headers: {"X-Key": o, Accept: "*/*"}
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {
        })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => {
                const {message: s, response: i} = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {
        })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t)); else if (this.isNode()) {
                this.initGotEnv(t);
                const {url: s, ...i} = t;
                this.got.post(s, i).then(t => {
                    const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                    e(null, {status: s, statusCode: i, headers: r, body: o}, o)
                }, t => {
                    const {message: s, response: i} = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() ? {url: t} : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
                        return {openUrl: e, mediaUrl: s}
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
                        return {"open-url": e, "media-url": s}
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {url: e}
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}